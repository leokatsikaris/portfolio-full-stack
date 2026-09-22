import { Download } from "lucide-react";
import { personal } from "../config/personal";
import { usePreferences } from "../i18n/context";
export function CvLink() {
  const { t } = usePreferences();
  return personal.cv.available ? (
    <a className="cv-link" href={personal.cv.path} download>
      <Download size={16} aria-hidden="true" />
      {t.common.cv}
    </a>
  ) : (
    <span className="cv-link muted">
      <Download size={16} aria-hidden="true" />
      {t.common.cvPending}
    </span>
  );
}
