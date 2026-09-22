import { useState } from "react";
import { Plus, ArrowUpRight } from "lucide-react";
import type { Experience } from "../types";
import { usePreferences } from "../i18n/context";
export function ExperienceEntry({
  item,
  index,
}: {
  item: Experience;
  index: number;
}) {
  const { locale, t } = usePreferences();
  const [open, setOpen] = useState(index === 0);
  const copy = item.content[locale];
  const format = (value: string) =>
    new Intl.DateTimeFormat(locale, {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(value + "-01T12:00:00Z"));
  const period = item.start
    ? `${format(item.start)} — ${item.current ? t.common.present : item.end ? format(item.end) : t.experience.pendingPeriod}`
    : t.experience.pendingPeriod;
  return (
    <article
      id={item.id}
      className={`experience-entry ${!copy.role ? "is-pending" : ""}`}
      data-reveal
    >
      <div className="experience-meta">
        <span className="experience-index mono">0{index + 1}</span>
        <span className="mono">{period}</span>
        {item.current && (
          <span className="current-label">{t.experience.current}</span>
        )}
      </div>
      <h3 className="experience-company">{item.company}</h3>
      <div className="experience-role">
        <span>{copy.role ?? t.experience.pendingRole}</span>
        <span className="role-separator" aria-hidden="true">
          /
        </span>
        <span>{copy.project ?? t.experience.pendingProject}</span>
      </div>
      <h4 className="experience-headline">
        {copy.headline ?? t.experience.pendingTitle}
      </h4>
      <p className="experience-description">
        {copy.description ?? t.experience.pendingDescription}
      </p>
      <details
        open={open}
        onToggle={(event) => setOpen(event.currentTarget.open)}
      >
        <summary
          aria-label={`${open ? t.common.collapse : t.common.expand}: ${item.company}`}
        >
          <span>{open ? t.common.collapse : t.common.expand}</span>
          <Plus size={20} aria-hidden="true" />
        </summary>
        <div className="case-body">
          <div className="case-context">
            <p className="eyebrow">{t.experience.context}</p>
            <p className={!copy.context ? "pending-text" : ""}>
              {copy.context ?? t.experience.pendingContext}
            </p>
          </div>
          <div className="case-work">
            <p className="eyebrow">{t.experience.work}</p>
            {copy.work.length ? (
              <ul>
                {copy.work.map((text, index) => (
                  <li key={text}>
                    <span className="mono" aria-hidden="true">
                      /{index + 1}
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="pending-text">{t.experience.pendingWork}</p>
            )}
          </div>
          <div
            className={`case-impact ${!copy.impact ? "pending-impact" : ""}`}
          >
            <ArrowUpRight size={22} aria-hidden="true" />
            <div>
              <p className="eyebrow">{t.experience.impact}</p>
              <p>{copy.impact ?? t.experience.pendingImpact}</p>
            </div>
          </div>
          <div className="experience-stack">
            <span className="mono">{t.experience.technologies}</span>
            {item.stack.length ? (
              <ul>
                {item.stack.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            ) : (
              <p className="pending-text">{t.experience.pendingTechnologies}</p>
            )}
          </div>
        </div>
      </details>
    </article>
  );
}
