require("@nomiclabs/hardhat-ethers");
module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: {},
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      chainId: 43113,
      accounts: ["9d403c3dc9dcefdd77b1d3c78062bf734a4545d5863a9eca8193cce254decac9"],
    }
  }
};
