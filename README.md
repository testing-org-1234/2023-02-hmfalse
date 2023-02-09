# {project} contest details

- Join [Sherlock Discord](https://discord.gg/MABEWyASkp)
- Submit findings using the issue page in your private contest repo (label issues as med or high)
- [Read for more details](https://docs.sherlock.xyz/audits/watsons)

# Resources

- [resource1](url)
- [resource2](url)

# On-chain context

TO FILL IN BY PROTOCOL

```
DEPLOYMENT: [e.g. mainnet, arbitrum, optimism, ..]
ERC20: [e.g. any, none, USDC, USDC and USDT]
ERC721: [e.g. any, none, UNI-V3]
ERC777: [e.g. any, none, {token name}]
FEE-ON-TRANSFER: [e.g. any, none, {token name}]
REBASING TOKENS: [e.g. any, none, {token name}]
ADMIN: [trusted, restricted, n/a]
```

In case of restricted, by default Sherlock does not consider direct protocol rug pulls as a valid issue unless the protocol clearly describes in detail the conditions for these restrictions. 
For contracts, owners, admins clearly distinguish the ones controlled by protocol vs user controlled. This helps watsons distinguish the risk factor. 
Example: 
* `ContractA.sol` is owned by the protocol. 
* `admin` in `ContractB` is restricted to changing properties in `functionA` and should not be able to liquidate assets or affect user withdrawals in any way. 
* `admin` in `ContractC` is user admin and is restricted to only `functionB`

# Audit scope


[sherlock-v2-core @ 355c70df23aa9aa7d46567c9540a6d15be93fcab](https://github.com/sherlock-protocol/sherlock-v2-core/tree/355c70df23aa9aa7d46567c9540a6d15be93fcab)
- [sherlock-v2-core/contracts/SherBuy.sol](sherlock-v2-core/contracts/SherBuy.sol)
- [sherlock-v2-core/contracts/SherClaim.sol](sherlock-v2-core/contracts/SherClaim.sol)
- [sherlock-v2-core/contracts/Sherlock.sol](sherlock-v2-core/contracts/Sherlock.sol)
- [sherlock-v2-core/contracts/interfaces/ISherClaim.sol](sherlock-v2-core/contracts/interfaces/ISherClaim.sol)
- [sherlock-v2-core/contracts/interfaces/ISherlock.sol](sherlock-v2-core/contracts/interfaces/ISherlock.sol)
- [sherlock-v2-core/contracts/interfaces/ISherlockGov.sol](sherlock-v2-core/contracts/interfaces/ISherlockGov.sol)
- [sherlock-v2-core/contracts/interfaces/ISherlockPayout.sol](sherlock-v2-core/contracts/interfaces/ISherlockPayout.sol)
- [sherlock-v2-core/contracts/interfaces/ISherlockStake.sol](sherlock-v2-core/contracts/interfaces/ISherlockStake.sol)
- [sherlock-v2-core/contracts/interfaces/ISherlockStrategy.sol](sherlock-v2-core/contracts/interfaces/ISherlockStrategy.sol)
- [sherlock-v2-core/contracts/interfaces/UMAprotocol/OptimisticOracleInterface.sol](sherlock-v2-core/contracts/interfaces/UMAprotocol/OptimisticOracleInterface.sol)
- [sherlock-v2-core/contracts/interfaces/UMAprotocol/OptimisticRequester.sol](sherlock-v2-core/contracts/interfaces/UMAprotocol/OptimisticRequester.sol)
- [sherlock-v2-core/contracts/interfaces/UMAprotocol/SkinnyOptimisticOracleInterface.sol](sherlock-v2-core/contracts/interfaces/UMAprotocol/SkinnyOptimisticOracleInterface.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/DataTypes.sol](sherlock-v2-core/contracts/interfaces/aaveV2/DataTypes.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IAToken.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IAToken.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IAaveDistributionManager.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IAaveDistributionManager.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IAaveGovernanceV2.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IAaveGovernanceV2.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IAaveIncentivesController.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IAaveIncentivesController.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IExecutorWithTimelock.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IExecutorWithTimelock.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IGovernanceV2Helper.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IGovernanceV2Helper.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/ILendingPool.sol](sherlock-v2-core/contracts/interfaces/aaveV2/ILendingPool.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/ILendingPoolAddressesProvider.sol](sherlock-v2-core/contracts/interfaces/aaveV2/ILendingPoolAddressesProvider.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IProposalValidator.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IProposalValidator.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IStakeAave.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IStakeAave.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/MockAave.sol](sherlock-v2-core/contracts/interfaces/aaveV2/MockAave.sol)
- [sherlock-v2-core/contracts/interfaces/compound/ICToken.sol](sherlock-v2-core/contracts/interfaces/compound/ICToken.sol)
- [sherlock-v2-core/contracts/interfaces/compound/IComptroller.sol](sherlock-v2-core/contracts/interfaces/compound/IComptroller.sol)
- [sherlock-v2-core/contracts/interfaces/compound/InterestRateModel.sol](sherlock-v2-core/contracts/interfaces/compound/InterestRateModel.sol)
- [sherlock-v2-core/contracts/interfaces/euler/IEulerEToken.sol](sherlock-v2-core/contracts/interfaces/euler/IEulerEToken.sol)
- [sherlock-v2-core/contracts/interfaces/managers/IManager.sol](sherlock-v2-core/contracts/interfaces/managers/IManager.sol)
- [sherlock-v2-core/contracts/interfaces/managers/ISherDistributionManager.sol](sherlock-v2-core/contracts/interfaces/managers/ISherDistributionManager.sol)
- [sherlock-v2-core/contracts/interfaces/managers/ISherlockClaimManager.sol](sherlock-v2-core/contracts/interfaces/managers/ISherlockClaimManager.sol)
- [sherlock-v2-core/contracts/interfaces/managers/ISherlockProtocolManager.sol](sherlock-v2-core/contracts/interfaces/managers/ISherlockProtocolManager.sol)
- [sherlock-v2-core/contracts/interfaces/managers/IStrategyManager.sol](sherlock-v2-core/contracts/interfaces/managers/IStrategyManager.sol)
- [sherlock-v2-core/contracts/interfaces/managers/callbacks/ISherlockClaimManagerCallbackReceiver.sol](sherlock-v2-core/contracts/interfaces/managers/callbacks/ISherlockClaimManagerCallbackReceiver.sol)
- [sherlock-v2-core/contracts/interfaces/maple/IMplRewards.sol](sherlock-v2-core/contracts/interfaces/maple/IMplRewards.sol)
- [sherlock-v2-core/contracts/interfaces/maple/IPool.sol](sherlock-v2-core/contracts/interfaces/maple/IPool.sol)
- [sherlock-v2-core/contracts/interfaces/strategy/IERC4626.sol](sherlock-v2-core/contracts/interfaces/strategy/IERC4626.sol)
- [sherlock-v2-core/contracts/interfaces/strategy/INode.sol](sherlock-v2-core/contracts/interfaces/strategy/INode.sol)
- [sherlock-v2-core/contracts/interfaces/strategy/IStrategy.sol](sherlock-v2-core/contracts/interfaces/strategy/IStrategy.sol)
- [sherlock-v2-core/contracts/interfaces/tempus/ITempusController.sol](sherlock-v2-core/contracts/interfaces/tempus/ITempusController.sol)
- [sherlock-v2-core/contracts/interfaces/truefi/ITrueFiPool2.sol](sherlock-v2-core/contracts/interfaces/truefi/ITrueFiPool2.sol)
- [sherlock-v2-core/contracts/interfaces/truefi/ITrueMultiFarm.sol](sherlock-v2-core/contracts/interfaces/truefi/ITrueMultiFarm.sol)
- [sherlock-v2-core/contracts/managers/AaveV2Strategy.sol](sherlock-v2-core/contracts/managers/AaveV2Strategy.sol)
- [sherlock-v2-core/contracts/managers/Manager.sol](sherlock-v2-core/contracts/managers/Manager.sol)
- [sherlock-v2-core/contracts/managers/MasterStrategy.sol](sherlock-v2-core/contracts/managers/MasterStrategy.sol)
- [sherlock-v2-core/contracts/managers/SherDistributionManager.sol](sherlock-v2-core/contracts/managers/SherDistributionManager.sol)
- [sherlock-v2-core/contracts/managers/SherDistributionManagerEmpty.sol](sherlock-v2-core/contracts/managers/SherDistributionManagerEmpty.sol)
- [sherlock-v2-core/contracts/managers/SherlockClaimManager.sol](sherlock-v2-core/contracts/managers/SherlockClaimManager.sol)
- [sherlock-v2-core/contracts/managers/SherlockProtocolManager.sol](sherlock-v2-core/contracts/managers/SherlockProtocolManager.sol)
- [sherlock-v2-core/contracts/strategy/AaveStrategy.sol](sherlock-v2-core/contracts/strategy/AaveStrategy.sol)
- [sherlock-v2-core/contracts/strategy/CompoundStrategy.sol](sherlock-v2-core/contracts/strategy/CompoundStrategy.sol)
- [sherlock-v2-core/contracts/strategy/EulerStrategy.sol](sherlock-v2-core/contracts/strategy/EulerStrategy.sol)
- [sherlock-v2-core/contracts/strategy/MapleStrategy.sol](sherlock-v2-core/contracts/strategy/MapleStrategy.sol)
- [sherlock-v2-core/contracts/strategy/TrueFiStrategy.sol](sherlock-v2-core/contracts/strategy/TrueFiStrategy.sol)
- [sherlock-v2-core/contracts/strategy/base/BaseMaster.sol](sherlock-v2-core/contracts/strategy/base/BaseMaster.sol)
- [sherlock-v2-core/contracts/strategy/base/BaseNode.sol](sherlock-v2-core/contracts/strategy/base/BaseNode.sol)
- [sherlock-v2-core/contracts/strategy/base/BaseSplitter.sol](sherlock-v2-core/contracts/strategy/base/BaseSplitter.sol)
- [sherlock-v2-core/contracts/strategy/base/BaseStrategy.sol](sherlock-v2-core/contracts/strategy/base/BaseStrategy.sol)
- [sherlock-v2-core/contracts/strategy/compound/LibCompound.sol](sherlock-v2-core/contracts/strategy/compound/LibCompound.sol)
- [sherlock-v2-core/contracts/strategy/splitters/AlphaBetaEqualDepositMaxSplitter.sol](sherlock-v2-core/contracts/strategy/splitters/AlphaBetaEqualDepositMaxSplitter.sol)
- [sherlock-v2-core/contracts/strategy/splitters/AlphaBetaEqualDepositSplitter.sol](sherlock-v2-core/contracts/strategy/splitters/AlphaBetaEqualDepositSplitter.sol)
- [sherlock-v2-core/contracts/strategy/splitters/AlphaBetaSplitter.sol](sherlock-v2-core/contracts/strategy/splitters/AlphaBetaSplitter.sol)
- [sherlock-v2-core/contracts/test/AllowanceErrorTest.sol](sherlock-v2-core/contracts/test/AllowanceErrorTest.sol)
- [sherlock-v2-core/contracts/test/ManagerTest.sol](sherlock-v2-core/contracts/test/ManagerTest.sol)
- [sherlock-v2-core/contracts/test/PayableFail.sol](sherlock-v2-core/contracts/test/PayableFail.sol)
- [sherlock-v2-core/contracts/test/SherlockClaimManagerTest.sol](sherlock-v2-core/contracts/test/SherlockClaimManagerTest.sol)
- [sherlock-v2-core/contracts/test/SherlockProtocolManagerTest.sol](sherlock-v2-core/contracts/test/SherlockProtocolManagerTest.sol)
- [sherlock-v2-core/contracts/test/SherlockTest.sol](sherlock-v2-core/contracts/test/SherlockTest.sol)
- [sherlock-v2-core/contracts/util/CallbackMock.sol](sherlock-v2-core/contracts/util/CallbackMock.sol)
- [sherlock-v2-core/contracts/util/ERC20Mock.sol](sherlock-v2-core/contracts/util/ERC20Mock.sol)
- [sherlock-v2-core/contracts/util/Import.sol](sherlock-v2-core/contracts/util/Import.sol)
- [sherlock-v2-core/contracts/util/PausableMock.sol](sherlock-v2-core/contracts/util/PausableMock.sol)
- [sherlock-v2-core/contracts/util/SherDistributionMock.sol](sherlock-v2-core/contracts/util/SherDistributionMock.sol)
- [sherlock-v2-core/contracts/util/SherlockMock.sol](sherlock-v2-core/contracts/util/SherlockMock.sol)
- [sherlock-v2-core/contracts/util/SherlockProtocolManagerMock.sol](sherlock-v2-core/contracts/util/SherlockProtocolManagerMock.sol)
- [sherlock-v2-core/contracts/util/StrategyMock.sol](sherlock-v2-core/contracts/util/StrategyMock.sol)
- [sherlock-v2-core/contracts/util/StrategyMockGoerli.sol](sherlock-v2-core/contracts/util/StrategyMockGoerli.sol)
- [sherlock-v2-core/contracts/util/TreeSplitterMock.sol](sherlock-v2-core/contracts/util/TreeSplitterMock.sol)
- [sherlock-v2-core/contracts/util/TreeStrategyMock.sol](sherlock-v2-core/contracts/util/TreeStrategyMock.sol)



[aave-v3-core @ a00f28e3ad7c0e4a369d8e06e0ac9fd0acabcab7](https://github.com/aave/aave-v3-core/tree/a00f28e3ad7c0e4a369d8e06e0ac9fd0acabcab7)
- [aave-v3-core/Certora/certora/harness/ATokenHarness.sol](aave-v3-core/Certora/certora/harness/ATokenHarness.sol)
- [aave-v3-core/Certora/certora/harness/DataTypesInitializer.sol](aave-v3-core/Certora/certora/harness/DataTypesInitializer.sol)
- [aave-v3-core/Certora/certora/harness/EModeLogicHarness.sol](aave-v3-core/Certora/certora/harness/EModeLogicHarness.sol)
- [aave-v3-core/Certora/certora/harness/GenericLogicHarness.sol](aave-v3-core/Certora/certora/harness/GenericLogicHarness.sol)
- [aave-v3-core/Certora/certora/harness/LendingPoolHarness.sol](aave-v3-core/Certora/certora/harness/LendingPoolHarness.sol)
- [aave-v3-core/Certora/certora/harness/PoolConfiguratorHarness.sol](aave-v3-core/Certora/certora/harness/PoolConfiguratorHarness.sol)
- [aave-v3-core/Certora/certora/harness/PoolHarnessForConfigurator.sol](aave-v3-core/Certora/certora/harness/PoolHarnessForConfigurator.sol)
- [aave-v3-core/Certora/certora/harness/PoolHarnessForVariableDebtToken.sol](aave-v3-core/Certora/certora/harness/PoolHarnessForVariableDebtToken.sol)
- [aave-v3-core/Certora/certora/harness/ReserveConfigurationHarness.sol](aave-v3-core/Certora/certora/harness/ReserveConfigurationHarness.sol)
- [aave-v3-core/Certora/certora/harness/SimpleERC20.sol](aave-v3-core/Certora/certora/harness/SimpleERC20.sol)
- [aave-v3-core/Certora/certora/harness/StableDebtTokenHarness.sol](aave-v3-core/Certora/certora/harness/StableDebtTokenHarness.sol)
- [aave-v3-core/Certora/certora/harness/SupplyLogicHarness.sol](aave-v3-core/Certora/certora/harness/SupplyLogicHarness.sol)
- [aave-v3-core/Certora/certora/harness/SymbolicPriceOracle.sol](aave-v3-core/Certora/certora/harness/SymbolicPriceOracle.sol)
- [aave-v3-core/Certora/certora/harness/UserConfigurationHarness.sol](aave-v3-core/Certora/certora/harness/UserConfigurationHarness.sol)
- [aave-v3-core/Certora/certora/harness/flashLoanHarness.sol](aave-v3-core/Certora/certora/harness/flashLoanHarness.sol)
- [aave-v3-core/Certora/certora/harness/validationLogicHarness.sol](aave-v3-core/Certora/certora/harness/validationLogicHarness.sol)
- [aave-v3-core/contracts/dependencies/chainlink/AggregatorInterface.sol](aave-v3-core/contracts/dependencies/chainlink/AggregatorInterface.sol)
- [aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol](aave-v3-core/contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/AccessControl.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/AccessControl.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/Address.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/Context.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/Context.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/ERC165.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/ERC165.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/ERC20.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/ERC20.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/IAccessControl.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/IAccessControl.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/IERC165.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/IERC165.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/IERC20.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/IERC20.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/Ownable.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/Ownable.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeCast.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeMath.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/SafeMath.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/contracts/Strings.sol](aave-v3-core/contracts/dependencies/openzeppelin/contracts/Strings.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/AdminUpgradeabilityProxy.sol](aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/AdminUpgradeabilityProxy.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/BaseAdminUpgradeabilityProxy.sol](aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/BaseAdminUpgradeabilityProxy.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/BaseUpgradeabilityProxy.sol](aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/BaseUpgradeabilityProxy.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/Initializable.sol](aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/Initializable.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableAdminUpgradeabilityProxy.sol](aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableAdminUpgradeabilityProxy.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol](aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/Proxy.sol](aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/Proxy.sol)
- [aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/UpgradeabilityProxy.sol](aave-v3-core/contracts/dependencies/openzeppelin/upgradeability/UpgradeabilityProxy.sol)
- [aave-v3-core/contracts/dependencies/weth/WETH9.sol](aave-v3-core/contracts/dependencies/weth/WETH9.sol)
- [aave-v3-core/contracts/deployments/ReservesSetupHelper.sol](aave-v3-core/contracts/deployments/ReservesSetupHelper.sol)
- [aave-v3-core/contracts/flashloan/base/FlashLoanReceiverBase.sol](aave-v3-core/contracts/flashloan/base/FlashLoanReceiverBase.sol)
- [aave-v3-core/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol](aave-v3-core/contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol)
- [aave-v3-core/contracts/flashloan/interfaces/IFlashLoanReceiver.sol](aave-v3-core/contracts/flashloan/interfaces/IFlashLoanReceiver.sol)
- [aave-v3-core/contracts/flashloan/interfaces/IFlashLoanSimpleReceiver.sol](aave-v3-core/contracts/flashloan/interfaces/IFlashLoanSimpleReceiver.sol)
- [aave-v3-core/contracts/interfaces/IACLManager.sol](aave-v3-core/contracts/interfaces/IACLManager.sol)
- [aave-v3-core/contracts/interfaces/IAToken.sol](aave-v3-core/contracts/interfaces/IAToken.sol)
- [aave-v3-core/contracts/interfaces/IAaveIncentivesController.sol](aave-v3-core/contracts/interfaces/IAaveIncentivesController.sol)
- [aave-v3-core/contracts/interfaces/IAaveOracle.sol](aave-v3-core/contracts/interfaces/IAaveOracle.sol)
- [aave-v3-core/contracts/interfaces/ICreditDelegationToken.sol](aave-v3-core/contracts/interfaces/ICreditDelegationToken.sol)
- [aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol](aave-v3-core/contracts/interfaces/IDefaultInterestRateStrategy.sol)
- [aave-v3-core/contracts/interfaces/IDelegationToken.sol](aave-v3-core/contracts/interfaces/IDelegationToken.sol)
- [aave-v3-core/contracts/interfaces/IERC20WithPermit.sol](aave-v3-core/contracts/interfaces/IERC20WithPermit.sol)
- [aave-v3-core/contracts/interfaces/IInitializableAToken.sol](aave-v3-core/contracts/interfaces/IInitializableAToken.sol)
- [aave-v3-core/contracts/interfaces/IInitializableDebtToken.sol](aave-v3-core/contracts/interfaces/IInitializableDebtToken.sol)
- [aave-v3-core/contracts/interfaces/IL2Pool.sol](aave-v3-core/contracts/interfaces/IL2Pool.sol)
- [aave-v3-core/contracts/interfaces/IPool.sol](aave-v3-core/contracts/interfaces/IPool.sol)
- [aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol](aave-v3-core/contracts/interfaces/IPoolAddressesProvider.sol)
- [aave-v3-core/contracts/interfaces/IPoolAddressesProviderRegistry.sol](aave-v3-core/contracts/interfaces/IPoolAddressesProviderRegistry.sol)
- [aave-v3-core/contracts/interfaces/IPoolConfigurator.sol](aave-v3-core/contracts/interfaces/IPoolConfigurator.sol)
- [aave-v3-core/contracts/interfaces/IPoolDataProvider.sol](aave-v3-core/contracts/interfaces/IPoolDataProvider.sol)
- [aave-v3-core/contracts/interfaces/IPriceOracle.sol](aave-v3-core/contracts/interfaces/IPriceOracle.sol)
- [aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol](aave-v3-core/contracts/interfaces/IPriceOracleGetter.sol)
- [aave-v3-core/contracts/interfaces/IPriceOracleSentinel.sol](aave-v3-core/contracts/interfaces/IPriceOracleSentinel.sol)
- [aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol](aave-v3-core/contracts/interfaces/IReserveInterestRateStrategy.sol)
- [aave-v3-core/contracts/interfaces/IScaledBalanceToken.sol](aave-v3-core/contracts/interfaces/IScaledBalanceToken.sol)
- [aave-v3-core/contracts/interfaces/ISequencerOracle.sol](aave-v3-core/contracts/interfaces/ISequencerOracle.sol)
- [aave-v3-core/contracts/interfaces/IStableDebtToken.sol](aave-v3-core/contracts/interfaces/IStableDebtToken.sol)
- [aave-v3-core/contracts/interfaces/IVariableDebtToken.sol](aave-v3-core/contracts/interfaces/IVariableDebtToken.sol)
- [aave-v3-core/contracts/misc/AaveOracle.sol](aave-v3-core/contracts/misc/AaveOracle.sol)
- [aave-v3-core/contracts/misc/AaveProtocolDataProvider.sol](aave-v3-core/contracts/misc/AaveProtocolDataProvider.sol)
- [aave-v3-core/contracts/misc/L2Encoder.sol](aave-v3-core/contracts/misc/L2Encoder.sol)
- [aave-v3-core/contracts/misc/interfaces/IWETH.sol](aave-v3-core/contracts/misc/interfaces/IWETH.sol)
- [aave-v3-core/contracts/mocks/flashloan/MockFlashLoanReceiver.sol](aave-v3-core/contracts/mocks/flashloan/MockFlashLoanReceiver.sol)
- [aave-v3-core/contracts/mocks/flashloan/MockSimpleFlashLoanReceiver.sol](aave-v3-core/contracts/mocks/flashloan/MockSimpleFlashLoanReceiver.sol)
- [aave-v3-core/contracts/mocks/helpers/MockIncentivesController.sol](aave-v3-core/contracts/mocks/helpers/MockIncentivesController.sol)
- [aave-v3-core/contracts/mocks/helpers/MockL2Pool.sol](aave-v3-core/contracts/mocks/helpers/MockL2Pool.sol)
- [aave-v3-core/contracts/mocks/helpers/MockPeripheryContract.sol](aave-v3-core/contracts/mocks/helpers/MockPeripheryContract.sol)
- [aave-v3-core/contracts/mocks/helpers/MockPool.sol](aave-v3-core/contracts/mocks/helpers/MockPool.sol)
- [aave-v3-core/contracts/mocks/helpers/MockReserveConfiguration.sol](aave-v3-core/contracts/mocks/helpers/MockReserveConfiguration.sol)
- [aave-v3-core/contracts/mocks/helpers/SelfDestructTransfer.sol](aave-v3-core/contracts/mocks/helpers/SelfDestructTransfer.sol)
- [aave-v3-core/contracts/mocks/oracle/CLAggregators/MockAggregator.sol](aave-v3-core/contracts/mocks/oracle/CLAggregators/MockAggregator.sol)
- [aave-v3-core/contracts/mocks/oracle/PriceOracle.sol](aave-v3-core/contracts/mocks/oracle/PriceOracle.sol)
- [aave-v3-core/contracts/mocks/oracle/SequencerOracle.sol](aave-v3-core/contracts/mocks/oracle/SequencerOracle.sol)
- [aave-v3-core/contracts/mocks/tests/FlashloanAttacker.sol](aave-v3-core/contracts/mocks/tests/FlashloanAttacker.sol)
- [aave-v3-core/contracts/mocks/tests/MockReserveInterestRateStrategy.sol](aave-v3-core/contracts/mocks/tests/MockReserveInterestRateStrategy.sol)
- [aave-v3-core/contracts/mocks/tests/WadRayMathWrapper.sol](aave-v3-core/contracts/mocks/tests/WadRayMathWrapper.sol)
- [aave-v3-core/contracts/mocks/tokens/MintableDelegationERC20.sol](aave-v3-core/contracts/mocks/tokens/MintableDelegationERC20.sol)
- [aave-v3-core/contracts/mocks/tokens/MintableERC20.sol](aave-v3-core/contracts/mocks/tokens/MintableERC20.sol)
- [aave-v3-core/contracts/mocks/tokens/MockATokenRepayment.sol](aave-v3-core/contracts/mocks/tokens/MockATokenRepayment.sol)
- [aave-v3-core/contracts/mocks/tokens/WETH9Mocked.sol](aave-v3-core/contracts/mocks/tokens/WETH9Mocked.sol)
- [aave-v3-core/contracts/mocks/upgradeability/MockAToken.sol](aave-v3-core/contracts/mocks/upgradeability/MockAToken.sol)
- [aave-v3-core/contracts/mocks/upgradeability/MockInitializableImplementation.sol](aave-v3-core/contracts/mocks/upgradeability/MockInitializableImplementation.sol)
- [aave-v3-core/contracts/mocks/upgradeability/MockStableDebtToken.sol](aave-v3-core/contracts/mocks/upgradeability/MockStableDebtToken.sol)
- [aave-v3-core/contracts/mocks/upgradeability/MockVariableDebtToken.sol](aave-v3-core/contracts/mocks/upgradeability/MockVariableDebtToken.sol)
- [aave-v3-core/contracts/protocol/configuration/ACLManager.sol](aave-v3-core/contracts/protocol/configuration/ACLManager.sol)
- [aave-v3-core/contracts/protocol/configuration/PoolAddressesProvider.sol](aave-v3-core/contracts/protocol/configuration/PoolAddressesProvider.sol)
- [aave-v3-core/contracts/protocol/configuration/PoolAddressesProviderRegistry.sol](aave-v3-core/contracts/protocol/configuration/PoolAddressesProviderRegistry.sol)
- [aave-v3-core/contracts/protocol/configuration/PriceOracleSentinel.sol](aave-v3-core/contracts/protocol/configuration/PriceOracleSentinel.sol)
- [aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol](aave-v3-core/contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol)
- [aave-v3-core/contracts/protocol/libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol](aave-v3-core/contracts/protocol/libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol)
- [aave-v3-core/contracts/protocol/libraries/aave-upgradeability/VersionedInitializable.sol](aave-v3-core/contracts/protocol/libraries/aave-upgradeability/VersionedInitializable.sol)
- [aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol](aave-v3-core/contracts/protocol/libraries/configuration/ReserveConfiguration.sol)
- [aave-v3-core/contracts/protocol/libraries/configuration/UserConfiguration.sol](aave-v3-core/contracts/protocol/libraries/configuration/UserConfiguration.sol)
- [aave-v3-core/contracts/protocol/libraries/helpers/Errors.sol](aave-v3-core/contracts/protocol/libraries/helpers/Errors.sol)
- [aave-v3-core/contracts/protocol/libraries/helpers/Helpers.sol](aave-v3-core/contracts/protocol/libraries/helpers/Helpers.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/BorrowLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/BorrowLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/BridgeLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/BridgeLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/CalldataLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/CalldataLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/ConfiguratorLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/EModeLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/EModeLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/FlashLoanLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/FlashLoanLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/GenericLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/IsolationModeLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/IsolationModeLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/LiquidationLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/LiquidationLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/PoolLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/PoolLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/ReserveLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/SupplyLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol](aave-v3-core/contracts/protocol/libraries/logic/ValidationLogic.sol)
- [aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol](aave-v3-core/contracts/protocol/libraries/math/MathUtils.sol)
- [aave-v3-core/contracts/protocol/libraries/math/PercentageMath.sol](aave-v3-core/contracts/protocol/libraries/math/PercentageMath.sol)
- [aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol](aave-v3-core/contracts/protocol/libraries/math/WadRayMath.sol)
- [aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol](aave-v3-core/contracts/protocol/libraries/types/ConfiguratorInputTypes.sol)
- [aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol](aave-v3-core/contracts/protocol/libraries/types/DataTypes.sol)
- [aave-v3-core/contracts/protocol/pool/DefaultReserveInterestRateStrategy.sol](aave-v3-core/contracts/protocol/pool/DefaultReserveInterestRateStrategy.sol)
- [aave-v3-core/contracts/protocol/pool/L2Pool.sol](aave-v3-core/contracts/protocol/pool/L2Pool.sol)
- [aave-v3-core/contracts/protocol/pool/Pool.sol](aave-v3-core/contracts/protocol/pool/Pool.sol)
- [aave-v3-core/contracts/protocol/pool/PoolConfigurator.sol](aave-v3-core/contracts/protocol/pool/PoolConfigurator.sol)
- [aave-v3-core/contracts/protocol/pool/PoolStorage.sol](aave-v3-core/contracts/protocol/pool/PoolStorage.sol)
- [aave-v3-core/contracts/protocol/tokenization/AToken.sol](aave-v3-core/contracts/protocol/tokenization/AToken.sol)
- [aave-v3-core/contracts/protocol/tokenization/DelegationAwareAToken.sol](aave-v3-core/contracts/protocol/tokenization/DelegationAwareAToken.sol)
- [aave-v3-core/contracts/protocol/tokenization/StableDebtToken.sol](aave-v3-core/contracts/protocol/tokenization/StableDebtToken.sol)
- [aave-v3-core/contracts/protocol/tokenization/VariableDebtToken.sol](aave-v3-core/contracts/protocol/tokenization/VariableDebtToken.sol)
- [aave-v3-core/contracts/protocol/tokenization/base/DebtTokenBase.sol](aave-v3-core/contracts/protocol/tokenization/base/DebtTokenBase.sol)
- [aave-v3-core/contracts/protocol/tokenization/base/EIP712Base.sol](aave-v3-core/contracts/protocol/tokenization/base/EIP712Base.sol)
- [aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol](aave-v3-core/contracts/protocol/tokenization/base/IncentivizedERC20.sol)
- [aave-v3-core/contracts/protocol/tokenization/base/MintableIncentivizedERC20.sol](aave-v3-core/contracts/protocol/tokenization/base/MintableIncentivizedERC20.sol)
- [aave-v3-core/contracts/protocol/tokenization/base/ScaledBalanceTokenBase.sol](aave-v3-core/contracts/protocol/tokenization/base/ScaledBalanceTokenBase.sol)



[sherlock-v2-core @ 355c70df23aa9aa7d46567c9540a6d15be93fcab](https://github.com/sherlock-protocol/sherlock-v2-core/tree/355c70df23aa9aa7d46567c9540a6d15be93fcab)
- [sherlock-v2-core/contracts/SherBuy.sol](sherlock-v2-core/contracts/SherBuy.sol)
- [sherlock-v2-core/contracts/SherClaim.sol](sherlock-v2-core/contracts/SherClaim.sol)
- [sherlock-v2-core/contracts/Sherlock.sol](sherlock-v2-core/contracts/Sherlock.sol)
- [sherlock-v2-core/contracts/interfaces/ISherClaim.sol](sherlock-v2-core/contracts/interfaces/ISherClaim.sol)
- [sherlock-v2-core/contracts/interfaces/ISherlock.sol](sherlock-v2-core/contracts/interfaces/ISherlock.sol)
- [sherlock-v2-core/contracts/interfaces/ISherlockGov.sol](sherlock-v2-core/contracts/interfaces/ISherlockGov.sol)
- [sherlock-v2-core/contracts/interfaces/ISherlockPayout.sol](sherlock-v2-core/contracts/interfaces/ISherlockPayout.sol)
- [sherlock-v2-core/contracts/interfaces/ISherlockStake.sol](sherlock-v2-core/contracts/interfaces/ISherlockStake.sol)
- [sherlock-v2-core/contracts/interfaces/ISherlockStrategy.sol](sherlock-v2-core/contracts/interfaces/ISherlockStrategy.sol)
- [sherlock-v2-core/contracts/interfaces/UMAprotocol/OptimisticOracleInterface.sol](sherlock-v2-core/contracts/interfaces/UMAprotocol/OptimisticOracleInterface.sol)
- [sherlock-v2-core/contracts/interfaces/UMAprotocol/OptimisticRequester.sol](sherlock-v2-core/contracts/interfaces/UMAprotocol/OptimisticRequester.sol)
- [sherlock-v2-core/contracts/interfaces/UMAprotocol/SkinnyOptimisticOracleInterface.sol](sherlock-v2-core/contracts/interfaces/UMAprotocol/SkinnyOptimisticOracleInterface.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/DataTypes.sol](sherlock-v2-core/contracts/interfaces/aaveV2/DataTypes.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IAToken.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IAToken.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IAaveDistributionManager.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IAaveDistributionManager.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IAaveGovernanceV2.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IAaveGovernanceV2.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IAaveIncentivesController.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IAaveIncentivesController.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IExecutorWithTimelock.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IExecutorWithTimelock.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IGovernanceV2Helper.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IGovernanceV2Helper.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/ILendingPool.sol](sherlock-v2-core/contracts/interfaces/aaveV2/ILendingPool.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/ILendingPoolAddressesProvider.sol](sherlock-v2-core/contracts/interfaces/aaveV2/ILendingPoolAddressesProvider.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IProposalValidator.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IProposalValidator.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/IStakeAave.sol](sherlock-v2-core/contracts/interfaces/aaveV2/IStakeAave.sol)
- [sherlock-v2-core/contracts/interfaces/aaveV2/MockAave.sol](sherlock-v2-core/contracts/interfaces/aaveV2/MockAave.sol)
- [sherlock-v2-core/contracts/interfaces/compound/ICToken.sol](sherlock-v2-core/contracts/interfaces/compound/ICToken.sol)
- [sherlock-v2-core/contracts/interfaces/compound/IComptroller.sol](sherlock-v2-core/contracts/interfaces/compound/IComptroller.sol)
- [sherlock-v2-core/contracts/interfaces/compound/InterestRateModel.sol](sherlock-v2-core/contracts/interfaces/compound/InterestRateModel.sol)
- [sherlock-v2-core/contracts/interfaces/euler/IEulerEToken.sol](sherlock-v2-core/contracts/interfaces/euler/IEulerEToken.sol)
- [sherlock-v2-core/contracts/interfaces/managers/IManager.sol](sherlock-v2-core/contracts/interfaces/managers/IManager.sol)
- [sherlock-v2-core/contracts/interfaces/managers/ISherDistributionManager.sol](sherlock-v2-core/contracts/interfaces/managers/ISherDistributionManager.sol)
- [sherlock-v2-core/contracts/interfaces/managers/ISherlockClaimManager.sol](sherlock-v2-core/contracts/interfaces/managers/ISherlockClaimManager.sol)
- [sherlock-v2-core/contracts/interfaces/managers/ISherlockProtocolManager.sol](sherlock-v2-core/contracts/interfaces/managers/ISherlockProtocolManager.sol)
- [sherlock-v2-core/contracts/interfaces/managers/IStrategyManager.sol](sherlock-v2-core/contracts/interfaces/managers/IStrategyManager.sol)
- [sherlock-v2-core/contracts/interfaces/managers/callbacks/ISherlockClaimManagerCallbackReceiver.sol](sherlock-v2-core/contracts/interfaces/managers/callbacks/ISherlockClaimManagerCallbackReceiver.sol)
- [sherlock-v2-core/contracts/interfaces/maple/IMplRewards.sol](sherlock-v2-core/contracts/interfaces/maple/IMplRewards.sol)
- [sherlock-v2-core/contracts/interfaces/maple/IPool.sol](sherlock-v2-core/contracts/interfaces/maple/IPool.sol)
- [sherlock-v2-core/contracts/interfaces/strategy/IERC4626.sol](sherlock-v2-core/contracts/interfaces/strategy/IERC4626.sol)
- [sherlock-v2-core/contracts/interfaces/strategy/INode.sol](sherlock-v2-core/contracts/interfaces/strategy/INode.sol)
- [sherlock-v2-core/contracts/interfaces/strategy/IStrategy.sol](sherlock-v2-core/contracts/interfaces/strategy/IStrategy.sol)
- [sherlock-v2-core/contracts/interfaces/tempus/ITempusController.sol](sherlock-v2-core/contracts/interfaces/tempus/ITempusController.sol)
- [sherlock-v2-core/contracts/interfaces/truefi/ITrueFiPool2.sol](sherlock-v2-core/contracts/interfaces/truefi/ITrueFiPool2.sol)
- [sherlock-v2-core/contracts/interfaces/truefi/ITrueMultiFarm.sol](sherlock-v2-core/contracts/interfaces/truefi/ITrueMultiFarm.sol)
- [sherlock-v2-core/contracts/managers/AaveV2Strategy.sol](sherlock-v2-core/contracts/managers/AaveV2Strategy.sol)
- [sherlock-v2-core/contracts/managers/Manager.sol](sherlock-v2-core/contracts/managers/Manager.sol)
- [sherlock-v2-core/contracts/managers/MasterStrategy.sol](sherlock-v2-core/contracts/managers/MasterStrategy.sol)
- [sherlock-v2-core/contracts/managers/SherDistributionManager.sol](sherlock-v2-core/contracts/managers/SherDistributionManager.sol)
- [sherlock-v2-core/contracts/managers/SherDistributionManagerEmpty.sol](sherlock-v2-core/contracts/managers/SherDistributionManagerEmpty.sol)
- [sherlock-v2-core/contracts/managers/SherlockClaimManager.sol](sherlock-v2-core/contracts/managers/SherlockClaimManager.sol)
- [sherlock-v2-core/contracts/managers/SherlockProtocolManager.sol](sherlock-v2-core/contracts/managers/SherlockProtocolManager.sol)
- [sherlock-v2-core/contracts/strategy/AaveStrategy.sol](sherlock-v2-core/contracts/strategy/AaveStrategy.sol)
- [sherlock-v2-core/contracts/strategy/CompoundStrategy.sol](sherlock-v2-core/contracts/strategy/CompoundStrategy.sol)
- [sherlock-v2-core/contracts/strategy/EulerStrategy.sol](sherlock-v2-core/contracts/strategy/EulerStrategy.sol)
- [sherlock-v2-core/contracts/strategy/MapleStrategy.sol](sherlock-v2-core/contracts/strategy/MapleStrategy.sol)
- [sherlock-v2-core/contracts/strategy/TrueFiStrategy.sol](sherlock-v2-core/contracts/strategy/TrueFiStrategy.sol)
- [sherlock-v2-core/contracts/strategy/base/BaseMaster.sol](sherlock-v2-core/contracts/strategy/base/BaseMaster.sol)
- [sherlock-v2-core/contracts/strategy/base/BaseNode.sol](sherlock-v2-core/contracts/strategy/base/BaseNode.sol)
- [sherlock-v2-core/contracts/strategy/base/BaseSplitter.sol](sherlock-v2-core/contracts/strategy/base/BaseSplitter.sol)
- [sherlock-v2-core/contracts/strategy/base/BaseStrategy.sol](sherlock-v2-core/contracts/strategy/base/BaseStrategy.sol)
- [sherlock-v2-core/contracts/strategy/compound/LibCompound.sol](sherlock-v2-core/contracts/strategy/compound/LibCompound.sol)
- [sherlock-v2-core/contracts/strategy/splitters/AlphaBetaEqualDepositMaxSplitter.sol](sherlock-v2-core/contracts/strategy/splitters/AlphaBetaEqualDepositMaxSplitter.sol)
- [sherlock-v2-core/contracts/strategy/splitters/AlphaBetaEqualDepositSplitter.sol](sherlock-v2-core/contracts/strategy/splitters/AlphaBetaEqualDepositSplitter.sol)
- [sherlock-v2-core/contracts/strategy/splitters/AlphaBetaSplitter.sol](sherlock-v2-core/contracts/strategy/splitters/AlphaBetaSplitter.sol)



# About {project}
