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


**sherlock-v2-core**
- `contracts/SherBuy.sol`
- `contracts/SherClaim.sol`
- `contracts/Sherlock.sol`
- `contracts/interfaces/ISherClaim.sol`
- `contracts/interfaces/ISherlock.sol`
- `contracts/interfaces/ISherlockGov.sol`
- `contracts/interfaces/ISherlockPayout.sol`
- `contracts/interfaces/ISherlockStake.sol`
- `contracts/interfaces/ISherlockStrategy.sol`
- `contracts/interfaces/UMAprotocol/OptimisticOracleInterface.sol`
- `contracts/interfaces/UMAprotocol/OptimisticRequester.sol`
- `contracts/interfaces/UMAprotocol/SkinnyOptimisticOracleInterface.sol`
- `contracts/interfaces/aaveV2/DataTypes.sol`
- `contracts/interfaces/aaveV2/IAToken.sol`
- `contracts/interfaces/aaveV2/IAaveDistributionManager.sol`
- `contracts/interfaces/aaveV2/IAaveGovernanceV2.sol`
- `contracts/interfaces/aaveV2/IAaveIncentivesController.sol`
- `contracts/interfaces/aaveV2/IExecutorWithTimelock.sol`
- `contracts/interfaces/aaveV2/IGovernanceV2Helper.sol`
- `contracts/interfaces/aaveV2/ILendingPool.sol`
- `contracts/interfaces/aaveV2/ILendingPoolAddressesProvider.sol`
- `contracts/interfaces/aaveV2/IProposalValidator.sol`
- `contracts/interfaces/aaveV2/IStakeAave.sol`
- `contracts/interfaces/aaveV2/MockAave.sol`
- `contracts/interfaces/compound/ICToken.sol`
- `contracts/interfaces/compound/IComptroller.sol`
- `contracts/interfaces/compound/InterestRateModel.sol`
- `contracts/interfaces/euler/IEulerEToken.sol`
- `contracts/interfaces/managers/IManager.sol`
- `contracts/interfaces/managers/ISherDistributionManager.sol`
- `contracts/interfaces/managers/ISherlockClaimManager.sol`
- `contracts/interfaces/managers/ISherlockProtocolManager.sol`
- `contracts/interfaces/managers/IStrategyManager.sol`
- `contracts/interfaces/managers/callbacks/ISherlockClaimManagerCallbackReceiver.sol`
- `contracts/interfaces/maple/IMplRewards.sol`
- `contracts/interfaces/maple/IPool.sol`
- `contracts/interfaces/strategy/IERC4626.sol`
- `contracts/interfaces/strategy/INode.sol`
- `contracts/interfaces/strategy/IStrategy.sol`
- `contracts/interfaces/tempus/ITempusController.sol`
- `contracts/interfaces/truefi/ITrueFiPool2.sol`
- `contracts/interfaces/truefi/ITrueMultiFarm.sol`
- `contracts/managers/AaveV2Strategy.sol`
- `contracts/managers/Manager.sol`
- `contracts/managers/MasterStrategy.sol`
- `contracts/managers/SherDistributionManager.sol`
- `contracts/managers/SherDistributionManagerEmpty.sol`
- `contracts/managers/SherlockClaimManager.sol`
- `contracts/managers/SherlockProtocolManager.sol`
- `contracts/strategy/AaveStrategy.sol`
- `contracts/strategy/CompoundStrategy.sol`
- `contracts/strategy/EulerStrategy.sol`
- `contracts/strategy/MapleStrategy.sol`
- `contracts/strategy/TrueFiStrategy.sol`
- `contracts/strategy/base/BaseMaster.sol`
- `contracts/strategy/base/BaseNode.sol`
- `contracts/strategy/base/BaseSplitter.sol`
- `contracts/strategy/base/BaseStrategy.sol`
- `contracts/strategy/compound/LibCompound.sol`
- `contracts/strategy/splitters/AlphaBetaEqualDepositMaxSplitter.sol`
- `contracts/strategy/splitters/AlphaBetaEqualDepositSplitter.sol`
- `contracts/strategy/splitters/AlphaBetaSplitter.sol`
**aave-v3-core**
- `contracts/dependencies/chainlink/AggregatorInterface.sol`
- `contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol`
- `contracts/dependencies/openzeppelin/contracts/AccessControl.sol`
- `contracts/dependencies/openzeppelin/contracts/Address.sol`
- `contracts/dependencies/openzeppelin/contracts/Context.sol`
- `contracts/dependencies/openzeppelin/contracts/ERC165.sol`
- `contracts/dependencies/openzeppelin/contracts/ERC20.sol`
- `contracts/dependencies/openzeppelin/contracts/IAccessControl.sol`
- `contracts/dependencies/openzeppelin/contracts/IERC165.sol`
- `contracts/dependencies/openzeppelin/contracts/IERC20.sol`
- `contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol`
- `contracts/dependencies/openzeppelin/contracts/Ownable.sol`
- `contracts/dependencies/openzeppelin/contracts/SafeCast.sol`
- `contracts/dependencies/openzeppelin/contracts/SafeMath.sol`
- `contracts/dependencies/openzeppelin/contracts/Strings.sol`
- `contracts/dependencies/openzeppelin/upgradeability/AdminUpgradeabilityProxy.sol`
- `contracts/dependencies/openzeppelin/upgradeability/BaseAdminUpgradeabilityProxy.sol`
- `contracts/dependencies/openzeppelin/upgradeability/BaseUpgradeabilityProxy.sol`
- `contracts/dependencies/openzeppelin/upgradeability/Initializable.sol`
- `contracts/dependencies/openzeppelin/upgradeability/InitializableAdminUpgradeabilityProxy.sol`
- `contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol`
- `contracts/dependencies/openzeppelin/upgradeability/Proxy.sol`
- `contracts/dependencies/openzeppelin/upgradeability/UpgradeabilityProxy.sol`
- `contracts/dependencies/weth/WETH9.sol`
- `contracts/deployments/ReservesSetupHelper.sol`
- `contracts/flashloan/base/FlashLoanReceiverBase.sol`
- `contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol`
- `contracts/flashloan/interfaces/IFlashLoanReceiver.sol`
- `contracts/flashloan/interfaces/IFlashLoanSimpleReceiver.sol`
- `contracts/interfaces/IACLManager.sol`
- `contracts/interfaces/IAToken.sol`
- `contracts/interfaces/IAaveIncentivesController.sol`
- `contracts/interfaces/IAaveOracle.sol`
- `contracts/interfaces/ICreditDelegationToken.sol`
- `contracts/interfaces/IDefaultInterestRateStrategy.sol`
- `contracts/interfaces/IDelegationToken.sol`
- `contracts/interfaces/IERC20WithPermit.sol`
- `contracts/interfaces/IInitializableAToken.sol`
- `contracts/interfaces/IInitializableDebtToken.sol`
- `contracts/interfaces/IL2Pool.sol`
- `contracts/interfaces/IPool.sol`
- `contracts/interfaces/IPoolAddressesProvider.sol`
- `contracts/interfaces/IPoolAddressesProviderRegistry.sol`
- `contracts/interfaces/IPoolConfigurator.sol`
- `contracts/interfaces/IPoolDataProvider.sol`
- `contracts/interfaces/IPriceOracle.sol`
- `contracts/interfaces/IPriceOracleGetter.sol`
- `contracts/interfaces/IPriceOracleSentinel.sol`
- `contracts/interfaces/IReserveInterestRateStrategy.sol`
- `contracts/interfaces/IScaledBalanceToken.sol`
- `contracts/interfaces/ISequencerOracle.sol`
- `contracts/interfaces/IStableDebtToken.sol`
- `contracts/interfaces/IVariableDebtToken.sol`
- `contracts/misc/AaveOracle.sol`
- `contracts/misc/AaveProtocolDataProvider.sol`
- `contracts/misc/L2Encoder.sol`
- `contracts/misc/interfaces/IWETH.sol`
- `contracts/mocks/flashloan/MockFlashLoanReceiver.sol`
- `contracts/mocks/flashloan/MockSimpleFlashLoanReceiver.sol`
- `contracts/mocks/helpers/MockIncentivesController.sol`
- `contracts/mocks/helpers/MockL2Pool.sol`
- `contracts/mocks/helpers/MockPeripheryContract.sol`
- `contracts/mocks/helpers/MockPool.sol`
- `contracts/mocks/helpers/MockReserveConfiguration.sol`
- `contracts/mocks/helpers/SelfDestructTransfer.sol`
- `contracts/mocks/oracle/CLAggregators/MockAggregator.sol`
- `contracts/mocks/oracle/PriceOracle.sol`
- `contracts/mocks/oracle/SequencerOracle.sol`
- `contracts/mocks/tests/FlashloanAttacker.sol`
- `contracts/mocks/tests/MockReserveInterestRateStrategy.sol`
- `contracts/mocks/tests/WadRayMathWrapper.sol`
- `contracts/mocks/tokens/MintableDelegationERC20.sol`
- `contracts/mocks/tokens/MintableERC20.sol`
- `contracts/mocks/tokens/MockATokenRepayment.sol`
- `contracts/mocks/tokens/WETH9Mocked.sol`
- `contracts/mocks/upgradeability/MockAToken.sol`
- `contracts/mocks/upgradeability/MockInitializableImplementation.sol`
- `contracts/mocks/upgradeability/MockStableDebtToken.sol`
- `contracts/mocks/upgradeability/MockVariableDebtToken.sol`
- `contracts/protocol/configuration/ACLManager.sol`
- `contracts/protocol/configuration/PoolAddressesProvider.sol`
- `contracts/protocol/configuration/PoolAddressesProviderRegistry.sol`
- `contracts/protocol/configuration/PriceOracleSentinel.sol`
- `contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol`
- `contracts/protocol/libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol`
- `contracts/protocol/libraries/aave-upgradeability/VersionedInitializable.sol`
- `contracts/protocol/libraries/configuration/ReserveConfiguration.sol`
- `contracts/protocol/libraries/configuration/UserConfiguration.sol`
- `contracts/protocol/libraries/helpers/Errors.sol`
- `contracts/protocol/libraries/helpers/Helpers.sol`
- `contracts/protocol/libraries/logic/BorrowLogic.sol`
- `contracts/protocol/libraries/logic/BridgeLogic.sol`
- `contracts/protocol/libraries/logic/CalldataLogic.sol`
- `contracts/protocol/libraries/logic/ConfiguratorLogic.sol`
- `contracts/protocol/libraries/logic/EModeLogic.sol`
- `contracts/protocol/libraries/logic/FlashLoanLogic.sol`
- `contracts/protocol/libraries/logic/GenericLogic.sol`
- `contracts/protocol/libraries/logic/IsolationModeLogic.sol`
- `contracts/protocol/libraries/logic/LiquidationLogic.sol`
- `contracts/protocol/libraries/logic/PoolLogic.sol`
- `contracts/protocol/libraries/logic/ReserveLogic.sol`
- `contracts/protocol/libraries/logic/SupplyLogic.sol`
- `contracts/protocol/libraries/logic/ValidationLogic.sol`
- `contracts/protocol/libraries/math/MathUtils.sol`
- `contracts/protocol/libraries/math/PercentageMath.sol`
- `contracts/protocol/libraries/math/WadRayMath.sol`
- `contracts/protocol/libraries/types/ConfiguratorInputTypes.sol`
- `contracts/protocol/libraries/types/DataTypes.sol`
- `contracts/protocol/pool/DefaultReserveInterestRateStrategy.sol`
- `contracts/protocol/pool/L2Pool.sol`
- `contracts/protocol/pool/Pool.sol`
- `contracts/protocol/pool/PoolConfigurator.sol`
- `contracts/protocol/pool/PoolStorage.sol`
- `contracts/protocol/tokenization/AToken.sol`
- `contracts/protocol/tokenization/DelegationAwareAToken.sol`
- `contracts/protocol/tokenization/StableDebtToken.sol`
- `contracts/protocol/tokenization/VariableDebtToken.sol`
- `contracts/protocol/tokenization/base/DebtTokenBase.sol`
- `contracts/protocol/tokenization/base/EIP712Base.sol`
- `contracts/protocol/tokenization/base/IncentivizedERC20.sol`
- `contracts/protocol/tokenization/base/MintableIncentivizedERC20.sol`
- `contracts/protocol/tokenization/base/ScaledBalanceTokenBase.sol`



