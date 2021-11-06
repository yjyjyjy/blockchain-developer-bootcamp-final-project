// scripts/index.js
// https://docs.alchemy.com/alchemy/tutorials/hello-world-smart-contract/interacting-with-a-smart-contract
const API_KEY = process.env.ALCHEMY_API_KEY;
const PRIVATE_KEY = process.env.KOVAN_PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

const { ethers } = require('hardhat');

const DeepEyeContractAddr = '0x6884250b2a2d69292A7aC14e9b687F81BbD8f2d4'
const RandomnessContractAddr = '0x1Dea211AF8A05A5E85B64FDd6d805C544a8e5715'
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
  console.log(result)
}




main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
