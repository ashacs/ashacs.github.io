import type { ReactNode } from "react";
import "./index.css";

export function ResumeSection({ children }: { children: ReactNode }) {
  return <section className="resume-section">{children}</section>;
}
