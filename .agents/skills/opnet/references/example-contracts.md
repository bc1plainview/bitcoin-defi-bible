# OPNet Example Contracts - Complete Source Reference

Production-grade OPNet smart contract examples from btc-vision/example-contracts.
These are the canonical patterns. When writing OPNet contracts, follow these exactly.

## Table of Contents

1. Project Configuration (package.json, asconfig.json)
2. OP20 Token (MyToken.ts, index.ts)
3. OP721 NFT with Reservations (MyNFT.ts, events, index.ts)
4. Stablecoin with Role-Based Access (MyStableCoin.ts, events, index.ts)
5. Pegged Token / Wrapped BTC (MyPeggedToken.ts, index.ts)
6. Multi-Oracle Stablecoin (MyMultiOracleStable.ts, index.ts)
7. BTC Name Resolver (BtcNameResolver.ts, events, constants excerpt, index.ts)
8. Package Registry (PackageRegistry.ts, events, constants, index.ts)
9. Shared Events (OracleEvents.ts)

---

## 1. Project Configuration

### package.json
```json
{
    "name": "@btc-vision/op20",
    "version": "0.0.1",
    "description": "OP_20 example smart contract",
    "main": "index.js",
    "scripts": {
        "build:token": "asc src/token/index.ts --target token --measure --uncheckedBehavior never",
        "build:stablecoin": "asc src/stablecoin/index.ts --target stablecoin --measure --uncheckedBehavior never",
        "build:peggedcoin": "asc src/pegged-token/index.ts --target peggedcoin --measure --uncheckedBehavior never",
        "build:oraclecoin": "asc src/multi-oracle-stablecoin/index.ts --target oraclecoin --measure --uncheckedBehavior never",
        "build:nft": "asc src/nft/index.ts --target nft --measure --uncheckedBehavior never",
        "build:registry": "asc src/registry/index.ts --target registry --measure --uncheckedBehavior never",
        "build:btc-resolver": "asc src/btc-resolver/index.ts --target btc-resolver --measure --uncheckedBehavior never",
        "test": "asp --config as-pect.config.js --verbose --no-logo",
        "test:ci": "asp --config as-pect.config.js --summary --no-logo"
    },
    "author": "BlobMaster41",
    "license": "MIT",
    "devDependencies": {
        "@btc-vision/as-covers-assembly": "^0.4.4",
        "@btc-vision/as-covers-transform": "^0.4.4",
        "@btc-vision/as-pect-assembly": "^8.2.0",
        "@btc-vision/as-pect-cli": "^8.2.0",
        "@btc-vision/as-pect-transform": "^8.2.0",
        "@types/node": "^25.0.10",
        "assemblyscript": "^0.28.9",
        "prettier": "^3.8.1"
    },
    "keywords": [
        "bitcoin",
        "smart",
        "contract",
        "runtime",
        "opnet",
        "OP_NET",
        "wrapped bitcoin",
        "wbtc"
    ],
    "resolutions": {
        "@btc-vision/btc-runtime": "^1.10.8"
    },
    "homepage": "https://opnet.org",
    "type": "module",
    "dependencies": {
        "@assemblyscript/loader": "^0.28.9",
        "@btc-vision/as-bignum": "^0.0.7",
        "@btc-vision/btc-runtime": "^1.11.0-alpha.2",
        "@btc-vision/opnet-transform": "^0.2.1",
        "@eslint/js": "^9.39.2",
        "gulplog": "^2.2.0",
        "ts-node": "^10.9.2",
        "typescript": "^5.9.3",
        "typescript-eslint": "^8.53.1"
    }
}
```

### asconfig.json
```json
{
    "targets": {
        "token": {
            "outFile": "build/MyToken.wasm",
            "use": ["abort=src/token/index/abort"]
        },
        "stablecoin": {
            "outFile": "build/MyStableCoin.wasm",
            "use": ["abort=src/stablecoin/index/abort"]
        },
        "peggedcoin": {
            "outFile": "build/MyPeggedCoin.wasm",
            "use": ["abort=src/pegged-token/index/abort"]
        },
        "oraclecoin": {
            "outFile": "build/MyOracleCoin.wasm",
            "use": ["abort=src/multi-oracle-stablecoin/index/abort"]
        },
        "nft": {
            "outFile": "build/MyNFT.wasm",
            "use": ["abort=src/nft/index/abort"]
        },
        "registry": {
            "outFile": "build/PackageRegistry.wasm",
            "use": ["abort=src/registry/index/abort"]
        },
        "btc-resolver": {
			"initialMemory": 4,
            "outFile": "build/Resolver.wasm",
            "use": ["abort=src/btc-resolver/index/abort"]
        }
    },
    "options": {
        "sourceMap": false,
        "optimizeLevel": 3,
        "shrinkLevel": 1,
        "converge": true,
        "noAssert": false,
        "enable": [
            "sign-extension",
            "mutable-globals",
            "nontrapping-f2i",
            "bulk-memory",
            "simd",
            "reference-types",
            "multi-value"
        ],
        "runtime": "stub",
        "memoryBase": 0,
        "initialMemory": 1,
        "exportStart": "start",
        "transform": "@btc-vision/opnet-transform"
    }
}
```

---

## 2. OP20 Token

### src/token/MyToken.ts
```typescript
import { u256 } from '@btc-vision/as-bignum/assembly';
import {
    Address,
    AddressMap,
    Blockchain,
    BytesWriter,
    Calldata,
    OP20,
    OP20InitParameters,
    SafeMath,
} from '@btc-vision/btc-runtime/runtime';

@final
export class MyToken extends OP20 {
    public constructor() {
        super();

        // IMPORTANT. THIS WILL RUN EVERYTIME THE CONTRACT IS INTERACTED WITH. FOR SPECIFIC INITIALIZATION, USE "onDeployment" METHOD.
    }

    // "solidityLikeConstructor" This is a solidity-like constructor. This method will only run once when the contract is deployed.
    public override onDeployment(_calldata: Calldata): void {
        const maxSupply: u256 = u256.fromString('1000000000000000000000000000'); // Your max supply. (Here, 1 billion tokens)
        const decimals: u8 = 18; // Your decimals.
        const name: string = 'Test'; // Your token name.
        const symbol: string = 'TEST'; // Your token symbol.

        this.instantiate(new OP20InitParameters(maxSupply, decimals, name, symbol));

        // Add your logic here. Eg, minting the initial supply:
        // this._mint(Blockchain.tx.origin, maxSupply);
    }

    @method(
        {
            name: 'address',
            type: ABIDataTypes.ADDRESS,
        },
        {
            name: 'amount',
            type: ABIDataTypes.UINT256,
        },
    )
    @emit('Minted')
    public mint(calldata: Calldata): BytesWriter {
        this.onlyDeployer(Blockchain.tx.sender);

        this._mint(calldata.readAddress(), calldata.readU256());

        return new BytesWriter(0);
    }

    /**
     * Mints tokens to the specified addresses.
     *
     * @param calldata Calldata containing an `AddressMap<Address, u256>` to mint to.
     */
    @method({
        name: 'addressAndAmount',
        type: ABIDataTypes.ADDRESS_UINT256_TUPLE,
    })
    @emit('Minted')
    public airdrop(calldata: Calldata): BytesWriter {
        this.onlyDeployer(Blockchain.tx.sender);

        const addressAndAmount: AddressMap<u256> = calldata.readAddressMapU256();
        const addresses: Address[] = addressAndAmount.keys();

        let totalAirdropped: u256 = u256.Zero;

        for (let i: i32 = 0; i < addresses.length; i++) {
            const address = addresses[i];
            const amount = addressAndAmount.get(address);

            const currentBalance: u256 = this.balanceOfMap.get(address);

            if (currentBalance) {
                this.balanceOfMap.set(address, SafeMath.add(currentBalance, amount));
            } else {
                this.balanceOfMap.set(address, amount);
            }

            totalAirdropped = SafeMath.add(totalAirdropped, amount);

            this.createMintedEvent(address, amount);
        }

        this._totalSupply.set(SafeMath.add(this._totalSupply.value, totalAirdropped));

        return new BytesWriter(0);
    }
}
```

### src/token/index.ts
```typescript
import { Blockchain } from '@btc-vision/btc-runtime/runtime';
import { revertOnError } from '@btc-vision/btc-runtime/runtime/abort/abort';
import { MyToken } from './MyToken';

// DO NOT TOUCH TO THIS.
Blockchain.contract = () => {
    // ONLY CHANGE THE CONTRACT CLASS NAME.
    // DO NOT ADD CUSTOM LOGIC HERE.

    return new MyToken();
};

// VERY IMPORTANT
export * from '@btc-vision/btc-runtime/runtime/exports';

// VERY IMPORTANT
export function abort(message: string, fileName: string, line: u32, column: u32): void {
    revertOnError(message, fileName, line, column);
}
```

---

## 3. OP721 NFT with Reservations

### src/nft/MyNFT.ts
```typescript
import { u256 } from '@btc-vision/as-bignum/assembly';
import {
    Address,
    Blockchain,
    BytesWriter,
    Calldata,
    EMPTY_POINTER,
    OP721,
    OP721InitParameters,
    Potential,
    Revert,
    SafeMath,
    StoredBoolean,
    StoredMapU256,
    StoredString,
    StoredU256,
    StoredU64Array,
    TransactionOutput,
    U256_BYTE_LENGTH,
    U32_BYTE_LENGTH,
    U64_BYTE_LENGTH,
} from '@btc-vision/btc-runtime/runtime';
import {
    MintStatusChangedEvent,
    ReservationClaimedEvent,
    ReservationCreatedEvent,
    ReservationExpiredEvent,
} from './events/Reserved';

@final
class PurgeResult {
    constructor(
        public totalPurged: u256,
        public blocksProcessed: u32,
    ) {}
}

const treasuryAddressPointer: u16 = Blockchain.nextPointer;
const reservationBlockPointer: u16 = Blockchain.nextPointer;
const reservationAmountPointer: u16 = Blockchain.nextPointer;
const blockReservedAmountPointer: u16 = Blockchain.nextPointer;
const totalActiveReservedPointer: u16 = Blockchain.nextPointer;
const blocksWithReservationsPointer: u16 = Blockchain.nextPointer;
const mintEnabledPointer: u16 = Blockchain.nextPointer;

@final
export class MyNFT extends OP721 {
    // Constants
    private static readonly MINT_PRICE: u64 = 100000; // 0.001 BTC per NFT
    private static readonly RESERVATION_FEE_PERCENT: u64 = 15; // 15% upfront
    private static readonly MIN_RESERVATION_FEE: u64 = 1000; // Minimum 1000 sats
    private static readonly RESERVATION_BLOCKS: u64 = 5; // 5 blocks to pay
    private static readonly GRACE_BLOCKS: u64 = 1; // 1 block grace period
    private static readonly MAX_RESERVATION_AMOUNT: u32 = 20; // Max per reservation
    private static readonly MAX_BLOCKS_TO_PURGE: u32 = 10; // Max blocks per purge

    private readonly treasuryAddress: StoredString;
    private readonly mintEnabled: StoredBoolean;

    // User reservations
    private userReservationBlock: StoredMapU256; // address -> block number when reserved
    private userReservationAmount: StoredMapU256; // address -> amount reserved

    // Block tracking
    private blockReservedAmount: StoredMapU256; // block number -> total reserved in that block
    private totalActiveReserved: StoredU256; // Global active reservations counter

    public constructor() {
        super();

        this.userReservationBlock = new StoredMapU256(reservationBlockPointer);
        this.userReservationAmount = new StoredMapU256(reservationAmountPointer);
        this.blockReservedAmount = new StoredMapU256(blockReservedAmountPointer);
        this.totalActiveReserved = new StoredU256(totalActiveReservedPointer, EMPTY_POINTER);

        this.treasuryAddress = new StoredString(treasuryAddressPointer);
        this.mintEnabled = new StoredBoolean(mintEnabledPointer, false);
    }

    private _blocksWithReservations: Potential<StoredU64Array> = null; // Sorted list of blocks with reservations

    public get blocksWithReservations(): StoredU64Array {
        if (this._blocksWithReservations === null) {
            this._blocksWithReservations = new StoredU64Array(
                blocksWithReservationsPointer,
                EMPTY_POINTER,
            );
        }

        return this._blocksWithReservations as StoredU64Array;
    }

    public override onDeployment(_calldata: Calldata): void {
        const maxSupply: u256 = u256.fromU32(10000);

        // Validate max supply against current state
        if (this._totalSupply.value >= maxSupply) {
            throw new Revert('Max supply already reached');
        }

        const name: string = 'Cool NFT';
        const symbol: string = 'O_o';

        const baseURI: string = '';

        // Should be 1500x500-1500x300
        const collectionBanner: string =
            'https://raw.githubusercontent.com/btc-vision/contract-logo/refs/heads/main/nft/demo_banner.jpg';

        const collectionIcon: string =
            'https://raw.githubusercontent.com/btc-vision/contract-logo/refs/heads/main/nft/icon.png';

        const collectionWebsite: string = 'https://example.com';
        const collectionDescription: string = 'This NFT collection is awesome! 😎';

        this.instantiate(
            new OP721InitParameters(
                name,
                symbol,
                baseURI,
                maxSupply,
                collectionBanner,
                collectionIcon,
                collectionWebsite,
                collectionDescription,
            ),
        );

        this.treasuryAddress.value = Blockchain.tx.origin.p2tr();
        this.mintEnabled.value = false; // Start with minting disabled
    }

    @method({ name: 'enabled', type: ABIDataTypes.BOOL })
    @emit('MintStatusChanged')
    public setMintEnabled(calldata: Calldata): BytesWriter {
        this.onlyDeployer(Blockchain.tx.sender);

        const enabled: boolean = calldata.readBoolean();
        this.mintEnabled.value = enabled;

        // Emit event for transparency
        this.emitEvent(new MintStatusChangedEvent(enabled));

        return new BytesWriter(0);
    }

    @method()
    @returns({ name: 'enabled', type: ABIDataTypes.BOOL })
    public isMintEnabled(_: Calldata): BytesWriter {
        const response: BytesWriter = new BytesWriter(1);
        response.writeBoolean(<boolean>this.mintEnabled.value);
        return response;
    }

    @method(
        {
            name: 'addresses',
            type: ABIDataTypes.ARRAY_OF_ADDRESSES,
        },
        {
            name: 'amounts',
            type: ABIDataTypes.ARRAY_OF_UINT8,
        },
    )
    @emit('Transferred')
    public airdrop(calldata: Calldata): BytesWriter {
        this.onlyDeployer(Blockchain.tx.sender);

        const addresses: Address[] = calldata.readAddressArray();
        const amounts: u8[] = calldata.readU8Array();

        if (addresses.length !== amounts.length || addresses.length === 0) {
            throw new Revert('Mismatched or empty arrays');
        }

        let totalToMint: u32 = 0;

        const addressLength: u32 = u32(addresses.length);
        for (let i: u32 = 0; i < addressLength; i++) {
            totalToMint += amounts[i];
        }

        if (totalToMint === 0) {
            throw new Revert('Total mint amount is zero');
        }

        // Check supply availability
        const currentSupply: u256 = this._totalSupply.value;
        const available: u256 = SafeMath.sub(
            this.maxSupply,
            SafeMath.add(currentSupply, this.totalActiveReserved.value),
        );

        if (u256.fromU32(totalToMint) > available) {
            throw new Revert('Insufficient supply available');
        }

        // Mint NFTs
        const startTokenId: u256 = this._nextTokenId.value;
        let mintedSoFar: u32 = 0;

        for (let i: u32 = 0; i < addressLength; i++) {
            const addr: Address = addresses[i];
            const amount: u32 = amounts[i];

            if (amount === 0) continue;

            for (let j: u32 = 0; j < amount; j++) {
                const tokenId: u256 = SafeMath.add(startTokenId, u256.fromU32(mintedSoFar));
                this._mint(addr, tokenId);
                mintedSoFar++;
            }
        }

        this._nextTokenId.value = SafeMath.add(startTokenId, u256.fromU32(mintedSoFar));

        return new BytesWriter(0);
    }

    /**
     * @notice Reserve NFTs by paying 15% upfront fee (minimum 1000 sats total)
     * @dev Reservations expire after RESERVATION_BLOCKS + GRACE_BLOCKS (6 blocks total)
     * @param calldata
     */
    @method({
        name: 'quantity',
        type: ABIDataTypes.UINT256,
    })
    @emit('ReservationCreated')
    @returns(
        { name: 'remainingPayment', type: ABIDataTypes.UINT64 },
        { name: 'reservationBlock', type: ABIDataTypes.UINT64 },
    )
    public reserve(calldata: Calldata): BytesWriter {
        // Check if minting is enabled
        if (!this.mintEnabled.value) {
            throw new Revert('Minting is disabled');
        }

        // Auto-purge expired reservations first
        this.autoPurgeExpired();

        const quantity: u256 = calldata.readU256();
        const sender: Address = Blockchain.tx.sender;

        if (quantity.isZero() || quantity > u256.fromU32(MyNFT.MAX_RESERVATION_AMOUNT)) {
            throw new Revert('Invalid quantity: 1-20 only');
        }

        const senderKey: u256 = this._u256FromAddress(sender);

        // Check if user has existing reservation (expired or not)
        const existingBlock: u256 = this.userReservationBlock.get(senderKey);

        if (!existingBlock.isZero()) {
            const currentBlock: u64 = Blockchain.block.number;
            const totalExpiry: u64 = SafeMath.add64(
                SafeMath.add64(existingBlock.toU64(), MyNFT.RESERVATION_BLOCKS),
                MyNFT.GRACE_BLOCKS,
            );

            if (currentBlock <= totalExpiry) {
                throw new Revert('Active reservation exists');
            }
            // If expired, we just overwrite it below - no cleanup
        }

        const qty: u64 = quantity.toU64();
        const totalCost: u64 = SafeMath.mul64(MyNFT.MINT_PRICE, qty);
        const calculatedFee: u64 = SafeMath.div64(
            SafeMath.mul64(totalCost, MyNFT.RESERVATION_FEE_PERCENT),
            100,
        );

        // Apply minimum fee of 1000 sats
        const reservationFee: u64 =
            calculatedFee < MyNFT.MIN_RESERVATION_FEE ? MyNFT.MIN_RESERVATION_FEE : calculatedFee;

        // Validate payment
        if (!this.validatePayment(reservationFee)) {
            throw new Revert('Insufficient reservation fee');
        }

        // Check supply availability
        const currentSupply: u256 = this._totalSupply.value;
        const available: u256 = SafeMath.sub(
            this.maxSupply,
            SafeMath.add(currentSupply, this.totalActiveReserved.value),
        );

        if (quantity > available) {
            throw new Revert('Insufficient supply available');
        }

        // Store reservation (overwrite any expired data)
        const currentBlock: u256 = u256.fromU64(Blockchain.block.number);
        this.userReservationBlock.set(senderKey, currentBlock);
        this.userReservationAmount.set(senderKey, quantity);

        // Update block reserved amount
        const currentBlockReserved: u256 = this.blockReservedAmount.get(currentBlock);
        this.blockReservedAmount.set(currentBlock, SafeMath.add(currentBlockReserved, quantity));

        // Track this block if new
        this.trackBlockWithReservation(Blockchain.block.number);

        // Update total active reserved
        this.totalActiveReserved.value = SafeMath.add(this.totalActiveReserved.value, quantity);

        // Emit event
        this.emitEvent(
            new ReservationCreatedEvent(sender, quantity, Blockchain.block.number, reservationFee),
        );

        const remainingPayment: u64 = SafeMath.sub64(totalCost, reservationFee);
        const response: BytesWriter = new BytesWriter(8 + U256_BYTE_LENGTH);
        response.writeU64(remainingPayment);
        response.writeU64(currentBlock.toU64());

        return response;
    }

    /**
     * @notice Claims reserved NFTs by paying the remaining balance
     * @dev Must be called within RESERVATION_BLOCKS + GRACE_BLOCKS (6 blocks total)
     *      Block 0: reservation created
     *      Blocks 1-5: standard claim period
     *      Block 6: grace period (last chance to claim)
     *      Block 7+: expired, reservation can be purged
     */
    @method()
    @emit('ReservationClaimed')
    @emit('Transferred')
    public claim(_: Calldata): BytesWriter {
        const sender: Address = Blockchain.tx.sender;
        const senderKey: u256 = this._u256FromAddress(sender);

        // Get reservation
        const reservedBlock: u256 = this.userReservationBlock.get(senderKey);
        const reservedAmount: u256 = this.userReservationAmount.get(senderKey);

        if (reservedBlock.isZero() || reservedAmount.isZero()) {
            throw new Revert('No reservation found');
        }

        // Check expiry INCLUDING grace period
        const currentBlock: u64 = Blockchain.block.number;
        const claimDeadline: u64 = SafeMath.add64(
            SafeMath.add64(reservedBlock.toU64(), MyNFT.RESERVATION_BLOCKS),
            MyNFT.GRACE_BLOCKS,
        );

        if (currentBlock > claimDeadline) {
            throw new Revert('Reservation expired');
        }

        // Calculate exact payment needed with SafeMath
        const qty: u64 = reservedAmount.toU64();
        const totalCost: u64 = SafeMath.mul64(MyNFT.MINT_PRICE, qty);
        const calculatedFee: u64 = SafeMath.div64(
            SafeMath.mul64(totalCost, MyNFT.RESERVATION_FEE_PERCENT),
            100,
        );
        const alreadyPaid: u64 =
            calculatedFee < MyNFT.MIN_RESERVATION_FEE ? MyNFT.MIN_RESERVATION_FEE : calculatedFee;
        const exactPaymentNeeded: u64 = SafeMath.sub64(totalCost, alreadyPaid);

        // Validate EXACT payment (or more)
        const paymentReceived: u64 = this.getExactPayment();
        if (paymentReceived < exactPaymentNeeded) {
            throw new Revert('Insufficient payment - funds lost');
        }

        // Mint NFTs
        const startTokenId: u256 = this._nextTokenId.value;
        const amountToMint: u32 = reservedAmount.toU32();
        for (let i: u32 = 0; i < amountToMint; i++) {
            const tokenId: u256 = SafeMath.add(startTokenId, u256.fromU32(i));
            this._mint(sender, tokenId);
        }
        this._nextTokenId.value = SafeMath.add(startTokenId, reservedAmount);

        // Reduce block reserved amount
        const blockReserved: u256 = this.blockReservedAmount.get(reservedBlock);
        const newBlockReserved: u256 = SafeMath.sub(blockReserved, reservedAmount);
        this.blockReservedAmount.set(reservedBlock, newBlockReserved);

        // Update total and clear user reservation
        this.totalActiveReserved.value = SafeMath.sub(
            this.totalActiveReserved.value,
            reservedAmount,
        );
        this.userReservationBlock.set(senderKey, u256.Zero);
        this.userReservationAmount.set(senderKey, u256.Zero);

        // Emit event
        this.emitEvent(new ReservationClaimedEvent(sender, reservedAmount, startTokenId));

        const response: BytesWriter = new BytesWriter(U256_BYTE_LENGTH * 2);
        response.writeU256(startTokenId);
        response.writeU256(reservedAmount);
        return response;
    }

    @method()
    @emit('ReservationExpired')
    public purgeExpired(_: Calldata): BytesWriter {
        const result: PurgeResult = this.autoPurgeExpired();

        const response: BytesWriter = new BytesWriter(U256_BYTE_LENGTH + U32_BYTE_LENGTH);
        response.writeU256(result.totalPurged);
        response.writeU32(result.blocksProcessed);
        return response;
    }

    @method()
    @returns(
        { name: 'minted', type: ABIDataTypes.UINT256 },
        { name: 'reserved', type: ABIDataTypes.UINT256 },
        { name: 'available', type: ABIDataTypes.UINT256 },
        { name: 'maxSupply', type: ABIDataTypes.UINT256 },
        { name: 'blocksWithReservations', type: ABIDataTypes.UINT32 },
        { name: 'pricePerToken', type: ABIDataTypes.UINT64 },
        { name: 'reservationFeePercent', type: ABIDataTypes.UINT64 },
        { name: 'minReservationFee', type: ABIDataTypes.UINT64 },
    )
    public getStatus(_: Calldata): BytesWriter {
        // Auto-purge expired reservations to show accurate available supply
        this.autoPurgeExpired();

        const minted: u256 = this._totalSupply.value;
        const reserved: u256 = this.totalActiveReserved.value;
        const available: u256 = SafeMath.sub(this.maxSupply, SafeMath.add(minted, reserved));

        const response: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH * 4 + U32_BYTE_LENGTH + U64_BYTE_LENGTH * 3,
        );
        response.writeU256(minted);
        response.writeU256(reserved);
        response.writeU256(available);
        response.writeU256(this.maxSupply);
        response.writeU32(this.blocksWithReservations.getLength());
        response.writeU64(MyNFT.MINT_PRICE);
        response.writeU64(MyNFT.RESERVATION_FEE_PERCENT);
        response.writeU64(MyNFT.MIN_RESERVATION_FEE);
        return response;
    }

    @method(
        { name: 'tokenId', type: ABIDataTypes.UINT256 },
        { name: 'uri', type: ABIDataTypes.STRING },
    )
    @emit('URI')
    public setTokenURI(calldata: Calldata): BytesWriter {
        this.onlyDeployer(Blockchain.tx.sender);

        const tokenId: u256 = calldata.readU256();
        const uri: string = calldata.readStringWithLength();

        this._setTokenURI(tokenId, uri);

        return new BytesWriter(0);
    }

    private autoPurgeExpired(): PurgeResult {
        const cutoffBlock: u64 = SafeMath.sub64(
            Blockchain.block.number,
            SafeMath.add64(MyNFT.RESERVATION_BLOCKS, MyNFT.GRACE_BLOCKS),
        );

        let totalPurged: u256 = u256.Zero;
        let blocksProcessed: u32 = 0;

        // Process blocks from the tracked list
        while (
            this.blocksWithReservations.getLength() > 0 &&
            blocksProcessed < MyNFT.MAX_BLOCKS_TO_PURGE
        ) {
            const oldestBlock: u64 = this.blocksWithReservations.get(0);

            // Stop if we reach blocks that aren't expired yet
            if (oldestBlock > cutoffBlock) {
                break;
            }

            const blockKey: u256 = u256.fromU64(oldestBlock);
            const blockReserved: u256 = this.blockReservedAmount.get(blockKey);

            if (!blockReserved.isZero()) {
                // Add back to available supply
                totalPurged = SafeMath.add(totalPurged, blockReserved);
                this.totalActiveReserved.value = SafeMath.sub(
                    this.totalActiveReserved.value,
                    blockReserved,
                );
                this.blockReservedAmount.set(blockKey, u256.Zero);

                // Emit event
                this.emitEvent(new ReservationExpiredEvent(oldestBlock, blockReserved));
            }

            // Remove this block from tracking
            this.blocksWithReservations.shift();
            blocksProcessed++;
        }

        if (blocksProcessed > 0) {
            this.blocksWithReservations.save();
        }

        return new PurgeResult(totalPurged, blocksProcessed);
    }

    private trackBlockWithReservation(blockNumber: u64): void {
        const length: u32 = this.blocksWithReservations.getLength();

        // Only add if not already present (blocks are sorted)
        if (length === 0 || this.blocksWithReservations.get(length - 1) !== blockNumber) {
            this.blocksWithReservations.push(blockNumber);
            this.blocksWithReservations.save();
        }
    }

    private validatePayment(requiredAmount: u64): boolean {
        const totalPaid: u64 = this.getExactPayment();
        return totalPaid >= requiredAmount;
    }

    private getExactPayment(): u64 {
        const outputs: TransactionOutput[] = Blockchain.tx.outputs;
        let totalPaid: u64 = 0;

        for (let i: i32 = 0; i < outputs.length; i++) {
            const output: TransactionOutput = outputs[i];

            if (!output.to) continue;

            if (output.to === this.treasuryAddress.value) {
                totalPaid = SafeMath.add64(totalPaid, output.value);
            }
        }

        return totalPaid;
    }
}
```

