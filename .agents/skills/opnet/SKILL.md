---
name: opnet
description: >
  Build on OPNet, the Bitcoin L1 consensus layer enabling smart contracts directly on Bitcoin.
  Use this skill when the user asks about OPNet development, including: (1) Writing or auditing
  OPNet smart contracts in AssemblyScript using @btc-vision/btc-runtime, (2) Building client
  applications that interact with OPNet contracts using the opnet npm package, (3) Building or
  signing Bitcoin transactions for OPNet using @btc-vision/transaction, (4) Working with OP20
  tokens, OP721 NFTs, MotoSwap DEX, stablecoins, or any OPNet contract standard, (5) Understanding
  OPNet architecture, epochs, consensus, storage, pointers, ABIs, providers, UTXO management,
  quantum-resistant cryptography (ML-DSA), or contract deployment. Triggers on mentions of OPNet,
  OP_NET, btc-runtime, btc-vision, OP20, OP721, OP20S, MotoSwap, P2OP addresses, or any OPNet
  package names.
---

# OPNet Development Skill

## Critical Architecture Facts

OPNet is a Bitcoin L1 consensus layer (not a metaprotocol) that enables smart contracts directly on Bitcoin using WebAssembly. It does not have a gas token; it uses bitcoin directly. Contracts are non-custodial: they never hold BTC, cannot receive `blockchain.tx.value`, and cannot send `blockchain.transfer()`. All financial logic follows a "verify, don't custody" pattern where the contract verifies the user's L1 transaction outputs against internal state.

OPNet does NOT use OP_RETURN. OPNet embeds transaction data in SegWit witness fields using P2WDA (Pay-to-Witness-Data-Authentication), which exploits the witness discount where witness bytes weigh 1 unit instead of 4. This makes OPNet data embedding ~75% cheaper than OP_RETURN. Some reference files discuss OP_RETURN in the context of raw Bitcoin script opcodes that contracts can construct, but that is a general Bitcoin scripting capability, not OPNet's data embedding mechanism. Never describe OPNet as using OP_RETURN for its consensus layer or transaction data.

Transactions containing BTC on OPNet can partially revert: only the consensus-layer execution reverts, while Bitcoin transfers remain valid since they are always valid when included in blocks. OPNet is fully trustless, permissionless, and decentralized, relying on Bitcoin PoW and OPNet epoch SHA-1 mining. After 20 blocks an epoch is buried deep enough that changing it requires rewriting Bitcoin's history at millions of dollars per hour. The checksum root for each epoch is a cryptographic fingerprint of the entire state; if even one bit differs, the checksum completely changes, making silent state corruption impossible.

## Packages

Install specific versions for compatibility:

```bash
npm i @btc-vision/transaction@1.8.0-beta.9 opnet@1.8.1-beta.6 @btc-vision/ecpair@4.0.2 @btc-vision/bip32@7.0.2 @btc-vision/bitcoin@7.0.0-alpha.10
```

For smart contract development (AssemblyScript, compiles to WASM):
```bash
npm i @btc-vision/btc-runtime
```

TypeScript target must be ES2025. Node.js >= 22.0.0. All amounts are `bigint`.

## Reference Documentation

Read the appropriate reference file(s) based on the task. All references are in `references/` relative to this file. Every file is a 1:1 copy from official packages with nothing omitted.

### MANDATORY: Read Before Writing Any Code

| When | Reference File |
|------|----------------|
| Writing or auditing ANY OPNet contract | [example-contracts.md](references/example-contracts.md) — Complete production source code for OP20, OP721, stablecoin, pegged WBTC, multi-oracle stablecoin, BTC name resolver, package registry, all events, constants, asconfig.json, package.json |
| Writing ANY TypeScript code | [typescript-law.md](references/typescript-law.md) — TypeScript Law 2026: strict type system, forbidden types, defensive programming, error handling, class design, async patterns, security, BigInt for financials |

