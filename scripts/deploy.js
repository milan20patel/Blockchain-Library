async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    const Library = await ethers.getContractFactory("Library");
    const library = await Library.deploy();
  
    console.log("Library contract deployed to:", library.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
  