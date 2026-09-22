import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

test("mobile menu survives a touch blur until the link click can run", () => {
  const updates = [];
  const modules = {
    react: {
      useEffect() {},
      useRef: () => ({ current: null }),
      useState: () => [true, value => updates.push(value)],
    },
    "react/jsx-runtime": { jsx: (type, props) => ({ type, props }), jsxs: (type, props) => ({ type, props }) },
    "lucide-react": {},
    "../config/personal": { navigation: ["home"], personal: { name: "Leonel Katsikaris" } },
    "../hooks/useActiveSection": { useActiveSection: () => "home" },
    "../i18n/context": { usePreferences: () => ({ t: { nav: { home: "Inicio" } }, theme: "dark" }) },
    "../i18n/locales": { locales: {} },
  };
  const scope = { exports: {}, require: name => modules[name] };
  const source = readFileSync(new URL("../src/components/Header.tsx", import.meta.url), "utf8");
  runInNewContext(ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
  }).outputText, scope);
  const header = scope.exports.Header();
  const inside = {}, outside = {};
  const currentTarget = { contains: target => target === inside };
  header.props.onBlur({ currentTarget, relatedTarget: null });
  assert.deepEqual(updates, [], "touch blur must not hide the link before click");
  header.props.onBlur({ currentTarget, relatedTarget: inside });
  assert.deepEqual(updates, [], "focus within the header keeps the menu open");
  header.props.onBlur({ currentTarget, relatedTarget: outside });
  assert.deepEqual(updates, [false], "keyboard focus leaving the header closes the menu");
});
