import react from 'react';
import {Menu, Button} from 'semantic-ui-react';
import {Link} from '../routes';

export default ()=>{
  return (
    <Menu>
      <Link route='/'>
        <a className = 'item'>
          PaperDApp
        </a>
      </Link>
      <Menu.Menu position='right'>
      <Link route='/'>
        <a className = 'item'>
          My Documents
        </a>
      </Link>

      <Link route='/documents/new'>
        <a>
            <Button content="Add Document" icon="add circle" primary />
        </a>
      </Link>

      </Menu.Menu>
    </Menu>
  );
}
