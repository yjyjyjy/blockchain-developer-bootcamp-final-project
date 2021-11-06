require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.8.7",
// };


module.exports = {
  defaultNetwork:"kovan",
  solidity: "0.8.0",
  networks: {
    hardhat: {
    },
    kovan: {
      // url: `https://eth-kovan.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
      url: 'https://eth-kovan.alchemyapi.io/v2/9uMRBt5ifCM5w3YExYefwftWntny7H9Q',
      // accounts: [`0x${process.env.KOVAN_PRIVATE_KEY}`]
      accounts: ['0x61c3cddbca209b7197187cbaf98accf5e7dd4fe3276f7d3444ab955dc035b4ef']

    }
  }
};