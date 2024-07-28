import type { ReactNode } from "react";
import "./index.css";

export function ResumeSectionSubitle({ children }: { children: ReactNode }) {
  return <h2 className="resume-section-subtitle">{children}</h2>;
}
