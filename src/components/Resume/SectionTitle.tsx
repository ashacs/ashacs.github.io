import type { ReactNode } from "react";
import "./index.css";

export function ResumeSectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="resume-section-title">{children}</h2>;
}
