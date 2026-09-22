import { Header } from "./components/Header";
import { Hero } from "./sections/Hero";
import { Experience } from "./sections/Experience";
import { Capabilities } from "./sections/Capabilities";
import { Contact } from "./sections/Contact";
import { usePreferences } from "./i18n/context";
import { useReveal } from "./hooks/useReveal";
// An optional detail for anyone curious enough to look underneath the interface.
console.info(
  "<LeonelKatsikaris />\n  interface → API → data\n  // The details matter on both sides of the interface.",
);
export default function App() {
  const { t } = usePreferences();
  useReveal();
  return (
    <>
      <a className="skip-link" href="#main">
        {t.common.skip}
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Capabilities />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
