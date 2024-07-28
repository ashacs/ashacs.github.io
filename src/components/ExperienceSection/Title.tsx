import type { HTMLAttributes, ReactNode } from "react";
import "./index.css";

type Props = HTMLAttributes<HTMLHeadingElement>;

export function ExperienceSectionTitle({ children, ...rest }: Props) {
  return (
    <h3 className="experience-section-title" {...rest}>
      {children}
    </h3>
  );
}
