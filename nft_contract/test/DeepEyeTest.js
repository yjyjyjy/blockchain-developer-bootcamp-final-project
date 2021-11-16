const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("DeepEye NFT contract", function () {
  let Contract;
  let contract;
  let owner;
  let guest1;
  let guest2;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    Contract = await ethers.getContractFactory("DeepEye");
    [owner, guest1, guest2] = await ethers.getSigners();

    contract = await Contract.deploy(
      'DeepEye', // NFT name
      'EYE', // NFT symbol
      process.env.BASE_URI, // Initial base URI
      process.env.HIDDEN_META_URI // Hidden Image meta URI
    )
  });

  describe("Deployment", function () {

    it("Should set the right owner", async function () {
      expect(await contract.owner()).to.equal(owner.address);
    });

    it("should have guest accounts", async function () {
      expect(guest1.address).to.not.equal(null);
      expect(guest2.address).to.not.equal(null);
    })

  });

  describe("Mint", function () {

    it("Owner should be able to mint for free", async function () {
      await contract.connect(owner).mint(2);
      let owner_bal = await contract.balanceOf(owner.address);
      expect(owner_bal).to.equal(2);
    });

    it("Guest should NOT be able to mint for free", async function () {
      expect(contract.connect(guest1).mint(2)).to.reverted;
    });


    it("Guest should be able to mint at cost", async function () {
      let cost = await (contract.cost());
      await contract.connect(guest1).mint(2, { value: cost.mul(2) });
      let guest1_bal = await contract.balanceOf(guest1.address);
      expect(guest1_bal).to.equal(2);
    });

  });

  describe("Reveal", function () {

    it("Before reveal, the URL should be the hidden URL", async function () {
      await contract.connect(owner).mint(1);
      let url = await contract.tokenURI(1);
      expect(url).to.equal(process.env.HIDDEN_META_URI);
    });

    it("Guest should NOT be able to call reveal", async function () {
      expect(contract.connect(guest1).reveal()).to.reverted;
    });

    it("Owner should be able to call reveal and the url should point to the revealed asset", async function () {
      await contract.connect(owner).mint(1);
      await contract.connect(owner).reveal();
      let revealed = await contract.revealed();
      expect(revealed).to.equal(true);
      let url = await contract.tokenURI(1);
      console.log(url);
      expect(url).to.equal(process.env.BASE_URI + "2.json");
    });
  })

});

