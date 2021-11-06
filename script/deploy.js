// const hre = require("hardhat")
// const ethers = hre.ethers

const { ethers } = require("hardhat")

async function main() {

  console.log("Getting DeepEye Contract")

  const DeepEyeContract = await ethers.getContractFactory("DeepEye")

  console.log("Deploying")

  const deployedDeepEye = await DeepEyeContract.deploy(
    'DeepEye',
    'EYE',
    'ipfs://QmZCCuNKGT9Y11r91aoXXj4hDZ8yAXL4UXB7iz5iQ3fGBa/',
    'ipfs://QmSbXBWCbhQaaATTnqhXyzpxHFrrPp1Gqax74emjJJHn8u/hidden.json'
  )

  console.log("DeepEyeContract deployed to: ", deployedDeepEye.address)
  owner = await deployedDeepEye.owner()
  console.log("Deployed contract DeepEye and the owner is: ", owner.toString())

  console.log('Getting Randomness contract')
  const Randomness = await ethers.getContractFactory('Randomness')
  const deployedRandomness = await Randomness.deploy()
  console.log("Randomness deployed to: ", deployedRandomness.address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error)
      process.exit(1)
  })