### src/nft/events/Reserved.ts
```typescript
import { u256 } from '@btc-vision/as-bignum/assembly';
import {
    Address,
    ADDRESS_BYTE_LENGTH,
    BOOLEAN_BYTE_LENGTH,
    BytesWriter,
    NetEvent,
    U256_BYTE_LENGTH,
    U64_BYTE_LENGTH,
} from '@btc-vision/btc-runtime/runtime';

@final
export class ReservationCreatedEvent extends NetEvent {
    constructor(user: Address, amount: u256, block: u64, feePaid: u64) {
        const eventData: BytesWriter = new BytesWriter(
            ADDRESS_BYTE_LENGTH + U256_BYTE_LENGTH + U64_BYTE_LENGTH * 2,
        );
        eventData.writeAddress(user);
        eventData.writeU256(amount);
        eventData.writeU64(block);
        eventData.writeU64(feePaid);

        super('ReservationCreated', eventData);
    }
}

@final
export class ReservationClaimedEvent extends NetEvent {
    constructor(user: Address, amount: u256, firstTokenId: u256) {
        const eventData: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH + U256_BYTE_LENGTH * 2);
        eventData.writeAddress(user);
        eventData.writeU256(amount);
        eventData.writeU256(firstTokenId);

        super('ReservationClaimed', eventData);
    }
}

@final
export class ReservationExpiredEvent extends NetEvent {
    constructor(block: u64, amountRecovered: u256) {
        const eventData: BytesWriter = new BytesWriter(U64_BYTE_LENGTH + U256_BYTE_LENGTH);
        eventData.writeU64(block);
        eventData.writeU256(amountRecovered);

        super('ReservationExpired', eventData);
    }
}

@final
export class MintStatusChangedEvent extends NetEvent {
    constructor(enabled: boolean) {
        const eventData = new BytesWriter(BOOLEAN_BYTE_LENGTH);
        eventData.writeBoolean(enabled);

        super('MintStatusChanged', eventData);
    }
}
```

### src/nft/index.ts
```typescript
import { Blockchain } from '@btc-vision/btc-runtime/runtime';
import { revertOnError } from '@btc-vision/btc-runtime/runtime/abort/abort';
import { MyNFT } from './MyNFT';

// DO NOT TOUCH TO THIS.
Blockchain.contract = () => {
    // ONLY CHANGE THE CONTRACT CLASS NAME.
    // DO NOT ADD CUSTOM LOGIC HERE.

    return new MyNFT();
};

// VERY IMPORTANT
export * from '@btc-vision/btc-runtime/runtime/exports';

// VERY IMPORTANT
export function abort(message: string, fileName: string, line: u32, column: u32): void {
    revertOnError(message, fileName, line, column);
}
```

---

## 4. Stablecoin with Role-Based Access

### src/stablecoin/MyStableCoin.ts
```typescript
import { u256 } from '@btc-vision/as-bignum/assembly';
import {
    Address,
    Blockchain,
    BytesWriter,
    Calldata,
    OP20InitParameters,
    OP20S,
    Revert,
    Selector,
    StoredBoolean,
} from '@btc-vision/btc-runtime/runtime';

import {
    BlacklistedEvent,
    BlacklisterChangedEvent,
    MinterChangedEvent,
    OwnershipTransferredEvent,
    OwnershipTransferStartedEvent,
    PausedEvent,
    PauserChangedEvent,
    UnblacklistedEvent,
    UnpausedEvent,
} from './events/StableCoinEvents';
import { AddressMemoryMap } from '@btc-vision/btc-runtime/runtime/memory/AddressMemoryMap';

export const IS_BLACKLISTED_SELECTOR: u32 = 0xd20d08bb;
export const IS_PAUSED_SELECTOR: u32 = 0xe57e24b7;

const ownerPointer: u16 = Blockchain.nextPointer;
const pendingOwnerPointer: u16 = Blockchain.nextPointer;
const minterPointer: u16 = Blockchain.nextPointer;
const blacklisterPointer: u16 = Blockchain.nextPointer;
const pauserPointer: u16 = Blockchain.nextPointer;
const pausedPointer: u16 = Blockchain.nextPointer;
const blacklistMapPointer: u16 = Blockchain.nextPointer;

@final
export class MyStableCoin extends OP20S {
    private readonly _ownerMap: AddressMemoryMap;
    private readonly _pendingOwnerMap: AddressMemoryMap;
    private readonly _minterMap: AddressMemoryMap;
    private readonly _blacklisterMap: AddressMemoryMap;
    private readonly _pauserMap: AddressMemoryMap;
    private readonly _paused: StoredBoolean;
    private readonly _blacklist: AddressMemoryMap;

    public constructor() {
        super();
        this._ownerMap = new AddressMemoryMap(ownerPointer);
        this._pendingOwnerMap = new AddressMemoryMap(pendingOwnerPointer);
        this._minterMap = new AddressMemoryMap(minterPointer);
        this._blacklisterMap = new AddressMemoryMap(blacklisterPointer);
        this._pauserMap = new AddressMemoryMap(pauserPointer);
        this._paused = new StoredBoolean(pausedPointer, false);
        this._blacklist = new AddressMemoryMap(blacklistMapPointer);
    }

    public override onDeployment(calldata: Calldata): void {
        const owner = calldata.readAddress();
        const minter = calldata.readAddress();
        const blacklister = calldata.readAddress();
        const pauser = calldata.readAddress();
        const pegAuthority = calldata.readAddress();
        const initialPegRate = calldata.readU256();

        this._validateAddress(owner, 'Invalid owner');
        this._validateAddress(minter, 'Invalid minter');
        this._validateAddress(blacklister, 'Invalid blacklister');
        this._validateAddress(pauser, 'Invalid pauser');
        this._validateAddress(pegAuthority, 'Invalid peg authority');

        if (initialPegRate.isZero()) {
            throw new Revert('Invalid peg rate');
        }

        const maxSupply: u256 = u256.Max;
        const decimals: u8 = 6;
        const name: string = 'Stable USD';
        const symbol: string = 'SUSD';

        this.instantiate(new OP20InitParameters(maxSupply, decimals, name, symbol));
        this.initializePeg(pegAuthority, initialPegRate, 144);

        this._setOwner(owner);
        this._setMinter(minter);
        this._setBlacklister(blacklister);
        this._setPauser(pauser);

        this.emitEvent(new OwnershipTransferredEvent(Address.zero(), owner));
        this.emitEvent(new MinterChangedEvent(Address.zero(), minter));
        this.emitEvent(new BlacklisterChangedEvent(Address.zero(), blacklister));
        this.emitEvent(new PauserChangedEvent(Address.zero(), pauser));
    }

    @method(
        { name: 'to', type: ABIDataTypes.ADDRESS },
        { name: 'amount', type: ABIDataTypes.UINT256 },
    )
    @emit('Minted')
    public mint(calldata: Calldata): BytesWriter {
        this._onlyMinter();
        this._requireNotPaused();

        const to = calldata.readAddress();
        const amount = calldata.readU256();

        this._validateAddress(to, 'Invalid recipient');
        this._requireNotBlacklisted(to);

        if (amount.isZero()) {
            throw new Revert('Amount is zero');
        }

        this._mint(to, amount);

        return new BytesWriter(0);
    }

    @method(
        { name: 'from', type: ABIDataTypes.ADDRESS },
        { name: 'amount', type: ABIDataTypes.UINT256 },
    )
    @emit('Burned')
    public burnFrom(calldata: Calldata): BytesWriter {
        this._onlyMinter();
        this._requireNotPaused();

        const from = calldata.readAddress();
        const amount = calldata.readU256();

        this._validateAddress(from, 'Invalid address');

        const balance = this._balanceOf(from);
        if (balance < amount) {
            throw new Revert('Insufficient balance');
        }

        this._burn(from, amount);

        return new BytesWriter(0);
    }

    @method({ name: 'account', type: ABIDataTypes.ADDRESS })
    @emit('Blacklisted')
    public blacklist(calldata: Calldata): BytesWriter {
        this._onlyBlacklister();

        const account = calldata.readAddress();
        this._validateAddress(account, 'Invalid address');

        if (this._isBlacklisted(account)) {
            throw new Revert('Already blacklisted');
        }

        this._blacklist.set(account, u256.One);

        this.emitEvent(new BlacklistedEvent(account, Blockchain.tx.sender));

        return new BytesWriter(0);
    }

    @method({ name: 'account', type: ABIDataTypes.ADDRESS })
    @emit('Unblacklisted')
    public unblacklist(calldata: Calldata): BytesWriter {
        this._onlyBlacklister();

        const account = calldata.readAddress();
        this._validateAddress(account, 'Invalid address');

        if (!this._isBlacklisted(account)) {
            throw new Revert('Not blacklisted');
        }

        this._blacklist.set(account, u256.Zero);

        this.emitEvent(new UnblacklistedEvent(account, Blockchain.tx.sender));

        return new BytesWriter(0);
    }

    @method({ name: 'account', type: ABIDataTypes.ADDRESS })
    @returns({ name: 'blacklisted', type: ABIDataTypes.BOOL })
    public isBlacklisted(calldata: Calldata): BytesWriter {
        const account = calldata.readAddress();
        const w = new BytesWriter(1);
        w.writeBoolean(this._isBlacklisted(account));
        return w;
    }

    @method()
    @emit('Paused')
    public pause(_: Calldata): BytesWriter {
        this._onlyPauser();

        if (this._paused.value) {
            throw new Revert('Already paused');
        }

        this._paused.value = true;

        this.emitEvent(new PausedEvent(Blockchain.tx.sender));

        return new BytesWriter(0);
    }

    @method()
    @emit('Unpaused')
    public unpause(_: Calldata): BytesWriter {
        this._onlyPauser();

        if (!this._paused.value) {
            throw new Revert('Not paused');
        }

        this._paused.value = false;

        this.emitEvent(new UnpausedEvent(Blockchain.tx.sender));

        return new BytesWriter(0);
    }

    @method()
    @returns({ name: 'paused', type: ABIDataTypes.BOOL })
    public isPaused(_: Calldata): BytesWriter {
        const w = new BytesWriter(1);
        w.writeBoolean(<boolean>this._paused.value);
        return w;
    }

    @method({ name: 'newOwner', type: ABIDataTypes.ADDRESS })
    @emit('OwnershipTransferStarted')
    public transferOwnership(calldata: Calldata): BytesWriter {
        this._onlyOwner();

        const newOwner = calldata.readAddress();
        this._validateAddress(newOwner, 'Invalid new owner');

        const currentOwner = this._getOwner();
        this._setPendingOwner(newOwner);

        this.emitEvent(new OwnershipTransferStartedEvent(currentOwner, newOwner));

        return new BytesWriter(0);
    }

    @method()
    @emit('OwnershipTransferred')
    public acceptOwnership(_: Calldata): BytesWriter {
        const pending = this._getPendingOwner();
        if (pending.equals(Address.zero())) {
            throw new Revert('No pending owner');
        }
        if (!Blockchain.tx.sender.equals(pending)) {
            throw new Revert('Not pending owner');
        }

        const previousOwner = this._getOwner();
        this._setOwner(pending);
        this._setPendingOwner(Address.zero());

        this.emitEvent(new OwnershipTransferredEvent(previousOwner, pending));

        return new BytesWriter(0);
    }

    @method({ name: 'newMinter', type: ABIDataTypes.ADDRESS })
    @emit('MinterChanged')
    public setMinter(calldata: Calldata): BytesWriter {
        this._onlyOwner();

        const newMinter = calldata.readAddress();
        this._validateAddress(newMinter, 'Invalid minter');

        const previousMinter = this._getMinter();
        this._setMinter(newMinter);

        this.emitEvent(new MinterChangedEvent(previousMinter, newMinter));

        return new BytesWriter(0);
    }

    @method({ name: 'newBlacklister', type: ABIDataTypes.ADDRESS })
    @emit('BlacklisterChanged')
    public setBlacklister(calldata: Calldata): BytesWriter {
        this._onlyOwner();

        const newBlacklister = calldata.readAddress();
        this._validateAddress(newBlacklister, 'Invalid blacklister');

        const previousBlacklister = this._getBlacklister();
        this._setBlacklister(newBlacklister);

        this.emitEvent(new BlacklisterChangedEvent(previousBlacklister, newBlacklister));

        return new BytesWriter(0);
    }

    @method({ name: 'newPauser', type: ABIDataTypes.ADDRESS })
    @emit('PauserChanged')
    public setPauser(calldata: Calldata): BytesWriter {
        this._onlyOwner();

        const newPauser = calldata.readAddress();
        this._validateAddress(newPauser, 'Invalid pauser');

        const previousPauser = this._getPauser();
        this._setPauser(newPauser);

        this.emitEvent(new PauserChangedEvent(previousPauser, newPauser));

        return new BytesWriter(0);
    }

    @method()
    @returns({ name: 'owner', type: ABIDataTypes.ADDRESS })
    public owner(_: Calldata): BytesWriter {
        const w = new BytesWriter(32);
        w.writeAddress(this._getOwner());
        return w;
    }

    @method()
    @returns({ name: 'minter', type: ABIDataTypes.ADDRESS })
    public minter(_: Calldata): BytesWriter {
        const w = new BytesWriter(32);
        w.writeAddress(this._getMinter());
        return w;
    }

    @method()
    @returns({ name: 'blacklister', type: ABIDataTypes.ADDRESS })
    public blacklister(_: Calldata): BytesWriter {
        const w = new BytesWriter(32);
        w.writeAddress(this._getBlacklister());
        return w;
    }

    @method()
    @returns({ name: 'pauser', type: ABIDataTypes.ADDRESS })
    public pauser(_: Calldata): BytesWriter {
        const w = new BytesWriter(32);
        w.writeAddress(this._getPauser());
        return w;
    }

    protected override _transfer(from: Address, to: Address, amount: u256): void {
        this._requireNotPaused();
        this._requireNotBlacklisted(from);
        this._requireNotBlacklisted(to);
        this._requireNotBlacklisted(Blockchain.tx.sender);

        super._transfer(from, to, amount);
    }

    protected override _increaseAllowance(owner: Address, spender: Address, amount: u256): void {
        this._requireNotPaused();
        this._requireNotBlacklisted(owner);
        this._requireNotBlacklisted(spender);

        super._increaseAllowance(owner, spender, amount);
    }

    protected override _decreaseAllowance(owner: Address, spender: Address, amount: u256): void {
        this._requireNotPaused();
        this._requireNotBlacklisted(owner);
        this._requireNotBlacklisted(spender);

        super._decreaseAllowance(owner, spender, amount);
    }

    protected override isSelectorExcluded(selector: Selector): boolean {
        if (selector == IS_BLACKLISTED_SELECTOR || selector == IS_PAUSED_SELECTOR) {
            return true;
        }
        return super.isSelectorExcluded(selector);
    }

    private _validateAddress(addr: Address, message: string): void {
        if (addr.equals(Address.zero())) {
            throw new Revert(message);
        }
    }

    private _isBlacklisted(account: Address): boolean {
        return !this._blacklist.get(account).isZero();
    }

    private _requireNotBlacklisted(account: Address): void {
        if (this._isBlacklisted(account)) {
            throw new Revert('Blacklisted');
        }
    }

    private _requireNotPaused(): void {
        if (this._paused.value) {
            throw new Revert('Paused');
        }
    }

    private _onlyOwner(): void {
        if (!Blockchain.tx.sender.equals(this._getOwner())) {
            throw new Revert('Not owner');
        }
    }

    private _onlyMinter(): void {
        if (!Blockchain.tx.sender.equals(this._getMinter())) {
            throw new Revert('Not minter');
        }
    }

    private _onlyBlacklister(): void {
        if (!Blockchain.tx.sender.equals(this._getBlacklister())) {
            throw new Revert('Not blacklister');
        }
    }

    private _onlyPauser(): void {
        if (!Blockchain.tx.sender.equals(this._getPauser())) {
            throw new Revert('Not pauser');
        }
    }

    private _getOwner(): Address {
        const stored = this._ownerMap.get(Address.zero());
        if (stored.isZero()) return Address.zero();
        return this._u256ToAddress(stored);
    }

    private _setOwner(addr: Address): void {
        this._ownerMap.set(Address.zero(), this._addressToU256(addr));
    }

    private _getPendingOwner(): Address {
        const stored = this._pendingOwnerMap.get(Address.zero());
        if (stored.isZero()) return Address.zero();
        return this._u256ToAddress(stored);
    }

    private _setPendingOwner(addr: Address): void {
        this._pendingOwnerMap.set(Address.zero(), this._addressToU256(addr));
    }

    private _getMinter(): Address {
        const stored = this._minterMap.get(Address.zero());
        if (stored.isZero()) return Address.zero();
        return this._u256ToAddress(stored);
    }

    private _setMinter(addr: Address): void {
        this._minterMap.set(Address.zero(), this._addressToU256(addr));
    }

    private _getBlacklister(): Address {
        const stored = this._blacklisterMap.get(Address.zero());
        if (stored.isZero()) return Address.zero();
        return this._u256ToAddress(stored);
    }

    private _setBlacklister(addr: Address): void {
        this._blacklisterMap.set(Address.zero(), this._addressToU256(addr));
    }

    private _getPauser(): Address {
        const stored = this._pauserMap.get(Address.zero());
        if (stored.isZero()) return Address.zero();
        return this._u256ToAddress(stored);
    }

    private _setPauser(addr: Address): void {
        this._pauserMap.set(Address.zero(), this._addressToU256(addr));
    }
}
```

### src/stablecoin/events/StableCoinEvents.ts
```typescript
import {
    Address,
    ADDRESS_BYTE_LENGTH,
    BytesWriter,
    NetEvent,
} from '@btc-vision/btc-runtime/runtime';

@final
export class BlacklistedEvent extends NetEvent {
    constructor(account: Address, blacklister: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH * 2);
        data.writeAddress(account);
        data.writeAddress(blacklister);

        super('Blacklisted', data);
    }
}

@final
export class UnblacklistedEvent extends NetEvent {
    constructor(account: Address, blacklister: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH * 2);
        data.writeAddress(account);
        data.writeAddress(blacklister);

        super('Unblacklisted', data);
    }
}

@final
export class PausedEvent extends NetEvent {
    constructor(pauser: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH);
        data.writeAddress(pauser);

        super('Paused', data);
    }
}

@final
export class UnpausedEvent extends NetEvent {
    constructor(pauser: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH);
        data.writeAddress(pauser);

        super('Unpaused', data);
    }
}

@final
export class OwnershipTransferStartedEvent extends NetEvent {
    constructor(currentOwner: Address, pendingOwner: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH * 2);
        data.writeAddress(currentOwner);
        data.writeAddress(pendingOwner);

        super('OwnershipTransferStarted', data);
    }
}

@final
export class OwnershipTransferredEvent extends NetEvent {
    constructor(previousOwner: Address, newOwner: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH * 2);
        data.writeAddress(previousOwner);
        data.writeAddress(newOwner);

        super('OwnershipTransferred', data);
    }
}

@final
export class MinterChangedEvent extends NetEvent {
    constructor(previousMinter: Address, newMinter: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH * 2);
        data.writeAddress(previousMinter);
        data.writeAddress(newMinter);

        super('MinterChanged', data);
    }
}

@final
export class BlacklisterChangedEvent extends NetEvent {
    constructor(previousBlacklister: Address, newBlacklister: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH * 2);
        data.writeAddress(previousBlacklister);
        data.writeAddress(newBlacklister);

        super('BlacklisterChanged', data);
    }
}

@final
export class PauserChangedEvent extends NetEvent {
    constructor(previousPauser: Address, newPauser: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH * 2);
        data.writeAddress(previousPauser);
        data.writeAddress(newPauser);

        super('PauserChanged', data);
    }
}
```

### src/stablecoin/index.ts
```typescript
import { Blockchain } from '@btc-vision/btc-runtime/runtime';
import { revertOnError } from '@btc-vision/btc-runtime/runtime/abort/abort';
import { MyStableCoin } from './MyStableCoin';

// DO NOT TOUCH TO THIS.
Blockchain.contract = () => {
    // ONLY CHANGE THE CONTRACT CLASS NAME.
    // DO NOT ADD CUSTOM LOGIC HERE.

    return new MyStableCoin();
};

// VERY IMPORTANT
export * from '@btc-vision/btc-runtime/runtime/exports';

// VERY IMPORTANT
export function abort(message: string, fileName: string, line: u32, column: u32): void {
    revertOnError(message, fileName, line, column);
}
```

