import type { HTMLAttributes } from "react";
import "./index.css";

type Props = HTMLAttributes<HTMLHeadingElement>;

export function ExperienceSectionSubtitle({ children, ...rest }: Props) {
  return (
    <p className="experience-section-subtitle" {...rest}>
      {children}
    </p>
  );
}
