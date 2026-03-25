import { List, ListItem } from '../List';
import { Subsection, SubsectionTitle } from '../Subsection';

export function Skills() {
  return (
    <Subsection>
      <SubsectionTitle>Skills</SubsectionTitle>
      <List variant="badge">
        <ListItem>TypeScript</ListItem>
        <ListItem>React</ListItem>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>Web components</ListItem>
        <ListItem>Jest</ListItem>
        <ListItem>Accessibility</ListItem>
        <ListItem>GraphQL</ListItem>
        <ListItem>Apollo Client</ListItem>
        <ListItem>Relay</ListItem>
        <ListItem>Storybook</ListItem>
        <ListItem>Chromatic</ListItem>
        <ListItem>Node.js</ListItem>
        <ListItem>Git</ListItem>
        <ListItem>Internationalization</ListItem>
        <ListItem>Code review</ListItem>
        <ListItem>Documentation</ListItem>
        <ListItem>Public speaking</ListItem>
        <ListItem>Project management</ListItem>
      </List>
    </Subsection>
  );
}
