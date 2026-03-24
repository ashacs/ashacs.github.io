import type { ReactNode } from "react";
import "./index.css";

export function Subsection({ children }: { children: ReactNode }) {
  return <section className="subsection">{children}</section>;
}
