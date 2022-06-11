# Smart contracts for cadence
Smart contracts that provide some of the basic functions of the dante cross chain service.

## Version : 0.0.1

This repository contains examples of smart contracts that are useful when deploying, managing, and/or using an DANTE network. They are provided for reference purposes:

   * [SentMessageContract](./contracts/SentMessageContract.cdc)
   * [ReceivedMessageContract](./contracts/ReceivedMessageContract.cdc)
   * [CrossChain](./contracts/CrossChain.cdc)
   * [ExampleNFT](./examples/ExampleNFT.cdc)


## Install
* [Install the Flow CLI](https://docs.onflow.org/flow-cli/install/)
* Enviorment:
```
cd client
npm install
```

## Important note
The private keys included in flow.json & default.json are used for test net debugging only. 

## Examples

#### Mint NFT
```
// Setup account & mint NFT 
// Success when `Tx Sent: {...` is shown
node client/nft/MintNFT.mjs

// Query NFT meda data by Node.js
node client/nft/queryNFT.mjs

// Query sent cross chain message By Node.js
node client/nft/querySentMessage.mjs
```

#### Check NFT on Opensea browser

Wait for some time...You can see new NFT below:

```
https://testnets.opensea.io/assets?search[query]=0x0DdD135645EC1C65b0595E7dad271F616926D5B2&search[resultModel]=ASSETS
```


## Note
The related smart contracts have been already deployed, you can try the example above directly. The command lines below show how to deploy smart contracts on Flow.

### Deploy contracts
```
# Generate flow.json for emulator(Local Test Only)
flow init

# Start local emulator
flow emulator

# Deploy contracts
flow project deploy

# Update contracts
flow project deploy --update

# Deploy contracts to testnet
flow project deploy --network testnet
```

Made with ❤️ in Singapore
