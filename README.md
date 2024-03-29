# Embark x ΞVTX

This is an Embark template showcasing the features of `ethvtx`.

[`ethvtx`](https://github.com/Horyus/ethvtx) is an Ethereum-ready Dapp Redux store. It will manage all the data and interactions between your user and the Ethereum Blockchain and is perfectly suited for React Dapps.

### Versions

| `embark` | `ethvtx` |
| :------: | :------: |
| 4.1.0-beta.0 | 2.0.6 |

### Run the app

```shell
embark run
```

Be sure to import the correct accounts into your Wallet Manager (Metamask, Mist) to be able to run the transactions.

`embark` will run the test chain, deploy the contracts, build and serve the application.

## Documentation

Can be found [here](http://doc.ethvtx.com) !

## Showcased Key Features

### Setup

* Easy store creation, should speak to any Redux user: [here](./app/ethvtx_config/createVtxStore.js)
* Full customization of `ethvtx`: [here](./app/ethvtx_config/setupWeb3.js)

### Transactions

* Easily broadcast transactions: [here](./app/txs_showcase/TxBroadcast.jsx#L39)
* Fetch informations from any other transactions: [here](./app/txs_showcase/TxFollow.jsx#L31)
* Recover informations and status from followed transactions: [here](./app/txs_showcase/TxList.jsx#L52)

### Smart Contracts

* Recover constant data, with smart and dynamic value refresh: [here](./app/contract_showcase/ContractMethodCall.jsx#L30)
* Broadcast transaction method calls, and have them followed by the store: [here](./app/contract_showcase/ContractMethodTx.jsx#L30)
* Catch EVM Events emitted by your smart contracts: [here](./app/contract_showcase/ContractEvents.jsx#L30)

### Accounts

* Follow addresses for balances and transaction counts: [here](./app/accounts_management/AccountsAdd.jsx#L32)
* Recover informations from followed addresses: [here](./app/accounts_management/AccountsList.jsx#L36)
