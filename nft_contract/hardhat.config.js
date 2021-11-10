require("@nomiclabs/hardhat-waffle");
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
};

module.exports = {
  defaultNetwork:"hardhat",
  solidity: "0.8.0",
  networks: {
    hardhat: {},
    rinkeby:{
      url:process.env.RINKEBY_END_POINT,
      accounts:[process.env.DEV_ACCOUNT_PRIVATE_KEY]
    }
  }
};