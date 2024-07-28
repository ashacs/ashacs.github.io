import { ReactNode } from "react";
import "./index.css";

export function Main({ children }: { children: ReactNode }) {
  return <main className="main">{children}</main>;
}
