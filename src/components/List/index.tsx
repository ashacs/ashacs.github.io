import React from 'react';
import './index.css';

interface ListProps {
  children: React.ReactNode;
  variant?: 'badge' | 'bullet' | 'bare';
}

export function List({ children, variant = 'bullet' }: ListProps) {
  return (
    <ul
      className={`list ${variant === 'badge' ? 'list_badge' : variant === 'bullet' ? 'list_bullet' : 'list_bare'}`}
    >
      {children}
    </ul>
  );
}

export function ListItem({ children }: { children: React.ReactNode }) {
  return <li className="list-item">{children}</li>;
}
