import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

test("production HTML has SEO metadata and a local entry point", async () => {
  const html = await readFile(
    new URL("../dist/index.html", import.meta.url),
    "utf8",
  );
  assert.match(html, /<html lang="es">/);
  assert.match(
    html,
    /<title>Leonel Katsikaris \| Fullstack Developer · Productos web<\/title>/,
  );
  assert.match(html, /property="og:description"/);
  assert.match(html, /type="module"[^>]+src="\/assets\//);
  assert.doesNotMatch(html, /example\.com|undefined|localhost|__SEO_/);
});
test("the original CV is preserved in the production output", async () => {
  const source = await readFile(
    new URL("../public/leonel-katsikaris-cv.pdf", import.meta.url),
  );
  const output = await readFile(
    new URL("../dist/leonel-katsikaris-cv.pdf", import.meta.url),
  );
  assert.equal(source.subarray(0, 5).toString(), "%PDF-");
  assert.deepEqual(output, source);
});
test("Vercel is configured for the verified static build", async () => {
  const config = JSON.parse(
    await readFile(new URL("../vercel.json", import.meta.url), "utf8"),
  );
  assert.equal(config.framework, "vite");
  assert.equal(config.buildCommand, "npm run build");
  assert.ok(
    (
      await stat(
        new URL(`../${config.outputDirectory}/index.html`, import.meta.url),
      )
    ).isFile(),
  );
});
