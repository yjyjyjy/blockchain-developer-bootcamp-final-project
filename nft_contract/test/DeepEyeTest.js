const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DeepEye NFT contract", function () {
  let DeepEye;
  let deployedContract;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    DeepEye = await ethers.getContractFactory("DeepEye");
    [owner, addr1, addr2] = await ethers.getSigners();

    deployedContract = await DeepEye.deploy(
      'DeepEye',
      'EYE',
      'ipfs://QmZCCuNKGT9Y11r91aoXXj4hDZ8yAXL4UXB7iz5iQ3fGBa/',
      'ipfs://QmSbXBWCbhQaaATTnqhXyzpxHFrrPp1Gqax74emjJJHn8u/hidden.json'
    );
  });

  describe("Deployment", function () {

    it("Should set the right owner", async function () {
      expect(await deployedContract.owner()).to.equal(owner.address);
    });

  });
});