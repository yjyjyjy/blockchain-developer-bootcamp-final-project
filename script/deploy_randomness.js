// Deploy the randomness generator contract.

const { ethers } = require("hardhat")

async function main() {

  console.log('Getting Randomness contract')
  const Randomness = await ethers.getContractFactory('Randomness')
  const deployedRandomness = await Randomness.deploy()
  console.log("Randomness has been deployed to: ", deployedRandomness.address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
      console.error(error)
      process.exit(1)
  })
