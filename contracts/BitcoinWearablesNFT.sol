pragma solidity ^0.8.0;

import "./ERC721Tradable.sol";

contract BitcoinWearables is ERC721Tradable {
  
  constructor()
      ERC721Tradable("BitcoinWearables", "BW")
  {}

  function baseTokenURI() override public pure returns (string memory) {
      return "http://api.coinwearables.com/token/";
  }

  function contractURI() public pure returns (string memory) {
      return "http://api.coinwearables.com/contract/nft";
  }
}