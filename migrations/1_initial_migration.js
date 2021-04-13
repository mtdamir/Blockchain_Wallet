const Migrations = artifacts.require("Migrations");
const DaiTokenMock = artifacts.require("DaiTokenMock");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  await deployer.deploy(DaiTokenMock);
  const tokenMock = await DaiTokenMock.deployed()
  
  await tokenMock.mint(
    '0xC99EcC745f9C67548d6164A2e78d98840d4F62c9',
    '1000000000000000000000'
  )
};

