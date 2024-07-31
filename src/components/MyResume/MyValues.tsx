import { ResumeSection, ResumeSectionTitle } from '../Resume';
import './index.css';

export function MyValues() {
  return (
    <ResumeSection>
      <ResumeSectionTitle>Values</ResumeSectionTitle>
      <ul className="my-values-list">
        <li>Quality</li>
        <li>Craft</li>
        <li>Accessibility</li>
        <li>Diversity</li>
        <li>Humility</li>
        <li>Collaboration</li>
      </ul>
    </ResumeSection>
  );
}
