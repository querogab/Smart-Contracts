const Basic = artifacts.require("./Basic.sol");

module.exports = function(deployer) {
  deployer.deploy(Basic, 1000000);
};