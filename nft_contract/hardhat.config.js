require("@nomiclabs/hardhat-waffle");
require('hardhat-abi-exporter');
require('dotenv').config();

module.exports = {
  defaultNetwork: "hardhat",
  solidity: "0.8.0",
  networks: {
    hardhat: {},
    /*
    To interact on Rinkeby, uncomment the rinkeby section below.
    You will also need to repopulate the .env file for the following credentials:
    RINKEBY_END_POINT=
    RINKEBY_PROJECT_ID=
    DEV_ACCOUNT_PRIVATE_KEY=
    - Make sure updating the deployed contract address in the .env and the ABI to the frondend if redeploy
    */
    // rinkeby: {
    //   url: process.env.RINKEBY_END_POINT,
    //   accounts: [process.env.DEV_ACCOUNT_PRIVATE_KEY]
    // }
  },
  abiExporter: {
    path: './data/abi',
    clear: true,
    flat: false,
    only: [],
    spacing: 2,
    pretty: true,
  }
};