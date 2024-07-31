import { ResumeSection, ResumeSectionTitle } from '../Resume';
import './index.css';

export function MyEducation() {
  return (
    <ResumeSection>
      <ResumeSectionTitle>Education</ResumeSectionTitle>
      <ul className="my-education-list">
        <li>
          <b>UC San Diego, 2016</b> B.S. Computer Science
        </li>
      </ul>
    </ResumeSection>
  );
}
