import { useEffect, useRef, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navigation, personal } from "../config/personal";
import { useActiveSection } from "../hooks/useActiveSection";
import { usePreferences } from "../i18n/context";
import { locales, type Locale } from "../i18n/locales";
export function Header() {
  const { t, locale, setLocale, theme, toggleTheme } = usePreferences();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const active = useActiveSection();
  useEffect(() => {
    if (!open) return;
    header.current?.querySelector<HTMLAnchorElement>("#main-nav a")?.focus();
    const close = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const media = matchMedia("(min-width: 901px)");
    const resize = () => {
      if (media.matches) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    media.addEventListener("change", resize);
    return () => {
      document.removeEventListener("pointerdown", close);
      media.removeEventListener("change", resize);
    };
  }, [open]);
  const navigate = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.focus({ preventScroll: true });
  };
  return (
    <header
      ref={header}
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          button.current?.focus();
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="reading-progress" aria-hidden="true" />
      <div className="container header-inner">
        <a
          href="#home"
          className="wordmark"
          aria-label={`${personal.name}, ${t.nav.home}`}
          onClick={() => navigate("home")}
        >
          <span className="wordmark-symbol">
            lk<span>/</span>
          </span>
          <span className="wordmark-name">
            {personal.name.split(" ").map((part) => (
              <span key={part}>{part}</span>
            ))}
          </span>
        </a>
        <nav
          id="main-nav"
          aria-label={t.nav.label}
          className={open ? "is-open" : ""}
        >
          {navigation.map((id, index) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
              onClick={() => navigate(id)}
            >
              <span className="nav-number" aria-hidden="true">
                0{index + 1}
              </span>
              {t.nav[id]}
            </a>
          ))}
        </nav>
        <div className="nav-settings">
          <div
            className="language-control"
            role="group"
            aria-label={t.nav.language}
          >
            {(Object.keys(locales) as Locale[]).map((code) => (
              <button
                type="button"
                key={code}
                lang={code}
                aria-label={locales[code].label}
                aria-pressed={locale === code}
                onClick={() => setLocale(code)}
              >
                <span>{locales[code].short}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="theme-switch"
            role="switch"
            aria-checked={theme === "dark"}
            aria-label={t.nav.theme}
            title={theme === "dark" ? t.nav.light : t.nav.dark}
            onClick={toggleTheme}
          >
            <Sun className="sun-icon" size={18} aria-hidden="true" />
            <Moon className="moon-icon" size={18} aria-hidden="true" />
          </button>
          <button
            ref={button}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="main-nav"
            aria-label={open ? t.nav.close : t.nav.open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
