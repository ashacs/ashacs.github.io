import { ResumeSection, ResumeSectionTitle } from '../Resume';
import './index.css';

export function MySkills() {
  return (
    <ResumeSection>
      <ResumeSectionTitle>Skills</ResumeSectionTitle>
      <ul className="my-skills-list">
        <li>TypeScript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Web components</li>
        <li>Jest</li>
        <li>Accessibility</li>
        <li>GraphQL</li>
        <li>Apollo Client</li>
        <li>Relay</li>
        <li>Storybook</li>
        <li>Chromatic</li>
        <li>Node.js</li>
        <li>Git</li>
        <li>Internationalization</li>
        <li>Documentation</li>
        <li>Public speaking</li>
        <li>Project management</li>
      </ul>
    </ResumeSection>
  );
}
