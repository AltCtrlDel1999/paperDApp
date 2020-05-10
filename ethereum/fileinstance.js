import react from 'react';
import web3 from './web3';
import compiledFileInstance from './build/File';

export default (address) =>{
  return new web3.eth.Contract(JSON.parse(compiledFileInstance.interface),address);
}
