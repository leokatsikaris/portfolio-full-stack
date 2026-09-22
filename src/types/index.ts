import type { Localized } from "../i18n/locales";
export interface ExperienceCopy {
  role: string | null;
  project: string | null;
  headline: string | null;
  description: string | null;
  context: string | null;
  work: string[];
  impact: string | null;
}
export interface Experience {
  id: string;
  company: string;
  start: string | null;
  end: string | null;
  current?: boolean;
  stack: string[];
  content: Localized<ExperienceCopy>;
  pending?: Record<string, string>;
}
export type SkillCategory =
  "frontend" | "backend" | "database" | "tools" | "testing" | "ai";
export interface SkillGroup {
  id: SkillCategory;
  items: string[];
}