---

### Runtime: Getting Started (@btc-vision/btc-runtime)

| Topic | Reference File |
|-------|----------------|
| Runtime docs index | [runtime-README.md](references/runtime-README.md) |
| Installation | [runtime-getting-started-installation.md](references/runtime-getting-started-installation.md) |
| Project structure | [runtime-getting-started-project-structure.md](references/runtime-getting-started-project-structure.md) |
| First contract | [runtime-getting-started-first-contract.md](references/runtime-getting-started-first-contract.md) |

### Runtime: Core Concepts

| Topic | Reference File |
|-------|----------------|
| Blockchain environment | [runtime-core-concepts-blockchain-environment.md](references/runtime-core-concepts-blockchain-environment.md) |
| Storage system | [runtime-core-concepts-storage-system.md](references/runtime-core-concepts-storage-system.md) |
| Pointers | [runtime-core-concepts-pointers.md](references/runtime-core-concepts-pointers.md) |
| Events | [runtime-core-concepts-events.md](references/runtime-core-concepts-events.md) |
| Decorators | [runtime-core-concepts-decorators.md](references/runtime-core-concepts-decorators.md) |
| Security | [runtime-core-concepts-security.md](references/runtime-core-concepts-security.md) |

### Runtime: Contracts

| Topic | Reference File |
|-------|----------------|
| OPNet base contract | [runtime-contracts-op-net-base.md](references/runtime-contracts-op-net-base.md) |
| OP20 token contract | [runtime-contracts-op20-token.md](references/runtime-contracts-op20-token.md) |
| OP20S signatures contract | [runtime-contracts-op20s-signatures.md](references/runtime-contracts-op20s-signatures.md) |
| OP721 NFT contract | [runtime-contracts-op721-nft.md](references/runtime-contracts-op721-nft.md) |
| Reentrancy guard | [runtime-contracts-reentrancy-guard.md](references/runtime-contracts-reentrancy-guard.md) |

### Runtime: Storage

| Topic | Reference File |
|-------|----------------|
| Stored primitives (StoredU256, StoredBoolean, etc.) | [runtime-storage-stored-primitives.md](references/runtime-storage-stored-primitives.md) |
| Stored maps (AddressMap, StoredMap) | [runtime-storage-stored-maps.md](references/runtime-storage-stored-maps.md) |
| Stored arrays (StoredArray) | [runtime-storage-stored-arrays.md](references/runtime-storage-stored-arrays.md) |
| Memory maps (MemoryMap) | [runtime-storage-memory-maps.md](references/runtime-storage-memory-maps.md) |

### Runtime: Types

| Topic | Reference File |
|-------|----------------|
| Address type | [runtime-types-address.md](references/runtime-types-address.md) |
| BytesWriter and BytesReader | [runtime-types-bytes-writer-reader.md](references/runtime-types-bytes-writer-reader.md) |
| Calldata | [runtime-types-calldata.md](references/runtime-types-calldata.md) |
| SafeMath | [runtime-types-safe-math.md](references/runtime-types-safe-math.md) |

### Runtime: API Reference

| Topic | Reference File |
|-------|----------------|
| Blockchain API (tx, block, contract, environment) | [runtime-api-reference-blockchain.md](references/runtime-api-reference-blockchain.md) |
| Events API | [runtime-api-reference-events.md](references/runtime-api-reference-events.md) |
| OP20 API | [runtime-api-reference-op20.md](references/runtime-api-reference-op20.md) |
| OP721 API | [runtime-api-reference-op721.md](references/runtime-api-reference-op721.md) |
| SafeMath API | [runtime-api-reference-safe-math.md](references/runtime-api-reference-safe-math.md) |
| Storage API | [runtime-api-reference-storage.md](references/runtime-api-reference-storage.md) |

### Runtime: Advanced