---

## 5. Pegged Token / Wrapped BTC

### src/pegged-token/MyPeggedToken.ts
```typescript
import { u256 } from '@btc-vision/as-bignum/assembly';
import {
    Address,
    AddressMemoryMap,
    Blockchain,
    BytesWriter,
    Calldata,
    OP20InitParameters,
    OP20S,
    Revert,
} from '@btc-vision/btc-runtime/runtime';
import { CustodianChangedEvent } from '../shared-events/OracleEvents';

const custodianPointer: u16 = Blockchain.nextPointer;
const pendingCustodianPointer: u16 = Blockchain.nextPointer;

@final
export class MyPeggedToken extends OP20S {
    private readonly _custodianMap: AddressMemoryMap;
    private readonly _pendingCustodianMap: AddressMemoryMap;

    public constructor() {
        super();
        this._custodianMap = new AddressMemoryMap(custodianPointer);
        this._pendingCustodianMap = new AddressMemoryMap(pendingCustodianPointer);
    }

    public override onDeployment(calldata: Calldata): void {
        const custodian = calldata.readAddress();

        if (custodian.equals(Address.zero())) {
            throw new Revert('Invalid custodian');
        }

        const maxSupply: u256 = u256.fromU64(2100000000000000);
        const decimals: u8 = 8;
        const name: string = 'Wrapped BTC';
        const symbol: string = 'WBTC';

        this.instantiate(new OP20InitParameters(maxSupply, decimals, name, symbol));
        this.initializePeg(custodian, u256.One, u64.MAX_VALUE);

        this._setCustodian(custodian);

        this.emitEvent(new CustodianChangedEvent(Address.zero(), custodian));
    }

    @method(
        { name: 'to', type: ABIDataTypes.ADDRESS },
        { name: 'amount', type: ABIDataTypes.UINT256 },
    )
    @emit('Minted')
    public mint(calldata: Calldata): BytesWriter {
        this._onlyCustodian();

        const to = calldata.readAddress();
        const amount = calldata.readU256();

        if (to.equals(Address.zero())) {
            throw new Revert('Invalid recipient');
        }
        if (amount.isZero()) {
            throw new Revert('Amount is zero');
        }

        this._mint(to, amount);

        return new BytesWriter(0);
    }

    @method(
        { name: 'from', type: ABIDataTypes.ADDRESS },
        { name: 'amount', type: ABIDataTypes.UINT256 },
    )
    @emit('Burned')
    public burnFrom(calldata: Calldata): BytesWriter {
        this._onlyCustodian();

        const from = calldata.readAddress();
        const amount = calldata.readU256();

        if (from.equals(Address.zero())) {
            throw new Revert('Invalid address');
        }

        const balance = this._balanceOf(from);
        if (balance < amount) {
            throw new Revert('Insufficient balance');
        }

        this._burn(from, amount);

        return new BytesWriter(0);
    }

    @method({ name: 'newCustodian', type: ABIDataTypes.ADDRESS })
    public transferCustodian(calldata: Calldata): BytesWriter {
        this._onlyCustodian();

        const newCustodian = calldata.readAddress();
        if (newCustodian.equals(Address.zero())) {
            throw new Revert('Invalid new custodian');
        }

        this._setPendingCustodian(newCustodian);

        return new BytesWriter(0);
    }

    @method()
    @emit('CustodianChanged')
    public acceptCustodian(_: Calldata): BytesWriter {
        const pending = this._getPendingCustodian();
        if (pending.equals(Address.zero())) {
            throw new Revert('No pending custodian');
        }
        if (!Blockchain.tx.sender.equals(pending)) {
            throw new Revert('Not pending custodian');
        }

        const previousCustodian = this._getCustodian();
        this._setCustodian(pending);
        this._setPendingCustodian(Address.zero());

        this.emitEvent(new CustodianChangedEvent(previousCustodian, pending));

        return new BytesWriter(0);
    }

    @method()
    @returns({ name: 'custodian', type: ABIDataTypes.ADDRESS })
    public custodian(_: Calldata): BytesWriter {
        const w = new BytesWriter(32);
        w.writeAddress(this._getCustodian());
        return w;
    }

    @method()
    @returns({ name: 'pendingCustodian', type: ABIDataTypes.ADDRESS })
    public pendingCustodian(_: Calldata): BytesWriter {
        const w = new BytesWriter(32);
        w.writeAddress(this._getPendingCustodian());
        return w;
    }

    private _getCustodian(): Address {
        const stored = this._custodianMap.get(Address.zero());
        if (stored.isZero()) return Address.zero();
        return this._u256ToAddress(stored);
    }

    private _setCustodian(addr: Address): void {
        this._custodianMap.set(Address.zero(), this._addressToU256(addr));
    }

    private _getPendingCustodian(): Address {
        const stored = this._pendingCustodianMap.get(Address.zero());
        if (stored.isZero()) return Address.zero();
        return this._u256ToAddress(stored);
    }

    private _setPendingCustodian(addr: Address): void {
        this._pendingCustodianMap.set(Address.zero(), this._addressToU256(addr));
    }

    private _onlyCustodian(): void {
        if (!Blockchain.tx.sender.equals(this._getCustodian())) {
            throw new Revert('Not custodian');
        }
    }
}
```

### src/pegged-token/index.ts
```typescript
import { Blockchain } from '@btc-vision/btc-runtime/runtime';
import { revertOnError } from '@btc-vision/btc-runtime/runtime/abort/abort';
import { MyPeggedToken } from './MyPeggedToken';

// DO NOT TOUCH TO THIS.
Blockchain.contract = () => {
    // ONLY CHANGE THE CONTRACT CLASS NAME.
    // DO NOT ADD CUSTOM LOGIC HERE.

    return new MyPeggedToken();
};

// VERY IMPORTANT
export * from '@btc-vision/btc-runtime/runtime/exports';

// VERY IMPORTANT
export function abort(message: string, fileName: string, line: u32, column: u32): void {
    revertOnError(message, fileName, line, column);
}
```

---

## 6. Multi-Oracle Stablecoin

### src/multi-oracle-stablecoin/MyMultiOracleStable.ts
```typescript
import { u256 } from '@btc-vision/as-bignum/assembly';
import {
    Address,
    AddressMemoryMap,
    Blockchain,
    BytesWriter,
    Calldata,
    EMPTY_POINTER,
    OP20InitParameters,
    OP20S,
    Revert,
    SafeMath,
    StoredU256,
} from '@btc-vision/btc-runtime/runtime';
import {
    OracleAddedEvent,
    OracleRemovedEvent,
    PriceAggregatedEvent,
    PriceSubmittedEvent,
} from '../shared-events/OracleEvents';

const oracleCountPointer: u16 = Blockchain.nextPointer;
const minOraclesPointer: u16 = Blockchain.nextPointer;
const maxDeviationPointer: u16 = Blockchain.nextPointer;
const submissionWindowPointer: u16 = Blockchain.nextPointer;
const oracleSubmissionsPointer: u16 = Blockchain.nextPointer;
const oracleTimestampsPointer: u16 = Blockchain.nextPointer;
const oracleActivePointer: u16 = Blockchain.nextPointer;
const adminPointer: u16 = Blockchain.nextPointer;

@final
export class MultiOracleStablecoin extends OP20S {
    private readonly _oracleCount: StoredU256;
    private readonly _minOracles: StoredU256;
    private readonly _maxDeviation: StoredU256;
    private readonly _submissionWindow: StoredU256;
    private readonly _oracleSubmissions: AddressMemoryMap;
    private readonly _oracleTimestamps: AddressMemoryMap;
    private readonly _oracleActive: AddressMemoryMap;
    private readonly _adminMap: AddressMemoryMap;

    public constructor() {
        super();
        this._oracleCount = new StoredU256(oracleCountPointer, EMPTY_POINTER);
        this._minOracles = new StoredU256(minOraclesPointer, EMPTY_POINTER);
        this._maxDeviation = new StoredU256(maxDeviationPointer, EMPTY_POINTER);
        this._submissionWindow = new StoredU256(submissionWindowPointer, EMPTY_POINTER);
        this._oracleSubmissions = new AddressMemoryMap(oracleSubmissionsPointer);
        this._oracleTimestamps = new AddressMemoryMap(oracleTimestampsPointer);
        this._oracleActive = new AddressMemoryMap(oracleActivePointer);
        this._adminMap = new AddressMemoryMap(adminPointer);
    }

    public override onDeployment(calldata: Calldata): void {
        const admin = calldata.readAddress();
        const initialRate = calldata.readU256();
        const minOracles = calldata.readU64();
        const maxDeviation = calldata.readU64();
        const submissionWindow = calldata.readU64();

        if (admin.equals(Address.zero())) {
            throw new Revert('Invalid admin');
        }

        if (initialRate.isZero()) {
            throw new Revert('Invalid initial rate');
        }

        if (minOracles == 0) {
            throw new Revert('Invalid min oracles');
        }

        if (maxDeviation == 0 || maxDeviation > 1000) {
            throw new Revert('Invalid max deviation');
        }

        if (submissionWindow == 0) {
            throw new Revert('Invalid submission window');
        }

        const maxSupply: u256 = u256.Max;
        const decimals: u8 = 8;
        const name: string = 'USD Stablecoin';
        const symbol: string = 'opUSD';

        this.instantiate(new OP20InitParameters(maxSupply, decimals, name, symbol));
        this.initializePeg(admin, initialRate, submissionWindow * 2);

        this._setAdmin(admin);
        this._minOracles.value = u256.fromU64(minOracles);
        this._maxDeviation.value = u256.fromU64(maxDeviation);
        this._submissionWindow.value = u256.fromU64(submissionWindow);
    }

    @method({ name: 'oracle', type: ABIDataTypes.ADDRESS })
    @emit('OracleAdded')
    public addOracle(calldata: Calldata): BytesWriter {
        this._onlyAdmin();

        const oracle = calldata.readAddress();
        if (oracle.equals(Address.zero())) {
            throw new Revert('Invalid oracle');
        }

        const alreadyActive = this._oracleActive.get(oracle);
        if (!alreadyActive.isZero()) {
            throw new Revert('Oracle exists');
        }

        this._oracleActive.set(oracle, u256.One);
        this._oracleCount.value = SafeMath.add(this._oracleCount.value, u256.One);

        this.emitEvent(new OracleAddedEvent(oracle, Blockchain.tx.sender));

        return new BytesWriter(0);
    }

    @method({ name: 'oracle', type: ABIDataTypes.ADDRESS })
    @emit('OracleRemoved')
    public removeOracle(calldata: Calldata): BytesWriter {
        this._onlyAdmin();

        const oracle = calldata.readAddress();
        const active = this._oracleActive.get(oracle);
        if (active.isZero()) {
            throw new Revert('Oracle not active');
        }

        this._oracleActive.set(oracle, u256.Zero);
        this._oracleCount.value = SafeMath.sub(this._oracleCount.value, u256.One);

        this.emitEvent(new OracleRemovedEvent(oracle, Blockchain.tx.sender));

        return new BytesWriter(0);
    }

    @method({ name: 'price', type: ABIDataTypes.UINT256 })
    @emit('PriceSubmitted')
    public submitPrice(calldata: Calldata): BytesWriter {
        const sender = Blockchain.tx.sender;
        const active = this._oracleActive.get(sender);
        if (active.isZero()) {
            throw new Revert('Not an oracle');
        }

        const price = calldata.readU256();
        if (price.isZero()) {
            throw new Revert('Invalid price');
        }

        const blockNumber = Blockchain.block.number;

        this._oracleSubmissions.set(sender, price);
        this._oracleTimestamps.set(sender, u256.fromU64(blockNumber));

        this.emitEvent(new PriceSubmittedEvent(sender, price, blockNumber));

        return new BytesWriter(0);
    }

    @method({ name: 'oracles', type: ABIDataTypes.ARRAY_OF_ADDRESSES })
    @emit('PriceAggregated')
    public aggregatePrice(calldata: Calldata): BytesWriter {
        const oracleCount = calldata.readU32();
        if (u256.fromU32(oracleCount) < this._minOracles.value) {
            throw new Revert('Not enough oracles');
        }

        const currentBlock = Blockchain.block.number;
        const window = this._submissionWindow.value.toU64();
        const maxDev = this._maxDeviation.value;

        const prices = new Array<u256>();

        for (let i: u32 = 0; i < oracleCount; i++) {
            const oracle = calldata.readAddress();

            const active = this._oracleActive.get(oracle);
            if (active.isZero()) continue;

            const timestamp = this._oracleTimestamps.get(oracle).toU64();
            if (currentBlock > timestamp + window) continue;

            const price = this._oracleSubmissions.get(oracle);
            if (price.isZero()) continue;

            prices.push(price);
        }

        const validCount: u32 = <u32>prices.length;

        if (u256.fromU32(validCount) < this._minOracles.value) {
            throw new Revert('Insufficient valid submissions');
        }

        for (let i = 0; i < prices.length - 1; i++) {
            for (let j = 0; j < prices.length - i - 1; j++) {
                if (prices[j] > prices[j + 1]) {
                    const temp = prices[j];
                    prices[j] = prices[j + 1];
                    prices[j + 1] = temp;
                }
            }
        }

        const median = prices[prices.length / 2];

        const basisPoints = u256.fromU64(10000);
        for (let i = 0; i < prices.length; i++) {
            const price = prices[i];
            let deviation: u256;
            if (price > median) {
                deviation = SafeMath.div(
                    SafeMath.mul(SafeMath.sub(price, median), basisPoints),
                    median,
                );
            } else {
                deviation = SafeMath.div(
                    SafeMath.mul(SafeMath.sub(median, price), basisPoints),
                    median,
                );
            }

            if (deviation > maxDev) {
                throw new Revert('Deviation too high');
            }
        }

        this._pegRate.value = median;
        this._pegUpdatedAt.value = u256.fromU64(currentBlock);

        this.emitEvent(new PriceAggregatedEvent(median, validCount, currentBlock));

        return new BytesWriter(0);
    }

    @method(
        { name: 'to', type: ABIDataTypes.ADDRESS },
        { name: 'amount', type: ABIDataTypes.UINT256 },
    )
    @emit('Minted')
    public mint(calldata: Calldata): BytesWriter {
        this._onlyAdmin();

        const to = calldata.readAddress();
        const amount = calldata.readU256();

        if (to.equals(Address.zero())) {
            throw new Revert('Invalid recipient');
        }
        if (amount.isZero()) {
            throw new Revert('Amount is zero');
        }

        this._mint(to, amount);

        return new BytesWriter(0);
    }

    @method()
    @returns({ name: 'count', type: ABIDataTypes.UINT256 })
    public oracleCount(_: Calldata): BytesWriter {
        const w = new BytesWriter(32);
        w.writeU256(this._oracleCount.value);
        return w;
    }

    @method()
    @returns({ name: 'min', type: ABIDataTypes.UINT256 })
    public minOracles(_: Calldata): BytesWriter {
        const w = new BytesWriter(32);
        w.writeU256(this._minOracles.value);
        return w;
    }

    @method({ name: 'oracle', type: ABIDataTypes.ADDRESS })
    @returns({ name: 'active', type: ABIDataTypes.BOOL })
    public isOracleActive(calldata: Calldata): BytesWriter {
        const oracle = calldata.readAddress();
        const w = new BytesWriter(1);
        w.writeBoolean(!this._oracleActive.get(oracle).isZero());
        return w;
    }

    @method({ name: 'oracle', type: ABIDataTypes.ADDRESS })
    @returns({ name: 'price', type: ABIDataTypes.UINT256 })
    public oracleSubmission(calldata: Calldata): BytesWriter {
        const oracle = calldata.readAddress();
        const w = new BytesWriter(32);
        w.writeU256(this._oracleSubmissions.get(oracle));
        return w;
    }

    @method()
    @returns({ name: 'admin', type: ABIDataTypes.ADDRESS })
    public admin(_: Calldata): BytesWriter {
        const w = new BytesWriter(32);
        w.writeAddress(this._getAdmin());
        return w;
    }

    private _getAdmin(): Address {
        const stored = this._adminMap.get(Address.zero());
        if (stored.isZero()) return Address.zero();
        return this._u256ToAddress(stored);
    }

    private _setAdmin(addr: Address): void {
        this._adminMap.set(Address.zero(), this._addressToU256(addr));
    }

    private _onlyAdmin(): void {
        if (!Blockchain.tx.sender.equals(this._getAdmin())) {
            throw new Revert('Not admin');
        }
    }
}
```

### src/multi-oracle-stablecoin/index.ts
```typescript
import { Blockchain } from '@btc-vision/btc-runtime/runtime';
import { revertOnError } from '@btc-vision/btc-runtime/runtime/abort/abort';
import { MultiOracleStablecoin } from './MyMultiOracleStable';

// DO NOT TOUCH TO THIS.
Blockchain.contract = () => {
    // ONLY CHANGE THE CONTRACT CLASS NAME.
    // DO NOT ADD CUSTOM LOGIC HERE.

    return new MultiOracleStablecoin();
};

// VERY IMPORTANT
export * from '@btc-vision/btc-runtime/runtime/exports';

// VERY IMPORTANT
export function abort(message: string, fileName: string, line: u32, column: u32): void {
    revertOnError(message, fileName, line, column);
}
```

---

## 7. BTC Name Resolver

