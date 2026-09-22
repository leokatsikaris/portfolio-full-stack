import { ArrowUpRight, ArrowUp } from "lucide-react";
import { personal } from "../config/personal";
import { SocialLinks } from "../components/SocialLinks";
import { CvLink } from "../components/CvLink";
import { usePreferences } from "../i18n/context";
export function Contact() {
  const { t } = usePreferences();
  return (
    <section id="contact" tabIndex={-1} className="contact-section">
      <div className="container">
        <p className="eyebrow" data-reveal>
          <span>04</span>
          {t.contact.label}
        </p>
        <p className="contact-kicker" data-reveal>
          {t.contact.kicker}
        </p>
        <div className="contact-title" data-reveal>
          <h2>
            {t.contact.titleFirst}
            <br />
            <span>{t.contact.titleSecond}</span>
          </h2>
          <ArrowUpRight className="contact-arrow" aria-hidden="true" />
        </div>
        <div className="contact-layout" data-reveal>
          <p>{t.contact.description}</p>
          <div className="contact-action">
            <a
              href={`mailto:${personal.email}`}
              className="button button-primary"
            >
              {t.contact.cta}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a className="email-link" href={`mailto:${personal.email}`}>
              {personal.email}
            </a>
          </div>
        </div>
        <div className="contact-bottom">
          <SocialLinks labels />
          <CvLink />
        </div>
        <footer className="site-footer">
          <p>
            © {new Date().getFullYear()} {personal.name}
          </p>
          <span>{t.common.built}</span>
          <a href="#home">
            {t.common.back}
            <ArrowUp size={15} aria-hidden="true" />
          </a>
        </footer>
      </div>
    </section>
  );
}
