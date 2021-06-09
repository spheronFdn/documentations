---
id: argo-sdk-payments
title: Payments library
sidebar_label: Payments Library
slug: /argo-sdk-payments
---

Argo payments library is a wrapper around Argo payments contract and also provides some misc. supporting functions.

There are three `actors` involved with payments smart contract.

Actors in the contract -

1. `Managers` - Managers can call charge user functions and make some configuration changes.
2. `Governance` - Governance address can change pricing-related configuration variables.
3. `Owners` - Can perform all the roles of a manager and add and remove managers.

### Example code for initializing the Library -

To initialize the library you will need a web3 provider and wallet from ethers-js

```jsx
const signer = Wallet.fromMnemonic(MNEMONIC).connect(Web3Provider); // or get wallet from web3provider
const vendor = new Vendor(Web3Provider, signer);
const payment = new Payment(vendor, COIN_MARKET_CAP_KEY);
payment.at(ADDRESS_OF_PAYMENTS_CONTRACT, ADDRESS_OF_ERC20);
```

# Functions

## Setters

### paymentWithFee

```jsx
async paymentWithFee(
    u: string,
    b: string,
    d: string,
    providerQuote: any,
    providerCharged: any,
    provider: string,
  ): Promise<TxResponse>
```

This function will charge users when we need to charge for build time and deployment cost on a storage protocol.

**Caller-**

- Managers
- Owner

**Args-**

- **u** - address of the user to be charged.
- **b** - build time for deployment.
- **d** - deployment price in USD for underlying storage protocol.
- **providerQuote** - quote used for converting the deployment price in USD for underlying storage protocol.
- **providerCharged** - tokens charged by storage provider.
- **provider** - name of underlying storage provider.

### paymentWithoutFee

```jsx
async paymentWithoutFee(a: string, b: string): Promise<TxResponse>
```

This function will charge users when we need to charge for build time and deployment cost on a storage protocol.

**Caller-**

- Managers
- Owner

**Args-**

- **a** - address of the user to be charged.
- **b** - build time for a deployment.

### updateEscrow

```jsx
async updateEscrow(a: string): Promise<TxResponse>
```

This function can be used to update the address where all the charged fee is to be sent.

**Caller-**

- Managers
- Owner

**Args-**

- **a** - new escrow address.

### updateToken

```jsx
async updateToken(a: string): Promise<TxResponse>
```

This function can be used to update the address where all the charged fee is to be sent.

**Caller-**

- Managers
- Owner

**Args-**

- **a** - address of new token.

### updateDiscountSlabs

```jsx
async updateDiscountSlabs(d: Array<string>, p: Array<string>): Promise<TxResponse>
```

Discounts are given when the user has staked on our staking contract and slabs can be used to determine how much discount a user can be given based on the stake user has done. This function will remove old discount slabs and add new ones.

**Caller-**

- Governance

**Args-**

- **d** - Amounts at which a discount tier starts.
- **p** - Percent of discount to be given at a specific slab.

### changeBuildTimeRate

```jsx
async changeBuildTimeRate(p: string): Promise<TxResponse>
```

Build time taken to build a project will be chargeable and the rate per microsecond can be changed using this function.

**Caller-**

- Governance.

**Args-**

- **p** - new build time rate.

### enableDiscounts

```jsx
async enableDiscounts(h: string): Promise<TxResponse>
```

Users are given a discount if the user has put a stake on staking contracts, so if users are to get a discount this function can be called to enable those discounts.

**Caller-**

- Managers
- Owner

**Args-**

- **h** - address for staking manager.

### disableDiscounts

```jsx
async disableDiscounts(): Promise<TxResponse>
```

Disable discounts for users are given discounts if the user has put a stake on staking contracts, so if users are not to be given any discount this function can be called to disable those discounts.

**Caller-**

- Managers
- Owner

### setGovernanceAddress

```jsx
async setGovernanceAddress(h: string): Promise<TxResponse>
```

Some operations will be community-driven in the future and the governance contract address can be updated using this function.

**Caller-**

- Managers
- Owner

