import { ArrowUpRight, ArrowUp } from "lucide-react";
import { personal, emailComposeUrl } from "../config/personal";
import { useState } from "react";
import { SocialLinks } from "../components/SocialLinks";
import { CvLink } from "../components/CvLink";
import { usePreferences } from "../i18n/context";
export function Contact() {
  const { t } = usePreferences();
  const [copyStatus, setCopyStatus] = useState<"copied" | "copyFailed" | null>(
    null,
  );
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("copyFailed");
    }
  };
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
              href={emailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              {t.contact.cta}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <div className="email-alternatives">
              <span>{t.common.gmail}</span>
              <button type="button" className="text-link" onClick={copyEmail}>
                {t.common.copyEmail}
              </button>
              <span role="status">
                {copyStatus ? t.common[copyStatus] : ""}
              </span>
            </div>
            <a
              className="email-link"
              href={emailComposeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
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