| Topic | Reference File |
|-------|----------------|
| Bitcoin scripts | [runtime-advanced-bitcoin-scripts.md](references/runtime-advanced-bitcoin-scripts.md) |
| Cross-contract calls | [runtime-advanced-cross-contract-calls.md](references/runtime-advanced-cross-contract-calls.md) |
| Plugins | [runtime-advanced-plugins.md](references/runtime-advanced-plugins.md) |
| Quantum resistance | [runtime-advanced-quantum-resistance.md](references/runtime-advanced-quantum-resistance.md) |
| Signature verification | [runtime-advanced-signature-verification.md](references/runtime-advanced-signature-verification.md) |

### Runtime: Examples

| Topic | Reference File |
|-------|----------------|
| Basic token | [runtime-examples-basic-token.md](references/runtime-examples-basic-token.md) |
| NFT with reservations | [runtime-examples-nft-with-reservations.md](references/runtime-examples-nft-with-reservations.md) |
| Stablecoin | [runtime-examples-stablecoin.md](references/runtime-examples-stablecoin.md) |
| Oracle integration | [runtime-examples-oracle-integration.md](references/runtime-examples-oracle-integration.md) |

---

### Client: Getting Started (opnet package)

| Topic | Reference File |
|-------|----------------|
| Client docs index | [client-README.md](references/client-README.md) |
| Getting started overview | [client-getting-started-overview.md](references/client-getting-started-overview.md) |
| Installation | [client-getting-started-installation.md](references/client-getting-started-installation.md) |
| Quick start guide | [client-getting-started-quick-start.md](references/client-getting-started-quick-start.md) |

### Client: Providers

| Topic | Reference File |
|-------|----------------|
| Understanding providers | [client-providers-understanding-providers.md](references/client-providers-understanding-providers.md) |
| JSON-RPC provider | [client-providers-json-rpc-provider.md](references/client-providers-json-rpc-provider.md) |
| WebSocket provider | [client-providers-websocket-provider.md](references/client-providers-websocket-provider.md) |
| Threaded HTTP | [client-providers-threaded-http.md](references/client-providers-threaded-http.md) |
| Internal caching | [client-providers-internal-caching.md](references/client-providers-internal-caching.md) |
| Advanced configuration | [client-providers-advanced-configuration.md](references/client-providers-advanced-configuration.md) |

### Client: Contract Interactions

| Topic | Reference File |
|-------|----------------|
| Contracts overview | [client-contracts-overview.md](references/client-contracts-overview.md) |
| Instantiating contracts | [client-contracts-instantiating-contracts.md](references/client-contracts-instantiating-contracts.md) |
| Simulating calls | [client-contracts-simulating-calls.md](references/client-contracts-simulating-calls.md) |
| Sending transactions | [client-contracts-sending-transactions.md](references/client-contracts-sending-transactions.md) |
| Transaction configuration | [client-contracts-transaction-configuration.md](references/client-contracts-transaction-configuration.md) |
| Gas estimation | [client-contracts-gas-estimation.md](references/client-contracts-gas-estimation.md) |
| Offline signing | [client-contracts-offline-signing.md](references/client-contracts-offline-signing.md) |
| Contract code | [client-contracts-contract-code.md](references/client-contracts-contract-code.md) |

### Client: ABI Reference

| Topic | Reference File |
|-------|----------------|
| ABI overview | [client-abi-reference-abi-overview.md](references/client-abi-reference-abi-overview.md) |
| Data types | [client-abi-reference-data-types.md](references/client-abi-reference-data-types.md) |
| Custom ABIs | [client-abi-reference-custom-abis.md](references/client-abi-reference-custom-abis.md) |
| OP20 ABI | [client-abi-reference-op20-abi.md](references/client-abi-reference-op20-abi.md) |
| OP20S ABI (signatures) | [client-abi-reference-op20s-abi.md](references/client-abi-reference-op20s-abi.md) |
| OP721 ABI | [client-abi-reference-op721-abi.md](references/client-abi-reference-op721-abi.md) |
| Stablecoin ABIs | [client-abi-reference-stablecoin-abis.md](references/client-abi-reference-stablecoin-abis.md) |
| Factory ABIs | [client-abi-reference-factory-abis.md](references/client-abi-reference-factory-abis.md) |
| MotoSwap ABIs | [client-abi-reference-motoswap-abis.md](references/client-abi-reference-motoswap-abis.md) |

