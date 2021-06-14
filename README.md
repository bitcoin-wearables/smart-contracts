# Bitcoin Wearables NFT Smart Contracts <!-- omit in toc -->

This repository contains the NFT smart contracts for the Bitcoin Wearables project.

## About the source code

The source code in this repo is based on ([ERC-721](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md) standard implemented by OpenZeppelin. The tokens here instantiated makes reference to external metadata. The URI to the external metadata is defined inside the smart contract.

- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Deploy Token](#deploy-token)
  - [Mint Token](#mint-token)
  - [Get Token information](#get-token-information)
  - [Create/Update metadata](#create-update-metadata)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Requirements
You will need node.js (12.* or later) and npm installed to run it locally. We are using Hardhat to handle the project configuration and deployment. The configuration file can be found as `hardhat.config.js`.

1. Import the repository and `cd` into the new directory.
2. Run `npm install`.
3. Copy the file `.env.example` to `.env`, and replace `YOUR_PRIVATE_KEY` with the private key of your account.
4. Make sure you have gas to run the transactions and deploy the contracts in your account.
5. Define the network where you want to deploy it in `hardhat.config.js`.

### Deploy Token
Run `npx hardhat run scripts/deploy-script.js --network YOUR_NETWORK`

### Mint Token
Run `npx hardhat run scripts/mint-script.js --network YOUR_NETWORK`

### Get Token Information
Run `npx hardhat run scripts/get-token-script.js --network YOUR_NETWORK`

### Create/Update metadata
To create or update metadata, find the API metadata service we created in the repository: https://github.com/bitcoin-wearables/nft-metadata-service

## Troubleshooting

If you have any questions, send them along with a hi to hello@bitcoinwearables.org.