**sherlock-v2-core**
- `contracts/SherBuy.sol`
- `contracts/SherClaim.sol`
- `contracts/Sherlock.sol`
- `contracts/interfaces/ISherClaim.sol`
- `contracts/interfaces/ISherlock.sol`
- `contracts/interfaces/ISherlockGov.sol`
- `contracts/interfaces/ISherlockPayout.sol`
- `contracts/interfaces/ISherlockStake.sol`
- `contracts/interfaces/ISherlockStrategy.sol`
- `contracts/interfaces/UMAprotocol/OptimisticOracleInterface.sol`
- `contracts/interfaces/UMAprotocol/OptimisticRequester.sol`
- `contracts/interfaces/UMAprotocol/SkinnyOptimisticOracleInterface.sol`
- `contracts/interfaces/aaveV2/DataTypes.sol`
- `contracts/interfaces/aaveV2/IAToken.sol`
- `contracts/interfaces/aaveV2/IAaveDistributionManager.sol`
- `contracts/interfaces/aaveV2/IAaveGovernanceV2.sol`
- `contracts/interfaces/aaveV2/IAaveIncentivesController.sol`
- `contracts/interfaces/aaveV2/IExecutorWithTimelock.sol`
- `contracts/interfaces/aaveV2/IGovernanceV2Helper.sol`
- `contracts/interfaces/aaveV2/ILendingPool.sol`
- `contracts/interfaces/aaveV2/ILendingPoolAddressesProvider.sol`
- `contracts/interfaces/aaveV2/IProposalValidator.sol`
- `contracts/interfaces/aaveV2/IStakeAave.sol`
- `contracts/interfaces/aaveV2/MockAave.sol`
- `contracts/interfaces/compound/ICToken.sol`
- `contracts/interfaces/compound/IComptroller.sol`
- `contracts/interfaces/compound/InterestRateModel.sol`
- `contracts/interfaces/euler/IEulerEToken.sol`
- `contracts/interfaces/managers/IManager.sol`
- `contracts/interfaces/managers/ISherDistributionManager.sol`
- `contracts/interfaces/managers/ISherlockClaimManager.sol`
- `contracts/interfaces/managers/ISherlockProtocolManager.sol`
- `contracts/interfaces/managers/IStrategyManager.sol`
- `contracts/interfaces/managers/callbacks/ISherlockClaimManagerCallbackReceiver.sol`
- `contracts/interfaces/maple/IMplRewards.sol`
- `contracts/interfaces/maple/IPool.sol`
- `contracts/interfaces/strategy/IERC4626.sol`
- `contracts/interfaces/strategy/INode.sol`
- `contracts/interfaces/strategy/IStrategy.sol`
- `contracts/interfaces/tempus/ITempusController.sol`
- `contracts/interfaces/truefi/ITrueFiPool2.sol`
- `contracts/interfaces/truefi/ITrueMultiFarm.sol`
- `contracts/managers/AaveV2Strategy.sol`
- `contracts/managers/Manager.sol`
- `contracts/managers/MasterStrategy.sol`
- `contracts/managers/SherDistributionManager.sol`
- `contracts/managers/SherDistributionManagerEmpty.sol`
- `contracts/managers/SherlockClaimManager.sol`
- `contracts/managers/SherlockProtocolManager.sol`
- `contracts/strategy/AaveStrategy.sol`
- `contracts/strategy/CompoundStrategy.sol`
- `contracts/strategy/EulerStrategy.sol`
- `contracts/strategy/MapleStrategy.sol`
- `contracts/strategy/TrueFiStrategy.sol`
- `contracts/strategy/base/BaseMaster.sol`
- `contracts/strategy/base/BaseNode.sol`
- `contracts/strategy/base/BaseSplitter.sol`
- `contracts/strategy/base/BaseStrategy.sol`
- `contracts/strategy/compound/LibCompound.sol`
- `contracts/strategy/splitters/AlphaBetaEqualDepositMaxSplitter.sol`
- `contracts/strategy/splitters/AlphaBetaEqualDepositSplitter.sol`
- `contracts/strategy/splitters/AlphaBetaSplitter.sol`
**aave-v3-core**
- `contracts/dependencies/chainlink/AggregatorInterface.sol`
- `contracts/dependencies/gnosis/contracts/GPv2SafeERC20.sol`
- `contracts/dependencies/openzeppelin/contracts/AccessControl.sol`
- `contracts/dependencies/openzeppelin/contracts/Address.sol`
- `contracts/dependencies/openzeppelin/contracts/Context.sol`
- `contracts/dependencies/openzeppelin/contracts/ERC165.sol`
- `contracts/dependencies/openzeppelin/contracts/ERC20.sol`
- `contracts/dependencies/openzeppelin/contracts/IAccessControl.sol`
- `contracts/dependencies/openzeppelin/contracts/IERC165.sol`
- `contracts/dependencies/openzeppelin/contracts/IERC20.sol`
- `contracts/dependencies/openzeppelin/contracts/IERC20Detailed.sol`
- `contracts/dependencies/openzeppelin/contracts/Ownable.sol`
- `contracts/dependencies/openzeppelin/contracts/SafeCast.sol`
- `contracts/dependencies/openzeppelin/contracts/SafeMath.sol`
- `contracts/dependencies/openzeppelin/contracts/Strings.sol`
- `contracts/dependencies/openzeppelin/upgradeability/AdminUpgradeabilityProxy.sol`
- `contracts/dependencies/openzeppelin/upgradeability/BaseAdminUpgradeabilityProxy.sol`
- `contracts/dependencies/openzeppelin/upgradeability/BaseUpgradeabilityProxy.sol`
- `contracts/dependencies/openzeppelin/upgradeability/Initializable.sol`
- `contracts/dependencies/openzeppelin/upgradeability/InitializableAdminUpgradeabilityProxy.sol`
- `contracts/dependencies/openzeppelin/upgradeability/InitializableUpgradeabilityProxy.sol`
- `contracts/dependencies/openzeppelin/upgradeability/Proxy.sol`
- `contracts/dependencies/openzeppelin/upgradeability/UpgradeabilityProxy.sol`
- `contracts/dependencies/weth/WETH9.sol`
- `contracts/deployments/ReservesSetupHelper.sol`
- `contracts/flashloan/base/FlashLoanReceiverBase.sol`
- `contracts/flashloan/base/FlashLoanSimpleReceiverBase.sol`
- `contracts/flashloan/interfaces/IFlashLoanReceiver.sol`
- `contracts/flashloan/interfaces/IFlashLoanSimpleReceiver.sol`
- `contracts/interfaces/IACLManager.sol`
- `contracts/interfaces/IAToken.sol`
- `contracts/interfaces/IAaveIncentivesController.sol`
- `contracts/interfaces/IAaveOracle.sol`
- `contracts/interfaces/ICreditDelegationToken.sol`
- `contracts/interfaces/IDefaultInterestRateStrategy.sol`
- `contracts/interfaces/IDelegationToken.sol`
- `contracts/interfaces/IERC20WithPermit.sol`
- `contracts/interfaces/IInitializableAToken.sol`
- `contracts/interfaces/IInitializableDebtToken.sol`
- `contracts/interfaces/IL2Pool.sol`
- `contracts/interfaces/IPool.sol`
- `contracts/interfaces/IPoolAddressesProvider.sol`
- `contracts/interfaces/IPoolAddressesProviderRegistry.sol`
- `contracts/interfaces/IPoolConfigurator.sol`
- `contracts/interfaces/IPoolDataProvider.sol`
- `contracts/interfaces/IPriceOracle.sol`
- `contracts/interfaces/IPriceOracleGetter.sol`
- `contracts/interfaces/IPriceOracleSentinel.sol`
- `contracts/interfaces/IReserveInterestRateStrategy.sol`
- `contracts/interfaces/IScaledBalanceToken.sol`
- `contracts/interfaces/ISequencerOracle.sol`
- `contracts/interfaces/IStableDebtToken.sol`
- `contracts/interfaces/IVariableDebtToken.sol`
- `contracts/misc/AaveOracle.sol`
- `contracts/misc/AaveProtocolDataProvider.sol`
- `contracts/misc/L2Encoder.sol`
- `contracts/misc/interfaces/IWETH.sol`
- `contracts/mocks/flashloan/MockFlashLoanReceiver.sol`
- `contracts/mocks/flashloan/MockSimpleFlashLoanReceiver.sol`
- `contracts/mocks/helpers/MockIncentivesController.sol`
- `contracts/mocks/helpers/MockL2Pool.sol`
- `contracts/mocks/helpers/MockPeripheryContract.sol`
- `contracts/mocks/helpers/MockPool.sol`
- `contracts/mocks/helpers/MockReserveConfiguration.sol`
- `contracts/mocks/helpers/SelfDestructTransfer.sol`
- `contracts/mocks/oracle/CLAggregators/MockAggregator.sol`
- `contracts/mocks/oracle/PriceOracle.sol`
- `contracts/mocks/oracle/SequencerOracle.sol`
- `contracts/mocks/tests/FlashloanAttacker.sol`
- `contracts/mocks/tests/MockReserveInterestRateStrategy.sol`
- `contracts/mocks/tests/WadRayMathWrapper.sol`
- `contracts/mocks/tokens/MintableDelegationERC20.sol`
- `contracts/mocks/tokens/MintableERC20.sol`
- `contracts/mocks/tokens/MockATokenRepayment.sol`
- `contracts/mocks/tokens/WETH9Mocked.sol`
- `contracts/mocks/upgradeability/MockAToken.sol`
- `contracts/mocks/upgradeability/MockInitializableImplementation.sol`
- `contracts/mocks/upgradeability/MockStableDebtToken.sol`
- `contracts/mocks/upgradeability/MockVariableDebtToken.sol`
- `contracts/protocol/configuration/ACLManager.sol`
- `contracts/protocol/configuration/PoolAddressesProvider.sol`
- `contracts/protocol/configuration/PoolAddressesProviderRegistry.sol`
- `contracts/protocol/configuration/PriceOracleSentinel.sol`
- `contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol`
- `contracts/protocol/libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol`
- `contracts/protocol/libraries/aave-upgradeability/VersionedInitializable.sol`
- `contracts/protocol/libraries/configuration/ReserveConfiguration.sol`
- `contracts/protocol/libraries/configuration/UserConfiguration.sol`
- `contracts/protocol/libraries/helpers/Errors.sol`
- `contracts/protocol/libraries/helpers/Helpers.sol`
- `contracts/protocol/libraries/logic/BorrowLogic.sol`
- `contracts/protocol/libraries/logic/BridgeLogic.sol`
- `contracts/protocol/libraries/logic/CalldataLogic.sol`
- `contracts/protocol/libraries/logic/ConfiguratorLogic.sol`
- `contracts/protocol/libraries/logic/EModeLogic.sol`
- `contracts/protocol/libraries/logic/FlashLoanLogic.sol`
- `contracts/protocol/libraries/logic/GenericLogic.sol`
- `contracts/protocol/libraries/logic/IsolationModeLogic.sol`
- `contracts/protocol/libraries/logic/LiquidationLogic.sol`
- `contracts/protocol/libraries/logic/PoolLogic.sol`
- `contracts/protocol/libraries/logic/ReserveLogic.sol`
- `contracts/protocol/libraries/logic/SupplyLogic.sol`
- `contracts/protocol/libraries/logic/ValidationLogic.sol`
- `contracts/protocol/libraries/math/MathUtils.sol`
- `contracts/protocol/libraries/math/PercentageMath.sol`
- `contracts/protocol/libraries/math/WadRayMath.sol`
- `contracts/protocol/libraries/types/ConfiguratorInputTypes.sol`
- `contracts/protocol/libraries/types/DataTypes.sol`
- `contracts/protocol/pool/DefaultReserveInterestRateStrategy.sol`
- `contracts/protocol/pool/L2Pool.sol`
- `contracts/protocol/pool/Pool.sol`
- `contracts/protocol/pool/PoolConfigurator.sol`
- `contracts/protocol/pool/PoolStorage.sol`
- `contracts/protocol/tokenization/AToken.sol`
- `contracts/protocol/tokenization/DelegationAwareAToken.sol`
- `contracts/protocol/tokenization/StableDebtToken.sol`
- `contracts/protocol/tokenization/VariableDebtToken.sol`
- `contracts/protocol/tokenization/base/DebtTokenBase.sol`
- `contracts/protocol/tokenization/base/EIP712Base.sol`
- `contracts/protocol/tokenization/base/IncentivizedERC20.sol`
- `contracts/protocol/tokenization/base/MintableIncentivizedERC20.sol`
- `contracts/protocol/tokenization/base/ScaledBalanceTokenBase.sol`



