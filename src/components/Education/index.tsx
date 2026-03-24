import { List, ListItem } from '../List';
import { Subsection, SubsectionTitle } from '../Subsection';

export function Education() {
  return (
    <Subsection>
      <SubsectionTitle>Education</SubsectionTitle>
      <List variant='bare'>
        <ListItem>
          <b>UC San Diego, 2016</b> B.S. Computer Science
        </ListItem>
      </List>
    </Subsection>
  );
}
