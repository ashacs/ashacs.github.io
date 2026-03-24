import { EmailSVG } from '../SVG/EmailSVG';
import { LinkedInSVG } from '../SVG/LinkedInSVG';
import './index.css';

export function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Asha Camper Singh</h1>
      <div className="header-widgets">
        <a
          aria-label="View LinkedIn"
          title="View LinkedIn"
          href="https://www.linkedin.com/in/asha-cs/"
          target="_blank"
        >
          <LinkedInSVG />
        </a>
        <a aria-label="Send email" title="Send email" href="mailto:hello@ashacs.me">
          <EmailSVG />
        </a>
      </div>
    </header>
  );
}
