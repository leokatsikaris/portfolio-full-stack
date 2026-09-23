import { useEffect, useRef } from "react";

/** A bounded inspection lens; no React updates or perpetual animation loop. */
export function useSurfaceProbe() {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) and (min-width: 901px)",
    );
    let frame = 0;
    let surfaces: { node: HTMLElement; bounds: DOMRect }[] = [];
    let x = 0,
      y = 0,
      targetX = 0,
      targetY = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      surfaces = [];
      element.removeAttribute("data-probing");
    };
    const paint = () => {
      x += (targetX - x) * 0.24;
      y += (targetY - y) * 0.24;
      for (const { node, bounds } of surfaces) {
        node.style.setProperty("--probe-x", `${x - bounds.left}px`);
        node.style.setProperty("--probe-y", `${y - bounds.top}px`);
      }
      frame =
        Math.hypot(targetX - x, targetY - y) > 0.2
          ? requestAnimationFrame(paint)
          : 0;
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      if (!surfaces.length) {
        surfaces = Array.from(
          element.querySelectorAll<HTMLElement>(".title-surface"),
        ).map((node) => ({ node, bounds: node.getBoundingClientRect() }));
        x = targetX;
        y = targetY;
      }
      element.dataset.probing = "true";
      if (!frame) frame = requestAnimationFrame(paint);
    };
    element.addEventListener("pointermove", move, { passive: true });
    element.addEventListener("pointerleave", reset);
    element.addEventListener("pointercancel", reset);
    window.addEventListener("scroll", reset, { passive: true });
    window.addEventListener("resize", reset);
    window.addEventListener("blur", reset);
    media.addEventListener("change", reset);
    return () => {
      reset();
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      element.removeEventListener("pointercancel", reset);
      window.removeEventListener("scroll", reset);
      window.removeEventListener("resize", reset);
      window.removeEventListener("blur", reset);
      media.removeEventListener("change", reset);
    };
  }, []);
  return ref;
}
