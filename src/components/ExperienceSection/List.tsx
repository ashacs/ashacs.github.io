import type { ReactNode } from "react";
import "./index.css";

export function ExperienceSectionList({ children }: { children: ReactNode }) {
  return <ul className="experience-section-list">{children}</ul>;
}
