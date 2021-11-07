// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Randomness is VRFConsumerBase, Ownable {

  uint32 public tokenIdShifter;
  IERC20 public chainlink;

  // Chainlink on Rinkeby settings
  address public VRF_Coordinator = 0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B;
  bytes32 public keyHash = 0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311;
  address public LINK_token = 0x01BE23585060835E02B77ef475b0Cc51aA1e0709;
  uint256 public fee = 0.1*10**18;//0.1 LINK

  event DiceRolled();
  event DiceLanded(uint32 indexed result);

  constructor()
    VRFConsumerBase(VRF_Coordinator, LINK_token) {
    chainlink = IERC20(LINK_token);
  }

    function getRandomNumber() public onlyOwner returns (bytes32 requestId) {
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK - fill contract with faucet");
        emit DiceRolled();
        return requestRandomness(keyHash, fee);

    }
    /**
     * Callback function used by VRF Coordinator
     */
    function fulfillRandomness(bytes32, uint256 randomness) internal override {
        tokenIdShifter = uint32(randomness % 100 + 1);
        emit DiceLanded(tokenIdShifter);
    }

    function getBalance() public view returns (uint256) {
        return chainlink.balanceOf(address(this));
    }

    // This function can withdraw the unused LINK token back to the contract owner.
    function refundOwner() public payable onlyOwner {
        chainlink.transfer(owner(), getBalance());
    }
}