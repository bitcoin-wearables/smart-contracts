const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("BitcoinWearables");

  const WALLET_ADDRESS = "0x5FA988805E792B6cA0466B2dbb52693b2DEfF33F"
  const CONTRACT_ADDRESS = "0xaD2eA9ecd3d0888b7d634368534CA145Ff2D3DCd"

  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS);

  console.log("NFT minted:", contract);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