### Client: Bitcoin Operations

| Topic | Reference File |
|-------|----------------|
| Balances | [client-bitcoin-balances.md](references/client-bitcoin-balances.md) |
| UTXOs | [client-bitcoin-utxos.md](references/client-bitcoin-utxos.md) |
| Sending bitcoin | [client-bitcoin-sending-bitcoin.md](references/client-bitcoin-sending-bitcoin.md) |
| UTXO optimization | [client-bitcoin-utxo-optimization.md](references/client-bitcoin-utxo-optimization.md) |

### Client: Blocks

| Topic | Reference File |
|-------|----------------|
| Block operations | [client-blocks-block-operations.md](references/client-blocks-block-operations.md) |
| Gas parameters | [client-blocks-gas-parameters.md](references/client-blocks-gas-parameters.md) |
| Block witnesses | [client-blocks-block-witnesses.md](references/client-blocks-block-witnesses.md) |
| Reorg detection | [client-blocks-reorg-detection.md](references/client-blocks-reorg-detection.md) |

### Client: Epochs

| Topic | Reference File |
|-------|----------------|
| Epochs overview | [client-epochs-overview.md](references/client-epochs-overview.md) |
| Epoch operations | [client-epochs-epoch-operations.md](references/client-epochs-epoch-operations.md) |
| Mining template | [client-epochs-mining-template.md](references/client-epochs-mining-template.md) |
| Submitting epochs | [client-epochs-submitting-epochs.md](references/client-epochs-submitting-epochs.md) |

### Client: Storage, Transactions, Public Keys, Utils

| Topic | Reference File |
|-------|----------------|
| Storage operations | [client-storage-storage-operations.md](references/client-storage-storage-operations.md) |
| Fetching transactions | [client-transactions-fetching-transactions.md](references/client-transactions-fetching-transactions.md) |
| Transaction receipts | [client-transactions-transaction-receipts.md](references/client-transactions-transaction-receipts.md) |
| Broadcasting | [client-transactions-broadcasting.md](references/client-transactions-broadcasting.md) |
| Challenges | [client-transactions-challenges.md](references/client-transactions-challenges.md) |
| Public key operations | [client-public-keys-public-key-operations.md](references/client-public-keys-public-key-operations.md) |
| Binary serialization | [client-utils-binary-serialization.md](references/client-utils-binary-serialization.md) |
| Bitcoin utils | [client-utils-bitcoin-utils.md](references/client-utils-bitcoin-utils.md) |
| Revert decoder | [client-utils-revert-decoder.md](references/client-utils-revert-decoder.md) |

### Client: Examples

| Topic | Reference File |
|-------|----------------|
| OP20 examples (transfers, balances) | [client-examples-op20-examples.md](references/client-examples-op20-examples.md) |
| OP721 examples (NFTs) | [client-examples-op721-examples.md](references/client-examples-op721-examples.md) |
| Advanced swaps (MotoSwap) | [client-examples-advanced-swaps.md](references/client-examples-advanced-swaps.md) |
| Deployment examples | [client-examples-deployment-examples.md](references/client-examples-deployment-examples.md) |

### Client: API Reference

