require("@nomiclabs/hardhat-ethers");
require("hardhat-deploy");
require("hardhat-deploy-ethers");

module.exports = {
  solidity: "0.8.4",
  networks: {
    avalanche: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      gasPrice: 225000000000,
      accounts: {
        mnemonic: ""
      }
    }
  },
  namedAccounts: {
    deployer: {
      default: 0
    }
  }
};
