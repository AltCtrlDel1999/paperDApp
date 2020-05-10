import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
  //we are in the browser and metamask is running
  window.web3.currentProvider.enable();
  web3 = new Web3(window.web3.currentProvider);
}
else{
  //we are on the server OR metamask is not running
  const provider = new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/2858b2fc40f241bdae3bfb2117bb8d61');
  web3 = new Web3(provider);

}

export default web3;
