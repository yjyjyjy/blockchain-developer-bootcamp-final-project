// scripts/index.js
// https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract/interacting-with-a-smart-contract
const PROJECT_ID = process.env.RINKEBY_PROJECT_ID;
const PRIVATE_KEY = process.env.DEV_ACCOUNT_PRIVATE_KEY;
const ADDRESS = process.env.RINKEBY_CONTRACT_ADDRESS;

const { ethers } = require('hardhat');
const contractAbi = require('../artifacts/contracts/DeepEye.sol/DeepEye.json')
const infuraProvider = new ethers.providers.InfuraProvider(network='rinkeby', PROJECT_ID)
const signer = new ethers.Wallet(PRIVATE_KEY, infuraProvider);
const eyeContract = new ethers.Contract(ADDRESS, contractAbi.abi, signer);

async function main () {
  // Retrieve accounts from the local node
  // const accounts = await ethers.provider.listAccounts();
  // console.log(accounts);
  // const callback = await randContract.getRandomNumber();
  // console.log(callback)
  await eyeContract.mint(3);
  console.log(await eyeContract.tokenURI(1));
  console.log("💎💎💎💎💎💎")
  // await eyeContract.generateRandomTokenIdShifter();

}




main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