### src/btc-resolver/BtcNameResolver.ts
```typescript
/**
 * OPNet BTC Name Resolver Smart Contract
 *
 * A decentralized domain name resolver for .btc domains. Manages:
 * - Domain ownership (mysite.btc)
 * - Subdomain support (sub.mysite.btc)
 * - Contenthash storage (CIDv0, CIDv1, IPNS, SHA-256)
 * - Two-step ownership transfers
 * - TTL (time-to-live) per domain
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { u256 } from '@btc-vision/as-bignum/assembly';
import {
    Address,
    ADDRESS_BYTE_LENGTH,
    Blockchain,
    BytesWriter,
    Calldata,
    ExtendedAddress,
    OP_NET,
    Revert,
    SafeMath,
    StoredString,
    U256_BYTE_LENGTH,
    U64_BYTE_LENGTH,
} from '@btc-vision/btc-runtime/runtime';
import { StoredMapU256 } from '@btc-vision/btc-runtime/runtime/storage/maps/StoredMapU256';
import { AdvancedStoredString } from '@btc-vision/btc-runtime/runtime/storage/AdvancedStoredString';

import {
    ContenthashChangedEvent,
    ContenthashClearedEvent,
    DomainPriceChangedEvent,
    DomainRegisteredEvent,
    DomainTransferCancelledEvent,
    DomainTransferCompletedEvent,
    DomainTransferInitiatedEvent,
    SubdomainCreatedEvent,
    SubdomainDeletedEvent,
    TreasuryChangedEvent,
    TTLChangedEvent,
} from './events/ResolverEvents';

import {
    CONTENTHASH_TYPE_CIDv0,
    CONTENTHASH_TYPE_CIDv1,
    CONTENTHASH_TYPE_IPNS,
    CONTENTHASH_TYPE_SHA256,
    DEFAULT_DOMAIN_PRICE_SATS,
    DEFAULT_TTL,
    MAX_CONTENTHASH_LENGTH,
    MAX_DOMAIN_LENGTH,
    MAX_FULL_NAME_LENGTH,
    MAX_SUBDOMAIN_LENGTH,
    MAX_TTL,
    MIN_DOMAIN_LENGTH,
    MIN_TTL,
    PREMIUM_TIER_0_DOMAINS,
    PREMIUM_TIER_0_PRICE_SATS,
    PREMIUM_TIER_1_DOMAINS,
    PREMIUM_TIER_1_PRICE_SATS,
    PREMIUM_TIER_2_DOMAINS,
    PREMIUM_TIER_2_PRICE_SATS,
    PREMIUM_TIER_3_DOMAINS,
    PREMIUM_TIER_3_PRICE_SATS,
    PREMIUM_TIER_4_DOMAINS,
    PREMIUM_TIER_4_PRICE_SATS,
    PREMIUM_TIER_5_DOMAINS,
    PREMIUM_TIER_5_PRICE_SATS,
    PREMIUM_TIER_6_DOMAINS,
    RESERVED_DOMAIN,
} from './constants';

// =============================================================================
// Storage Pointer Allocation (Module Level - CRITICAL)
// =============================================================================

// Contract-level settings
const treasuryAddressPointer: u16 = Blockchain.nextPointer;
const domainPriceSatsPointer: u16 = Blockchain.nextPointer;

// Domain storage
const domainExistsPointer: u16 = Blockchain.nextPointer;
const domainOwnerPointer: u16 = Blockchain.nextPointer;
const domainCreatedPointer: u16 = Blockchain.nextPointer;
const domainTTLPointer: u16 = Blockchain.nextPointer;

// Domain transfer tracking
const domainPendingOwnerPointer: u16 = Blockchain.nextPointer;
const domainPendingTimestampPointer: u16 = Blockchain.nextPointer;

// Subdomain storage
const subdomainExistsPointer: u16 = Blockchain.nextPointer;
const subdomainOwnerPointer: u16 = Blockchain.nextPointer;
const subdomainParentPointer: u16 = Blockchain.nextPointer;
const subdomainTTLPointer: u16 = Blockchain.nextPointer;

// Contenthash storage
const contenthashTypePointer: u16 = Blockchain.nextPointer;
const contenthashDataPointer: u16 = Blockchain.nextPointer;
const contenthashStringPointer: u16 = Blockchain.nextPointer;

// =============================================================================
// Contract Implementation
// =============================================================================

@final
export class BtcNameResolver extends OP_NET {
    // -------------------------------------------------------------------------
    // Settings Storage
    // -------------------------------------------------------------------------
    private readonly treasuryAddress: StoredString;
    private readonly domainPriceSats: StoredMapU256;

    // -------------------------------------------------------------------------
    // Domain Storage Maps
    // -------------------------------------------------------------------------
    private readonly domainExists: StoredMapU256;
    private readonly domainOwner: StoredMapU256;
    private readonly domainCreated: StoredMapU256;
    private readonly domainTTL: StoredMapU256;
    private readonly domainPendingOwner: StoredMapU256;
    private readonly domainPendingTimestamp: StoredMapU256;

    // -------------------------------------------------------------------------
    // Subdomain Storage Maps
    // -------------------------------------------------------------------------
    private readonly subdomainExists: StoredMapU256;
    private readonly subdomainOwner: StoredMapU256;
    private readonly subdomainParent: StoredMapU256;
    private readonly subdomainTTL: StoredMapU256;

    // -------------------------------------------------------------------------
    // Contenthash Storage Maps
    // -------------------------------------------------------------------------
    private readonly contenthashType: StoredMapU256;
    private readonly contenthashData: StoredMapU256;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    public constructor() {
        super();

        // Initialize settings storage
        this.treasuryAddress = new StoredString(treasuryAddressPointer);
        this.domainPriceSats = new StoredMapU256(domainPriceSatsPointer);

        // Initialize domain storage
        this.domainExists = new StoredMapU256(domainExistsPointer);
        this.domainOwner = new StoredMapU256(domainOwnerPointer);
        this.domainCreated = new StoredMapU256(domainCreatedPointer);
        this.domainTTL = new StoredMapU256(domainTTLPointer);
        this.domainPendingOwner = new StoredMapU256(domainPendingOwnerPointer);
        this.domainPendingTimestamp = new StoredMapU256(domainPendingTimestampPointer);

        // Initialize subdomain storage
        this.subdomainExists = new StoredMapU256(subdomainExistsPointer);
        this.subdomainOwner = new StoredMapU256(subdomainOwnerPointer);
        this.subdomainParent = new StoredMapU256(subdomainParentPointer);
        this.subdomainTTL = new StoredMapU256(subdomainTTLPointer);

        // Initialize contenthash storage
        this.contenthashType = new StoredMapU256(contenthashTypePointer);
        this.contenthashData = new StoredMapU256(contenthashDataPointer);
    }

    // -------------------------------------------------------------------------
    // Deployment Initialization
    // -------------------------------------------------------------------------
    public override onDeployment(calldata: Calldata): void {
        // Read optional treasury address from calldata
        const treasuryAddr = calldata.readStringWithLength();
        if (treasuryAddr.length > 0) {
            this.treasuryAddress.value = treasuryAddr;
        } else {
            this.treasuryAddress.value = Blockchain.tx.origin.p2tr();
        }

        // Set default price
        this.domainPriceSats.set(u256.Zero, u256.fromU64(DEFAULT_DOMAIN_PRICE_SATS));

        // Reserve 'opnet.btc' for deployer
        const opnetDomainKey = this.getDomainKeyU256(RESERVED_DOMAIN);
        const blockNumber = Blockchain.block.number;
        const deployer = Blockchain.tx.origin;

        this.domainExists.set(opnetDomainKey, u256.One);
        this.domainOwner.set(opnetDomainKey, this._addressToU256(deployer));
        this.domainCreated.set(opnetDomainKey, u256.fromU64(blockNumber));
        this.domainTTL.set(opnetDomainKey, u256.fromU64(DEFAULT_TTL));

        this.emitEvent(new DomainRegisteredEvent(opnetDomainKey, deployer, blockNumber));
    }

    // =========================================================================
    // ADMIN METHODS (Owner Only)
    // =========================================================================

    /**
     * Set the treasury address for receiving payments.
     */
    @method({ name: 'treasuryAddress', type: ABIDataTypes.STRING })
    @emit('TreasuryChanged')
    public setTreasuryAddress(calldata: Calldata): BytesWriter {
        this.onlyDeployer(Blockchain.tx.sender);

        const newAddress = calldata.readStringWithLength();
        if (newAddress.length == 0) {
            throw new Revert('Invalid treasury address');
        }

        this.validateBitcoinAddress(newAddress);

        const oldAddressHash = this.stringToU256Hash(this.treasuryAddress.value);
        const newAddressHash = this.stringToU256Hash(newAddress);

        this.treasuryAddress.value = newAddress;

        this.emitEvent(
            new TreasuryChangedEvent(oldAddressHash, newAddressHash, Blockchain.block.number),
        );

        return new BytesWriter(0);
    }

    /**
     * Set the base price for registering domains.
     */
    @method({ name: 'priceSats', type: ABIDataTypes.UINT64 })
    @emit('DomainPriceChanged')
    public setDomainPrice(calldata: Calldata): BytesWriter {
        this.onlyDeployer(Blockchain.tx.sender);

        const newPrice = calldata.readU64();
        const oldPrice = this.domainPriceSats.get(u256.Zero).toU64();

        this.domainPriceSats.set(u256.Zero, u256.fromU64(newPrice));

        this.emitEvent(new DomainPriceChangedEvent(oldPrice, newPrice, Blockchain.block.number));

        return new BytesWriter(0);
    }

    // =========================================================================
    // DOMAIN REGISTRATION METHODS
    // =========================================================================

    /**
     * Register a new .btc domain.
     * @param calldata Contains domain name (without .btc suffix)
     */
    @method({ name: 'domainName', type: ABIDataTypes.STRING })
    @emit('DomainRegistered')
    public registerDomain(calldata: Calldata): BytesWriter {
        const domainName = calldata.readStringWithLength();

        // Validate domain name
        this.validateDomainName(domainName);

        // Check if reserved
        if (domainName == RESERVED_DOMAIN) {
            throw new Revert('Domain is reserved');
        }

        const domainKey = this.getDomainKeyU256(domainName);

        // Check if already exists
        if (!this.domainExists.get(domainKey).isZero()) {
            throw new Revert('Domain already exists');
        }

        // Calculate and verify payment (premium pricing for short domains)
        const price = this.calculateDomainPrice(domainName);
        this.verifyPayment(price);

        // Register domain
        const blockNumber = Blockchain.block.number;
        const sender = Blockchain.tx.sender;

        this.domainExists.set(domainKey, u256.One);
        this.domainOwner.set(domainKey, this._addressToU256(sender));
        this.domainCreated.set(domainKey, u256.fromU64(blockNumber));
        this.domainTTL.set(domainKey, u256.fromU64(DEFAULT_TTL));

        this.emitEvent(new DomainRegisteredEvent(domainKey, sender, blockNumber));

        return new BytesWriter(0);
    }

    // =========================================================================
    // DOMAIN TRANSFER METHODS (Two-Step)
    // =========================================================================

    /**
     * Initiate transfer of domain ownership.
     */
    @method(
        { name: 'domainName', type: ABIDataTypes.STRING },
        { name: 'newOwner', type: ABIDataTypes.ADDRESS },
    )
    @emit('DomainTransferInitiated')
    public initiateTransfer(calldata: Calldata): BytesWriter {
        const domainName = calldata.readStringWithLength();
        const newOwner = calldata.readAddress();

        const domainKey = this.getDomainKeyU256(domainName);

        // Verify caller is owner
        this.requireDomainOwner(domainKey);

        // Validate new owner
        if (newOwner.equals(Address.zero())) {
            throw new Revert('Invalid new owner');
        }

        // Set pending transfer
        const blockNumber = Blockchain.block.number;
        this.domainPendingOwner.set(domainKey, this._addressToU256(newOwner));
        this.domainPendingTimestamp.set(domainKey, u256.fromU64(blockNumber));

        this.emitEvent(
            new DomainTransferInitiatedEvent(
                domainKey,
                Blockchain.tx.sender,
                newOwner,
                blockNumber,
            ),
        );

        return new BytesWriter(0);
    }

    /**
     * Accept a pending domain transfer.
     */
    @method({ name: 'domainName', type: ABIDataTypes.STRING })
    @emit('DomainTransferCompleted')
    public acceptTransfer(calldata: Calldata): BytesWriter {
        const domainName = calldata.readStringWithLength();
        const domainKey = this.getDomainKeyU256(domainName);

        // Verify pending transfer exists
        const pendingOwner = this._u256ToAddress(this.domainPendingOwner.get(domainKey));
        if (pendingOwner.equals(Address.zero())) {
            throw new Revert('No pending transfer');
        }

        // Verify caller is pending owner
        if (!Blockchain.tx.sender.equals(pendingOwner)) {
            throw new Revert('Not pending owner');
        }

        // Complete transfer
        const previousOwner = this._u256ToAddress(this.domainOwner.get(domainKey));
        const blockNumber = Blockchain.block.number;

        this.domainOwner.set(domainKey, this._addressToU256(pendingOwner));
        this.domainPendingOwner.set(domainKey, u256.Zero);
        this.domainPendingTimestamp.set(domainKey, u256.Zero);

        this.emitEvent(
            new DomainTransferCompletedEvent(domainKey, previousOwner, pendingOwner, blockNumber),
        );

        return new BytesWriter(0);
    }

    /**
     * Cancel a pending domain transfer.
     */
    @method({ name: 'domainName', type: ABIDataTypes.STRING })
    @emit('DomainTransferCancelled')
    public cancelTransfer(calldata: Calldata): BytesWriter {
        const domainName = calldata.readStringWithLength();
        const domainKey = this.getDomainKeyU256(domainName);

        // Verify caller is owner
        this.requireDomainOwner(domainKey);

        // Verify pending transfer exists
        if (this.domainPendingOwner.get(domainKey).isZero()) {
            throw new Revert('No pending transfer');
        }

        // Clear pending transfer
        this.domainPendingOwner.set(domainKey, u256.Zero);
        this.domainPendingTimestamp.set(domainKey, u256.Zero);

        this.emitEvent(
            new DomainTransferCancelledEvent(
                domainKey,
                Blockchain.tx.sender,
                Blockchain.block.number,
            ),
        );

        return new BytesWriter(0);
    }

    /**
     * Direct transfer of domain ownership (single transaction).
     * Owner can directly transfer without requiring recipient acceptance.
     */
    @method(
        { name: 'domainName', type: ABIDataTypes.STRING },
        { name: 'newOwner', type: ABIDataTypes.ADDRESS },
    )
    @emit('DomainTransferCompleted')
    public transferDomain(calldata: Calldata): BytesWriter {
        const domainName = calldata.readStringWithLength();
        const newOwner = calldata.readAddress();

        const domainKey = this.getDomainKeyU256(domainName);

        // Verify caller is owner
        this.requireDomainOwner(domainKey);

        // Validate new owner
        if (newOwner.equals(Address.zero())) {
            throw new Revert('Invalid new owner');
        }

        // Cannot transfer to self
        if (newOwner.equals(Blockchain.tx.sender)) {
            throw new Revert('Cannot transfer to self');
        }

        // Get current owner for event
        const previousOwner = this._u256ToAddress(this.domainOwner.get(domainKey));
        const blockNumber = Blockchain.block.number;

        // Clear any pending transfer
        this.domainPendingOwner.set(domainKey, u256.Zero);
        this.domainPendingTimestamp.set(domainKey, u256.Zero);

        // Transfer ownership
        this.domainOwner.set(domainKey, this._addressToU256(newOwner));

        this.emitEvent(
            new DomainTransferCompletedEvent(domainKey, previousOwner, newOwner, blockNumber),
        );

        return new BytesWriter(0);
    }

    /**
     * Transfer domain ownership via signature (gasless transfer).
     * Allows owner to sign a transfer message off-chain for a third party to execute.
     * @param ownerAddress - Current owner's address (32 bytes)
     * @param ownerTweakedPublicKey - Owner's tweaked public key for signature verification
     * @param domainName - Domain to transfer
     * @param newOwner - Recipient address
     * @param deadline - Block number deadline for signature validity
     * @param signature - 64-byte Schnorr signature
     */
    @method(
        { name: 'ownerAddress', type: ABIDataTypes.BYTES32 },
        { name: 'ownerTweakedPublicKey', type: ABIDataTypes.BYTES32 },
        { name: 'domainName', type: ABIDataTypes.STRING },
        { name: 'newOwner', type: ABIDataTypes.ADDRESS },
        { name: 'deadline', type: ABIDataTypes.UINT64 },
        { name: 'signature', type: ABIDataTypes.BYTES },
    )
    @emit('DomainTransferCompleted')
    public transferDomainBySignature(calldata: Calldata): BytesWriter {
        const ownerAddressBytes = calldata.readBytesArray(ADDRESS_BYTE_LENGTH);
        const ownerTweakedPublicKey = calldata.readBytesArray(ADDRESS_BYTE_LENGTH);

        const owner = new ExtendedAddress(ownerTweakedPublicKey, ownerAddressBytes);

        const domainName = calldata.readStringWithLength();
        const newOwner = calldata.readAddress();
        const deadline = calldata.readU64();
        const signature = calldata.readBytesWithLength();

        // Check signature length (Schnorr = 64 bytes)
        if (signature.length !== 64) {
            throw new Revert('Invalid signature length');
        }

        // Check deadline
        if (Blockchain.block.number > deadline) {
            throw new Revert('Signature expired');
        }

        const domainKey = this.getDomainKeyU256(domainName);

        // Verify domain exists
        if (this.domainExists.get(domainKey).isZero()) {
            throw new Revert('Domain does not exist');
        }

        // Verify the provided owner address matches the domain owner
        const storedOwner = this._u256ToAddress(this.domainOwner.get(domainKey));
        if (!storedOwner.equals(owner)) {
            throw new Revert('Not domain owner');
        }

        // Validate new owner
        if (newOwner.equals(Address.zero())) {
            throw new Revert('Invalid new owner');
        }

        if (newOwner.equals(storedOwner)) {
            throw new Revert('Cannot transfer to self');
        }

        // Build message hash for signature verification
        // Structure: sha256(domainKey + newOwner + deadline)
        const messageData = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH + U64_BYTE_LENGTH,
        );
        messageData.writeU256(domainKey);
        messageData.writeAddress(newOwner);
        messageData.writeU64(deadline);

        const messageHash = Blockchain.sha256(messageData.getBuffer());

        // Verify signature
        if (!Blockchain.verifySignature(owner, signature, messageHash)) {
            throw new Revert('Invalid signature');
        }

        const blockNumber = Blockchain.block.number;

        // Clear any pending transfer
        this.domainPendingOwner.set(domainKey, u256.Zero);
        this.domainPendingTimestamp.set(domainKey, u256.Zero);

        // Transfer ownership
        this.domainOwner.set(domainKey, this._addressToU256(newOwner));

        this.emitEvent(
            new DomainTransferCompletedEvent(domainKey, storedOwner, newOwner, blockNumber),
        );

        return new BytesWriter(0);
    }

    // =========================================================================
    // SUBDOMAIN METHODS
    // =========================================================================

    /**
     * Create a subdomain under a domain you own.
     */
    @method(
        { name: 'parentDomain', type: ABIDataTypes.STRING },
        { name: 'subdomainLabel', type: ABIDataTypes.STRING },
        { name: 'subdomainOwner', type: ABIDataTypes.ADDRESS },
    )
    @emit('SubdomainCreated')
    public createSubdomain(calldata: Calldata): BytesWriter {
        const parentDomain = calldata.readStringWithLength();
        const subdomainLabel = calldata.readStringWithLength();
        const subdomainOwner = calldata.readAddress();

        // Validate subdomain label
        this.validateSubdomainLabel(subdomainLabel);

        const parentKey = this.getDomainKeyU256(parentDomain);

        // Verify parent domain exists
        if (this.domainExists.get(parentKey).isZero()) {
            throw new Revert('Parent domain does not exist');
        }

        // Verify caller owns parent domain
        this.requireDomainOwner(parentKey);

        // Generate full subdomain key: "label.parent"
        const fullName = subdomainLabel + '.' + parentDomain;

        // Validate full name length (DNS standard max is 253)
        if (fullName.length > <i32>MAX_FULL_NAME_LENGTH) {
            throw new Revert('Full name exceeds maximum length');
        }

        const subdomainKey = this.getSubdomainKeyU256(fullName);

        // Check if subdomain already exists
        if (!this.subdomainExists.get(subdomainKey).isZero()) {
            throw new Revert('Subdomain already exists');
        }

        // Determine owner (default to caller if zero address)
        const owner = subdomainOwner.equals(Address.zero()) ? Blockchain.tx.sender : subdomainOwner;

        const blockNumber = Blockchain.block.number;

        // Register subdomain
        this.subdomainExists.set(subdomainKey, u256.One);
        this.subdomainOwner.set(subdomainKey, this._addressToU256(owner));
        this.subdomainParent.set(subdomainKey, parentKey);
        this.subdomainTTL.set(subdomainKey, u256.fromU64(DEFAULT_TTL));

        this.emitEvent(new SubdomainCreatedEvent(parentKey, subdomainKey, owner, blockNumber));

        return new BytesWriter(0);
    }

    /**
     * Delete a subdomain. Only parent domain owner can delete.
     */
    @method(
        { name: 'parentDomain', type: ABIDataTypes.STRING },
        { name: 'subdomainLabel', type: ABIDataTypes.STRING },
    )
    @emit('SubdomainDeleted')
    public deleteSubdomain(calldata: Calldata): BytesWriter {
        const parentDomain = calldata.readStringWithLength();
        const subdomainLabel = calldata.readStringWithLength();

        const parentKey = this.getDomainKeyU256(parentDomain);

        // Verify caller owns parent domain
        this.requireDomainOwner(parentKey);

        const fullName = subdomainLabel + '.' + parentDomain;
        const subdomainKey = this.getSubdomainKeyU256(fullName);

        // Verify subdomain exists
        if (this.subdomainExists.get(subdomainKey).isZero()) {
            throw new Revert('Subdomain does not exist');
        }

        // Clear subdomain data
        this.subdomainExists.set(subdomainKey, u256.Zero);
        this.subdomainOwner.set(subdomainKey, u256.Zero);
        this.subdomainParent.set(subdomainKey, u256.Zero);
        this.subdomainTTL.set(subdomainKey, u256.Zero);

        // Clear contenthash if set
        this.contenthashType.set(subdomainKey, u256.Zero);
        this.contenthashData.set(subdomainKey, u256.Zero);

        this.emitEvent(new SubdomainDeletedEvent(parentKey, subdomainKey, Blockchain.block.number));

        return new BytesWriter(0);
    }

    // =========================================================================
    // CONTENTHASH METHODS
    // =========================================================================

    /**
     * Set contenthash for a domain or subdomain using CIDv0 (Qm...).
     */
    @method({ name: 'name', type: ABIDataTypes.STRING }, { name: 'cid', type: ABIDataTypes.STRING })
    @emit('ContenthashChanged')
    public setContenthashCIDv0(calldata: Calldata): BytesWriter {
        const name = calldata.readStringWithLength();
        const cid = calldata.readStringWithLength();

        this.validateCIDv0(cid);

        const nameKey = this.resolveNameKey(name);
        this.requireNameOwner(name, nameKey);

        // Store type and string CID
        this.contenthashType.set(nameKey, u256.fromU32(<u32>CONTENTHASH_TYPE_CIDv0));

        const keyBytes = this.getNameKeyBytes(name);
        const cidStorage = new AdvancedStoredString(
            contenthashStringPointer,
            keyBytes,
            MAX_CONTENTHASH_LENGTH,
        );
        cidStorage.value = cid;

        this.emitEvent(
            new ContenthashChangedEvent(nameKey, CONTENTHASH_TYPE_CIDv0, Blockchain.block.number),
        );

        return new BytesWriter(0);
    }

    /**
     * Set contenthash for a domain or subdomain using CIDv1 (bafy...).
     */
    @method({ name: 'name', type: ABIDataTypes.STRING }, { name: 'cid', type: ABIDataTypes.STRING })
    @emit('ContenthashChanged')
    public setContenthashCIDv1(calldata: Calldata): BytesWriter {
        const name = calldata.readStringWithLength();
        const cid = calldata.readStringWithLength();

        this.validateCIDv1(cid);

        const nameKey = this.resolveNameKey(name);
        this.requireNameOwner(name, nameKey);

        this.contenthashType.set(nameKey, u256.fromU32(<u32>CONTENTHASH_TYPE_CIDv1));

        const keyBytes = this.getNameKeyBytes(name);
        const cidStorage = new AdvancedStoredString(
            contenthashStringPointer,
            keyBytes,
            MAX_CONTENTHASH_LENGTH,
        );
        cidStorage.value = cid;

        this.emitEvent(
            new ContenthashChangedEvent(nameKey, CONTENTHASH_TYPE_CIDv1, Blockchain.block.number),
        );

        return new BytesWriter(0);
    }

    /**
     * Set contenthash for a domain or subdomain using IPNS (k...).
     */
    @method(
        { name: 'name', type: ABIDataTypes.STRING },
        { name: 'ipnsId', type: ABIDataTypes.STRING },
    )
    @emit('ContenthashChanged')
    public setContenthashIPNS(calldata: Calldata): BytesWriter {
        const name = calldata.readStringWithLength();
        const ipnsId = calldata.readStringWithLength();

        this.validateIPNS(ipnsId);

        const nameKey = this.resolveNameKey(name);
        this.requireNameOwner(name, nameKey);

        this.contenthashType.set(nameKey, u256.fromU32(<u32>CONTENTHASH_TYPE_IPNS));

        const keyBytes = this.getNameKeyBytes(name);
        const ipnsStorage = new AdvancedStoredString(
            contenthashStringPointer,
            keyBytes,
            MAX_CONTENTHASH_LENGTH,
        );
        ipnsStorage.value = ipnsId;

        this.emitEvent(
            new ContenthashChangedEvent(nameKey, CONTENTHASH_TYPE_IPNS, Blockchain.block.number),
        );

        return new BytesWriter(0);
    }

    /**
     * Set contenthash for a domain or subdomain using raw SHA-256 hash.
     */
    @method(
        { name: 'name', type: ABIDataTypes.STRING },
        { name: 'hash', type: ABIDataTypes.BYTES32 },
    )
    @emit('ContenthashChanged')
    public setContenthashSHA256(calldata: Calldata): BytesWriter {
        const name = calldata.readStringWithLength();
        const hash = calldata.readU256();

        if (hash.isZero()) {
            throw new Revert('Hash cannot be zero');
        }

        const nameKey = this.resolveNameKey(name);
        this.requireNameOwner(name, nameKey);

        this.contenthashType.set(nameKey, u256.fromU32(<u32>CONTENTHASH_TYPE_SHA256));
        this.contenthashData.set(nameKey, hash);

        this.emitEvent(
            new ContenthashChangedEvent(nameKey, CONTENTHASH_TYPE_SHA256, Blockchain.block.number),
        );

        return new BytesWriter(0);
    }

    /**
     * Clear contenthash for a domain or subdomain.
     */
    @method({ name: 'name', type: ABIDataTypes.STRING })
    @emit('ContenthashCleared')
    public clearContenthash(calldata: Calldata): BytesWriter {
        const name = calldata.readStringWithLength();

        const nameKey = this.resolveNameKey(name);
        this.requireNameOwner(name, nameKey);

        // Verify contenthash exists
        if (this.contenthashType.get(nameKey).isZero()) {
            throw new Revert('No contenthash set');
        }

        // Clear contenthash
        this.contenthashType.set(nameKey, u256.Zero);
        this.contenthashData.set(nameKey, u256.Zero);

        // Clear string storage
        const keyBytes = this.getNameKeyBytes(name);
        const cidStorage = new AdvancedStoredString(
            contenthashStringPointer,
            keyBytes,
            MAX_CONTENTHASH_LENGTH,
        );
        cidStorage.value = '';

        this.emitEvent(new ContenthashClearedEvent(nameKey, Blockchain.block.number));

        return new BytesWriter(0);
    }

    // =========================================================================
    // TTL METHODS
    // =========================================================================

    /**
     * Set TTL for a domain or subdomain.
     */
    @method({ name: 'name', type: ABIDataTypes.STRING }, { name: 'ttl', type: ABIDataTypes.UINT64 })
    @emit('TTLChanged')
    public setTTL(calldata: Calldata): BytesWriter {
        const name = calldata.readStringWithLength();
        const newTTL = calldata.readU64();

        if (newTTL < MIN_TTL || newTTL > MAX_TTL) {
            throw new Revert('TTL out of range');
        }

        const nameKey = this.resolveNameKey(name);
        this.requireNameOwner(name, nameKey);

        // Get old TTL
        let oldTTL: u64;
        if (this.isSubdomain(name)) {
            oldTTL = this.subdomainTTL.get(nameKey).toU64();
            this.subdomainTTL.set(nameKey, u256.fromU64(newTTL));
        } else {
            oldTTL = this.domainTTL.get(nameKey).toU64();
            this.domainTTL.set(nameKey, u256.fromU64(newTTL));
        }

        this.emitEvent(new TTLChangedEvent(nameKey, oldTTL, newTTL, Blockchain.block.number));

        return new BytesWriter(0);
    }

    // =========================================================================
    // VIEW METHODS
    // =========================================================================

    /**
     * Get domain information.
     */
    @method({ name: 'domainName', type: ABIDataTypes.STRING })
    @returns(
        { name: 'exists', type: ABIDataTypes.BOOL },
        { name: 'owner', type: ABIDataTypes.ADDRESS },
        { name: 'createdAt', type: ABIDataTypes.UINT64 },
        { name: 'ttl', type: ABIDataTypes.UINT64 },
    )
    public getDomain(calldata: Calldata): BytesWriter {
        const domainName = calldata.readStringWithLength();
        const domainKey = this.getDomainKeyU256(domainName);

        const exists = !this.domainExists.get(domainKey).isZero();
        const owner = exists
            ? this._u256ToAddress(this.domainOwner.get(domainKey))
            : Address.zero();
        const createdAt = exists ? this.domainCreated.get(domainKey).toU64() : <u64>0;
        const ttl = exists ? this.domainTTL.get(domainKey).toU64() : <u64>0;

        const response = new BytesWriter(1 + 32 + 8 + 8);
        response.writeBoolean(exists);
        response.writeAddress(owner);
        response.writeU64(createdAt);
        response.writeU64(ttl);

        return response;
    }

    /**
     * Get subdomain information.
     */
    @method({ name: 'fullName', type: ABIDataTypes.STRING })
    @returns(
        { name: 'exists', type: ABIDataTypes.BOOL },
        { name: 'owner', type: ABIDataTypes.ADDRESS },
        { name: 'parentHash', type: ABIDataTypes.BYTES32 },
        { name: 'ttl', type: ABIDataTypes.UINT64 },
    )
    public getSubdomain(calldata: Calldata): BytesWriter {
        const fullName = calldata.readStringWithLength();
        const subdomainKey = this.getSubdomainKeyU256(fullName);

        const exists = !this.subdomainExists.get(subdomainKey).isZero();
        const owner = exists
            ? this._u256ToAddress(this.subdomainOwner.get(subdomainKey))
            : Address.zero();
        const parentHash = exists ? this.subdomainParent.get(subdomainKey) : u256.Zero;
        const ttl = exists ? this.subdomainTTL.get(subdomainKey).toU64() : <u64>0;

        const response = new BytesWriter(1 + 32 + 32 + 8);
        response.writeBoolean(exists);
        response.writeAddress(owner);
        response.writeU256(parentHash);
        response.writeU64(ttl);

        return response;
    }

    /**
     * Get contenthash for a name.
     */
    @method({ name: 'name', type: ABIDataTypes.STRING })
    @returns(
        { name: 'hashType', type: ABIDataTypes.UINT8 },
        { name: 'hashData', type: ABIDataTypes.BYTES32 },
        { name: 'hashString', type: ABIDataTypes.STRING },
    )
    public getContenthash(calldata: Calldata): BytesWriter {
        const name = calldata.readStringWithLength();
        const nameKey = this.resolveNameKey(name);

        const hashType = <u8>this.contenthashType.get(nameKey).toU32();
        let hashData = u256.Zero;
        let hashString = '';

        if (hashType == CONTENTHASH_TYPE_SHA256) {
            hashData = this.contenthashData.get(nameKey);
        } else if (hashType != 0) {
            const keyBytes = this.getNameKeyBytes(name);
            const cidStorage = new AdvancedStoredString(
                contenthashStringPointer,
                keyBytes,
                MAX_CONTENTHASH_LENGTH,
            );
            hashString = cidStorage.value;
        }

        const strBytes = Uint8Array.wrap(String.UTF8.encode(hashString));
        const response = new BytesWriter(1 + 32 + 4 + strBytes.length);
        response.writeU8(hashType);
        response.writeU256(hashData);
        response.writeStringWithLength(hashString);

        return response;
    }

    /**
     * Resolve a full name to its owner address.
     * Works for both domains and subdomains.
     */
    @method({ name: 'name', type: ABIDataTypes.STRING })
    @returns({ name: 'owner', type: ABIDataTypes.ADDRESS })
    public resolve(calldata: Calldata): BytesWriter {
        const name = calldata.readStringWithLength();
        const nameKey = this.resolveNameKey(name);

        let owner: Address;
        if (this.isSubdomain(name)) {
            if (this.subdomainExists.get(nameKey).isZero()) {
                owner = Address.zero();
            } else {
                owner = this._u256ToAddress(this.subdomainOwner.get(nameKey));
            }
        } else {
            if (this.domainExists.get(nameKey).isZero()) {
                owner = Address.zero();
            } else {
                owner = this._u256ToAddress(this.domainOwner.get(nameKey));
            }
        }

        const response = new BytesWriter(32);
        response.writeAddress(owner);

        return response;
    }

    /**
     * Get pending domain transfer info.
     */
    @method({ name: 'domainName', type: ABIDataTypes.STRING })
    @returns(
        { name: 'pendingOwner', type: ABIDataTypes.ADDRESS },
        { name: 'initiatedAt', type: ABIDataTypes.UINT64 },
    )
    public getPendingTransfer(calldata: Calldata): BytesWriter {
        const domainName = calldata.readStringWithLength();
        const domainKey = this.getDomainKeyU256(domainName);

        const pendingOwner = this._u256ToAddress(this.domainPendingOwner.get(domainKey));
        const initiatedAt = this.domainPendingTimestamp.get(domainKey).toU64();

        const response = new BytesWriter(32 + 8);
        response.writeAddress(pendingOwner);
        response.writeU64(initiatedAt);

        return response;
    }

    /**
     * Get current treasury address.
     */
    @method()
    @returns({ name: 'treasuryAddress', type: ABIDataTypes.STRING })
    public getTreasuryAddress(_: Calldata): BytesWriter {
        const addr = this.treasuryAddress.value;
        const addrBytes = Uint8Array.wrap(String.UTF8.encode(addr));

        const response = new BytesWriter(4 + addrBytes.length);
        response.writeStringWithLength(addr);

        return response;
    }

    /**
     * Get current domain price for a specific domain.
     */
    @method({ name: 'domainName', type: ABIDataTypes.STRING })
    @returns({ name: 'priceSats', type: ABIDataTypes.UINT64 })
    public getDomainPrice(calldata: Calldata): BytesWriter {
        const domainName = calldata.readStringWithLength();
        const price = this.calculateDomainPrice(domainName);

        const response = new BytesWriter(8);
        response.writeU64(price);

        return response;
    }

    /**
     * Get base domain price.
     */
    @method()
    @returns({ name: 'priceSats', type: ABIDataTypes.UINT64 })
    public getBaseDomainPrice(_: Calldata): BytesWriter {
        const response = new BytesWriter(8);
        response.writeU64(this.domainPriceSats.get(u256.Zero).toU64());

        return response;
    }

    // =========================================================================
    // INTERNAL HELPERS
    // =========================================================================

    /**
     * Convert Address to u256 for storage.
     */
    protected _addressToU256(addr: Address): u256 {
        return u256.fromUint8ArrayBE(addr);
    }

    /**
     * Convert u256 to Address.
     */
    protected _u256ToAddress(val: u256): Address {
        if (val.isZero()) {
            return Address.zero();
        }
        const bytes = val.toUint8Array(true);
        return Address.fromUint8Array(bytes);
    }

    private getDomainKeyU256(domainName: string): u256 {
        const lower = this.toLowerCase(domainName);
        const bytes = Uint8Array.wrap(String.UTF8.encode(lower));
        return u256.fromUint8ArrayBE(Blockchain.sha256(bytes));
    }

    private getSubdomainKeyU256(fullName: string): u256 {
        const lower = this.toLowerCase(fullName);
        const bytes = Uint8Array.wrap(String.UTF8.encode(lower));
        return u256.fromUint8ArrayBE(Blockchain.sha256(bytes));
    }

    private getNameKeyBytes(name: string): Uint8Array {
        const lower = this.toLowerCase(name);
        const bytes = Uint8Array.wrap(String.UTF8.encode(lower));
        const hash = Blockchain.sha256(bytes);
        return hash.slice(0, 30);
    }

    private resolveNameKey(name: string): u256 {
        if (this.isSubdomain(name)) {
            return this.getSubdomainKeyU256(name);
        }
        return this.getDomainKeyU256(name);
    }

    private stringToU256Hash(str: string): u256 {
        const bytes = Uint8Array.wrap(String.UTF8.encode(str));
        return u256.fromUint8ArrayBE(Blockchain.sha256(bytes));
    }

    private isSubdomain(name: string): boolean {
        // Subdomain has format: label.domain (at least one dot)
        for (let i: i32 = 0; i < name.length; i++) {
            if (name.charCodeAt(i) == 46) {
                // '.'
                return true;
            }
        }
        return false;
    }

    private toLowerCase(str: string): string {
        let result = '';
        for (let i: i32 = 0; i < str.length; i++) {
            const c = str.charCodeAt(i);
            // Convert uppercase to lowercase (A-Z -> a-z)
            if (c >= 65 && c <= 90) {
                result += String.fromCharCode(c + 32);
            } else {
                result += String.fromCharCode(c);
            }
        }
        return result;
    }

    private validateDomainName(domain: string): void {
        const len = domain.length;
        if (len < <i32>MIN_DOMAIN_LENGTH || len > <i32>MAX_DOMAIN_LENGTH) {
            throw new Revert('Domain must be 1-63 characters');
        }

        // Must start with alphanumeric
        const first = domain.charCodeAt(0);
        if (!this.isAlphanumeric(first)) {
            throw new Revert('Domain must start with alphanumeric');
        }

        // Must end with alphanumeric
        const last = domain.charCodeAt(len - 1);
        if (!this.isAlphanumeric(last)) {
            throw new Revert('Domain must end with alphanumeric');
        }

        // Only lowercase letters, digits, and hyphens allowed
        for (let i = 0; i < len; i++) {
            const c = domain.charCodeAt(i);
            const isLower = c >= 97 && c <= 122; // a-z
            const isUpper = c >= 65 && c <= 90; // A-Z (will be lowercased)
            const isDigit = c >= 48 && c <= 57; // 0-9
            const isHyphen = c == 45; // -

            if (!isLower && !isUpper && !isDigit && !isHyphen) {
                throw new Revert('Invalid character in domain');
            }
        }

        // No consecutive hyphens
        for (let i = 0; i < len - 1; i++) {
            if (domain.charCodeAt(i) == 45 && domain.charCodeAt(i + 1) == 45) {
                throw new Revert('No consecutive hyphens allowed');
            }
        }
    }

    private validateSubdomainLabel(label: string): void {
        const len = label.length;
        if (len < 1 || len > <i32>MAX_SUBDOMAIN_LENGTH) {
            throw new Revert('Subdomain label must be 1-63 characters');
        }

        // Same rules as domain
        const first = label.charCodeAt(0);
        if (!this.isAlphanumeric(first)) {
            throw new Revert('Subdomain must start with alphanumeric');
        }

        for (let i = 0; i < len; i++) {
            const c = label.charCodeAt(i);
            const isLower = c >= 97 && c <= 122;
            const isUpper = c >= 65 && c <= 90;
            const isDigit = c >= 48 && c <= 57;
            const isHyphen = c == 45;

            if (!isLower && !isUpper && !isDigit && !isHyphen) {
                throw new Revert('Invalid character in subdomain');
            }
        }
    }

    private isAlphanumeric(c: i32): boolean {
        return (c >= 97 && c <= 122) || (c >= 65 && c <= 90) || (c >= 48 && c <= 57);
    }

    private validateCIDv0(cid: string): void {
        const len = cid.length;
        if (len != 46) {
            throw new Revert('CIDv0 must be 46 characters');
        }
        // Must start with "Qm"
        if (cid.charCodeAt(0) != 81 || cid.charCodeAt(1) != 109) {
            throw new Revert('CIDv0 must start with Qm');
        }
    }

    private validateCIDv1(cid: string): void {
        const len = cid.length;
        if (len < 50 || len > <i32>MAX_CONTENTHASH_LENGTH) {
            throw new Revert('CIDv1 must be 50-128 characters');
        }
        // Must start with "baf"
        if (cid.charCodeAt(0) != 98 || cid.charCodeAt(1) != 97 || cid.charCodeAt(2) != 102) {
            throw new Revert('CIDv1 must start with baf');
        }
    }

    private validateIPNS(ipnsId: string): void {
        const len = ipnsId.length;
        if (len < 50 || len > <i32>MAX_CONTENTHASH_LENGTH) {
            throw new Revert('IPNS ID must be 50-128 characters');
        }
        // Must start with "k"
        if (ipnsId.charCodeAt(0) != 107) {
            throw new Revert('IPNS ID must start with k');
        }
    }

    private validateBitcoinAddress(address: string): void {
        const len = address.length;
        if (len < 42 || len > 62) {
            throw new Revert('Invalid address length');
        }
        // Must start with bc1p or bc1q
        if (
            address.charCodeAt(0) != 98 ||
            address.charCodeAt(1) != 99 ||
            address.charCodeAt(2) != 49
        ) {
            throw new Revert('Address must start with bc1');
        }
        const fourth = address.charCodeAt(3);
        if (fourth != 112 && fourth != 113) {
            throw new Revert('Address must be bc1p or bc1q');
        }
    }

    private calculateDomainPrice(domainName: string): u64 {
        const lowerName = this.toLowerCase(domainName);
        const len = lowerName.length;
        const basePrice = this.domainPriceSats.get(u256.Zero).toU64();

        // Check TIER 0 first - Ultra Legendary (10 BTC)
        if (this.isInPremiumList(lowerName, PREMIUM_TIER_0_DOMAINS)) {
            return PREMIUM_TIER_0_PRICE_SATS;
        }

        // 1-char domains are always Tier 1 (1.5 BTC) - most valuable
        if (len == 1) {
            return PREMIUM_TIER_1_PRICE_SATS;
        }

        // 2-char domains are always Tier 2 (0.25 BTC)
        if (len == 2) {
            return PREMIUM_TIER_2_PRICE_SATS;
        }

        // Check premium keyword lists (highest tier match wins)
        if (this.isInPremiumList(lowerName, PREMIUM_TIER_1_DOMAINS)) {
            return PREMIUM_TIER_1_PRICE_SATS;
        }

        if (this.isInPremiumList(lowerName, PREMIUM_TIER_2_DOMAINS)) {
            return PREMIUM_TIER_2_PRICE_SATS;
        }

        if (len == 3) {
            return PREMIUM_TIER_3_PRICE_SATS;
        }

        if (this.isInPremiumList(lowerName, PREMIUM_TIER_3_DOMAINS)) {
            return PREMIUM_TIER_3_PRICE_SATS;
        }

        if (len == 4) {
            return PREMIUM_TIER_4_PRICE_SATS;
        }

        if (this.isInPremiumList(lowerName, PREMIUM_TIER_4_DOMAINS)) {
            return PREMIUM_TIER_4_PRICE_SATS;
        }

        if (this.isInPremiumList(lowerName, PREMIUM_TIER_5_DOMAINS)) {
            return PREMIUM_TIER_4_PRICE_SATS;
        }

        if (this.isInPremiumList(lowerName, PREMIUM_TIER_6_DOMAINS)) {
            return PREMIUM_TIER_4_PRICE_SATS;
        }

        if (len == 5) {
            return PREMIUM_TIER_5_PRICE_SATS;
        }

        return basePrice;
    }

    private isInPremiumList(domainName: string, premiumList: string[]): boolean {
        for (let i: i32 = 0; i < premiumList.length; i++) {
            if (domainName == premiumList[i]) {
                return true;
            }
        }
        return false;
    }

    private verifyPayment(requiredSats: u64): void {
        if (!Blockchain.tx.origin.equals(Blockchain.tx.sender)) {
            throw new Revert('Contracts not allowed.');
        }

        const treasuryAddr = this.treasuryAddress.value;
        let totalPaid: u64 = 0;

        const outputs = Blockchain.tx.outputs;
        for (let i: i32 = 0; i < outputs.length; i++) {
            if (outputs[i].to == treasuryAddr) {
                totalPaid = SafeMath.add64(totalPaid, outputs[i].value);
            }
        }

        if (totalPaid < requiredSats) {
            throw new Revert('Insufficient payment');
        }
    }

    private requireDomainOwner(domainKey: u256): void {
        if (this.domainExists.get(domainKey).isZero()) {
            throw new Revert('Domain does not exist');
        }

        const owner = this._u256ToAddress(this.domainOwner.get(domainKey));
        if (!Blockchain.tx.sender.equals(owner)) {
            throw new Revert('Not domain owner');
        }
    }

    private requireNameOwner(name: string, nameKey: u256): void {
        if (this.isSubdomain(name)) {
            if (this.subdomainExists.get(nameKey).isZero()) {
                throw new Revert('Subdomain does not exist');
            }
            const owner = this._u256ToAddress(this.subdomainOwner.get(nameKey));
            if (!Blockchain.tx.sender.equals(owner)) {
                throw new Revert('Not subdomain owner');
            }
        } else {
            this.requireDomainOwner(nameKey);
        }
    }
}
```

