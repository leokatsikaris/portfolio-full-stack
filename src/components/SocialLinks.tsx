import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { personal, socialLinks } from "../config/personal";
import { usePreferences } from "../i18n/context";
export function SocialLinks({ labels = false }: { labels?: boolean }) {
  const { t } = usePreferences();
  const links = [
    { name: "LinkedIn", url: socialLinks.linkedin, Icon: Linkedin },
    { name: "GitHub", url: socialLinks.github, Icon: Github },
    { name: t.common.email, url: `mailto:${personal.email}`, Icon: Mail },
  ];
  return (
    <div className={`social-links ${labels ? "with-labels" : ""}`}>
      {links.map(({ name, url, Icon }) =>
        url ? (
          <a
            key={name}
            href={url}
            aria-label={name}
            {...(url.startsWith("https:")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <Icon size={17} aria-hidden="true" />
            {labels && (
              <>
                {name}
                <ArrowUpRight size={14} aria-hidden="true" />
              </>
            )}
          </a>
        ) : (
          <span
            key={name}
            className="social-pending"
            title={`${name} · ${t.common.pendingLink}`}
            aria-label={`${name}: ${t.common.pendingLink}`}
          >
            <Icon size={17} aria-hidden="true" />
            {labels && (
              <>
                {name}
                <small>{t.common.pendingLink}</small>
              </>
            )}
          </span>
        ),
      )}
    </div>
  );
}
