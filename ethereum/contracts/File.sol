pragma solidity ^0.4.17;
pragma experimental ABIEncoderV2;

contract CampaignFactory{
    address[] public deployedFiles;

    function createCampaign(string fname,string mhash) public {
        address newFile = new File(fname,mhash, msg.sender);

        deployedFiles.push(newFile);
    }

    function getDeployedFiles() public view returns (address[]){
        return deployedFiles;
    }
}

contract File{

    string[] public versions;
    address public owner;
    string public fileName;
    string public currentHash;
    string public mainHash;

    modifier restricted(){
        require(msg.sender == owner);
        _;
    }

    function File(string fileN, string mainH,address creator) public{
        owner = creator;
        fileName = fileN;
        mainHash = mainH;
        currentHash = mainH;
        versions.push(mainH);

    }

    function getOwner() public view returns (address){
        return owner;
    }

    function addNewVersion(string newHash) public {
        versions.push(newHash);
        currentHash = newHash;
    }

    function getFileName() public view returns (string){
        return fileName;
    }

    function getCurrentVersion() public view returns (string){
        return currentHash;
    }


    function getVersion() public view returns (string []){
        return versions;
    }

    function getSummary() public view returns (string, string, address){
        return (
            fileName,
            currentHash,
            owner
            );
    }

}
