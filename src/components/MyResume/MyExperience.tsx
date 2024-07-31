import {
  ExperienceSection,
  ExperienceSectionTitle,
  ExperienceSectionSubtitle,
  ExperienceSectionList,
} from "../ExperienceSection";
import { Mark } from "../Mark";
import { ResumeSection, ResumeSectionTitle } from "../Resume";

export function MyExperience() {
  return (
    <ResumeSection>
      <ResumeSectionTitle>Experience</ResumeSectionTitle>

      <ExperienceSection>
        <ExperienceSectionTitle aria-describedby="lattice-subtitle">
          Lattice — Staff UI Engineer
        </ExperienceSectionTitle>
        <ExperienceSectionSubtitle id="lattice-subtitle">
          May 2022 – Present
        </ExperienceSectionSubtitle>
        <ExperienceSectionList>
          <li>
            Built high-quality and forward-looking <Mark>React</Mark> components
            as a lead of the <Mark>design system</Mark> team, including a
            feature- and variant-rich data table component
          </li>
          <li>
            Owned feature prioritization, iterative delivery, and stakeholder
            communications on complex <Mark>cross-team projects</Mark> without a
            product manager
          </li>
          <li>
            Proposed, implemented, <Mark>documented</Mark>, and evangelized
            frontend development improvements across the company, including the
            introduction of <Mark>Storybook</Mark> and creation of tools to
            allow unit <Mark>testing</Mark> components connected to the{" "}
            <Mark>GraphQL</Mark> API
          </li>
          <li>
            Led planning, <Mark>scoping</Mark> decisions, and technical
            direction of green field features and overhauls to existing user
            experiences in the Compensation product suite
          </li>
          <li>
            Fostered <Mark>community</Mark> and collaboration of frontend
            engineers across the organization as a prominent member of the UI
            Guild
          </li>
          <li>
            Promoted culture and <Mark>inclusion</Mark> as a member of the ERG
            for engineers of underrepresented genders, including speaking on
            panels about <Mark>mentorship</Mark> and career growth and
            presenting on the value of <Mark>public speaking</Mark> as a
            minority
          </li>
        </ExperienceSectionList>
      </ExperienceSection>

      <ExperienceSection>
        <ExperienceSectionTitle aria-describedby="trailhead-em-subtitle">
          Salesforce, Trailhead learning platform — Engineering Manager
        </ExperienceSectionTitle>
        <ExperienceSectionSubtitle id="trailhead-em-subtitle">
          October 2021 – April 2022
        </ExperienceSectionSubtitle>
        <ExperienceSectionList>
          <li>
            Led <Mark>planning</Mark> and organization of projects that involved
            conflicting priorities between existing commitments and new
            organizational goals
          </li>
          <li>
            Motivated and guided team members during difficult organizational
            changes
          </li>
        </ExperienceSectionList>
      </ExperienceSection>

      <ExperienceSection>
        <ExperienceSectionTitle aria-describedby="trailhead-eng-subtitle">
          Salesforce, Trailhead learning platform — Lead UI Engineer
        </ExperienceSectionTitle>
        <ExperienceSectionSubtitle id="trailhead-eng-subtitle">
          August 2019 – October 2021
        </ExperienceSectionSubtitle>
        <ExperienceSectionList>
          <li>
            Led UI development of the Trailblazer Community (a Q&A forum and job
            network) from the <Mark>ground up</Mark>, as one of only two
            frontend developers
          </li>
          <li>
            Built a high-quality and accessible <Mark>micro-frontend</Mark>,
            with <Mark>Node.js</Mark>, <Mark>TypeScript</Mark>, Lightning Web
            Components, and <Mark>Apollo Client</Mark>
          </li>
          <li>Partnered with product and design on UX decisions</li>
          <li>
            Collaborated full-stack with backend engineers on our{" "}
            <Mark>GraphQL</Mark> API
          </li>
          <li>
            <Mark>Presented</Mark> testing and <Mark>quality</Mark> best
            practices to 50+ engineers
          </li>
          <li>
            Developed and owned the end-to-end <Mark>localization</Mark>{" "}
            solution and process
          </li>
        </ExperienceSectionList>
      </ExperienceSection>

      <ExperienceSection>
        <ExperienceSectionTitle aria-describedby="salesforce-platform-subtitle">
          Salesforce, Security Platform — Senior Software Engineer
        </ExperienceSectionTitle>
        <ExperienceSectionSubtitle id="salesforce-platform-subtitle">
          August 2016 – August 2019
        </ExperienceSectionSubtitle>
        <ExperienceSectionList>
          <li>
            Built a user event processing system using Java, Spring, Kafka, and
            HBase
          </li>
          <li>
            Partnered with technical writers to produce thorough{" "}
            <Mark>customer-facing technical documentation</Mark>
          </li>
          <li>
            Advocated for testing and quality through <Mark>code reviews</Mark>,
            as our feature lived in critical code paths (e.g. Salesforce’s login
            flow)
          </li>
        </ExperienceSectionList>
      </ExperienceSection>
    </ResumeSection>
  );
}
