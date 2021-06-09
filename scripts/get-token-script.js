const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("BitcoinWearables");
  const CONTRACT_ADDRESS = "0xC753b070a8B1eFa21bae0007516F70121BfA9649"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const owner = await contract.ownerOf(3);
  console.log("Owner:", owner);
  const uri = await contract.tokenURI(3);
  console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
