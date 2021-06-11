const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("BitcoinWearables");

  const WALLET_ADDRESS = "0x5FA988805E792B6cA0466B2dbb52693b2DEfF33F"
  const CONTRACT_ADDRESS = "0xFca52DD6bEa2dbDe2D7e71848c206E4294E985B0"

  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mintTo(WALLET_ADDRESS);

  console.log("NFT minted:", contract);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
