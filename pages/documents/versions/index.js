import react,{ Component } from 'react';
import Layout from '../../../components/Layout';
import ipfs from '../../../ipfs/ipfs';
import web3 from '../../../ethereum/web3';
import FileInstance from '../../../ethereum/fileinstance';
import { Card, Button } from 'semantic-ui-react';


class VersionIndex extends Component{
  static async getInitialProps(props){
    const fileinstance = FileInstance(props.query.address);
    const versions = await fileinstance.methods.getVersion().call();

    return { versions };
  }

  renderItems(){
    const items = this.props.versions.map((version,index)=>{
      return {
        header: `version:${index}`,
        description: (
          <Button primary href={`https://ipfs.infura.io/ipfs/${version}`}>View content</Button>
        )
      }
    });

    return <Card.Group items={items} />
  }

  render(){
    return(
      <Layout>
        <h3>Document Histry</h3>
        {this.renderItems()}

      </Layout>
    );
  }
}

export default VersionIndex;
