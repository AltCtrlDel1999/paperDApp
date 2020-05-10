import react, {Component} from 'react';
import Layout from '../components/Layout';
import {Card, Button} from 'semantic-ui-react';
import file from '../ethereum/file';
import {Link} from '../routes';


class PaperIndex extends Component{
  static async getInitialProps(){
    const files = await file.methods.getDeployedFiles().call();

    return {files};
  }

  renderItems(){
    const items = this.props.files.map(address => {
      return{
        header: address,
        description: (
          <Link route={`/documents/${address}`}>
            <a>View File</a>
          </Link>),
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render(){
    return (
      <Layout>
        <div>
          <h3>All Documents</h3>
          <Link route='/documents/new'>
          <a>
            <Button content="Add Document" icon="add circle" floated="right" primary />
          </a>
          </Link>
          {this.renderItems()}
        </div>
      </Layout>
    );
  }
}

export default PaperIndex;
