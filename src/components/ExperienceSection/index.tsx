import type { ReactNode } from "react";
import "./index.css";

export function ExperienceSection({ children }: { children: ReactNode }) {
  return <section className="experience-section-container">{children}</section>;
}

export { ExperienceSectionTitle } from "./Title";
export { ExperienceSectionSubtitle } from "./Subtitle";
export { ExperienceSectionList } from "./List";