**sherlock-v2-core**
- `contracts/SherBuy.sol`
- `contracts/SherClaim.sol`
- `contracts/Sherlock.sol`
- `contracts/interfaces/ISherClaim.sol`
- `contracts/interfaces/ISherlock.sol`
- `contracts/interfaces/ISherlockGov.sol`
- `contracts/interfaces/ISherlockPayout.sol`
- `contracts/interfaces/ISherlockStake.sol`
- `contracts/interfaces/ISherlockStrategy.sol`
- `contracts/interfaces/UMAprotocol/OptimisticOracleInterface.sol`
- `contracts/interfaces/UMAprotocol/OptimisticRequester.sol`
- `contracts/interfaces/UMAprotocol/SkinnyOptimisticOracleInterface.sol`
- `contracts/interfaces/aaveV2/DataTypes.sol`
- `contracts/interfaces/aaveV2/IAToken.sol`
- `contracts/interfaces/aaveV2/IAaveDistributionManager.sol`
- `contracts/interfaces/aaveV2/IAaveGovernanceV2.sol`
- `contracts/interfaces/aaveV2/IAaveIncentivesController.sol`
- `contracts/interfaces/aaveV2/IExecutorWithTimelock.sol`
- `contracts/interfaces/aaveV2/IGovernanceV2Helper.sol`
- `contracts/interfaces/aaveV2/ILendingPool.sol`
- `contracts/interfaces/aaveV2/ILendingPoolAddressesProvider.sol`
- `contracts/interfaces/aaveV2/IProposalValidator.sol`
- `contracts/interfaces/aaveV2/IStakeAave.sol`
- `contracts/interfaces/aaveV2/MockAave.sol`
- `contracts/interfaces/compound/ICToken.sol`
- `contracts/interfaces/compound/IComptroller.sol`
- `contracts/interfaces/compound/InterestRateModel.sol`
- `contracts/interfaces/euler/IEulerEToken.sol`
- `contracts/interfaces/managers/IManager.sol`
- `contracts/interfaces/managers/ISherDistributionManager.sol`
- `contracts/interfaces/managers/ISherlockClaimManager.sol`
- `contracts/interfaces/managers/ISherlockProtocolManager.sol`
- `contracts/interfaces/managers/IStrategyManager.sol`
- `contracts/interfaces/managers/callbacks/ISherlockClaimManagerCallbackReceiver.sol`
- `contracts/interfaces/maple/IMplRewards.sol`
- `contracts/interfaces/maple/IPool.sol`
- `contracts/interfaces/strategy/IERC4626.sol`
- `contracts/interfaces/strategy/INode.sol`
- `contracts/interfaces/strategy/IStrategy.sol`
- `contracts/interfaces/tempus/ITempusController.sol`
- `contracts/interfaces/truefi/ITrueFiPool2.sol`
- `contracts/interfaces/truefi/ITrueMultiFarm.sol`
- `contracts/managers/AaveV2Strategy.sol`
- `contracts/managers/Manager.sol`
- `contracts/managers/MasterStrategy.sol`
- `contracts/managers/SherDistributionManager.sol`
- `contracts/managers/SherDistributionManagerEmpty.sol`
- `contracts/managers/SherlockClaimManager.sol`
- `contracts/managers/SherlockProtocolManager.sol`
- `contracts/strategy/AaveStrategy.sol`
- `contracts/strategy/CompoundStrategy.sol`
- `contracts/strategy/EulerStrategy.sol`
- `contracts/strategy/MapleStrategy.sol`
- `contracts/strategy/TrueFiStrategy.sol`
- `contracts/strategy/base/BaseMaster.sol`
- `contracts/strategy/base/BaseNode.sol`
- `contracts/strategy/base/BaseSplitter.sol`
- `contracts/strategy/base/BaseStrategy.sol`
- `contracts/strategy/compound/LibCompound.sol`
- `contracts/strategy/splitters/AlphaBetaEqualDepositMaxSplitter.sol`
- `contracts/strategy/splitters/AlphaBetaEqualDepositSplitter.sol`
- `contracts/strategy/splitters/AlphaBetaSplitter.sol`



