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
