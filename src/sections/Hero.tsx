import { ArrowDown, ArrowUpRight, Plus } from "lucide-react";
import { CvLink } from "../components/CvLink";
import { SocialLinks } from "../components/SocialLinks";
import { ProductFlow } from "../components/ProductFlow";
import { usePreferences } from "../i18n/context";
import { personal } from "../config/personal";
import { useSurfaceProbe } from "../hooks/useSurfaceProbe";
export function Hero() {
  const { t } = usePreferences();
  const surface = useSurfaceProbe();
  return (
    <section id="home" tabIndex={-1} className="hero container">
      <div className="hero-topline">
        <p className="eyebrow">
          <span>01</span>
          {t.hero.label}
        </p>
        <span className="availability">
          <Plus size={14} aria-hidden="true" />
          {t.hero.availability}
        </span>
      </div>
      <p className="hero-name">
        {t.hero.name} {personal.name}
        <span className="hero-name-line" aria-hidden="true" />
      </p>
      <div className="hero-composition" ref={surface}>
        <h1 className="hero-title">
          <span className="title-line">
            <span><span className="title-surface">{t.hero.titleFirst}</span></span>
          </span>
          <span className="title-line">
            <span>
              <span className="title-surface">
              {t.hero.titleSecond}
              <span className="title-period">.</span>
              </span>
            </span>
          </span>
        </h1>
        <div className="hero-side">
          <span className="hero-cross" aria-hidden="true">
            ↗
          </span>
          <p>{t.hero.subtitle}</p>
          <span className="mono">
            React · TypeScript
            <br />
            Node.js · PostgreSQL
          </span>
        </div>
        <div className="surface-probe mono" aria-hidden="true">
          <span className="probe-interface">&#123; React <i>→</i> TypeScript &#125;</span>
          <span className="probe-data">&#123; Node.js <i>→</i> PostgreSQL &#125;</span>
        </div>
      </div>
      <div className="hero-bottom">
        <div className="hero-copy">
          <p className="hero-intro">{t.hero.intro}</p>
          <p className="hero-detail">{t.hero.detail}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              {t.hero.work}
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            <a className="text-link" href="#contact">
              {t.hero.contact}
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-secondary">
            <CvLink />
            <SocialLinks />
          </div>
        </div>
        <ProductFlow />
      </div>
      <div className="approach" data-reveal>
        <div>
          <p className="eyebrow">{t.hero.approachLabel}</p>
          <h2>{t.hero.approachTitle}</h2>
        </div>
        <p>{t.hero.approach}</p>
      </div>
      <div className="hero-footer">
        <span>{t.hero.footnote}</span>
        <a href="#stack">
          {t.hero.scroll}
          <ArrowDown size={15} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
