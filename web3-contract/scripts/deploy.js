const { ethers } = require("hardhat");

async function main() {
  const contShow = await ethers.getContractFactory("simpleContract");
  const valShow = await contShow.deploy();
  await valShow.deployed();

  console.log("Contract deploy to:", valShow.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });