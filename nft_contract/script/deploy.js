// Deploying the NFT smart contract
const { ethers } = require("hardhat")

async function main() {

  console.log("Getting DeepEye Contract")

  const DeepEyeContract = await ethers.getContractFactory("DeepEye")

  console.log("Deploying")

  const deployedDeepEye = await DeepEyeContract.deploy(
    'DeepEye', // NFT name
    'EYE', // NFT symbol
    process.env.BASE_URI,
    process.env.HIDDEN_META_URI
  )

  console.log("DeepEye Contract has been deployed to: ", deployedDeepEye.address)

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
