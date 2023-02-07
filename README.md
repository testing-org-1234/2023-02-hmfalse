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


**sherlock-v1-core**
**sherlock-v2-core**
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
- `contracts/SherBuy.sol`
- `contracts/SherClaim.sol`
- `contracts/Sherlock.sol`



# About {project}
