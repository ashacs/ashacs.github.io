import { ResumeSection, ResumeSectionTitle } from '../Resume';
import './index.css';

export function MyAwards() {
  return (
    <ResumeSection>
      <ResumeSectionTitle>Awards</ResumeSectionTitle>
      <ul className="my-awards-list">
        <li>
          <b>U.S. Patent No. 11216785</b> System and Method for a single, unified, community and
          learning experience
        </li>
      </ul>
    </ResumeSection>
  );
}
