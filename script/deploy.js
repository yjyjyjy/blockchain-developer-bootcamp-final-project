// Deploying the NFT smart contract
const { ethers } = require("hardhat")

async function main() {

  console.log("Getting DeepEye Contract")

  const DeepEyeContract = await ethers.getContractFactory("DeepEye")

  console.log("Deploying")

  const deployedDeepEye = await DeepEyeContract.deploy(
    'DeepEye', // NFT name
    'EYE', // NFT symbol
    'ipfs://QmZCCuNKGT9Y11r91aoXXj4hDZ8yAXL4UXB7iz5iQ3fGBa/', // Initial base URI
    'ipfs://QmSbXBWCbhQaaATTnqhXyzpxHFrrPp1Gqax74emjJJHn8u/hidden.json' // Hidden Image URI
  )

  console.log("DeepEye Contract has been deployed to: ", deployedDeepEye.address)

}

main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error)
      process.exit(1)
  })
