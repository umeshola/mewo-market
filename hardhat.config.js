require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
const fs = require('fs');
require('dotenv').config();
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async(taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

module.exports = {
    networks: {
        localhost: {
            url: "http://127.0.0.1:8545",
        },
        sepolia: {
            url: process.env.REACT_APP_ALCHEMY_API_URL || "https://your-default-url.com",
            accounts: process.env.REACT_APP_PRIVATE_KEY ? [process.env.REACT_APP_PRIVATE_KEY] : [],
            chainId: 11155111,
        },
    },
    solidity: {
        version: "0.8.4",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200,
            },
        },
    },
};