import dynamic from 'next/dynamic';
import { EmailSVG } from '../SVG/EmailSVG';
import { LinkedInSVG } from '../SVG/LinkedInSVG';
import './index.css';

const DynamicThemeToggle = dynamic(() => import('../ThemeToggle').then(mod => mod.ThemeToggle), {
  ssr: false,
});

export function Header() {
  const labels = {
    email: 'Send email',
    linkedIn: 'View LinkedIn',
  };

  return (
    <header className="header">
      <h1 className="header-title">Asha Camper Singh</h1>

      <div className="header-widgets">
        <a
          aria-label={labels.linkedIn}
          title={labels.linkedIn}
          href="https://www.linkedin.com/in/asha-cs/"
          target="_blank"
        >
          <LinkedInSVG />
        </a>
        <a aria-label={labels.email} title={labels.email} href="mailto:hello@ashacs.me">
          <EmailSVG />
        </a>
        <DynamicThemeToggle />
      </div>
    </header>
  );
}