### src/btc-resolver/events/ResolverEvents.ts
```typescript
/**
 * OPNet BTC Name Resolver - Event Definitions
 *
 * All events emitted by the BTC Name Resolver contract.
 * Events are used for indexing and tracking state changes.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { u256 } from '@btc-vision/as-bignum/assembly';
import {
    Address,
    ADDRESS_BYTE_LENGTH,
    BytesWriter,
    NetEvent,
    U256_BYTE_LENGTH,
    U64_BYTE_LENGTH,
    U8_BYTE_LENGTH,
} from '@btc-vision/btc-runtime/runtime';

// =============================================================================
// Domain Events
// =============================================================================

/**
 * Emitted when a new domain is registered.
 * @param domainHash - SHA256 hash of the domain name
 * @param owner - Address of the domain owner
 * @param timestamp - Block number when registered
 */
@final
export class DomainRegisteredEvent extends NetEvent {
    constructor(domainHash: u256, owner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH + U64_BYTE_LENGTH,
        );
        data.writeU256(domainHash);
        data.writeAddress(owner);
        data.writeU64(timestamp);

        super('DomainRegistered', data);
    }
}

/**
 * Emitted when a domain transfer is initiated.
 * @param domainHash - SHA256 hash of the domain name
 * @param currentOwner - Address of the current owner
 * @param newOwner - Address of the pending new owner
 * @param timestamp - Block number when initiated
 */
@final
export class DomainTransferInitiatedEvent extends NetEvent {
    constructor(domainHash: u256, currentOwner: Address, newOwner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH * 2 + U64_BYTE_LENGTH,
        );
        data.writeU256(domainHash);
        data.writeAddress(currentOwner);
        data.writeAddress(newOwner);
        data.writeU64(timestamp);

        super('DomainTransferInitiated', data);
    }
}

/**
 * Emitted when a domain transfer is completed.
 * @param domainHash - SHA256 hash of the domain name
 * @param previousOwner - Address of the previous owner
 * @param newOwner - Address of the new owner
 * @param timestamp - Block number when completed
 */
@final
export class DomainTransferCompletedEvent extends NetEvent {
    constructor(domainHash: u256, previousOwner: Address, newOwner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH * 2 + U64_BYTE_LENGTH,
        );
        data.writeU256(domainHash);
        data.writeAddress(previousOwner);
        data.writeAddress(newOwner);
        data.writeU64(timestamp);

        super('DomainTransferCompleted', data);
    }
}

/**
 * Emitted when a domain transfer is cancelled.
 * @param domainHash - SHA256 hash of the domain name
 * @param owner - Address of the owner who cancelled
 * @param timestamp - Block number when cancelled
 */
@final
export class DomainTransferCancelledEvent extends NetEvent {
    constructor(domainHash: u256, owner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH + U64_BYTE_LENGTH,
        );
        data.writeU256(domainHash);
        data.writeAddress(owner);
        data.writeU64(timestamp);

        super('DomainTransferCancelled', data);
    }
}

// =============================================================================
// Subdomain Events
// =============================================================================

/**
 * Emitted when a subdomain is created.
 * @param parentDomainHash - SHA256 hash of the parent domain
 * @param subdomainHash - SHA256 hash of the full subdomain name
 * @param owner - Address of the subdomain owner
 * @param timestamp - Block number when created
 */
@final
export class SubdomainCreatedEvent extends NetEvent {
    constructor(parentDomainHash: u256, subdomainHash: u256, owner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH * 2 + ADDRESS_BYTE_LENGTH + U64_BYTE_LENGTH,
        );
        data.writeU256(parentDomainHash);
        data.writeU256(subdomainHash);
        data.writeAddress(owner);
        data.writeU64(timestamp);

        super('SubdomainCreated', data);
    }
}

/**
 * Emitted when a subdomain is deleted.
 * @param parentDomainHash - SHA256 hash of the parent domain
 * @param subdomainHash - SHA256 hash of the full subdomain name
 * @param timestamp - Block number when deleted
 */
@final
export class SubdomainDeletedEvent extends NetEvent {
    constructor(parentDomainHash: u256, subdomainHash: u256, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(U256_BYTE_LENGTH * 2 + U64_BYTE_LENGTH);
        data.writeU256(parentDomainHash);
        data.writeU256(subdomainHash);
        data.writeU64(timestamp);

        super('SubdomainDeleted', data);
    }
}

// =============================================================================
// Contenthash Events
// =============================================================================

/**
 * Emitted when contenthash is set or updated.
 * @param nameHash - SHA256 hash of the domain/subdomain name
 * @param contenthashType - Type of contenthash (1=CIDv0, 2=CIDv1, 3=IPNS, 4=SHA256)
 * @param timestamp - Block number when changed
 */
@final
export class ContenthashChangedEvent extends NetEvent {
    constructor(nameHash: u256, contenthashType: u8, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + U8_BYTE_LENGTH + U64_BYTE_LENGTH,
        );
        data.writeU256(nameHash);
        data.writeU8(contenthashType);
        data.writeU64(timestamp);

        super('ContenthashChanged', data);
    }
}

/**
 * Emitted when contenthash is cleared.
 * @param nameHash - SHA256 hash of the domain/subdomain name
 * @param timestamp - Block number when cleared
 */
@final
export class ContenthashClearedEvent extends NetEvent {
    constructor(nameHash: u256, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(U256_BYTE_LENGTH + U64_BYTE_LENGTH);
        data.writeU256(nameHash);
        data.writeU64(timestamp);

        super('ContenthashCleared', data);
    }
}

// =============================================================================
// TTL Events
// =============================================================================

/**
 * Emitted when TTL is changed for a name.
 * @param nameHash - SHA256 hash of the domain/subdomain name
 * @param oldTTL - Previous TTL value in seconds
 * @param newTTL - New TTL value in seconds
 * @param timestamp - Block number when changed
 */
@final
export class TTLChangedEvent extends NetEvent {
    constructor(nameHash: u256, oldTTL: u64, newTTL: u64, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(U256_BYTE_LENGTH + U64_BYTE_LENGTH * 3);
        data.writeU256(nameHash);
        data.writeU64(oldTTL);
        data.writeU64(newTTL);
        data.writeU64(timestamp);

        super('TTLChanged', data);
    }
}

// =============================================================================
// Admin Events
// =============================================================================

/**
 * Emitted when domain pricing is changed.
 * @param oldPrice - Previous price in satoshis
 * @param newPrice - New price in satoshis
 * @param timestamp - Block number when changed
 */
@final
export class DomainPriceChangedEvent extends NetEvent {
    constructor(oldPrice: u64, newPrice: u64, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(U64_BYTE_LENGTH * 3);
        data.writeU64(oldPrice);
        data.writeU64(newPrice);
        data.writeU64(timestamp);

        super('DomainPriceChanged', data);
    }
}

/**
 * Emitted when treasury address is changed.
 * @param previousAddressHash - Hash of the previous treasury address
 * @param newAddressHash - Hash of the new treasury address
 * @param timestamp - Block number when changed
 */
@final
export class TreasuryChangedEvent extends NetEvent {
    constructor(previousAddressHash: u256, newAddressHash: u256, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(U256_BYTE_LENGTH * 2 + U64_BYTE_LENGTH);
        data.writeU256(previousAddressHash);
        data.writeU256(newAddressHash);
        data.writeU64(timestamp);

        super('TreasuryChanged', data);
    }
}
```

