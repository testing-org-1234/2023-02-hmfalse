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