**sherlock-v2-core**
- `contracts/SherBuy.sol`
- `contracts/SherClaim.sol`
- `contracts/Sherlock.sol`
- `contracts/interfaces/ISherClaim.sol`
- `contracts/interfaces/ISherlock.sol`
- `contracts/interfaces/ISherlockGov.sol`
- `contracts/interfaces/ISherlockPayout.sol`
- `contracts/interfaces/ISherlockStake.sol`
- `contracts/interfaces/ISherlockStrategy.sol`
- `contracts/interfaces/UMAprotocol/OptimisticOracleInterface.sol`
- `contracts/interfaces/UMAprotocol/OptimisticRequester.sol`
- `contracts/interfaces/UMAprotocol/SkinnyOptimisticOracleInterface.sol`
- `contracts/interfaces/aaveV2/DataTypes.sol`
- `contracts/interfaces/aaveV2/IAToken.sol`
- `contracts/interfaces/aaveV2/IAaveDistributionManager.sol`
- `contracts/interfaces/aaveV2/IAaveGovernanceV2.sol`
- `contracts/interfaces/aaveV2/IAaveIncentivesController.sol`
- `contracts/interfaces/aaveV2/IExecutorWithTimelock.sol`
- `contracts/interfaces/aaveV2/IGovernanceV2Helper.sol`
- `contracts/interfaces/aaveV2/ILendingPool.sol`
- `contracts/interfaces/aaveV2/ILendingPoolAddressesProvider.sol`
- `contracts/interfaces/aaveV2/IProposalValidator.sol`
- `contracts/interfaces/aaveV2/IStakeAave.sol`
- `contracts/interfaces/aaveV2/MockAave.sol`
- `contracts/interfaces/compound/ICToken.sol`
- `contracts/interfaces/compound/IComptroller.sol`
- `contracts/interfaces/compound/InterestRateModel.sol`
- `contracts/interfaces/euler/IEulerEToken.sol`
- `contracts/interfaces/managers/IManager.sol`
- `contracts/interfaces/managers/ISherDistributionManager.sol`
- `contracts/interfaces/managers/ISherlockClaimManager.sol`
- `contracts/interfaces/managers/ISherlockProtocolManager.sol`
- `contracts/interfaces/managers/IStrategyManager.sol`
- `contracts/interfaces/managers/callbacks/ISherlockClaimManagerCallbackReceiver.sol`
- `contracts/interfaces/maple/IMplRewards.sol`
- `contracts/interfaces/maple/IPool.sol`
- `contracts/interfaces/strategy/IERC4626.sol`
- `contracts/interfaces/strategy/INode.sol`
- `contracts/interfaces/strategy/IStrategy.sol`
- `contracts/interfaces/tempus/ITempusController.sol`
- `contracts/interfaces/truefi/ITrueFiPool2.sol`
- `contracts/interfaces/truefi/ITrueMultiFarm.sol`
- `contracts/managers/AaveV2Strategy.sol`
- `contracts/managers/Manager.sol`
- `contracts/managers/MasterStrategy.sol`
- `contracts/managers/SherDistributionManager.sol`
- `contracts/managers/SherDistributionManagerEmpty.sol`
- `contracts/managers/SherlockClaimManager.sol`
- `contracts/managers/SherlockProtocolManager.sol`
- `contracts/strategy/AaveStrategy.sol`
- `contracts/strategy/CompoundStrategy.sol`
- `contracts/strategy/EulerStrategy.sol`
- `contracts/strategy/MapleStrategy.sol`
- `contracts/strategy/TrueFiStrategy.sol`
- `contracts/strategy/base/BaseMaster.sol`
- `contracts/strategy/base/BaseNode.sol`
- `contracts/strategy/base/BaseSplitter.sol`
- `contracts/strategy/base/BaseStrategy.sol`
- `contracts/strategy/compound/LibCompound.sol`
- `contracts/strategy/splitters/AlphaBetaEqualDepositMaxSplitter.sol`
- `contracts/strategy/splitters/AlphaBetaEqualDepositSplitter.sol`
- `contracts/strategy/splitters/AlphaBetaSplitter.sol`



