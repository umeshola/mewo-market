const { ethers } = require("hardhat");
const fs = require("fs");

async function main() {
    const Marketplace = await ethers.getContractFactory("NFTMarketplace");
    console.log("Starting deployment...");
    const marketplace = await Marketplace.deploy();
    await marketplace.deployTransaction.wait(1);
    console.log("Done deployment!");
    console.log("Address of the contract:", marketplace.address);
    const data = {
        address: marketplace.address,
        abi: JSON.parse(marketplace.interface.format('json'))
    }

    //This writes the ABI and address to the mktplace.json
    fs.writeFileSync('./src/Marketplace.json', JSON.stringify(data))
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});