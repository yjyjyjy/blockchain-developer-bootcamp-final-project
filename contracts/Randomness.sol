// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Randomness is VRFConsumerBase, Ownable {
  bytes32 public keyHash;
  uint256 public fee;
  uint32 public tokenIdShifter;
  address public VRF_Coordinator = 0xdD3782915140c8f3b190B5D67eAc6dc5760C46E9; // for Kovan. The smart contract that verify the returned randomness
  address public LINK_token = 0xa36085F69e2889c224210F603D836748e7dC0088; // for Kovan.

  event DiceRolled();
  event DiceLanded(uint256 indexed result);

  constructor()
    VRFConsumerBase(VRF_Coordinator, LINK_token) {
    keyHash = 0x6c3699283bda56ad74f6b855546325b68d482e983852a7a82979cc4807b641f4;
    fee = 0.1*10**18;//0.1 LINK
    tokenIdShifter = 0;
  }

    function getRandomNumber() public onlyOwner returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
        emit DiceRolled();
        return requestRandomness(keyHash, fee);

    }
    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        tokenIdShifter = uint32(randomness % 100 + 1);
        emit DiceLanded(tokenIdShifter);
    }

    // TODO
    // need to implement withdraw function
    // owner only
}