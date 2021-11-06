// scripts/index.js
// https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract/interacting-with-a-smart-contract
const API_KEY = process.env.ALCHEMY_API_KEY;
const PRIVATE_KEY = process.env.KOVAN_PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require('hardhat');

const DeepEyeContractAddr = '0xDD438E7d309aaCC417C0004D0f1F3D5748E16BF3'
const RandomnessContractAddr = '0x5E3A3550cEBDc23BD793a0846CcEB117f92CAe87'
const eyeContractAbi = require('../artifacts/contracts/DeepEye.sol/DeepEye.json')
const randContractAbi = require('../artifacts/contracts/Randomness.sol/Randomness.json')


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
const randContract = new ethers.Contract(RandomnessContractAddr, randContractAbi.abi, signer);
// console.log(randContract.interface.functions)



async function main () {
  // Retrieve accounts from the local node
  // const accounts = await ethers.provider.listAccounts();
  // console.log(accounts);
  // const callback = await randContract.getRandomNumber();
  // console.log(callback)
  const result = await randContract.randomResult();
  console.log(result.toNumber())
}




main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
