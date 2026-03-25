import type { ReactNode } from 'react';
import './index.css';

export function SubsectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="subsection-title">{children}</h2>;
}
