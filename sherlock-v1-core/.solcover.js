module.exports = {
  mocha: {
    grep: '@skip-on-coverage', // Find everything with this tag
    invert: true, // Run the grep's inverse set.
  },
  istanbulFolder: './.coverage',
  istanbulReporter: ['html', 'text'],
  skipFiles: [
    'strategies/AaveV2.sol',
    'util/ERC20Mock.sol',
    'util/RemoveMock.sol',
    'util/StrategyMock.sol',
  ],
};
