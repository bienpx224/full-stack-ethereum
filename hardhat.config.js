require("@nomiclabs/hardhat-waffle");
require("hardhat-typechain");
require("@nomiclabs/hardhat-web3");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

task("balance", "Prints an account's balance")
.addParam("account", "The account's address")
.setAction(async taskArgs => {
  const account = web3.utils.toChecksumAddress(taskArgs.account);
  const balance = await web3.eth.getBalance(account);

  console.log(web3.utils.fromWei(balance, "ether"), "ETH");
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "ganache",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: ["d02e51ed46e1a9d3fe4b081f5b88e5ea7074cb363e11289be48563daa73213f8"]
    },
    // ropsten: {
    //   url: "https://ropsten.infura.io/v3/projectid",
    //   accounts: [process.env.a2key]
    // },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Lo5SBx5FcpJN2Ef030Rt8CoxI7w25G2I",
      accounts: ["13da8f20993402a273fc4f8e707f6c2cf7e89b916938d3c5be55628dc106a848","f80571bad8a4745fc3a3aa4990f15cf9b6944b56b6445d9a6c7e5070ea0eb390"],
    }
  },
  solidity: "0.8.3",
};

