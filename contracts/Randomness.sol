// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v4.0.0/contracts/token/ERC20/IERC20.sol";

contract Randomness is VRFConsumerBase, Ownable {
  bytes32 public keyHash;
  uint256 public fee;
  uint32 public tokenIdShifter;
  address public VRF_Coordinator = 0xb3dCcb4Cf7a26f6cf6B120Cf5A73875B7BBc655B; // for Rinkeby. The smart contract that verify the returned randomness
  address public LINK_token = 0x01BE23585060835E02B77ef475b0Cc51aA1e0709; // for Rinkeby.
  IERC20 public chainlink;

  event DiceRolled();
  event DiceLanded(uint32 indexed result);

  constructor()
    VRFConsumerBase(VRF_Coordinator, LINK_token) {
    keyHash = 0x2ed0feb3e7fd2022120aa84fab1945545a9f2ffc9076fd6156fa96eaff4c1311; // Rinkeby
    fee = 0.1*10**18;//0.1 LINK
    tokenIdShifter = 0;
    chainlink = IERC20(0x01BE23585060835E02B77ef475b0Cc51aA1e0709);
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

    function getBalance() public view returns (uint256) {
        return chainlink.balanceOf(address(this));
    }

    // This function can withdraw the unused LINK token back to the contract owner.
    function withdraw() public payable onlyOwner {
        chainlink.transfer(owner(), getBalance());
    }
}