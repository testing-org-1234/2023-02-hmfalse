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



# About {project}
