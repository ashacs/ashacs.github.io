import { ThemeToggle } from '../ThemeToggle';
import './index.css';

export function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Asha Camper Singh</h1>

      <ThemeToggle />
    </header>
  );
}
