const intUniswapViaFactoryInterface = artifacts.require("intUniswapViaFactoryInterface");

module.exports = function (deployer) {
  deployer.deploy(intUniswapViaFactoryInterface);
};