### src/btc-resolver/constants.ts (excerpt - pricing tiers and limits only)
```typescript
/**
 * OPNet BTC Name Resolver - Constants
 *
 * This file contains all constants used by the BTC Name Resolver contract.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

// =============================================================================
// Contenthash Type Identifiers
// =============================================================================

/** CIDv0 (Qm... prefixed, base58btc, 46 chars) */
export const CONTENTHASH_TYPE_CIDv0: u8 = 1;

/** CIDv1 (bafy... prefixed, base32) */
export const CONTENTHASH_TYPE_CIDv1: u8 = 2;

/** IPNS identifier (k... prefixed, base36) */
export const CONTENTHASH_TYPE_IPNS: u8 = 3;

/** Raw SHA-256 hash (32 bytes, stored as u256) */
export const CONTENTHASH_TYPE_SHA256: u8 = 4;

// =============================================================================
// String Length Limits
// =============================================================================

/** Maximum length of a domain name (without .btc suffix) */
export const MAX_DOMAIN_LENGTH: u32 = 63;

/** Minimum length of a domain name (allowing 1-char premium domains) */
export const MIN_DOMAIN_LENGTH: u32 = 1;

/** Maximum length of a subdomain label */
export const MAX_SUBDOMAIN_LENGTH: u32 = 63;

/** Maximum length of a contenthash string (CID/IPNS) */
export const MAX_CONTENTHASH_LENGTH: u32 = 128;

/** Maximum total length of full name (subdomain.domain.btc) */
export const MAX_FULL_NAME_LENGTH: u32 = 253;

// =============================================================================
// TTL Defaults (in seconds)
// =============================================================================

/** Default TTL for domain records: 1 hour */
export const DEFAULT_TTL: u64 = 3600;

/** Minimum allowed TTL: 60 seconds */
export const MIN_TTL: u64 = 60;

/** Maximum allowed TTL: 1 week */
export const MAX_TTL: u64 = 604800;

// =============================================================================
// Pricing Tiers (in satoshis) - 1 BTC = 100,000,000 sats
// =============================================================================

/** Default price to register a domain: 100,000 sats (0.001 BTC) */
export const DEFAULT_DOMAIN_PRICE_SATS: u64 = 100_000;

/** Tier 0 - ULTRA LEGENDARY (10 BTC): The most iconic names in crypto history */
export const PREMIUM_TIER_0_PRICE_SATS: u64 = 1_000_000_000;

/** Tier 1 - LEGENDARY (1 BTC): 1-char domains + top crypto keywords */
export const PREMIUM_TIER_1_PRICE_SATS: u64 = 150_000_000;

/** Tier 2 - ULTRA PREMIUM (0.4 BTC): 2-char domains + elite crypto/brand keywords */
export const PREMIUM_TIER_2_PRICE_SATS: u64 = 40_000_000;

/** Tier 3 - PREMIUM (0.15 BTC): 3-char domains + high-value keywords */
export const PREMIUM_TIER_3_PRICE_SATS: u64 = 15_000_000;

/** Tier 4 - HIGH VALUE (0.05 BTC): 4-char domains + valuable keywords */
export const PREMIUM_TIER_4_PRICE_SATS: u64 = 5_000_000;

/** Tier 5 - STANDARD PREMIUM (0.01 BTC): 5-char domains + common keywords */
export const PREMIUM_TIER_5_PRICE_SATS: u64 = 1_000_000;

// ... premium domain lists omitted (3800+ lines of string arrays) ...
// The constants include PREMIUM_TIER_0_DOMAINS through PREMIUM_TIER_6_DOMAINS
// containing curated lists of premium .btc domain names at each pricing tier.
```

### src/btc-resolver/index.ts
```typescript
/**
 * OPNet BTC Name Resolver - Entry Point
 *
 * Decentralized domain name resolver for .btc domains.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Blockchain } from '@btc-vision/btc-runtime/runtime';
import { revertOnError } from '@btc-vision/btc-runtime/runtime/abort/abort';
import { BtcNameResolver } from './BtcNameResolver';

// DO NOT TOUCH THIS.
Blockchain.contract = (): BtcNameResolver => {
    // ONLY CHANGE THE CONTRACT CLASS NAME.
    // DO NOT ADD CUSTOM LOGIC HERE.
    return new BtcNameResolver();
};

// VERY IMPORTANT
export * from '@btc-vision/btc-runtime/runtime/exports';

// VERY IMPORTANT
export function abort(message: string, fileName: string, line: u32, column: u32): void {
    revertOnError(message, fileName, line, column);
}
```

---

## 8. Package Registry

