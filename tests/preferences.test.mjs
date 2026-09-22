import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

// Exercise the exact synchronous bootstrap that ships in the production HTML.
const html = readFileSync(
  new URL("../dist/index.html", import.meta.url),
  "utf8",
);
const bootstrap = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
function loadPreferences(
  values = {},
  systemDark = false,
  storageFails = false,
) {
  const root = { dataset: {}, style: {}, lang: "" };
  runInNewContext(bootstrap, {
    document: { documentElement: root },
    window: { matchMedia: () => ({ matches: systemDark }) },
    localStorage: {
      getItem(key) {
        if (storageFails) throw new Error("Unavailable");
        return values[key] ?? null;
      },
    },
  });
  return root;
}
test("Spanish is the default; an unset theme follows the system before React loads", () => {
  assert.ok(bootstrap);
  for (const dark of [false, true]) {
    const root = loadPreferences({}, dark);
    assert.equal(root.lang, "es");
    assert.equal(root.dataset.theme, dark ? "dark" : "light");
    assert.equal(root.dataset.themePreference, "system");
    assert.equal(root.style.colorScheme, root.dataset.theme);
  }
  assert.ok(html.indexOf(bootstrap) < html.indexOf('type="module"'));
});
test("saved theme and language override system preferences", () => {
  const root = loadPreferences(
    { "portfolio.locale": "en", "portfolio.theme": "dark" },
    false,
  );
  assert.equal(root.lang, "en");
  assert.equal(root.dataset.theme, "dark");
  assert.equal(root.dataset.themePreference, "dark");
  assert.equal(
    loadPreferences({ "portfolio.theme": "light" }, true).dataset.theme,
    "light",
  );
});
test("invalid or unavailable storage falls back safely", () => {
  const invalid = loadPreferences(
    { "portfolio.locale": "xx", "portfolio.theme": "purple" },
    true,
  );
  assert.equal(invalid.lang, "es");
  assert.equal(invalid.dataset.theme, "dark");
  const blocked = loadPreferences({}, false, true);
  assert.equal(blocked.lang, "es");
  assert.equal(blocked.dataset.theme, "light");
});

function loadData(file) {
  const source = readFileSync(new URL(file, import.meta.url), "utf8");
  const { outputText } = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2022,
    },
  });
  const exports = {};
  runInNewContext(outputText, { exports });
  return exports;
}
function keys(value, prefix = "") {
  return Object.entries(value).flatMap(([key, child]) =>
    child !== null && typeof child === "object"
      ? keys(child, `${prefix}${key}.`)
      : [`${prefix}${key}`],
  );
}
test("both dictionaries have complete matching translation keys", () => {
  const { es } = loadData("../src/i18n/es.ts");
  const { en } = loadData("../src/i18n/en.ts");
  assert.deepEqual(keys(es).sort(), keys(en).sort());
  for (const dict of [es, en])
    for (const key of keys(dict)) {
      const value = key.split(".").reduce((object, part) => object[part], dict);
      assert.equal(typeof value, "string");
      assert.ok(value.trim().length > 0, key);
    }
});
test("experience order, known H+Trace facts and explicit placeholders are preserved", () => {
  const { experience } = loadData("../src/data/experience.ts");
  assert.equal(
    experience.map((item) => item.company).join("|"),
    "Phinxlab|Aulasneo|H+Trace|Somos Olea",
  );
  for (const item of experience)
    assert.deepEqual(
      keys(item.content.es).sort(),
      keys(item.content.en).sort(),
    );
  assert.equal(experience[2].start, "2022-02");
  assert.equal(
    experience[2].stack.join("|"),
    "React|GraphQL|Recharts|CSS|TypeScript|Java",
  );
  assert.equal(experience[2].content.es.impact, null);
  const pending = experience[3];
  assert.equal(
    pending.content.es.role,
    "Desarrollo fullstack · foco en backend",
  );
  assert.equal(pending.start, null);
  assert.ok(pending.stack.includes("Sequelize"));
  assert.equal(pending.pending.period, "TODO_PERIOD");
  assert.equal(pending.content.es.impact, null);
  assert.ok(pending.content.en.work.some((text) => text.includes("wishlist")));
});
test("text and accent tokens satisfy WCAG AA contrast in both themes", () => {
  const css = readFileSync(
    new URL("../src/styles/tokens.css", import.meta.url),
    "utf8",
  );
  const luminance = (hex) => {
    const c = hex
      .match(/[a-f0-9]{2}/gi)
      .map((x) => parseInt(x, 16) / 255)
      .map((x) => (x <= 0.04045 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4));
    return c[0] * 0.2126 + c[1] * 0.7152 + c[2] * 0.0722;
  };
  const contrast = (a, b) => {
    const x = luminance(a),
      y = luminance(b);
    return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
  };
  for (const block of css.matchAll(/\{([^}]+)\}/g)) {
    const tokens = Object.fromEntries(
      [...block[1].matchAll(/--([\w-]+):\s*(#[a-f0-9]{6})/gi)].map((x) => [
        x[1],
        x[2],
      ]),
    );
    for (const [fg, bg] of [
      ["text", "bg"],
      ["muted", "bg"],
      ["muted", "diagram-bg"],
      ["muted", "contact-bg"],
      ["accent", "bg"],
      ["accent", "accent-soft"],
      ["accent-ink", "accent-solid"],
    ])
      assert.ok(
        contrast(tokens[fg], tokens[bg]) >= 4.5,
        `${fg}/${bg} contrast`,
      );
  }
});