| Topic | Reference File |
|-------|----------------|
| Provider API | [client-api-reference-provider-api.md](references/client-api-reference-provider-api.md) |
| Contract API | [client-api-reference-contract-api.md](references/client-api-reference-contract-api.md) |
| Epoch API | [client-api-reference-epoch-api.md](references/client-api-reference-epoch-api.md) |
| Types and interfaces | [client-api-reference-types-interfaces.md](references/client-api-reference-types-interfaces.md) |
| UTXO Manager API | [client-api-reference-utxo-manager-api.md](references/client-api-reference-utxo-manager-api.md) |

---

### Transaction Building (@btc-vision/transaction)

| Topic | Reference File |
|-------|----------------|
| Transaction docs index | [transaction-README.md](references/transaction-README.md) |
| Transaction building (TransactionFactory, UTXO flow, fees, signing) | [transaction-transaction-building.md](references/transaction-transaction-building.md) |
| Offline transaction signing | [transaction-offline-transaction-signing.md](references/transaction-offline-transaction-signing.md) |
| P2OP addresses | [transaction-addresses-P2OP.md](references/transaction-addresses-P2OP.md) |
| P2WDA addresses | [transaction-addresses-P2WDA.md](references/transaction-addresses-P2WDA.md) |

### Transaction: Quantum Support (ML-DSA)

| Topic | Reference File |
|-------|----------------|
| Quantum support overview | [transaction-quantum-support-README.md](references/transaction-quantum-support-README.md) |
| Introduction to quantum resistance | [transaction-quantum-support-01-introduction.md](references/transaction-quantum-support-01-introduction.md) |
| Mnemonic and wallet | [transaction-quantum-support-02-mnemonic-and-wallet.md](references/transaction-quantum-support-02-mnemonic-and-wallet.md) |
| Address generation | [transaction-quantum-support-03-address-generation.md](references/transaction-quantum-support-03-address-generation.md) |
| Message signing | [transaction-quantum-support-04-message-signing.md](references/transaction-quantum-support-04-message-signing.md) |
| Address verification | [transaction-quantum-support-05-address-verification.md](references/transaction-quantum-support-05-address-verification.md) |

---

### Package READMEs

| Package | Reference File |
|---------|----------------|
| opnet (client SDK) | [opnet-README.md](references/opnet-README.md) |
| @btc-vision/btc-runtime (smart contract runtime) | [btc-vision-btc-runtime-README.md](references/btc-vision-btc-runtime-README.md) |
| @btc-vision/transaction | [btc-vision-transaction-README.md](references/btc-vision-transaction-README.md) |
| @btc-vision/bitcoin (fork of bitcoinjs-lib) | [btc-vision-bitcoin-README.md](references/btc-vision-bitcoin-README.md) |
| @btc-vision/ecpair | [btc-vision-ecpair-README.md](references/btc-vision-ecpair-README.md) |
| @btc-vision/bip32 | [btc-vision-bip32-README.md](references/btc-vision-bip32-README.md) |
| @btc-vision/post-quantum (ML-DSA) | [btc-vision-post-quantum-README.md](references/btc-vision-post-quantum-README.md) |
| @btc-vision/bsi-common | [btc-vision-bsi-common-README.md](references/btc-vision-bsi-common-README.md) |
| @btc-vision/bitcoin-rpc | [btc-vision-bitcoin-rpc-README.md](references/btc-vision-bitcoin-rpc-README.md) |
| @btc-vision/logger | [btc-vision-logger-README.md](references/btc-vision-logger-README.md) |

### Additional Package Documentation