### src/registry/PackageRegistry.ts
```typescript
/**
 * OPNet Package Registry Smart Contract
 *
 * A decentralized package registry for OPNet plugins. Manages:
 * - Package ownership (tied to MLDSA public key hash)
 * - Scoped packages (@scope/package-name)
 * - Version metadata with IPFS storage
 * - 72-hour mutability window for deprecation
 * - Two-step ownership transfers
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { u256 } from '@btc-vision/as-bignum/assembly';
import {
    Address,
    Blockchain,
    BytesWriter,
    Calldata,
    OP_NET,
    Revert,
    SafeMath,
    StoredString,
} from '@btc-vision/btc-runtime/runtime';
import { StoredMapU256 } from '@btc-vision/btc-runtime/runtime/storage/maps/StoredMapU256';
import { AdvancedStoredString } from '@btc-vision/btc-runtime/runtime/storage/AdvancedStoredString';

import {
    PackagePriceChangedEvent,
    PackageRegisteredEvent,
    PackageTransferCancelledEvent,
    PackageTransferCompletedEvent,
    PackageTransferInitiatedEvent,
    ScopePriceChangedEvent,
    ScopeRegisteredEvent,
    ScopeTransferCancelledEvent,
    ScopeTransferCompletedEvent,
    ScopeTransferInitiatedEvent,
    TreasuryAddressChangedEvent,
    VersionDeprecatedEvent,
    VersionPublishedEvent,
    VersionUndeprecatedEvent,
} from './events/RegistryEvents';

import {
    MLDSA44_SIGNATURE_LEN,
    MLDSA65_SIGNATURE_LEN,
    MLDSA87_SIGNATURE_LEN,
} from '@btc-vision/btc-runtime/runtime/env/consensus/MLDSAMetadata';

import {
    DEFAULT_PACKAGE_PRICE_SATS,
    DEFAULT_SCOPE_PRICE_SATS,
    MAX_CID_LENGTH,
    MAX_NAME_LENGTH,
    MAX_OPNET_RANGE_LENGTH,
    MAX_REASON_LENGTH,
    MAX_SCOPE_LENGTH,
    MAX_VERSION_LENGTH,
    MUTABILITY_WINDOW_BLOCKS,
    RESERVED_SCOPE,
} from './constants';

// =============================================================================
// Storage Pointer Allocation (Module Level - CRITICAL)
// =============================================================================

// Contract-level settings
const treasuryAddressPointer: u16 = Blockchain.nextPointer;
const scopePriceSatsPointer: u16 = Blockchain.nextPointer;
const packagePriceSatsPointer: u16 = Blockchain.nextPointer;

// Scope storage
const scopeExistsPointer: u16 = Blockchain.nextPointer;
const scopeOwnerPointer: u16 = Blockchain.nextPointer;
const scopeCreatedPointer: u16 = Blockchain.nextPointer;

// Scope transfer tracking
const scopePendingOwnerPointer: u16 = Blockchain.nextPointer;
const scopePendingTimestampPointer: u16 = Blockchain.nextPointer;

// Package-level storage
const packageExistsPointer: u16 = Blockchain.nextPointer;
const packageOwnerPointer: u16 = Blockchain.nextPointer;
const packageCreatedPointer: u16 = Blockchain.nextPointer;
const packageVersionCountPointer: u16 = Blockchain.nextPointer;
const packageLatestVersionPointer: u16 = Blockchain.nextPointer;

// Package transfer tracking
const pkgPendingOwnerPointer: u16 = Blockchain.nextPointer;
const pkgPendingTimestampPointer: u16 = Blockchain.nextPointer;

// Version-level storage
const versionExistsPointer: u16 = Blockchain.nextPointer;
const versionIpfsCidPointer: u16 = Blockchain.nextPointer;
const versionChecksumPointer: u16 = Blockchain.nextPointer;
const versionSigHashPointer: u16 = Blockchain.nextPointer;
const versionMldsaLevelPointer: u16 = Blockchain.nextPointer;
const versionOpnetRangePointer: u16 = Blockchain.nextPointer;
const versionPluginTypePointer: u16 = Blockchain.nextPointer;
const versionPermHashPointer: u16 = Blockchain.nextPointer;
const versionDepsHashPointer: u16 = Blockchain.nextPointer;
const versionPublisherPointer: u16 = Blockchain.nextPointer;
const versionTimestampPointer: u16 = Blockchain.nextPointer;
const versionDeprecatedPointer: u16 = Blockchain.nextPointer;
const versionDepReasonPointer: u16 = Blockchain.nextPointer;

// =============================================================================
// Contract Implementation
// =============================================================================

@final
export class PackageRegistry extends OP_NET {
    // -------------------------------------------------------------------------
    // Settings Storage
    // -------------------------------------------------------------------------
    private readonly treasuryAddress: StoredString;
    private readonly scopePriceSats: StoredMapU256; // Use map with key 0
    private readonly packagePriceSats: StoredMapU256; // Use map with key 0

    // -------------------------------------------------------------------------
    // Scope Storage Maps
    // -------------------------------------------------------------------------
    private readonly scopeExists: StoredMapU256;
    private readonly scopeOwner: StoredMapU256;
    private readonly scopeCreated: StoredMapU256;
    private readonly scopePendingOwner: StoredMapU256;
    private readonly scopePendingTimestamp: StoredMapU256;

    // -------------------------------------------------------------------------
    // Package Storage Maps
    // -------------------------------------------------------------------------
    private readonly packageExists: StoredMapU256;
    private readonly packageOwner: StoredMapU256;
    private readonly packageCreated: StoredMapU256;
    private readonly packageVersionCount: StoredMapU256;

    // Package transfer tracking
    private readonly pkgPendingOwner: StoredMapU256;
    private readonly pkgPendingTimestamp: StoredMapU256;

    // -------------------------------------------------------------------------
    // Version Storage Maps
    // -------------------------------------------------------------------------
    private readonly versionExists: StoredMapU256;
    private readonly versionChecksum: StoredMapU256;
    private readonly versionSigHash: StoredMapU256;
    private readonly versionMldsaLevel: StoredMapU256;
    private readonly versionPluginType: StoredMapU256;
    private readonly versionPermHash: StoredMapU256;
    private readonly versionDepsHash: StoredMapU256;
    private readonly versionPublisher: StoredMapU256;
    private readonly versionTimestamp: StoredMapU256;
    private readonly versionDeprecated: StoredMapU256;

    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    public constructor() {
        super();

        // Initialize settings storage
        this.treasuryAddress = new StoredString(treasuryAddressPointer);
        this.scopePriceSats = new StoredMapU256(scopePriceSatsPointer);
        this.packagePriceSats = new StoredMapU256(packagePriceSatsPointer);

        // Initialize scope storage
        this.scopeExists = new StoredMapU256(scopeExistsPointer);
        this.scopeOwner = new StoredMapU256(scopeOwnerPointer);
        this.scopeCreated = new StoredMapU256(scopeCreatedPointer);
        this.scopePendingOwner = new StoredMapU256(scopePendingOwnerPointer);
        this.scopePendingTimestamp = new StoredMapU256(scopePendingTimestampPointer);

        // Initialize package storage
        this.packageExists = new StoredMapU256(packageExistsPointer);
        this.packageOwner = new StoredMapU256(packageOwnerPointer);
        this.packageCreated = new StoredMapU256(packageCreatedPointer);
        this.packageVersionCount = new StoredMapU256(packageVersionCountPointer);
        this.pkgPendingOwner = new StoredMapU256(pkgPendingOwnerPointer);
        this.pkgPendingTimestamp = new StoredMapU256(pkgPendingTimestampPointer);

        // Initialize version storage
        this.versionExists = new StoredMapU256(versionExistsPointer);
        this.versionChecksum = new StoredMapU256(versionChecksumPointer);
        this.versionSigHash = new StoredMapU256(versionSigHashPointer);
        this.versionMldsaLevel = new StoredMapU256(versionMldsaLevelPointer);
        this.versionPluginType = new StoredMapU256(versionPluginTypePointer);
        this.versionPermHash = new StoredMapU256(versionPermHashPointer);
        this.versionDepsHash = new StoredMapU256(versionDepsHashPointer);
        this.versionPublisher = new StoredMapU256(versionPublisherPointer);
        this.versionTimestamp = new StoredMapU256(versionTimestampPointer);
        this.versionDeprecated = new StoredMapU256(versionDeprecatedPointer);
    }

    // -------------------------------------------------------------------------
    // Deployment Initialization
    // -------------------------------------------------------------------------
    public override onDeployment(calldata: Calldata): void {
        // Read optional treasury address from calldata, or use deployer's P2TR address
        const treasuryAddr = calldata.readStringWithLength();
        if (treasuryAddr.length > 0) {
            this.treasuryAddress.value = treasuryAddr;
        } else {
            this.treasuryAddress.value = Blockchain.tx.origin.p2tr();
        }

        // Set default prices
        this.scopePriceSats.set(u256.Zero, u256.fromU64(DEFAULT_SCOPE_PRICE_SATS));
        this.packagePriceSats.set(u256.Zero, u256.fromU64(DEFAULT_PACKAGE_PRICE_SATS));

        // Reserve @opnet scope for deployer
        const opnetScopeKey = this.getScopeKeyU256(RESERVED_SCOPE);
        const blockNumber = Blockchain.block.number;
        const deployer = Blockchain.tx.origin;

        this.scopeExists.set(opnetScopeKey, u256.One);
        this.scopeOwner.set(opnetScopeKey, this._addressToU256(deployer));
        this.scopeCreated.set(opnetScopeKey, u256.fromU64(blockNumber));

        this.emitEvent(new ScopeRegisteredEvent(opnetScopeKey, deployer, blockNumber));
    }

    // =========================================================================
    // ADMIN METHODS (Owner Only)
    // =========================================================================

    /**
     * Set the treasury address for receiving payments.
     * @param calldata Contains the new treasury address as a string.
     */
    @method({ name: 'treasuryAddress', type: ABIDataTypes.STRING })
    @emit('TreasuryAddressChanged')
    public setTreasuryAddress(calldata: Calldata): BytesWriter {
        this.onlyDeployer(Blockchain.tx.sender);

        const newAddress = calldata.readStringWithLength();
        if (newAddress.length == 0) {
            throw new Revert('Invalid treasury address');
        }

        this.validateTreasuryAddress(newAddress);

        const oldAddressHash = this.stringToU256Hash(this.treasuryAddress.value);
        const newAddressHash = this.stringToU256Hash(newAddress);

        this.treasuryAddress.value = newAddress;

        this.emitEvent(
            new TreasuryAddressChangedEvent(
                oldAddressHash,
                newAddressHash,
                Blockchain.block.number,
            ),
        );

        return new BytesWriter(0);
    }

    /**
     * Set the price for registering a scope.
     * @param calldata Contains the new price in satoshis (u64).
     */
    @method({ name: 'priceSats', type: ABIDataTypes.UINT64 })
    @emit('ScopePriceChanged')
    public setScopePrice(calldata: Calldata): BytesWriter {
        this.onlyDeployer(Blockchain.tx.sender);

        const newPrice = calldata.readU64();
        const oldPrice = this.scopePriceSats.get(u256.Zero).toU64();

        this.scopePriceSats.set(u256.Zero, u256.fromU64(newPrice));

        this.emitEvent(new ScopePriceChangedEvent(oldPrice, newPrice, Blockchain.block.number));

        return new BytesWriter(0);
    }

    /**
     * Set the price for registering an unscoped package.
     * @param calldata Contains the new price in satoshis (u64).
     */
    @method({ name: 'priceSats', type: ABIDataTypes.UINT64 })
    @emit('PackagePriceChanged')
    public setPackagePrice(calldata: Calldata): BytesWriter {
        this.onlyDeployer(Blockchain.tx.sender);

        const newPrice = calldata.readU64();
        const oldPrice = this.packagePriceSats.get(u256.Zero).toU64();

        this.packagePriceSats.set(u256.Zero, u256.fromU64(newPrice));

        this.emitEvent(new PackagePriceChangedEvent(oldPrice, newPrice, Blockchain.block.number));

        return new BytesWriter(0);
    }

    // =========================================================================
    // SCOPE METHODS
    // =========================================================================

    /**
     * Register a new scope. Requires payment to treasury.
     * @param calldata Contains the scope name (without @).
     */
    @method({ name: 'scopeName', type: ABIDataTypes.STRING })
    @emit('ScopeRegistered')
    public registerScope(calldata: Calldata): BytesWriter {
        const scopeName = calldata.readStringWithLength();

        // Validate scope name
        this.validateScopeName(scopeName);

        // Check if reserved
        if (scopeName == RESERVED_SCOPE) {
            throw new Revert('Scope is reserved');
        }

        const scopeKey = this.getScopeKeyU256(scopeName);

        // Check if already exists
        if (!this.scopeExists.get(scopeKey).isZero()) {
            throw new Revert('Scope already exists');
        }

        // Verify payment
        this.verifyPayment(this.scopePriceSats.get(u256.Zero).toU64());

        // Register scope
        const blockNumber = Blockchain.block.number;
        const sender = Blockchain.tx.sender;

        this.scopeExists.set(scopeKey, u256.One);
        this.scopeOwner.set(scopeKey, this._addressToU256(sender));
        this.scopeCreated.set(scopeKey, u256.fromU64(blockNumber));

        this.emitEvent(new ScopeRegisteredEvent(scopeKey, sender, blockNumber));

        return new BytesWriter(0);
    }

    /**
     * Initiate transfer of scope ownership.
     * @param calldata Contains scope name and new owner address.
     */
    @method(
        { name: 'scopeName', type: ABIDataTypes.STRING },
        { name: 'newOwner', type: ABIDataTypes.ADDRESS },
    )
    @emit('ScopeTransferInitiated')
    public initiateScopeTransfer(calldata: Calldata): BytesWriter {
        const scopeName = calldata.readStringWithLength();
        const newOwner = calldata.readAddress();

        const scopeKey = this.getScopeKeyU256(scopeName);

        // Verify caller is owner
        this.requireScopeOwner(scopeKey);

        // Validate new owner
        if (newOwner.equals(Address.zero())) {
            throw new Revert('Invalid new owner');
        }

        // Set pending transfer
        const blockNumber = Blockchain.block.number;
        this.scopePendingOwner.set(scopeKey, this._addressToU256(newOwner));
        this.scopePendingTimestamp.set(scopeKey, u256.fromU64(blockNumber));

        this.emitEvent(
            new ScopeTransferInitiatedEvent(scopeKey, Blockchain.tx.sender, newOwner, blockNumber),
        );

        return new BytesWriter(0);
    }

    /**
     * Accept a pending scope transfer.
     * @param calldata Contains the scope name.
     */
    @method({ name: 'scopeName', type: ABIDataTypes.STRING })
    @emit('ScopeTransferCompleted')
    public acceptScopeTransfer(calldata: Calldata): BytesWriter {
        const scopeName = calldata.readStringWithLength();
        const scopeKey = this.getScopeKeyU256(scopeName);

        // Verify pending transfer exists
        const pendingOwner = this._u256ToAddress(this.scopePendingOwner.get(scopeKey));
        if (pendingOwner.equals(Address.zero())) {
            throw new Revert('No pending transfer');
        }

        // Verify caller is pending owner
        if (!Blockchain.tx.sender.equals(pendingOwner)) {
            throw new Revert('Not pending owner');
        }

        // Complete transfer
        const previousOwner = this._u256ToAddress(this.scopeOwner.get(scopeKey));
        const blockNumber = Blockchain.block.number;

        this.scopeOwner.set(scopeKey, this._addressToU256(pendingOwner));
        this.scopePendingOwner.set(scopeKey, u256.Zero);
        this.scopePendingTimestamp.set(scopeKey, u256.Zero);

        this.emitEvent(
            new ScopeTransferCompletedEvent(scopeKey, previousOwner, pendingOwner, blockNumber),
        );

        return new BytesWriter(0);
    }

    /**
     * Cancel a pending scope transfer.
     * @param calldata Contains the scope name.
     */
    @method({ name: 'scopeName', type: ABIDataTypes.STRING })
    @emit('ScopeTransferCancelled')
    public cancelScopeTransfer(calldata: Calldata): BytesWriter {
        const scopeName = calldata.readStringWithLength();
        const scopeKey = this.getScopeKeyU256(scopeName);

        // Verify caller is owner
        this.requireScopeOwner(scopeKey);

        // Verify there is a pending transfer to cancel
        if (this.scopePendingOwner.get(scopeKey).isZero()) {
            throw new Revert('No pending scope transfer');
        }

        // Clear pending transfer
        this.scopePendingOwner.set(scopeKey, u256.Zero);
        this.scopePendingTimestamp.set(scopeKey, u256.Zero);

        this.emitEvent(
            new ScopeTransferCancelledEvent(
                scopeKey,
                Blockchain.tx.sender,
                Blockchain.block.number,
            ),
        );

        return new BytesWriter(0);
    }

    // =========================================================================
    // PACKAGE METHODS
    // =========================================================================

    /**
     * Register a new package.
     * For scoped packages (@scope/name), caller must own the scope (free).
     * For unscoped packages, requires payment.
     * @param calldata Contains the full package name.
     */
    @method({ name: 'packageName', type: ABIDataTypes.STRING })
    @emit('PackageRegistered')
    public registerPackage(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();

        // Validate package name
        this.validatePackageName(packageName);

        const packageKey = this.getPackageKeyU256(packageName);

        // Check if already exists
        if (!this.packageExists.get(packageKey).isZero()) {
            throw new Revert('Package already exists');
        }

        const sender = Blockchain.tx.sender;
        const blockNumber = Blockchain.block.number;

        // Check if scoped package
        if (this.isScoped(packageName)) {
            const scopeName = this.extractScope(packageName);
            const scopeKey = this.getScopeKeyU256(scopeName);

            // Verify scope exists
            if (this.scopeExists.get(scopeKey).isZero()) {
                throw new Revert('Scope does not exist');
            }

            // Verify caller owns scope (scoped packages are free for scope owner)
            const scopeOwnerAddr = this._u256ToAddress(this.scopeOwner.get(scopeKey));
            if (!sender.equals(scopeOwnerAddr)) {
                throw new Revert('Not scope owner');
            }
        } else {
            // Unscoped package requires payment
            this.verifyPayment(this.packagePriceSats.get(u256.Zero).toU64());
        }

        // Register package
        this.packageExists.set(packageKey, u256.One);
        this.packageOwner.set(packageKey, this._addressToU256(sender));
        this.packageCreated.set(packageKey, u256.fromU64(blockNumber));
        this.packageVersionCount.set(packageKey, u256.Zero);

        this.emitEvent(new PackageRegisteredEvent(packageKey, sender, blockNumber));

        return new BytesWriter(0);
    }

    /**
     * Publish a new version of a package.
     * @param calldata Contains version metadata.
     */
    @method(
        { name: 'packageName', type: ABIDataTypes.STRING },
        { name: 'version', type: ABIDataTypes.STRING },
        { name: 'ipfsCid', type: ABIDataTypes.STRING },
        { name: 'checksum', type: ABIDataTypes.BYTES32 },
        { name: 'signature', type: ABIDataTypes.BYTES },
        { name: 'mldsaLevel', type: ABIDataTypes.UINT8 },
        { name: 'opnetVersionRange', type: ABIDataTypes.STRING },
        { name: 'pluginType', type: ABIDataTypes.UINT8 },
        { name: 'permissionsHash', type: ABIDataTypes.BYTES32 },
        { name: 'dependencies', type: ABIDataTypes.BYTES },
    )
    @emit('VersionPublished')
    public publishVersion(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();
        const version = calldata.readStringWithLength();
        const ipfsCid = calldata.readStringWithLength();
        const checksum = calldata.readU256();
        const signature = calldata.readBytesWithLength();
        const mldsaLevel = calldata.readU8();
        const opnetVersionRange = calldata.readStringWithLength();
        const pluginType = calldata.readU8();
        const permissionsHash = calldata.readU256();
        const dependencies = calldata.readBytesWithLength();

        const packageKey = this.getPackageKeyU256(packageName);

        // Verify package exists
        if (this.packageExists.get(packageKey).isZero()) {
            throw new Revert('Package does not exist');
        }

        // Verify caller is owner
        this.requirePackageOwner(packageKey);

        // Validate inputs
        this.validateVersionString(version);
        this.validateIpfsCid(ipfsCid);
        this.validateChecksum(checksum);
        this.validateOpnetVersionRange(opnetVersionRange);

        if (mldsaLevel < 1 || mldsaLevel > 3) {
            throw new Revert('Invalid MLDSA level');
        }

        this.validateSignatureLength(signature, mldsaLevel);

        if (pluginType < 1 || pluginType > 2) {
            throw new Revert('Invalid plugin type');
        }

        // Create version key
        const versionKey = this.getVersionKeyU256(packageName, version);

        // Check version doesn't already exist
        if (!this.versionExists.get(versionKey).isZero()) {
            throw new Revert('Version already exists');
        }

        const sender = Blockchain.tx.sender;
        const blockNumber = Blockchain.block.number;

        // Store signature hash (signature too large for on-chain storage)
        const sigHash = u256.fromUint8ArrayBE(Blockchain.sha256(signature));

        // Store dependencies hash
        const depsHash = u256.fromUint8ArrayBE(Blockchain.sha256(dependencies));

        // Store version data
        this.versionExists.set(versionKey, u256.One);
        this.versionChecksum.set(versionKey, checksum);
        this.versionSigHash.set(versionKey, sigHash);
        this.versionMldsaLevel.set(versionKey, u256.fromU32(<u32>mldsaLevel));
        this.versionPluginType.set(versionKey, u256.fromU32(<u32>pluginType));
        this.versionPermHash.set(versionKey, permissionsHash);
        this.versionDepsHash.set(versionKey, depsHash);
        this.versionPublisher.set(versionKey, this._addressToU256(sender));
        this.versionTimestamp.set(versionKey, u256.fromU64(blockNumber));
        this.versionDeprecated.set(versionKey, u256.Zero);

        // Store variable-length strings using AdvancedStoredString
        const versionKeyBytes = this.getVersionKey(packageName, version);
        const cidStorage = new AdvancedStoredString(
            versionIpfsCidPointer,
            versionKeyBytes,
            MAX_CID_LENGTH,
        );
        cidStorage.value = ipfsCid;

        const rangeStorage = new AdvancedStoredString(
            versionOpnetRangePointer,
            versionKeyBytes,
            MAX_OPNET_RANGE_LENGTH,
        );
        rangeStorage.value = opnetVersionRange;

        // Store latest version for package
        const pkgKeyBytes = this.getPackageKey(packageName);
        const latestStorage = new AdvancedStoredString(
            packageLatestVersionPointer,
            pkgKeyBytes,
            MAX_VERSION_LENGTH,
        );
        latestStorage.value = version;

        // Increment version count
        const currentCount = this.packageVersionCount.get(packageKey);
        this.packageVersionCount.set(packageKey, SafeMath.add(currentCount, u256.One));

        this.emitEvent(
            new VersionPublishedEvent(
                packageKey,
                versionKey,
                sender,
                checksum,
                blockNumber,
                mldsaLevel,
                pluginType,
            ),
        );

        return new BytesWriter(0);
    }

    /**
     * Deprecate a version (within 72-hour window).
     * @param calldata Contains package name, version, and reason.
     */
    @method(
        { name: 'packageName', type: ABIDataTypes.STRING },
        { name: 'version', type: ABIDataTypes.STRING },
        { name: 'reason', type: ABIDataTypes.STRING },
    )
    @emit('VersionDeprecated')
    public deprecateVersion(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();
        const version = calldata.readStringWithLength();
        const reason = calldata.readStringWithLength();

        const packageKey = this.getPackageKeyU256(packageName);
        const versionKey = this.getVersionKeyU256(packageName, version);

        // Verify package and version exist
        if (this.packageExists.get(packageKey).isZero()) {
            throw new Revert('Package does not exist');
        }

        if (this.versionExists.get(versionKey).isZero()) {
            throw new Revert('Version does not exist');
        }

        // Verify caller is owner
        this.requirePackageOwner(packageKey);

        // Check within mutability window
        const publishTime = this.versionTimestamp.get(versionKey).toU64();
        if (!this.isWithinMutabilityWindow(publishTime)) {
            throw new Revert('Version is immutable');
        }

        // Check not already deprecated
        if (!this.versionDeprecated.get(versionKey).isZero()) {
            throw new Revert('Already deprecated');
        }

        // Mark as deprecated
        this.versionDeprecated.set(versionKey, u256.One);

        // Store deprecation reason
        const versionKeyBytes = this.getVersionKey(packageName, version);
        const reasonStorage = new AdvancedStoredString(
            versionDepReasonPointer,
            versionKeyBytes,
            MAX_REASON_LENGTH,
        );
        reasonStorage.value = reason;

        this.emitEvent(new VersionDeprecatedEvent(packageKey, versionKey, Blockchain.block.number));

        return new BytesWriter(0);
    }

    /**
     * Undeprecate a version (within 72-hour window).
     * @param calldata Contains package name and version.
     */
    @method(
        { name: 'packageName', type: ABIDataTypes.STRING },
        { name: 'version', type: ABIDataTypes.STRING },
    )
    @emit('VersionUndeprecated')
    public undeprecateVersion(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();
        const version = calldata.readStringWithLength();

        const packageKey = this.getPackageKeyU256(packageName);
        const versionKey = this.getVersionKeyU256(packageName, version);

        // Verify package and version exist
        if (this.packageExists.get(packageKey).isZero()) {
            throw new Revert('Package does not exist');
        }

        if (this.versionExists.get(versionKey).isZero()) {
            throw new Revert('Version does not exist');
        }

        // Verify caller is owner
        this.requirePackageOwner(packageKey);

        // Check within mutability window
        const publishTime = this.versionTimestamp.get(versionKey).toU64();
        if (!this.isWithinMutabilityWindow(publishTime)) {
            throw new Revert('Version is immutable');
        }

        // Check is deprecated
        if (this.versionDeprecated.get(versionKey).isZero()) {
            throw new Revert('Not deprecated');
        }

        // Mark as not deprecated
        this.versionDeprecated.set(versionKey, u256.Zero);

        // Clear deprecation reason
        const versionKeyBytes = this.getVersionKey(packageName, version);
        const reasonStorage = new AdvancedStoredString(
            versionDepReasonPointer,
            versionKeyBytes,
            MAX_REASON_LENGTH,
        );
        reasonStorage.value = '';

        this.emitEvent(
            new VersionUndeprecatedEvent(packageKey, versionKey, Blockchain.block.number),
        );

        return new BytesWriter(0);
    }

    /**
     * Initiate transfer of package ownership.
     * @param calldata Contains package name and new owner address.
     */
    @method(
        { name: 'packageName', type: ABIDataTypes.STRING },
        { name: 'newOwner', type: ABIDataTypes.ADDRESS },
    )
    @emit('PackageTransferInitiated')
    public initiateTransfer(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();
        const newOwner = calldata.readAddress();

        const packageKey = this.getPackageKeyU256(packageName);

        // Verify caller is owner
        this.requirePackageOwner(packageKey);

        // Validate new owner
        if (newOwner.equals(Address.zero())) {
            throw new Revert('Invalid new owner');
        }

        // Set pending transfer
        const blockNumber = Blockchain.block.number;
        this.pkgPendingOwner.set(packageKey, this._addressToU256(newOwner));
        this.pkgPendingTimestamp.set(packageKey, u256.fromU64(blockNumber));

        this.emitEvent(
            new PackageTransferInitiatedEvent(
                packageKey,
                Blockchain.tx.sender,
                newOwner,
                blockNumber,
            ),
        );

        return new BytesWriter(0);
    }

    /**
     * Accept a pending package transfer.
     * @param calldata Contains the package name.
     */
    @method({ name: 'packageName', type: ABIDataTypes.STRING })
    @emit('PackageTransferCompleted')
    public acceptTransfer(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();
        const packageKey = this.getPackageKeyU256(packageName);

        // Verify pending transfer exists
        const pendingOwner = this._u256ToAddress(this.pkgPendingOwner.get(packageKey));
        if (pendingOwner.equals(Address.zero())) {
            throw new Revert('No pending transfer');
        }

        // Verify caller is pending owner
        if (!Blockchain.tx.sender.equals(pendingOwner)) {
            throw new Revert('Not pending owner');
        }

        // Complete transfer
        const previousOwner = this._u256ToAddress(this.packageOwner.get(packageKey));
        const blockNumber = Blockchain.block.number;

        this.packageOwner.set(packageKey, this._addressToU256(pendingOwner));
        this.pkgPendingOwner.set(packageKey, u256.Zero);
        this.pkgPendingTimestamp.set(packageKey, u256.Zero);

        this.emitEvent(
            new PackageTransferCompletedEvent(packageKey, previousOwner, pendingOwner, blockNumber),
        );

        return new BytesWriter(0);
    }

    /**
     * Cancel a pending package transfer.
     * @param calldata Contains the package name.
     */
    @method({ name: 'packageName', type: ABIDataTypes.STRING })
    @emit('PackageTransferCancelled')
    public cancelTransfer(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();
        const packageKey = this.getPackageKeyU256(packageName);

        // Verify caller is owner
        this.requirePackageOwner(packageKey);

        // Verify there is a pending transfer to cancel
        if (this.pkgPendingOwner.get(packageKey).isZero()) {
            throw new Revert('No pending transfer');
        }

        // Clear pending transfer
        this.pkgPendingOwner.set(packageKey, u256.Zero);
        this.pkgPendingTimestamp.set(packageKey, u256.Zero);

        this.emitEvent(
            new PackageTransferCancelledEvent(
                packageKey,
                Blockchain.tx.sender,
                Blockchain.block.number,
            ),
        );

        return new BytesWriter(0);
    }

    // =========================================================================
    // VIEW METHODS
    // =========================================================================

    /**
     * Get scope information.
     * @returns exists, owner, createdAt
     */
    @method({ name: 'scopeName', type: ABIDataTypes.STRING })
    @returns(
        { name: 'exists', type: ABIDataTypes.BOOL },
        { name: 'owner', type: ABIDataTypes.ADDRESS },
        { name: 'createdAt', type: ABIDataTypes.UINT64 },
    )
    public getScope(calldata: Calldata): BytesWriter {
        const scopeName = calldata.readStringWithLength();
        const scopeKey = this.getScopeKeyU256(scopeName);

        const exists = !this.scopeExists.get(scopeKey).isZero();
        const owner = exists ? this._u256ToAddress(this.scopeOwner.get(scopeKey)) : Address.zero();
        const createdAt = exists ? this.scopeCreated.get(scopeKey).toU64() : <u64>0;

        const response = new BytesWriter(1 + 32 + 8);
        response.writeBoolean(exists);
        response.writeAddress(owner);
        response.writeU64(createdAt);

        return response;
    }

    /**
     * Get scope owner address.
     * @returns owner address
     */
    @method({ name: 'scopeName', type: ABIDataTypes.STRING })
    @returns({ name: 'owner', type: ABIDataTypes.ADDRESS })
    public getScopeOwner(calldata: Calldata): BytesWriter {
        const scopeName = calldata.readStringWithLength();
        const scopeKey = this.getScopeKeyU256(scopeName);

        const owner = this._u256ToAddress(this.scopeOwner.get(scopeKey));

        const response = new BytesWriter(32);
        response.writeAddress(owner);

        return response;
    }

    /**
     * Get package information.
     * @returns exists, owner, createdAt, versionCount, latestVersion
     */
    @method({ name: 'packageName', type: ABIDataTypes.STRING })
    @returns(
        { name: 'exists', type: ABIDataTypes.BOOL },
        { name: 'owner', type: ABIDataTypes.ADDRESS },
        { name: 'createdAt', type: ABIDataTypes.UINT64 },
        { name: 'versionCount', type: ABIDataTypes.UINT256 },
        { name: 'latestVersion', type: ABIDataTypes.STRING },
    )
    public getPackage(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();
        const packageKey = this.getPackageKeyU256(packageName);
        const pkgKeyBytes = this.getPackageKey(packageName);

        const exists = !this.packageExists.get(packageKey).isZero();
        const owner = exists
            ? this._u256ToAddress(this.packageOwner.get(packageKey))
            : Address.zero();
        const createdAt = exists ? this.packageCreated.get(packageKey).toU64() : <u64>0;
        const versionCount = exists ? this.packageVersionCount.get(packageKey) : u256.Zero;

        let latestVersion = '';
        if (exists) {
            const latestStorage = new AdvancedStoredString(
                packageLatestVersionPointer,
                pkgKeyBytes,
                32,
            );
            latestVersion = latestStorage.value;
        }

        // Calculate response size
        const latestBytes = Uint8Array.wrap(String.UTF8.encode(latestVersion));
        const response = new BytesWriter(1 + 32 + 8 + 32 + 4 + latestBytes.length);
        response.writeBoolean(exists);
        response.writeAddress(owner);
        response.writeU64(createdAt);
        response.writeU256(versionCount);
        response.writeStringWithLength(latestVersion);

        return response;
    }

    /**
     * Get package owner address.
     * @returns owner address
     */
    @method({ name: 'packageName', type: ABIDataTypes.STRING })
    @returns({ name: 'owner', type: ABIDataTypes.ADDRESS })
    public getOwner(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();
        const packageKey = this.getPackageKeyU256(packageName);

        const owner = this._u256ToAddress(this.packageOwner.get(packageKey));

        const response = new BytesWriter(32);
        response.writeAddress(owner);

        return response;
    }

    /**
     * Get version information.
     * @returns Full version metadata
     */
    @method(
        { name: 'packageName', type: ABIDataTypes.STRING },
        { name: 'version', type: ABIDataTypes.STRING },
    )
    @returns(
        { name: 'exists', type: ABIDataTypes.BOOL },
        { name: 'ipfsCid', type: ABIDataTypes.STRING },
        { name: 'checksum', type: ABIDataTypes.BYTES32 },
        { name: 'sigHash', type: ABIDataTypes.BYTES32 },
        { name: 'mldsaLevel', type: ABIDataTypes.UINT8 },
        { name: 'opnetVersionRange', type: ABIDataTypes.STRING },
        { name: 'pluginType', type: ABIDataTypes.UINT8 },
        { name: 'permissionsHash', type: ABIDataTypes.BYTES32 },
        { name: 'depsHash', type: ABIDataTypes.BYTES32 },
        { name: 'publisher', type: ABIDataTypes.ADDRESS },
        { name: 'publishedAt', type: ABIDataTypes.UINT64 },
        { name: 'deprecated', type: ABIDataTypes.BOOL },
    )
    public getVersion(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();
        const version = calldata.readStringWithLength();

        const versionKey = this.getVersionKeyU256(packageName, version);
        const versionKeyBytes = this.getVersionKey(packageName, version);

        const exists = !this.versionExists.get(versionKey).isZero();

        if (!exists) {
            const response = new BytesWriter(1);
            response.writeBoolean(false);
            return response;
        }

        const checksum = this.versionChecksum.get(versionKey);
        const sigHash = this.versionSigHash.get(versionKey);
        const mldsaLevel = <u8>this.versionMldsaLevel.get(versionKey).toU32();
        const pluginType = <u8>this.versionPluginType.get(versionKey).toU32();
        const permissionsHash = this.versionPermHash.get(versionKey);
        const depsHash = this.versionDepsHash.get(versionKey);
        const publisher = this._u256ToAddress(this.versionPublisher.get(versionKey));
        const publishedAt = this.versionTimestamp.get(versionKey).toU64();
        const deprecated = !this.versionDeprecated.get(versionKey).isZero();

        const cidStorage = new AdvancedStoredString(
            versionIpfsCidPointer,
            versionKeyBytes,
            MAX_CID_LENGTH,
        );
        const ipfsCid = cidStorage.value;

        const rangeStorage = new AdvancedStoredString(
            versionOpnetRangePointer,
            versionKeyBytes,
            MAX_OPNET_RANGE_LENGTH,
        );
        const opnetVersionRange = rangeStorage.value;

        // Calculate response size
        const cidBytes = Uint8Array.wrap(String.UTF8.encode(ipfsCid));
        const rangeBytes = Uint8Array.wrap(String.UTF8.encode(opnetVersionRange));

        const response = new BytesWriter(
            1 + // exists
                4 +
                cidBytes.length + // ipfsCid
                32 + // checksum
                32 + // sigHash
                1 + // mldsaLevel
                4 +
                rangeBytes.length + // opnetVersionRange
                1 + // pluginType
                32 + // permissionsHash
                32 + // depsHash
                32 + // publisher
                8 + // publishedAt
                1, // deprecated
        );

        response.writeBoolean(exists);
        response.writeStringWithLength(ipfsCid);
        response.writeU256(checksum);
        response.writeU256(sigHash);
        response.writeU8(mldsaLevel);
        response.writeStringWithLength(opnetVersionRange);
        response.writeU8(pluginType);
        response.writeU256(permissionsHash);
        response.writeU256(depsHash);
        response.writeAddress(publisher);
        response.writeU64(publishedAt);
        response.writeBoolean(deprecated);

        return response;
    }

    /**
     * Check if a version is deprecated.
     * @returns boolean
     */
    @method(
        { name: 'packageName', type: ABIDataTypes.STRING },
        { name: 'version', type: ABIDataTypes.STRING },
    )
    @returns({ name: 'deprecated', type: ABIDataTypes.BOOL })
    public isDeprecated(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();
        const version = calldata.readStringWithLength();

        const versionKey = this.getVersionKeyU256(packageName, version);

        const deprecated = !this.versionDeprecated.get(versionKey).isZero();

        const response = new BytesWriter(1);
        response.writeBoolean(deprecated);

        return response;
    }

    /**
     * Check if a version is immutable (past 72-hour window).
     * @returns boolean
     */
    @method(
        { name: 'packageName', type: ABIDataTypes.STRING },
        { name: 'version', type: ABIDataTypes.STRING },
    )
    @returns({ name: 'immutable', type: ABIDataTypes.BOOL })
    public isImmutable(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();
        const version = calldata.readStringWithLength();

        const versionKey = this.getVersionKeyU256(packageName, version);

        if (this.versionExists.get(versionKey).isZero()) {
            const response = new BytesWriter(1);
            response.writeBoolean(false);
            return response;
        }

        const publishTime = this.versionTimestamp.get(versionKey).toU64();
        const immutable = !this.isWithinMutabilityWindow(publishTime);

        const response = new BytesWriter(1);
        response.writeBoolean(immutable);

        return response;
    }

    /**
     * Get pending transfer info for a package.
     * @returns pendingOwner, initiatedAt
     */
    @method({ name: 'packageName', type: ABIDataTypes.STRING })
    @returns(
        { name: 'pendingOwner', type: ABIDataTypes.ADDRESS },
        { name: 'initiatedAt', type: ABIDataTypes.UINT64 },
    )
    public getPendingTransfer(calldata: Calldata): BytesWriter {
        const packageName = calldata.readStringWithLength();
        const packageKey = this.getPackageKeyU256(packageName);

        const pendingOwner = this._u256ToAddress(this.pkgPendingOwner.get(packageKey));
        const initiatedAt = this.pkgPendingTimestamp.get(packageKey).toU64();

        const response = new BytesWriter(32 + 8);
        response.writeAddress(pendingOwner);
        response.writeU64(initiatedAt);

        return response;
    }

    /**
     * Get pending transfer info for a scope.
     * @returns pendingOwner, initiatedAt
     */
    @method({ name: 'scopeName', type: ABIDataTypes.STRING })
    @returns(
        { name: 'pendingOwner', type: ABIDataTypes.ADDRESS },
        { name: 'initiatedAt', type: ABIDataTypes.UINT64 },
    )
    public getPendingScopeTransfer(calldata: Calldata): BytesWriter {
        const scopeName = calldata.readStringWithLength();
        const scopeKey = this.getScopeKeyU256(scopeName);

        const pendingOwner = this._u256ToAddress(this.scopePendingOwner.get(scopeKey));
        const initiatedAt = this.scopePendingTimestamp.get(scopeKey).toU64();

        const response = new BytesWriter(32 + 8);
        response.writeAddress(pendingOwner);
        response.writeU64(initiatedAt);

        return response;
    }

    /**
     * Get current treasury address.
     * @returns treasury address string
     */
    @method()
    @returns({ name: 'treasuryAddress', type: ABIDataTypes.STRING })
    public getTreasuryAddress(_: Calldata): BytesWriter {
        const addr = this.treasuryAddress.value;
        const addrBytes = Uint8Array.wrap(String.UTF8.encode(addr));

        const response = new BytesWriter(4 + addrBytes.length);
        response.writeStringWithLength(addr);

        return response;
    }

    /**
     * Get current scope price.
     * @returns price in satoshis
     */
    @method()
    @returns({ name: 'priceSats', type: ABIDataTypes.UINT64 })
    public getScopePrice(_: Calldata): BytesWriter {
        const response = new BytesWriter(8);
        response.writeU64(this.scopePriceSats.get(u256.Zero).toU64());

        return response;
    }

    /**
     * Get current package price.
     * @returns price in satoshis
     */
    @method()
    @returns({ name: 'priceSats', type: ABIDataTypes.UINT64 })
    public getPackagePrice(_: Calldata): BytesWriter {
        const response = new BytesWriter(8);
        response.writeU64(this.packagePriceSats.get(u256.Zero).toU64());

        return response;
    }

    // =========================================================================
    // INTERNAL HELPERS
    // =========================================================================

    /**
     * Convert Address to u256 for storage.
     */
    protected _addressToU256(addr: Address): u256 {
        return u256.fromUint8ArrayBE(addr);
    }

    /**
     * Convert u256 to Address.
     */
    protected _u256ToAddress(val: u256): Address {
        if (val.isZero()) {
            return Address.zero();
        }
        const bytes = val.toUint8Array(true);
        return Address.fromUint8Array(bytes);
    }

    private getScopeKeyU256(scopeName: string): u256 {
        const bytes = Uint8Array.wrap(String.UTF8.encode(scopeName));
        return u256.fromUint8ArrayBE(Blockchain.sha256(bytes));
    }

    /**
     * Generate a storage key for a package name.
     */
    private getPackageKey(packageName: string): Uint8Array {
        const bytes = Uint8Array.wrap(String.UTF8.encode(packageName));
        const hash = Blockchain.sha256(bytes);
        return hash.slice(0, 30);
    }

    private getPackageKeyU256(packageName: string): u256 {
        const bytes = Uint8Array.wrap(String.UTF8.encode(packageName));
        return u256.fromUint8ArrayBE(Blockchain.sha256(bytes));
    }

    /**
     * Generate a storage key for a version.
     */
    private getVersionKey(packageName: string, version: string): Uint8Array {
        const combined = packageName + ':' + version;
        const bytes = Uint8Array.wrap(String.UTF8.encode(combined));
        const hash = Blockchain.sha256(bytes);
        return hash.slice(0, 30);
    }

    private getVersionKeyU256(packageName: string, version: string): u256 {
        const combined = packageName + ':' + version;
        const bytes = Uint8Array.wrap(String.UTF8.encode(combined));
        return u256.fromUint8ArrayBE(Blockchain.sha256(bytes));
    }

    /**
     * Convert a string to a u256 hash.
     */
    private stringToU256Hash(str: string): u256 {
        const bytes = Uint8Array.wrap(String.UTF8.encode(str));
        return u256.fromUint8ArrayBE(Blockchain.sha256(bytes));
    }

    /**
     * Check if a package name is scoped.
     */
    private isScoped(packageName: string): boolean {
        return packageName.length > 0 && packageName.charCodeAt(0) == 64; // '@' = 64
    }

    /**
     * Extract scope name from a scoped package.
     */
    private extractScope(packageName: string): string {
        const slashIdx = packageName.indexOf('/');
        // slashIdx must be >= 2 (at least 1 char for scope after @)
        // and not at the end (must have package name after /)
        if (slashIdx < 2 || slashIdx >= packageName.length - 1) {
            throw new Revert('Invalid scoped package format');
        }
        return packageName.substring(1, slashIdx);
    }

    /**
     * Validate scope name format.
     */
    private validateScopeName(scope: string): void {
        const len = scope.length;
        if (len < 1 || len > <i32>MAX_SCOPE_LENGTH) {
            throw new Revert('Scope must be 1-32 characters');
        }

        const first = scope.charCodeAt(0);
        if (first < 97 || first > 122) {
            throw new Revert('Scope must start with lowercase letter');
        }

        for (let i = 1; i < len; i++) {
            const c = scope.charCodeAt(i);
            const isLower = c >= 97 && c <= 122;
            const isDigit = c >= 48 && c <= 57;
            const isHyphen = c == 45;

            if (!isLower && !isDigit && !isHyphen) {
                throw new Revert('Invalid character in scope');
            }
        }
    }

    /**
     * Validate package name format (scoped or unscoped).
     */
    private validatePackageName(name: string): void {
        if (this.isScoped(name)) {
            const slashIdx = name.indexOf('/');
            if (slashIdx < 2) {
                throw new Revert('Invalid scoped package format');
            }
            const scope = name.substring(1, slashIdx);
            const pkgName = name.substring(slashIdx + 1);
            this.validateScopeName(scope);
            this.validateUnscopedName(pkgName);
        } else {
            this.validateUnscopedName(name);
        }
    }

    /**
     * Validate unscoped package name format.
     */
    private validateUnscopedName(name: string): void {
        const len = name.length;
        if (len < 1 || len > <i32>MAX_NAME_LENGTH) {
            throw new Revert('Name must be 1-64 characters');
        }

        const first = name.charCodeAt(0);
        if (first < 97 || first > 122) {
            throw new Revert('Name must start with lowercase letter');
        }

        for (let i = 1; i < len; i++) {
            const c = name.charCodeAt(i);
            const isLower = c >= 97 && c <= 122;
            const isDigit = c >= 48 && c <= 57;
            const isHyphen = c == 45;

            if (!isLower && !isDigit && !isHyphen) {
                throw new Revert('Invalid character in name');
            }
        }
    }

    /**
     * Validate IPFS CID format.
     */
    private validateIpfsCid(cid: string): void {
        const len = cid.length;
        if (len < 46 || len > <i32>MAX_CID_LENGTH) {
            throw new Revert('CID must be 46-128 characters');
        }

        // CIDv0: starts with "Qm" (base58btc, 46 chars)
        const isV0 = cid.charCodeAt(0) == 81 && cid.charCodeAt(1) == 109; // "Qm"

        // CIDv1: starts with "baf" (base32, covers bafy, bafk, bafz, etc.)
        const isV1 = cid.charCodeAt(0) == 98 && cid.charCodeAt(1) == 97 && cid.charCodeAt(2) == 102; // "baf"

        if (!isV0 && !isV1) {
            throw new Revert('CID must start with Qm or baf');
        }
    }

    /**
     * Validate version string format (basic semver: major.minor.patch).
     * Allows optional pre-release suffix (e.g., 1.0.0-alpha.1).
     */
    private validateVersionString(version: string): void {
        const len = version.length;
        if (len < 5 || len > <i32>MAX_VERSION_LENGTH) {
            throw new Revert('Version must be 5-32 characters');
        }

        // Must start with a digit (major version)
        const first = version.charCodeAt(0);
        if (first < 48 || first > 57) {
            throw new Revert('Version must start with digit');
        }

        // Count dots - must have at least 2 for x.y.z
        let dotCount: i32 = 0;
        let lastWasDot = false;

        for (let i: i32 = 0; i < len; i++) {
            const c = version.charCodeAt(i);
            const isDot = c == 46; // '.'
            const isDigit = c >= 48 && c <= 57;
            const isHyphen = c == 45; // '-' for pre-release

            // After hyphen, we're in pre-release - allow alphanumeric and dots
            if (isHyphen) {
                if (dotCount < 2) {
                    throw new Revert('Invalid version format');
                }
                // Rest can be alphanumeric with dots
                break;
            }

            if (isDot) {
                if (lastWasDot) {
                    throw new Revert('Invalid version: consecutive dots');
                }
                dotCount++;
                lastWasDot = true;
            } else if (isDigit) {
                lastWasDot = false;
            } else {
                throw new Revert('Invalid character in version');
            }
        }

        if (dotCount < 2) {
            throw new Revert('Version must be semver (x.y.z)');
        }
    }

    /**
     * Validate OPNet version range string format.
     * Basic validation: must not be empty, must contain valid range characters.
     */
    private validateOpnetVersionRange(range: string): void {
        const len = range.length;
        if (len == 0 || len > <i32>MAX_OPNET_RANGE_LENGTH) {
            throw new Revert('OPNet range must be 1-64 characters');
        }

        // Must contain at least one digit (a version number)
        let hasDigit = false;
        for (let i: i32 = 0; i < len; i++) {
            const c = range.charCodeAt(i);
            if (c >= 48 && c <= 57) {
                hasDigit = true;
                break;
            }
        }

        if (!hasDigit) {
            throw new Revert('OPNet range must contain version number');
        }

        // Allow: digits, dots, spaces, comparison operators (<>=^~), logical (|&), x/*
        for (let i: i32 = 0; i < len; i++) {
            const c = range.charCodeAt(i);
            const isDigit = c >= 48 && c <= 57;
            const isDot = c == 46;
            const isSpace = c == 32;
            const isCompare = c == 60 || c == 62 || c == 61 || c == 94 || c == 126; // < > = ^ ~
            const isLogical = c == 124 || c == 38; // | &
            const isWildcard = c == 120 || c == 42; // x *
            const isHyphen = c == 45;

            if (
                !isDigit &&
                !isDot &&
                !isSpace &&
                !isCompare &&
                !isLogical &&
                !isWildcard &&
                !isHyphen
            ) {
                throw new Revert('Invalid character in OPNet range');
            }
        }
    }

    /**
     * Validate treasury address format.
     * Accepts bc1p (taproot) or bc1q (segwit) addresses for mainnet.
     */
    private validateTreasuryAddress(address: string): void {
        const len = address.length;

        // Basic length check: bc1 addresses are 42-62 chars for segwit, 62 for taproot
        if (len < 42 || len > 62) {
            throw new Revert('Invalid treasury address length');
        }

        // Must start with bc1p (taproot) or bc1q (segwit)
        if (
            address.charCodeAt(0) != 98 || // 'b'
            address.charCodeAt(1) != 99 || // 'c'
            address.charCodeAt(2) != 49
        ) {
            // '1'
            throw new Revert('Treasury address must start with bc1');
        }

        const fourth = address.charCodeAt(3);
        if (fourth != 112 && fourth != 113) {
            // 'p' or 'q'
            throw new Revert('Treasury address must be bc1p or bc1q');
        }

        // Validate bech32 character set (lowercase alphanumeric except 1, b, i, o)
        for (let i: i32 = 4; i < len; i++) {
            const c = address.charCodeAt(i);
            // Valid bech32 chars: 023456789acdefghjklmnpqrstuvwxyz
            const isDigit = c >= 48 && c <= 57 && c != 49; // 0-9 except 1
            const isLower = c >= 97 && c <= 122 && c != 98 && c != 105 && c != 111; // a-z except b, i, o

            if (!isDigit && !isLower) {
                throw new Revert('Invalid character in treasury address');
            }
        }
    }

    /**
     * Validate checksum is non-zero (all-zero would indicate missing/invalid data).
     */
    private validateChecksum(checksum: u256): void {
        if (checksum.isZero()) {
            throw new Revert('Checksum cannot be zero');
        }
    }

    /**
     * Validate signature length matches expected size for MLDSA level.
     */
    private validateSignatureLength(signature: Uint8Array, mldsaLevel: u8): void {
        const sigLen = <u32>signature.length;
        let expectedLen: u32;

        if (mldsaLevel == 1) {
            expectedLen = MLDSA44_SIGNATURE_LEN;
        } else if (mldsaLevel == 2) {
            expectedLen = MLDSA65_SIGNATURE_LEN;
        } else if (mldsaLevel == 3) {
            expectedLen = MLDSA87_SIGNATURE_LEN;
        } else {
            throw new Revert('Invalid MLDSA level');
        }

        if (sigLen != expectedLen) {
            throw new Revert('Signature length mismatch for MLDSA level');
        }
    }

    /**
     * Check if block number is within 72-hour mutability window (~432 blocks).
     */
    private isWithinMutabilityWindow(publishBlock: u64): boolean {
        const currentBlock = Blockchain.block.number;
        return currentBlock <= publishBlock + MUTABILITY_WINDOW_BLOCKS;
    }

    /**
     * Verify payment to treasury address.
     */
    private verifyPayment(requiredSats: u64): void {
        if (!Blockchain.tx.origin.equals(Blockchain.tx.sender)) {
            throw new Revert('Contracts not allowed.');
        }

        const treasuryAddr = this.treasuryAddress.value;
        let totalPaid: u64 = 0;

        const outputs = Blockchain.tx.outputs;
        for (let i: i32 = 0; i < outputs.length; i++) {
            if (outputs[i].to == treasuryAddr) {
                totalPaid = SafeMath.add64(totalPaid, outputs[i].value);
            }
        }

        if (totalPaid < requiredSats) {
            throw new Revert('Insufficient payment');
        }
    }

    /**
     * Require caller to be the scope owner.
     */
    private requireScopeOwner(scopeKey: u256): void {
        if (this.scopeExists.get(scopeKey).isZero()) {
            throw new Revert('Scope does not exist');
        }

        const owner = this._u256ToAddress(this.scopeOwner.get(scopeKey));
        if (!Blockchain.tx.sender.equals(owner)) {
            throw new Revert('Not scope owner');
        }
    }

    /**
     * Require caller to be the package owner.
     */
    private requirePackageOwner(packageKey: u256): void {
        if (this.packageExists.get(packageKey).isZero()) {
            throw new Revert('Package does not exist');
        }

        const owner = this._u256ToAddress(this.packageOwner.get(packageKey));
        if (!Blockchain.tx.sender.equals(owner)) {
            throw new Revert('Not package owner');
        }
    }
}
```

