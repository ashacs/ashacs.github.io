import React from 'react';
import './index.css';

interface ListProps {
  className?: string;
  children: React.ReactNode;
  variant?: 'badge' | 'bullet' | 'bare';
}

export function List({
  children,
  variant = 'bullet',
  className = '',
}: ListProps) {
  return (
    <ul
      className={`list ${variant === 'badge' ? 'list_badge' : variant === 'bullet' ? 'list_bullet' : 'list_bare'} ${className}`}
    >
      {children}
    </ul>
  );
}

interface ListItemProps {
  className?: string;
  children: React.ReactNode;
}

export function ListItem({ children, className = '' }: ListItemProps) {
  return <li className={`list-item ${className}`}>{children}</li>;
}
