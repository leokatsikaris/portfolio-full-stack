import { ArrowDownRight, Braces, Database, PanelsTopLeft } from "lucide-react";
import { usePreferences } from "../i18n/context";
export function ProductFlow() {
  const { t } = usePreferences();
  const layers = [
    {
      number: "01",
      label: t.hero.interface,
      tech: "React / TypeScript",
      Icon: PanelsTopLeft,
    },
    {
      number: "02",
      label: t.hero.logic,
      tech: "Node.js / REST APIs",
      Icon: Braces,
    },
    {
      number: "03",
      label: t.hero.data,
      tech: "PostgreSQL / TypeORM",
      Icon: Database,
    },
  ];
  return (
    <div className="product-flow" role="group" aria-label={t.hero.diagramLabel}>
      <div className="flow-caption">
        <span className="mono">{t.hero.diagramLabel}</span>
        <ArrowDownRight size={22} aria-hidden="true" />
      </div>
      <ol>
        {layers.map(({ number, label, tech, Icon }) => (
          <li key={number}>
            <span className="flow-number mono">{number}</span>
            <Icon aria-hidden="true" size={20} />
            <div>
              <span>{label}</span>
              <small>{tech}</small>
            </div>
            <span className="flow-terminal" aria-hidden="true">
              ↳
            </span>
          </li>
        ))}
      </ol>
      <p className="flow-note">{t.hero.diagramNote}</p>
    </div>
  );
}