### src/registry/events/RegistryEvents.ts
```typescript
/**
 * OPNet Package Registry - Event Definitions
 *
 * All events emitted by the Package Registry contract.
 * Events are used for indexing and tracking state changes.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { u256 } from '@btc-vision/as-bignum/assembly';
import {
    Address,
    ADDRESS_BYTE_LENGTH,
    BytesWriter,
    NetEvent,
    U256_BYTE_LENGTH,
    U64_BYTE_LENGTH,
    U8_BYTE_LENGTH,
} from '@btc-vision/btc-runtime/runtime';

// =============================================================================
// Scope Events
// =============================================================================

/**
 * Emitted when a new scope is registered.
 * @param scopeHash - SHA256 hash of the scope name (without @)
 * @param owner - Address of the scope owner
 * @param timestamp - Block timestamp when registered
 */
@final
export class ScopeRegisteredEvent extends NetEvent {
    constructor(scopeHash: u256, owner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH + U64_BYTE_LENGTH,
        );
        data.writeU256(scopeHash);
        data.writeAddress(owner);
        data.writeU64(timestamp);

        super('ScopeRegistered', data);
    }
}

/**
 * Emitted when a scope ownership transfer is initiated.
 * @param scopeHash - SHA256 hash of the scope name
 * @param currentOwner - Address of the current owner
 * @param newOwner - Address of the pending new owner
 * @param timestamp - Block timestamp when initiated
 */
@final
export class ScopeTransferInitiatedEvent extends NetEvent {
    constructor(scopeHash: u256, currentOwner: Address, newOwner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH * 2 + U64_BYTE_LENGTH,
        );
        data.writeU256(scopeHash);
        data.writeAddress(currentOwner);
        data.writeAddress(newOwner);
        data.writeU64(timestamp);

        super('ScopeTransferInitiated', data);
    }
}

/**
 * Emitted when a scope ownership transfer is completed.
 * @param scopeHash - SHA256 hash of the scope name
 * @param previousOwner - Address of the previous owner
 * @param newOwner - Address of the new owner
 * @param timestamp - Block timestamp when completed
 */
@final
export class ScopeTransferCompletedEvent extends NetEvent {
    constructor(scopeHash: u256, previousOwner: Address, newOwner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH * 2 + U64_BYTE_LENGTH,
        );
        data.writeU256(scopeHash);
        data.writeAddress(previousOwner);
        data.writeAddress(newOwner);
        data.writeU64(timestamp);

        super('ScopeTransferCompleted', data);
    }
}

/**
 * Emitted when a scope ownership transfer is cancelled.
 * @param scopeHash - SHA256 hash of the scope name
 * @param owner - Address of the owner who cancelled
 * @param timestamp - Block timestamp when cancelled
 */
@final
export class ScopeTransferCancelledEvent extends NetEvent {
    constructor(scopeHash: u256, owner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH + U64_BYTE_LENGTH,
        );
        data.writeU256(scopeHash);
        data.writeAddress(owner);
        data.writeU64(timestamp);

        super('ScopeTransferCancelled', data);
    }
}

// =============================================================================
// Package Events
// =============================================================================

/**
 * Emitted when a new package is registered.
 * @param packageHash - SHA256 hash of the full package name
 * @param owner - Address of the package owner
 * @param timestamp - Block timestamp when registered
 */
@final
export class PackageRegisteredEvent extends NetEvent {
    constructor(packageHash: u256, owner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH + U64_BYTE_LENGTH,
        );
        data.writeU256(packageHash);
        data.writeAddress(owner);
        data.writeU64(timestamp);

        super('PackageRegistered', data);
    }
}

/**
 * Emitted when a package ownership transfer is initiated.
 * @param packageHash - SHA256 hash of the package name
 * @param currentOwner - Address of the current owner
 * @param newOwner - Address of the pending new owner
 * @param timestamp - Block timestamp when initiated
 */
@final
export class PackageTransferInitiatedEvent extends NetEvent {
    constructor(packageHash: u256, currentOwner: Address, newOwner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH * 2 + U64_BYTE_LENGTH,
        );
        data.writeU256(packageHash);
        data.writeAddress(currentOwner);
        data.writeAddress(newOwner);
        data.writeU64(timestamp);

        super('PackageTransferInitiated', data);
    }
}

/**
 * Emitted when a package ownership transfer is completed.
 * @param packageHash - SHA256 hash of the package name
 * @param previousOwner - Address of the previous owner
 * @param newOwner - Address of the new owner
 * @param timestamp - Block timestamp when completed
 */
@final
export class PackageTransferCompletedEvent extends NetEvent {
    constructor(packageHash: u256, previousOwner: Address, newOwner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH * 2 + U64_BYTE_LENGTH,
        );
        data.writeU256(packageHash);
        data.writeAddress(previousOwner);
        data.writeAddress(newOwner);
        data.writeU64(timestamp);

        super('PackageTransferCompleted', data);
    }
}

/**
 * Emitted when a package ownership transfer is cancelled.
 * @param packageHash - SHA256 hash of the package name
 * @param owner - Address of the owner who cancelled
 * @param timestamp - Block timestamp when cancelled
 */
@final
export class PackageTransferCancelledEvent extends NetEvent {
    constructor(packageHash: u256, owner: Address, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + ADDRESS_BYTE_LENGTH + U64_BYTE_LENGTH,
        );
        data.writeU256(packageHash);
        data.writeAddress(owner);
        data.writeU64(timestamp);

        super('PackageTransferCancelled', data);
    }
}

// =============================================================================
// Version Events
// =============================================================================

/**
 * Emitted when a new version is published.
 * @param packageHash - SHA256 hash of the package name
 * @param versionHash - SHA256 hash of the version string
 * @param publisher - Address of the publisher
 * @param checksum - SHA256 checksum of the binary
 * @param timestamp - Block timestamp when published
 * @param mldsaLevel - MLDSA security level (1, 2, or 3)
 * @param pluginType - Plugin type (1=standalone, 2=library)
 */
@final
export class VersionPublishedEvent extends NetEvent {
    constructor(
        packageHash: u256,
        versionHash: u256,
        publisher: Address,
        checksum: u256,
        timestamp: u64,
        mldsaLevel: u8,
        pluginType: u8,
    ) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH * 3 + ADDRESS_BYTE_LENGTH + U64_BYTE_LENGTH + U8_BYTE_LENGTH * 2,
        );
        data.writeU256(packageHash);
        data.writeU256(versionHash);
        data.writeAddress(publisher);
        data.writeU256(checksum);
        data.writeU64(timestamp);
        data.writeU8(mldsaLevel);
        data.writeU8(pluginType);

        super('VersionPublished', data);
    }
}

/**
 * Emitted when a version is deprecated.
 * @param packageHash - SHA256 hash of the package name
 * @param versionHash - SHA256 hash of the version string
 * @param timestamp - Block timestamp when deprecated
 */
@final
export class VersionDeprecatedEvent extends NetEvent {
    constructor(packageHash: u256, versionHash: u256, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(U256_BYTE_LENGTH * 2 + U64_BYTE_LENGTH);
        data.writeU256(packageHash);
        data.writeU256(versionHash);
        data.writeU64(timestamp);

        super('VersionDeprecated', data);
    }
}

/**
 * Emitted when a version deprecation is removed.
 * @param packageHash - SHA256 hash of the package name
 * @param versionHash - SHA256 hash of the version string
 * @param timestamp - Block timestamp when undeprecated
 */
@final
export class VersionUndeprecatedEvent extends NetEvent {
    constructor(packageHash: u256, versionHash: u256, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(U256_BYTE_LENGTH * 2 + U64_BYTE_LENGTH);
        data.writeU256(packageHash);
        data.writeU256(versionHash);
        data.writeU64(timestamp);

        super('VersionUndeprecated', data);
    }
}

// =============================================================================
// Admin Events
// =============================================================================

/**
 * Emitted when the treasury address is changed.
 * @param previousAddress - Previous treasury address (as hash)
 * @param newAddress - New treasury address (as hash)
 * @param timestamp - Block timestamp when changed
 */
@final
export class TreasuryAddressChangedEvent extends NetEvent {
    constructor(previousAddressHash: u256, newAddressHash: u256, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(U256_BYTE_LENGTH * 2 + U64_BYTE_LENGTH);
        data.writeU256(previousAddressHash);
        data.writeU256(newAddressHash);
        data.writeU64(timestamp);

        super('TreasuryAddressChanged', data);
    }
}

/**
 * Emitted when the scope price is changed.
 * @param oldPrice - Previous price in satoshis
 * @param newPrice - New price in satoshis
 * @param timestamp - Block timestamp when changed
 */
@final
export class ScopePriceChangedEvent extends NetEvent {
    constructor(oldPrice: u64, newPrice: u64, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(U64_BYTE_LENGTH * 3);
        data.writeU64(oldPrice);
        data.writeU64(newPrice);
        data.writeU64(timestamp);

        super('ScopePriceChanged', data);
    }
}

/**
 * Emitted when the package price is changed.
 * @param oldPrice - Previous price in satoshis
 * @param newPrice - New price in satoshis
 * @param timestamp - Block timestamp when changed
 */
@final
export class PackagePriceChangedEvent extends NetEvent {
    constructor(oldPrice: u64, newPrice: u64, timestamp: u64) {
        const data: BytesWriter = new BytesWriter(U64_BYTE_LENGTH * 3);
        data.writeU64(oldPrice);
        data.writeU64(newPrice);
        data.writeU64(timestamp);

        super('PackagePriceChanged', data);
    }
}
```

### src/registry/constants.ts
```typescript
/**
 * OPNet Package Registry - Constants
 *
 * This file contains all constants used by the Package Registry contract.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

// =============================================================================
// Plugin Types
// =============================================================================

/** Standalone plugin that runs independently */
export const PLUGIN_STANDALONE: u8 = 1;

/** Library plugin that provides shared functionality */
export const PLUGIN_LIBRARY: u8 = 2;

// =============================================================================
// String Length Limits
// =============================================================================

/** Maximum length of a scope name (without @) */
export const MAX_SCOPE_LENGTH: u32 = 32;

/** Maximum length of an unscoped package name */
export const MAX_NAME_LENGTH: u32 = 64;

/** Maximum length of a version string (semver) */
export const MAX_VERSION_LENGTH: u32 = 32;

/** Maximum length of an IPFS CID string */
export const MAX_CID_LENGTH: u32 = 128;

/** Maximum length of an OPNet version range string */
export const MAX_OPNET_RANGE_LENGTH: u32 = 64;

/** Maximum length of a deprecation reason string */
export const MAX_REASON_LENGTH: u32 = 256;

// =============================================================================
// Block Constants
// =============================================================================

/** 72-hour mutability window in blocks (~432 blocks, assuming 10 min/block) */
export const MUTABILITY_WINDOW_BLOCKS: u64 = 432;

// =============================================================================
// Pricing Defaults (in satoshis)
// =============================================================================

/** Default price to register an unscoped package: 10,000 sats */
export const DEFAULT_PACKAGE_PRICE_SATS: u64 = 10_000;

/** Default price to register a scope: ~$50 worth of sats (adjustable by owner) */
export const DEFAULT_SCOPE_PRICE_SATS: u64 = 50_000;

// =============================================================================
// Reserved Scopes
// =============================================================================

/** The @opnet scope is reserved for the contract deployer */
export const RESERVED_SCOPE: string = 'opnet';
```

### src/registry/index.ts
```typescript
/**
 * OPNet Package Registry - Entry Point
 *
 * Decentralized package registry for OPNet plugins.
 * Manages package ownership, version metadata, and deprecation status.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Blockchain } from '@btc-vision/btc-runtime/runtime';
import { revertOnError } from '@btc-vision/btc-runtime/runtime/abort/abort';
import { PackageRegistry } from './PackageRegistry';

// DO NOT TOUCH THIS.
Blockchain.contract = (): PackageRegistry => {
    // ONLY CHANGE THE CONTRACT CLASS NAME.
    // DO NOT ADD CUSTOM LOGIC HERE.
    return new PackageRegistry();
};

// VERY IMPORTANT
export * from '@btc-vision/btc-runtime/runtime/exports';

// VERY IMPORTANT
export function abort(message: string, fileName: string, line: u32, column: u32): void {
    revertOnError(message, fileName, line, column);
}
```

---

## 9. Shared Events

### src/shared-events/OracleEvents.ts
```typescript
import { u256 } from '@btc-vision/as-bignum/assembly';
import {
    Address,
    ADDRESS_BYTE_LENGTH,
    BytesWriter,
    NetEvent,
    U256_BYTE_LENGTH,
    U32_BYTE_LENGTH,
    U64_BYTE_LENGTH,
} from '@btc-vision/btc-runtime/runtime';

@final
export class OracleAddedEvent extends NetEvent {
    constructor(oracle: Address, addedBy: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH * 2);
        data.writeAddress(oracle);
        data.writeAddress(addedBy);

        super('OracleAdded', data);
    }
}

@final
export class OracleRemovedEvent extends NetEvent {
    constructor(oracle: Address, removedBy: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH * 2);
        data.writeAddress(oracle);
        data.writeAddress(removedBy);

        super('OracleRemoved', data);
    }
}

@final
export class PriceSubmittedEvent extends NetEvent {
    constructor(oracle: Address, price: u256, blockNumber: u64) {
        const data: BytesWriter = new BytesWriter(
            ADDRESS_BYTE_LENGTH + U256_BYTE_LENGTH + U64_BYTE_LENGTH,
        );
        data.writeAddress(oracle);
        data.writeU256(price);
        data.writeU64(blockNumber);

        super('PriceSubmitted', data);
    }
}

@final
export class PriceAggregatedEvent extends NetEvent {
    constructor(medianPrice: u256, oracleCount: u32, blockNumber: u64) {
        const data: BytesWriter = new BytesWriter(
            U256_BYTE_LENGTH + U32_BYTE_LENGTH + U64_BYTE_LENGTH,
        );
        data.writeU256(medianPrice);
        data.writeU32(oracleCount);
        data.writeU64(blockNumber);

        super('PriceAggregated', data);
    }
}

@final
export class TWAPUpdatedEvent extends NetEvent {
    constructor(oldPrice: u256, newPrice: u256, timeElapsed: u64) {
        const data: BytesWriter = new BytesWriter(U256_BYTE_LENGTH * 2 + U64_BYTE_LENGTH);
        data.writeU256(oldPrice);
        data.writeU256(newPrice);
        data.writeU64(timeElapsed);

        super('TWAPUpdated', data);
    }
}

@final
export class PoolChangedEvent extends NetEvent {
    constructor(previousPool: Address, newPool: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH * 2);
        data.writeAddress(previousPool);
        data.writeAddress(newPool);

        super('PoolChanged', data);
    }
}

@final
export class CustodianChangedEvent extends NetEvent {
    constructor(previousCustodian: Address, newCustodian: Address) {
        const data: BytesWriter = new BytesWriter(ADDRESS_BYTE_LENGTH * 2);
        data.writeAddress(previousCustodian);
        data.writeAddress(newCustodian);

        super('CustodianChanged', data);
    }
}
```
