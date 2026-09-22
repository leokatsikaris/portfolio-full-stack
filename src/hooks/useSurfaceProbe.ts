import { useEffect, useRef } from "react";

/** Decorative enhancement: no React updates on pointer movement. */
export function useSurfaceProbe() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const media = matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) and (min-width: 901px)",
    );
    let frame = 0;
    let bounds: DOMRect | null = null;
    let target = 0;
    let position = 0;
    let vertical = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      bounds = null;
      element.removeAttribute("data-probing");
      element.style.setProperty("--surface-x", "0px");
      element.style.setProperty("--surface-y", "0px");
    };
    const paint = () => {
      position += (target - position) * 0.2;
      element.style.setProperty("--probe-x", `${position}px`);
      element.style.setProperty(
        "--surface-x",
        `${bounds ? (position / bounds.width - 0.5) * 3 : 0}px`,
      );
      element.style.setProperty("--surface-y", `${vertical}px`);
      frame =
        Math.abs(target - position) > 0.1 ? requestAnimationFrame(paint) : 0;
    };
    const move = (event: PointerEvent) => {
      if (!media.matches || event.pointerType !== "mouse") return;
      if (!bounds) {
        bounds = element.getBoundingClientRect();
        position = Math.max(
          0,
          Math.min(bounds.width - 240, event.clientX - bounds.left),
        );
      }
      target = Math.max(
        0,
        Math.min(bounds.width - 240, event.clientX - bounds.left),
      );
      vertical = Math.max(
        -1.5,
        Math.min(1.5, ((event.clientY - bounds.top) / bounds.height - 0.5) * 3),
      );
      element.dataset.probing = "true";
      element.dataset.layer =
        event.clientX - bounds.left < bounds.width / 2 ? "interface" : "data";
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
