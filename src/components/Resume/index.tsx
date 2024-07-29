import type { ReactNode } from "react";
import "./index.css";

export function Resume({ children }: { children: ReactNode }) {
  return <div className="resume-container">{children}</div>;
}

export { ResumeSectionTitle } from "./SectionTitle";
export { ResumeSection } from "./Section";
export { ResumeMainColumn } from "./MainColumn";
export { ResumeSideColumn } from "./SideColumn";
