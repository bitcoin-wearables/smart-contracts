const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("BitcoinWearables");

  const WALLET_ADDRESS = "0x5FA988805E792B6cA0466B2dbb52693b2DEfF33F"
  const CONTRACT_ADDRESS = "0x0f5767C2343D8fabb52afaDB0Acb54Ceb9b89d56"

  const contract = NFT.attach(CONTRACT_ADDRESS);

  for (i=0; i<69; i++) {
    await contract.mintTo(WALLET_ADDRESS);
  }

  console.log("NFT minted:", contract);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
