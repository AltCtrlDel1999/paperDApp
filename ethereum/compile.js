//Required Modules
const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
//delete all the files present in build directoy
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);
//compile the Campaign contract and save it in build folder
const campaignPath = path.resolve(__dirname, 'contracts', 'File.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;

fs.ensureDirSync(buildPath);
//take a contract from output and create a seperate json file
for(let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':','') + '.json'),
    output[contract]
  );
}
