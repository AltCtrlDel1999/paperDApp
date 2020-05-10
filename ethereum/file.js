import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';
//create a instance of a deployed contract by providing contracts ABI and deployed contracts address
const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0xaBCFDcd43EEd8B511Eddb1906204039a0fEcA791'
);

export default instance;
