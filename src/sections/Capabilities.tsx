import { ArrowDownRight, Sparkles } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { skills } from "../data/skills";
import { usePreferences } from "../i18n/context";
export function Capabilities() {
  const { t } = usePreferences();
  return (
    <section id="stack" tabIndex={-1} className="section container">
      <SectionHeading
        number="02"
        label={t.stack.label}
        title={t.stack.title}
        description={t.stack.description}
      />
      <div className="stack-subtitle">
        <p>{t.stack.subtitle}</p>
        <ArrowDownRight aria-hidden="true" size={24} />
      </div>
      <div className="technology-index">
        {skills.map((group, index) => (
          <div
            className={`technology-row technology-${group.id}`}
            key={group.id}
            data-reveal
          >
            <div className="technology-label">
              <span className="mono">0{index + 1}</span>
              <div>
                <h3>{t.stack.categories[group.id]}</h3>
                <p>{t.stack.notes[group.id]}</p>
              </div>
            </div>
            <ul className="technology-items">
              {group.items.map((item) => (
                <li key={item} data-family={
                  ["React", "TypeScript"].includes(item) ? "interface" :
                  ["Node.js", "PostgreSQL"].includes(item) ? "data" :
                  ["Jest", "React Testing Library"].includes(item) ? "testing" : undefined
                }>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="ai-note" data-reveal>
        <div className="ai-title">
          <Sparkles size={23} aria-hidden="true" />
          <h3>{t.stack.aiTitle}</h3>
        </div>
        <p>{t.stack.aiDescription}</p>
      </div>
    </section>
  );
}
