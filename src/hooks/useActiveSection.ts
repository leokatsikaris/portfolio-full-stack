import { useEffect, useState } from "react";
import { navigation } from "../config/personal";
export function useActiveSection() {
  const [active, setActive] = useState<string>("home");
  useEffect(() => {
    let frame = 0;
    const entries = Array.from(document.querySelectorAll<HTMLElement>(".experience-entry"));
    let reading = "";
    const update = () => {
      const threshold = window.innerHeight * 0.35;
      const visible = entries.filter((entry) => {
        const rect = entry.getBoundingClientRect();
        return rect.top < window.innerHeight * .65 && rect.bottom > threshold;
      })[0]?.id ?? "";
      if (visible !== reading) {
        reading = visible;
        for (const entry of entries) {
          entry.toggleAttribute("data-reading", entry.id === reading);
          const link = document.querySelector(`.experience-aside a[href="#${entry.id}"]`);
          if (entry.id === reading) link?.setAttribute("aria-current", "location");
          else link?.removeAttribute("aria-current");
        }
      }
      let current: string = navigation[0];
      for (const id of navigation) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= threshold)
          current = id;
      }
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 10
      )
        current = "contact";
      setActive(current);
      const distance =
        document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty(
        "--scroll-progress",
        String(distance > 0 ? Math.min(1, Math.max(0, scrollY / distance)) : 0),
      );
      document.documentElement.toggleAttribute("data-scrolled", scrollY > 28);
      frame = 0;
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);
  return active;
}
