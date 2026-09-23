import { LockKeyhole, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { ExperienceEntry } from "../components/ExperienceEntry";
import { experience } from "../data/experience";
import { usePreferences } from "../i18n/context";
export function Experience() {
  const { t } = usePreferences();
  return (
    <section
      id="experience"
      tabIndex={-1}
      className="section experience-section container"
    >
      <span id="work" className="legacy-anchor" aria-hidden="true" />
      <SectionHeading
        number="03"
        label={t.experience.label}
        title={t.experience.title}
        description={t.experience.description}
      />
      <div className="experience-layout">
        <aside className="experience-aside">
          <p className="mono">{t.experience.latest}</p>
          <nav aria-label={t.experience.index}>
            {experience.map((item, index) => (
              <a key={item.id} href={`#${item.id}`}>
                <span className="mono">0{index + 1}</span>
                {item.company}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="confidential-note">
            <LockKeyhole size={18} aria-hidden="true" />
            <p>{t.common.confidential}</p>
          </div>
        </aside>
        <div className="experience-entries">
          {experience.map((item, index) => (
            <ExperienceEntry key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
