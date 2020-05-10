import react,{ Component } from 'react';
import Layout from '../../components/Layout';
import FileInstance from '../../ethereum/fileinstance';
import {Card, Reveal,Button,Container, Grid} from 'semantic-ui-react';
import UploadForm from '../../components/UploadForm';
import { saveAs } from 'file-saver';
import ipfs from '../../ipfs/ipfs';
import { Link } from '../../routes';

class DocumentShow extends Component{
  static async getInitialProps(props){
    const fileInstance = FileInstance(props.query.address);

    const summary = await fileInstance.methods.getSummary().call();

    return {
      address: props.query.address,
      fileName: summary[0],
      fileHash: summary[1],
      fileURL: "https://ipfs.infura.io/ipfs/"+summary[1],
      fileOwner: summary[2]
    };
  }

  onDownload = async () =>{
    event.preventDefault();
    /*const chunks = [];
    for await (const chunk of ipfs.cat(ipfsHash)) {
      chunks.push(chunk)
    }
    console.log(Buffer.concat(chunks).toString())*/
    const fileBuf = await ipfs.cat(this.props.fileHash);
    console.log(fileBuf);
    const blob = new Blob([fileBuf]);
    console.log(blob);
    try {
        saveAs(blob,this.props.fileName);
    } catch (e) {
      console.log(e);
    }


  }

  render(){
    return (
      <Layout>
        <h3>Document Details</h3>
        <Grid>
          <Grid.Column width={10}>
            <Reveal animated='move right'>
              <Reveal.Content visible>
                <Card
                  header = { this.props.fileName }
                  meta = { this.props.fileOwner }
                  description = { this.props.fileHash }
                  style ={{ overflowWrap: 'break-word' }}
                  />
                </Reveal.Content>
                <Reveal.Content hidden >
                  <Container color='red' >
                    <Button style={{marginTop:'50px',marginLeft:'80px'}} primary href={this.props.fileURL} Download>View File</Button>
                  </Container>
                </Reveal.Content>
              </Reveal>
            </Grid.Column>
            <Grid.Column width={6}>
              <UploadForm address={this.props.address}/>
            </Grid.Column>
          </Grid>
          <Container style={{marginTop:'50px'}}>
            <Button style={{marginRight: '10px'}} primary onClick={this.onDownload} >Download File</Button>
            <Link route={`/campaigns/${this.props.address}/versions`}>
              <a>
                <Button primary>Track Update History</Button>
              </a>
            </Link>
          </Container>
      </Layout>
    );
  }
}

export default DocumentShow;
