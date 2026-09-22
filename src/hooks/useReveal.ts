import { useEffect } from "react";
// One observer for the page; content remains visible if IO or motion is unavailable.
export function useReveal() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const elements = [
      ...document.querySelectorAll<HTMLElement>("[data-reveal]"),
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).dataset.visible = "true";
            observer.unobserve(entry.target);
          }
      },
      { threshold: 0.06, rootMargin: "0px 0px -24px 0px" },
    );
    const setup = () => {
      observer.disconnect();
      for (const element of elements) {
        if (
          media.matches ||
          element.getBoundingClientRect().top < innerHeight
        ) {
          element.dataset.visible = "true";
        } else {
          element.dataset.visible = "false";
          observer.observe(element);
        }
      }
    };
    setup();
    media.addEventListener("change", setup);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", setup);
      elements.forEach((el) => delete el.dataset.visible);
    };
  }, []);
}