| Document | Reference File |
|----------|----------------|
| @btc-vision/bitcoin coding standards | [btc-vision-bitcoin-HOW_TO_WRITE_GOOD_CODE.md](references/btc-vision-bitcoin-HOW_TO_WRITE_GOOD_CODE.md) |
| @btc-vision/btc-runtime SECURITY | [btc-vision-btc-runtime-SECURITY.md](references/btc-vision-btc-runtime-SECURITY.md) |
| @btc-vision/bitcoin SECURITY | [btc-vision-bitcoin-SECURITY.md](references/btc-vision-bitcoin-SECURITY.md) |
| @btc-vision/bitcoin CHANGELOG | [btc-vision-bitcoin-CHANGELOG.md](references/btc-vision-bitcoin-CHANGELOG.md) |
| @btc-vision/bitcoin CONTRIBUTING | [btc-vision-bitcoin-CONTRIBUTING.md](references/btc-vision-bitcoin-CONTRIBUTING.md) |
| @btc-vision/bitcoin AUDIT | [btc-vision-bitcoin-AUDIT.md](references/btc-vision-bitcoin-AUDIT.md) |
| @btc-vision/transaction SECURITY | [btc-vision-transaction-SECURITY.md](references/btc-vision-transaction-SECURITY.md) |
| @btc-vision/transaction CHANGELOG | [btc-vision-transaction-CHANGELOG.md](references/btc-vision-transaction-CHANGELOG.md) |
| @btc-vision/transaction CONTRIBUTING | [btc-vision-transaction-CONTRIBUTING.md](references/btc-vision-transaction-CONTRIBUTING.md) |
| @btc-vision/transaction AUDIT | [btc-vision-transaction-AUDIT.md](references/btc-vision-transaction-AUDIT.md) |
| opnet SECURITY | [opnet-SECURITY.md](references/opnet-SECURITY.md) |
| opnet CHANGELOG | [opnet-CHANGELOG.md](references/opnet-CHANGELOG.md) |
| opnet CONTRIBUTING | [opnet-CONTRIBUTING.md](references/opnet-CONTRIBUTING.md) |
| opnet bug report template | [opnet-github-bug-report.md](references/opnet-github-bug-report.md) |
| opnet feature request template | [opnet-github-feature-request.md](references/opnet-github-feature-request.md) |
| opnet PR template | [opnet-github-pull-request-template.md](references/opnet-github-pull-request-template.md) |
| @btc-vision/bitcoin test fixtures | [btc-vision-bitcoin-test-fixtures.md](references/btc-vision-bitcoin-test-fixtures.md) |
| @btc-vision/bsi-common LICENSE | [btc-vision-bsi-common-LICENSE.md](references/btc-vision-bsi-common-LICENSE.md) |
| @btc-vision/bitcoin-rpc LICENSE | [btc-vision-bitcoin-rpc-LICENSE.md](references/btc-vision-bitcoin-rpc-LICENSE.md) |
| @btc-vision/logger CONTRIBUTING | [btc-vision-logger-CONTRIBUTING.md](references/btc-vision-logger-CONTRIBUTING.md) |
| @btc-vision/logger LICENSE | [btc-vision-logger-LICENSE.md](references/btc-vision-logger-LICENSE.md) |

### TypeScript Configurations

| Package | Reference File |
|---------|----------------|
| @btc-vision/bitcoin tsconfig | [btc-vision-bitcoin-tsconfig.md](references/btc-vision-bitcoin-tsconfig.md) |
| @btc-vision/transaction tsconfig | [btc-vision-transaction-tsconfig.md](references/btc-vision-transaction-tsconfig.md) |
| @btc-vision/bitcoin-rpc tsconfig | [btc-vision-bitcoin-rpc-tsconfig.md](references/btc-vision-bitcoin-rpc-tsconfig.md) |
| @btc-vision/bsi-common tsconfig | [btc-vision-bsi-common-tsconfig.md](references/btc-vision-bsi-common-tsconfig.md) |
| @btc-vision/logger tsconfig | [btc-vision-logger-tsconfig.md](references/btc-vision-logger-tsconfig.md) |
| opnet tsconfig | [opnet-tsconfig.md](references/opnet-tsconfig.md) |

## Key Patterns

### Client: Read a token balance

