const { expect } = require("chai");

describe("NFT", function() {
  it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
    const NFT = await ethers.getContractFactory("BitcoinWearables");
    const nft = await NFT.deploy();
    const URI = "ipfs://QmWJBNeQAm9Rh4YaW8GFRnSgwa4dN889VKm9poc2DQPBkv";
    await nft.deployed();
    await nft.mint("0x5FA988805E792B6cA0466B2dbb52693b2DEfF33F", URI)

    expect(await nft.tokenURI(1)).to.equal(URI)
  });
});