**Args-**

- **h** - new address for governance.

### setManagers

```jsx
async setManagers(h: Array<string>): Promise<TxResponse>
```

Managers are admins that can call all the necessary functions of the contract, this function can be used to add new managers to the contract.

**Caller-**

- Owner

**Args-**

- **h** - Array of all the addresses to be set as Managers.

### setNewApprovals

```jsx
async setNewApprovals(a: string): Promise<TxResponse>
```

This function can be used to allow ArGo payments contract to use ArGo tokens on the user's behalf. This function should be called from the front end where the user is the signer.

**Caller-**

- User

**Args-**

- **a** - amount for approval.

Remarks -

- Call this from front-end where the user is a signer.

## Getters

Getter functions can be called by anyone.

### getApprovalAmount

```jsx
async getApprovalAmount(a: string): Promise<any>
```

This function can be used to get allowance given to ArGo payments contract for ArGo token, especially useful to perform allowance checks.

**Args-**

- **a** - address for whom the approval amount is to be checked.

### getUserBalance

```jsx
async getUserBalance(a: string): Promise<any>
```

ArGo token balance of the user can be fetched using this function. Especially useful to perform balance checks.

**Args**-

- **a** - address of user.

### getManagers

```jsx
async getManagers(): Promise<Array<string>>
```

To fetch a list of all the managers of the payments contract, this function can be called.

### getGovernanceAddress

```jsx
async getGovernanceAddress(): Promise<string>
```

This function can be used to get the address of the governance role.

### getToken

```jsx
async getToken(): Promise<string>
```

This function can be used to get the address of the token being used for payments. (ArGo token)

### getEscrow

```jsx
async getEscrow(): Promise<string>
```

The amount that payments contract charges is supposed to go to an escrow contract or some address, this function will return us that address.

### checkIfDiscountsEnabled

```jsx
async checkIfDiscountsEnabled(): Promise<boolean>
```

This function can be called to check if the payment contract is giving a discount. It will return a boolean value.

### getStakingManagerAddress

```jsx
async getStakingManagerAddress(): Promise<string>
```

Staking manager is the contract where users stake their ArGo token for yield farming, and ArGo Payments contract gives a discount for the amount of stake that is made, this function can be used to get the stake amount.

### getDiscountSlabs

```jsx
async getDiscountSlabs(): Promise<any>
```

Discount slabs are used to define how much discount should one get for the amount one has staked on the staking contract, this function can get all the discount slabs.

### getArweaveConvertedUsd

```jsx
async getArweaveConvertedUsd(a: string): Promise<number>
```

There is a requirement to get a USD quote of a given Arweave amount, this function can be called for the same purpose.

### getArweaveQuote

```jsx
async getArweaveQuote(): Promise<number>
```

Arweave quote is to be emitted when payment with provider is made and this function can be called to get the quote.

## Helper Functions

### convertStringArrayToBigNumberArray

```jsx
convertStringArrayToBigNumberArray(array: Array<string>): Array<any>
```

This function can be used to convert an array of numbers in string to get an array of BigNumbers.

### parseDiscountSlabs

```jsx
parseDiscountSlabs(data: Array<any>): Array<Discount>
```

This function parses discount slabs data coming from contract to Typescript Discount object.

### convertToBN

```jsx
convertToBN(amount: string): BigNumber
```

This function converts a given number in the string to BigNumber.

### convertToWei

```jsx
convertToWei(amount: string): BigNumber
```

This function multiplies the given number to 10\*\*18 and returns a BigNumber. (Eth to Wei conversion)

### convertWeiToEth

```jsx
convertWeiToEth(wei: any): number
```

This function divides given BigNumber by 10\*\*18 and returns a number. (Wei to Eth)

### signMessage

```jsx
async signMessage(m: string): Promise<string>
```

This function returns a signed message using the private key of the signer, this function is useful for verification purposes.

### verifySignedMessage

```jsx
verifySignedMessage(m: string, s: string): string
```

This function returns the address of the signer when provided with a message and signed message. This function is useful for getting the address and verifying the address on the API side.