```typescript
import { getContract, IOP20Contract, JSONRpcProvider, OP_20_ABI } from 'opnet';
import { Address } from '@btc-vision/transaction';
import { networks } from '@btc-vision/bitcoin';

const provider = new JSONRpcProvider('https://regtest.opnet.org', networks.regtest);
const token = getContract<IOP20Contract>(Address.fromString('0x...'), OP_20_ABI, provider, networks.regtest);
const result = await token.balanceOf(Address.fromString('0x...'));
console.log(result.properties.balance); // bigint
```

### Client: Send a token transfer

```typescript
import { TransactionParameters } from 'opnet';
import { Mnemonic, MLDSASecurityLevel, AddressTypes } from '@btc-vision/transaction';

const mnemonic = new Mnemonic('seed phrase...', '', network, MLDSASecurityLevel.LEVEL2);
const wallet = mnemonic.deriveUnisat(AddressTypes.P2TR, 0);

const simulation = await token.transfer(recipient, amount, new Uint8Array(0));
if (simulation.revert) throw new Error(simulation.revert);

const tx = await simulation.sendTransaction({
    signer: wallet.keypair,
    mldsaSigner: wallet.mldsaKeypair,
    refundTo: wallet.p2tr,
    maximumAllowedSatToSpend: 10000n,
    feeRate: 10,
    network,
});
```

### Smart Contract: Minimal OP20 token

```typescript
import { u256 } from '@btc-vision/as-bignum/assembly';
import { Blockchain, BytesWriter, Calldata, OP20, OP20InitParameters } from '@btc-vision/btc-runtime/runtime';

@final
export class MyToken extends OP20 {
    public constructor() { super(); }

    public override onDeployment(_calldata: Calldata): void {
        const maxSupply = u256.fromString('100000000000000000000000000');
        this.instantiate(new OP20InitParameters(maxSupply, 18, 'MyToken', 'MTK'));
        this._mint(Blockchain.tx.origin, maxSupply);
    }
}
```

## Critical Warnings

1. **Constructor runs every call**: In OPNet, the constructor runs on every contract interaction, not just deployment. Never put initialization logic in the constructor; use `onDeployment()` instead.
2. **Always simulate before sending**: Call the contract method first to get a `CallResult`, check `.revert`, then call `.sendTransaction()`.
3. **Non-custodial contracts**: Contracts cannot hold or transfer BTC. They verify transaction outputs against state.
4. **Partial reverts**: Consensus-layer execution can revert while Bitcoin transfers in the same transaction remain valid.
5. **Use Mnemonic, not WIF**: Always use `Mnemonic` class with `deriveUnisat()` for OPWallet compatibility and ML-DSA quantum support.
6. **BigInt everywhere**: All token amounts, gas values, and satoshi amounts are `bigint`.
7. **Pointer uniqueness**: Each storage variable in a contract must have a unique pointer. Pointer collisions corrupt state silently.
8. **Do not read the UTXO Manager example**: It is not a recommended reference.
9. **MANDATORY: Read example-contracts.md before writing or auditing any OPNet contract**. It contains production-grade source code for all standard contract types with correct patterns for storage pointers, payment verification, event emission, access control, and two-step ownership transfers.
10. **MANDATORY: Read typescript-law.md before writing ANY TypeScript code**. It defines strict coding standards including forbidden types, defensive programming requirements, error handling patterns, and security rules that all code must follow.
11. **MANDATORY: Read btc-runtime docs before writing any smart contract**. The runtime-* reference files contain the complete API for Blockchain, storage, events, types, cross-contract calls, plugins, reentrancy guards, and all contract base classes. These are essential for correct contract development.
12. **OPNet does NOT use OP_RETURN**. OPNet uses P2WDA (witness data authentication) to embed data in SegWit witness fields at ~75% lower cost than OP_RETURN. References to OP_RETURN in the bitcoin-scripts and transaction-configuration docs describe raw Bitcoin script capabilities that contracts can construct, not OPNet's own data embedding. Never state or imply that OPNet uses OP_RETURN.
