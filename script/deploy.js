// const hre = require("hardhat")
// const ethers = hre.ethers

async function main() {

  console.log("Getting artifacts together")

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
  console.log("Deployed contract owner is: ", owner.toString())
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error)
      process.exit(1)
  })
