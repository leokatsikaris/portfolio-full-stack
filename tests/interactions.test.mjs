import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

function mount(matches = true) {
  const listeners = new Map(), globals = new Map(), frames = new Map(), styles = new Map();
  let cleanup, mediaChange, sequence = 0;
  const element = {
    dataset: {},
    style: { setProperty: (name, value) => styles.set(name, value) },
    getBoundingClientRect: () => ({ left: 0, top: 0, width: 1000, height: 300 }),
    addEventListener: (name, fn) => listeners.set(name, fn),
    removeEventListener: name => listeners.delete(name),
    removeAttribute: () => delete element.dataset.probing,
  };
  const media = {
    matches,
    addEventListener: (_, fn) => { mediaChange = fn; },
    removeEventListener: () => { mediaChange = undefined; },
  };
  const scope = {
    exports: {},
    require: () => ({ useRef: () => ({ current: element }), useEffect: fn => { cleanup = fn(); } }),
    matchMedia: () => media,
    requestAnimationFrame: fn => { frames.set(++sequence, fn); return sequence; },
    cancelAnimationFrame: id => frames.delete(id),
    window: {
      addEventListener: (name, fn) => globals.set(name, fn),
      removeEventListener: name => globals.delete(name),
    },
  };
  const source = readFileSync(new URL("../src/hooks/useSurfaceProbe.ts", import.meta.url), "utf8");
  runInNewContext(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, scope);
  scope.exports.useSurfaceProbe();
  return { element, media, styles, frames, listeners, globals,
    move: (pointerType = "mouse") => listeners.get("pointermove")({ pointerType, clientX: 980, clientY: 290 }),
    reduce: () => { media.matches = false; mediaChange(); },
    cleanup: () => cleanup(),
    flush: () => { for (const [id, fn] of [...frames]) { frames.delete(id); fn(); } },
  };
}
test("surface probe ignores touch and disabled motion capabilities", () => {
  for (const allowed of [false, true]) {
    const ui = mount(allowed);
    ui.move("touch");
    assert.equal(ui.frames.size, 0);
    if (!allowed) { ui.move(); assert.equal(ui.frames.size, 0); }
    ui.cleanup();
  }
});
test("surface probe clamps displacement and cancels work when reduced motion changes", () => {
  const ui = mount();
  ui.move(); ui.flush();
  assert.equal(ui.element.dataset.probing, "true");
  assert.ok(parseFloat(ui.styles.get("--probe-x")) <= 760);
  assert.ok(Math.abs(parseFloat(ui.styles.get("--surface-x"))) <= 1.5);
  ui.reduce();
  assert.equal(ui.frames.size, 0);
  assert.equal(ui.element.dataset.probing, undefined);
  assert.equal(ui.styles.get("--surface-x"), "0px");
  ui.move();
  assert.equal(ui.frames.size, 0);
  ui.cleanup();
  assert.equal(ui.listeners.size, 0);
  assert.equal(ui.globals.size, 0);
});
test("leaving the surface cancels queued animation frames", () => {
  const ui = mount();
  ui.move();
  assert.equal(ui.frames.size, 1);
  ui.listeners.get("pointerleave")();
  assert.equal(ui.frames.size, 0);
  assert.equal(ui.element.dataset.probing, undefined);
  ui.cleanup();
});
