import { List, ListItem } from '../List';
import { Subsection, SubsectionTitle } from '../Subsection';

export function Values() {
  return (
    <Subsection>
      <SubsectionTitle>Values</SubsectionTitle>
      <List variant="badge">
        <ListItem>Quality</ListItem>
        <ListItem>Craft</ListItem>
        <ListItem>Accessibility</ListItem>
        <ListItem>Diversity</ListItem>
        <ListItem>Humility</ListItem>
        <ListItem>Collaboration</ListItem>
      </List>
    </Subsection>
  );
}
