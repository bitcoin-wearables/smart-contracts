pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract BitcoinWearables is ERC721, Ownable {
  
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;

  constructor() ERC721("BitcoinWearables", "BW") {}

  function _baseURI() internal override view virtual returns (string memory) {
    return "https://bitcoin-wearables.herokuapp.com/api/token/";
  }

  function mint(address wearer)
      public
      onlyOwner
      returns (uint256)
  {
      _tokenIds.increment();

      uint256 newItemId = _tokenIds.current();
      _mint(wearer, newItemId);

      return newItemId;
  }
}
