const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("BitcoinWearables");

  const CONTRACT_ADDRESS = "0x2d11759f7dE9DcD70C041D4FC81C50DA066BA49d"
  const PROXY_REGISTRY_ADDRESS = "0x2d11759f7dE9DcD70C041D4FC81C50DA066BA49d"

  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.setProxyRegistryAddress(PROXY_REGISTRY_ADDRESS);

  console.log("Proxy registry address set to:", PROXY_REGISTRY_ADDRESS);
}

main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});
