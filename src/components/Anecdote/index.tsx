import React from 'react';
import './index.css';

export default function Anecdote({ children }: { children: React.ReactNode }) {
  return <p className="anecdote">{children}</p>;
}