**sherlock-v2-core**
- `contracts/SherBuy.sol`
- `contracts/SherClaim.sol`
- `contracts/Sherlock.sol`
- `contracts/interfaces/ISherClaim.sol`
- `contracts/interfaces/ISherlock.sol`
- `contracts/interfaces/ISherlockGov.sol`
- `contracts/interfaces/ISherlockPayout.sol`
- `contracts/interfaces/ISherlockStake.sol`
- `contracts/interfaces/ISherlockStrategy.sol`
- `contracts/interfaces/UMAprotocol/OptimisticOracleInterface.sol`
- `contracts/interfaces/UMAprotocol/OptimisticRequester.sol`
- `contracts/interfaces/UMAprotocol/SkinnyOptimisticOracleInterface.sol`
- `contracts/interfaces/aaveV2/DataTypes.sol`
- `contracts/interfaces/aaveV2/IAToken.sol`
- `contracts/interfaces/aaveV2/IAaveDistributionManager.sol`
- `contracts/interfaces/aaveV2/IAaveGovernanceV2.sol`
- `contracts/interfaces/aaveV2/IAaveIncentivesController.sol`
- `contracts/interfaces/aaveV2/IExecutorWithTimelock.sol`
- `contracts/interfaces/aaveV2/IGovernanceV2Helper.sol`
- `contracts/interfaces/aaveV2/ILendingPool.sol`
- `contracts/interfaces/aaveV2/ILendingPoolAddressesProvider.sol`
- `contracts/interfaces/aaveV2/IProposalValidator.sol`
- `contracts/interfaces/aaveV2/IStakeAave.sol`
- `contracts/interfaces/aaveV2/MockAave.sol`
- `contracts/interfaces/compound/ICToken.sol`
- `contracts/interfaces/compound/IComptroller.sol`
- `contracts/interfaces/compound/InterestRateModel.sol`
- `contracts/interfaces/euler/IEulerEToken.sol`
- `contracts/interfaces/managers/IManager.sol`
- `contracts/interfaces/managers/ISherDistributionManager.sol`
- `contracts/interfaces/managers/ISherlockClaimManager.sol`
- `contracts/interfaces/managers/ISherlockProtocolManager.sol`
- `contracts/interfaces/managers/IStrategyManager.sol`
- `contracts/interfaces/managers/callbacks/ISherlockClaimManagerCallbackReceiver.sol`
- `contracts/interfaces/maple/IMplRewards.sol`
- `contracts/interfaces/maple/IPool.sol`
- `contracts/interfaces/strategy/IERC4626.sol`
- `contracts/interfaces/strategy/INode.sol`
- `contracts/interfaces/strategy/IStrategy.sol`
- `contracts/interfaces/tempus/ITempusController.sol`
- `contracts/interfaces/truefi/ITrueFiPool2.sol`
- `contracts/interfaces/truefi/ITrueMultiFarm.sol`
- `contracts/managers/AaveV2Strategy.sol`
- `contracts/managers/Manager.sol`
- `contracts/managers/MasterStrategy.sol`
- `contracts/managers/SherDistributionManager.sol`
- `contracts/managers/SherDistributionManagerEmpty.sol`
- `contracts/managers/SherlockClaimManager.sol`
- `contracts/managers/SherlockProtocolManager.sol`
- `contracts/strategy/AaveStrategy.sol`
- `contracts/strategy/CompoundStrategy.sol`
- `contracts/strategy/EulerStrategy.sol`
- `contracts/strategy/MapleStrategy.sol`
- `contracts/strategy/TrueFiStrategy.sol`
- `contracts/strategy/base/BaseMaster.sol`
- `contracts/strategy/base/BaseNode.sol`
- `contracts/strategy/base/BaseSplitter.sol`
- `contracts/strategy/base/BaseStrategy.sol`
- `contracts/strategy/compound/LibCompound.sol`
- `contracts/strategy/splitters/AlphaBetaEqualDepositMaxSplitter.sol`
- `contracts/strategy/splitters/AlphaBetaEqualDepositSplitter.sol`
- `contracts/strategy/splitters/AlphaBetaSplitter.sol`



