import react, {Component} from 'react';
import Layout from '../../components/Layout';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import file from '../../ethereum/file';
import web3 from '../../ethereum/web3';
import {Router} from '../../routes';
import ipfs from '../../ipfs/ipfs';
//import fs from 'react-native-fs';

class DocumentNew extends Component{
  state = {
    errorMessage : '',
    loading : false,
    loadinga : false,
    newFile : null,
    fileBuffer : null,
    fileName : '',
    fileHash : ''
  };

  getBuffer =  async (event) =>{
    const newFile = event.target.files[0];
    this.setState({newFile});
    console.log(newFile);
    // Initialize an instance of the `FileReader`
    const reader = new window.FileReader();

    // Read the file and get the buffer
      reader.readAsArrayBuffer(newFile);
      reader.onloadend = async () =>{
        const fileBuffer = await Buffer.from(reader.result);
        console.log(fileBuffer);
        this.setState({fileBuffer});
    }

    }

  onAdd = async (event) =>{
    event.preventDefault();
    this.setState({loadinga:true});
    await ipfs.add(this.state.fileBuffer, (err, hashID) => {
      console.log(hashID);
      this.setState({ fileHash:hashID[0].hash });
      console.log(this.state.fileHash);
    });
      this.setState({loadinga:false});
  }

  onSubmit = async (event) =>{
    event.preventDefault();
    this.setState({loading:true, errorMessage:''});
    try{
      console.log(this.state.fileHash);
      console.log(this.state.fileName);
      const accounts = await web3.eth.getAccounts();
      //const acc = '0x38882226Bd08EC89b87C95a8826e0B106e4A0aBa';
      await file.methods.createCampaign(this.state.fileName,this.state.fileHash).send({from: accounts[0] });

      Router.pushRoute('/');
    }
    catch(err){
      this.setState({errorMessage: err.message});
    }
    this.setState({loading:false});
  }

  render(){
    return(
      <Layout>
        <h3>Add a New Document</h3>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>File Name</label>
            <Input placeholder='File Name' value={this.state.fileName} onChange={(event) => {this.setState({fileName: event.target.value})}}/>
          </Form.Field>
          <Form.Field>
            <label>Upload a File</label>
            <Input icon='upload' iconPosition='left' type='file' onChange={this.getBuffer}/>
            <Button loading={this.state.lodinga} primary style={{marginTop: '10px'}} onClick={this.onAdd}>Add File</Button>
          </Form.Field>


          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>Create!</Button>
        </Form>

      </Layout>
    );
  }
}

export default DocumentNew;
