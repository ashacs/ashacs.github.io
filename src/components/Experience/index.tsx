import { ExperienceSectionTitle } from './Title';
import { ExperienceSectionSubtitle } from './Subtitle';
import { Mark } from '../Mark';
import { List, ListItem } from '../List';

export function Experience() {
  return (
    <div className="experience-container">
      <section>
        <ExperienceSectionTitle>
          ReadMe — Frontend Engineer
        </ExperienceSectionTitle>
        <ExperienceSectionSubtitle>
          Oct 2024 – Present
        </ExperienceSectionSubtitle>
        <List>
          <ListItem>
            Rebuilt the documentation versioning experience during a
            foundational redesign of the product, with careful attention to{' '}
            <Mark>accessibility</Mark>, click target UX, and reusable redirect
            logic.
          </ListItem>
          <ListItem>
            Led <Mark>full-stack</Mark> implementation a new feature to enhance
            the versioning system with git-backed branches to stage and
            collaborate on documentation changes. This involved surfacing
            foundational API and routing unknowns, supporting a proof-of-concept
            approach, and implementing a complex <Mark>virtual tree</Mark>.
          </ListItem>
          <ListItem>
            Helped other engineers avoid common pitfalls and security
            vulnerabilities by creating <Mark>lint rules</Mark> to prevent
            recurrence.
          </ListItem>
          <ListItem>
            Improved <Mark>TypeScript</Mark> coverage and component quality
            across the codebase through conversions, refactors, and
            consolidations, introducing patterns recognized and adopted by
            teammates.
          </ListItem>
          <ListItem>
            Wrote a <Mark>codemod</Mark> for a migration from Styleguidist to
            <Mark>Storybook</Mark> and drove the RFC to get team buy-in. This
            enabled faster component driven development for frontend engineers.
          </ListItem>
        </List>
      </section>

      <section>
        <ExperienceSectionTitle>
          Lattice — Staff UI Engineer
        </ExperienceSectionTitle>
        <ExperienceSectionSubtitle>
          May 2022 – Aug 2024
        </ExperienceSectionSubtitle>
        <List>
          <ListItem>
            Built high-quality and forward-looking <Mark>React</Mark> components
            as a lead of the <Mark>design system</Mark> team, including a
            feature- and variant-rich data table component
          </ListItem>
          <ListItem>
            Owned feature prioritization, iterative delivery, and stakeholder
            communications on complex <Mark>cross-team projects</Mark> without a
            product manager
          </ListItem>
          <ListItem>
            Proposed, implemented, <Mark>documented</Mark>, and evangelized
            frontend development improvements across the company, including the
            introduction of <Mark>Storybook</Mark> and creation of tools to
            allow unit <Mark>testing</Mark> components connected to the{' '}
            <Mark>GraphQL</Mark> API
          </ListItem>
          <ListItem>
            Led planning, <Mark>scoping</Mark> decisions, and technical
            direction of green field features and overhauls to existing user
            experiences in the Compensation product suite
          </ListItem>
          <ListItem>
            Fostered <Mark>community</Mark> and collaboration of frontend
            engineers across the organization as a prominent member of the UI
            Guild
          </ListItem>
          <ListItem>
            Promoted culture and <Mark>inclusion</Mark> as a member of the ERG
            for engineers of underrepresented genders, including speaking on
            panels about <Mark>mentorship</Mark> and career growth and
            presenting on the value of <Mark>public speaking</Mark> as a
            minority
          </ListItem>
        </List>
      </section>

      <section>
        <ExperienceSectionTitle>
          Salesforce, Trailhead — Engineering Manager
        </ExperienceSectionTitle>
        <ExperienceSectionSubtitle>
          Oct 2021 – Apr 2022
        </ExperienceSectionSubtitle>
        <List>
          <ListItem>
            Led <Mark>planning</Mark> and organization of projects that involved
            conflicting priorities between existing commitments and new
            organizational goals
          </ListItem>
          <ListItem>
            Motivated and guided team members during difficult organizational
            changes
          </ListItem>
        </List>
      </section>

      <section>
        <ExperienceSectionTitle>
          Salesforce, Trailhead — Lead UI Engineer
        </ExperienceSectionTitle>
        <ExperienceSectionSubtitle>
          Aug 2019 – Oct 2021
        </ExperienceSectionSubtitle>
        <List>
          <ListItem>
            Led UI development of the Trailblazer Community (a Q&amp;A forum and
            job network) from the <Mark>ground up</Mark>, as one of only two
            frontend developers
          </ListItem>
          <ListItem>
            Built a high-quality and accessible <Mark>micro-frontend</Mark>,
            with <Mark>Node.js</Mark>, <Mark>TypeScript</Mark>, Lightning Web
            Components, and <Mark>Apollo Client</Mark>
          </ListItem>
          <ListItem>Partnered with product and design on UX decisions</ListItem>
          <ListItem>
            Collaborated full-stack with backend engineers on our{' '}
            <Mark>GraphQL</Mark> API
          </ListItem>
          <ListItem>
            <Mark>Presented</Mark> testing and <Mark>quality</Mark> best
            practices to 50+ engineers
          </ListItem>
          <ListItem>
            Developed and owned the end-to-end <Mark>localization</Mark>{' '}
            solution and process
          </ListItem>
        </List>
      </section>

      <section>
        <ExperienceSectionTitle>
          Salesforce, Security Platform — Senior Software Engineer
        </ExperienceSectionTitle>
        <ExperienceSectionSubtitle>
          Aug 2016 – Aug 2019
        </ExperienceSectionSubtitle>
        <List>
          <ListItem>
            Built a user event processing system using Java, Spring, Kafka, and
            HBase
          </ListItem>
          <ListItem>
            Partnered with technical writers to produce thorough{' '}
            <Mark>customer-facing technical documentation</Mark>
          </ListItem>
          <ListItem>
            Advocated for testing and quality through <Mark>code reviews</Mark>,
            as our feature lived in critical code paths (e.g. Salesforce&apos;s
            login flow)
          </ListItem>
        </List>
      </section>
    </div>
  );
}
