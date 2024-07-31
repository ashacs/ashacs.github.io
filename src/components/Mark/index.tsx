import type { ReactNode } from "react";
import "./index.css";

export function Mark({ children }: { children: ReactNode }) {
  return <mark className="mark-container">{children}</mark>;
}
