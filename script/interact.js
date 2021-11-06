// scripts/index.js
// https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract/interacting-with-a-smart-contract
const API_KEY = process.env.ALCHEMY_API_KEY;
const PRIVATE_KEY = process.env.KOVAN_PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require('hardhat');

const DeepEyeContractAddr = '0x2afdD260606C8015cC7d87594fa39159dBcca261'
const eyeContractAbi = require('../artifacts/contracts/DeepEye.sol/DeepEye.json')


console.log('🚀🚀🚀 Provider')
// Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="kovan", API_KEY);

console.log('🚀🚀🚀 Signer')
// Signer
console.log('0x'+PRIVATE_KEY)
const signer = new ethers.Wallet('0x'+PRIVATE_KEY, alchemyProvider);

console.log('🚀🚀🚀 Contract')
// Contract
const eyeContract = new ethers.Contract(DeepEyeContractAddr, eyeContractAbi.abi, signer);
console.log(eyeContract.interface.functions)



async function main () {
  // Retrieve accounts from the local node
  // const accounts = await ethers.provider.listAccounts();
  // console.log(accounts);
  // const callback = await randContract.getRandomNumber();
  // console.log(callback)
  console.log(await eyeContract.getTokenIdShifter());
  console.log("💎💎💎💎💎💎")
  // await eyeContract.generateRandomTokenIdShifter();
  console.log(await eyeContract.getTokenIdShifter());
}




main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