**aave-v3-core**
- `contracts/misc/AaveOracle.sol`
- `contracts/misc/AaveProtocolDataProvider.sol`
- `contracts/misc/L2Encoder.sol`
- `contracts/misc/interfaces/IWETH.sol`
- `contracts/mocks/flashloan/MockFlashLoanReceiver.sol`
- `contracts/mocks/flashloan/MockSimpleFlashLoanReceiver.sol`
- `contracts/mocks/helpers/MockIncentivesController.sol`
- `contracts/mocks/helpers/MockL2Pool.sol`
- `contracts/mocks/helpers/MockPeripheryContract.sol`
- `contracts/mocks/helpers/MockPool.sol`
- `contracts/mocks/helpers/MockReserveConfiguration.sol`
- `contracts/mocks/helpers/SelfDestructTransfer.sol`
- `contracts/mocks/oracle/CLAggregators/MockAggregator.sol`
- `contracts/mocks/oracle/PriceOracle.sol`
- `contracts/mocks/oracle/SequencerOracle.sol`
- `contracts/mocks/tests/FlashloanAttacker.sol`
- `contracts/mocks/tests/MockReserveInterestRateStrategy.sol`
- `contracts/mocks/tests/WadRayMathWrapper.sol`
- `contracts/mocks/tokens/MintableDelegationERC20.sol`
- `contracts/mocks/tokens/MintableERC20.sol`
- `contracts/mocks/tokens/MockATokenRepayment.sol`
- `contracts/mocks/tokens/WETH9Mocked.sol`
- `contracts/mocks/upgradeability/MockAToken.sol`
- `contracts/mocks/upgradeability/MockInitializableImplementation.sol`
- `contracts/mocks/upgradeability/MockStableDebtToken.sol`
- `contracts/mocks/upgradeability/MockVariableDebtToken.sol`
- `contracts/protocol/configuration/ACLManager.sol`
- `contracts/protocol/configuration/PoolAddressesProvider.sol`
- `contracts/protocol/configuration/PoolAddressesProviderRegistry.sol`
- `contracts/protocol/configuration/PriceOracleSentinel.sol`
- `contracts/protocol/libraries/aave-upgradeability/BaseImmutableAdminUpgradeabilityProxy.sol`
- `contracts/protocol/libraries/aave-upgradeability/InitializableImmutableAdminUpgradeabilityProxy.sol`
- `contracts/protocol/libraries/aave-upgradeability/VersionedInitializable.sol`
- `contracts/protocol/libraries/configuration/ReserveConfiguration.sol`
- `contracts/protocol/libraries/configuration/UserConfiguration.sol`
- `contracts/protocol/libraries/helpers/Errors.sol`
- `contracts/protocol/libraries/helpers/Helpers.sol`
- `contracts/protocol/libraries/logic/BorrowLogic.sol`
- `contracts/protocol/libraries/logic/BridgeLogic.sol`
- `contracts/protocol/libraries/logic/CalldataLogic.sol`
- `contracts/protocol/libraries/logic/ConfiguratorLogic.sol`
- `contracts/protocol/libraries/logic/EModeLogic.sol`
- `contracts/protocol/libraries/logic/FlashLoanLogic.sol`
- `contracts/protocol/libraries/logic/GenericLogic.sol`
- `contracts/protocol/libraries/logic/IsolationModeLogic.sol`
- `contracts/protocol/libraries/logic/LiquidationLogic.sol`
- `contracts/protocol/libraries/logic/PoolLogic.sol`
- `contracts/protocol/libraries/logic/ReserveLogic.sol`
- `contracts/protocol/libraries/logic/SupplyLogic.sol`
- `contracts/protocol/libraries/logic/ValidationLogic.sol`
- `contracts/protocol/libraries/math/MathUtils.sol`
- `contracts/protocol/libraries/math/PercentageMath.sol`
- `contracts/protocol/libraries/math/WadRayMath.sol`
- `contracts/protocol/libraries/types/ConfiguratorInputTypes.sol`
- `contracts/protocol/libraries/types/DataTypes.sol`
- `contracts/protocol/pool/DefaultReserveInterestRateStrategy.sol`
- `contracts/protocol/pool/L2Pool.sol`
- `contracts/protocol/pool/Pool.sol`
- `contracts/protocol/pool/PoolConfigurator.sol`
- `contracts/protocol/pool/PoolStorage.sol`
- `contracts/protocol/tokenization/AToken.sol`
- `contracts/protocol/tokenization/DelegationAwareAToken.sol`
- `contracts/protocol/tokenization/StableDebtToken.sol`
- `contracts/protocol/tokenization/VariableDebtToken.sol`
- `contracts/protocol/tokenization/base/DebtTokenBase.sol`
- `contracts/protocol/tokenization/base/EIP712Base.sol`
- `contracts/protocol/tokenization/base/IncentivizedERC20.sol`
- `contracts/protocol/tokenization/base/MintableIncentivizedERC20.sol`
- `contracts/protocol/tokenization/base/ScaledBalanceTokenBase.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**2022-12-aave**
- `contract.sol`



**sherlock-v2-core**
- `contracts/SherBuy.sol`
- `contracts/SherClaim.sol`
- `contracts/Sherlock.sol`
- `contracts/interfaces/ISherClaim.sol`
- `contracts/interfaces/ISherlock.sol`
- `contracts/interfaces/ISherlockGov.sol`
- `contracts/interfaces/ISherlockPayout.sol`
- `contracts/interfaces/ISherlockStrategy.sol`



**sherlock-v2-core**
- `contracts/SherBuy.sol`
- `contracts/SherClaim.sol`
- `contracts/Sherlock.sol`
- `contracts/interfaces/ISherClaim.sol`
- `contracts/interfaces/ISherlock.sol`
- `contracts/interfaces/ISherlockGov.sol`
- `contracts/interfaces/ISherlockPayout.sol`
- `contracts/interfaces/ISherlockStrategy.sol`



**sherlock-v2-core**
- `contracts/SherBuy.sol`
- `contracts/SherClaim.sol`
- `contracts/Sherlock.sol`
- `contracts/interfaces/ISherClaim.sol`
- `contracts/interfaces/ISherlock.sol`
- `contracts/interfaces/ISherlockGov.sol`
- `contracts/interfaces/ISherlockPayout.sol`
- `contracts/interfaces/ISherlockStrategy.sol`



**sherlock-v2-core**
- `contracts/SherBuy.sol`
- `contracts/SherClaim.sol`
- `contracts/Sherlock.sol`
- `contracts/interfaces/ISherClaim.sol`
- `contracts/interfaces/ISherlock.sol`
- `contracts/interfaces/ISherlockGov.sol`
- `contracts/interfaces/ISherlockPayout.sol`
- `contracts/interfaces/ISherlockStrategy.sol`



**sherlock-v2-core**
- `contracts/SherBuy.sol`
- `contracts/SherClaim.sol`
- `contracts/Sherlock.sol`
- `contracts/interfaces/ISherClaim.sol`
- `contracts/interfaces/ISherlock.sol`
- `contracts/interfaces/ISherlockGov.sol`
- `contracts/interfaces/ISherlockPayout.sol`
- `contracts/interfaces/ISherlockStrategy.sol`



**sherlock-v2-core**
- `contracts/SherBuy.sol`
- `contracts/SherClaim.sol`
- `contracts/Sherlock.sol`
- `contracts/interfaces/ISherClaim.sol`
- `contracts/interfaces/ISherlock.sol`
- `contracts/interfaces/ISherlockGov.sol`
- `contracts/interfaces/ISherlockPayout.sol`
- `contracts/interfaces/ISherlockStrategy.sol`


# About {project}
