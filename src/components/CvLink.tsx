import { Download } from "lucide-react";
import { personal } from "../config/personal";
import { usePreferences } from "../i18n/context";
export function CvLink() {
  const { t } = usePreferences();
  return (
    <div className="cv-links" role="group" aria-label={t.common.cv}>
      {personal.cv.map((cv) => {
        const label = t.common.cvLanguages[cv.language];
        return cv.available ? (
          <a key={cv.language} className="cv-link" href={cv.path} hrefLang={cv.language} download>
            <Download size={16} aria-hidden="true" />
            {label}
          </a>
        ) : (
          <span key={cv.language} className="cv-link muted">
            {label} · {t.common.cvPending}
          </span>
        );
      })}
    </div>
  );
}
