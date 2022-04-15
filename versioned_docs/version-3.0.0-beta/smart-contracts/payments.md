---
id: payments
title: Payments
sidebar_label: Payments
slug: /smart-contracts/payments
---

There are three `actors` in this contract that will perform various actions on the contract.

Actors in the contract -

1. `Managers` - Managers can call charge user functions and make some configuration changes.
2. `Governance` - Governance address can change pricing-related configuration variables.
3. `Owners` - Can perform all the roles of a manager and add and remove managers.

## Functions

```jsx
constructor(
    address u,
    address e,
    uint256[] slabAmounts_,
    uint256[] slabPercents_,
    uint256 b,
    address p
    ) (public)
```

Initialize the contract with correct values

**Caller -**

- Managers
- Owner

**Args -**

- **u** - address of the token to be used for charging users.
- **e** - address of escrow where the charged amount will be sent.
- **slabAmounts\_** - List of discount slabs.
- **slabPercents\_** - Percent of discount to be given per discount slab.
- **b** - initial build time rate.
- **p** - price feed aggregator address

### charge

```jsx
charge(address u, uint256 b) (public)
```

This function will charge the user for only build time, it is to be called when either deployment fee is zero or if deployment failed.

**Caller -**

- Managers
- Owner

**Args-**

- **u** - address of the user to be charged.
- **b** - build time for a deployment.

### chargeWithProvider

```jsx
chargeWithProvider(
    address u,
    uint256 b,
    uint256 d,
    uint256 providerQuote,
    uint256 providerCharged,
    string provider
    ) (public)
```

This function will charge users when we need to charge for build time and deployment cost on a storage protocol.

**Caller -**

- Managers
- Owner

**Args-**

- **u** - address of the user to be charged.
- **b** - build time for deployment.
- **d** - deployment price in USD for underlying storage protocol.
- **providerQuote** - quote used for converting the deployment price in USD for underlying storage protocol.
- **providerCharged** - tokens charged by storage provider.
- **provider** - name of underlying storage provider.

**Remarks** -

- Remember to send all the values with VALUE \* 10 \*\* 18

### updateEscrow

```jsx
updateEscrow(address e) (public)
```

This function can be used to update the address where all the charged fee is to be sent.

**Caller -**

- Managers
- Owner

**Args-**

- **e** - new escrow address.

### updateToken

```jsx
updateToken(address u) (public)
```

This function can be used to update the address where all the charged fee is to be sent.

**Caller -**

- Managers
- Owner

**Args-**

- **u** - Address of new token.

### updateDiscountSlabs

```jsx
updateDiscountSlabs(
    uint256[] slabAmounts_,
    uint256[] slabPercents_
    ) (public)
```

Discounts are given when the user has staked on our staking contract and slabs can be used to determine how much discount a user can be given based on the stake user has done. This function will remove old discount slabs and add new ones.

**Caller -**

- Governance

**Args-**

- **slabAmounts\_** - Amounts at which a discount tier starts.
- **slabPercents\_** - Percent of discount to be given at a specific slab.

### \_calculateFee

```jsx
_calculateFee(uint256 b) → uint256 (internal)
```

This internal function is used to calculate the fee to charge for build-time only and not for the provider fee.

**Args-**

- **b** - build time.

### \_calculateFeeWithProvider

```jsx
_calculateFeeWithProvider(uint256 b, uint256 d) → uint256 (internal)
```

This internal function is used to calculate the fee to charge for build time as well as the cost for deployment on storage protocol.

**Args-**

- **b** - build time.
- **d** - deployment cost in USD.

```jsx
_calculateDiscount(address u, uint256 a) → uint256 (internal)
```

This internal function calculates the discount that the user gets for staking on our staking contract based on the discount slabs.

**Args-**

- **u** - user address.
- **a** - amount user is supposed to pay without discount.

```jsx
changeBuildTimeRate(uint256 r) (public)
```

Build time taken to build a project will be chargeable and the rate per microsecond can be changed using this function.

**Caller -**

- Governance.

**Args-**

- **r** - new build time rate.

```jsx
enableDiscounts(address s) (public)
```

Users are given a discount if the user has put a stake on staking contracts, so if users are to get a discount this function can be called to enable those discounts.

**Caller -**

- Managers
- Owner

**Args-**

- **s** - address for staking manager.

```jsx
disableDiscounts()(public);
```

Disable discounts for Users are given discounts if the user has put a stake on staking contracts, so if users are not to be given any discount this function can be called to disable those discounts.

**Caller -**

- Managers
- Owner

```jsx
getUnderlyingPrice() → uint256 (public)
```

Get the price of the underlying token

```jsx
withdrawERC20(address t, uint256 a) (external)
```

Withdraw any erc20 sent accidentally to the contract

**Caller -**

- Managers
- Owner

**Args-**

- **t** - token address
- **a** - amount to withdraw.

## Events

```jsx
ChargeWithoutProvider(
    address user,
    uint256 feeCharged,
    uint256 feeWithoutDiscount,
    address escrow
    )
```

This event is emitted when the user is charged only of build time.

```jsx
ChargeWithProvider(
    address user,
    uint256 feeCharged,
    uint256 feeWithoutDiscount,
    address escrow,
    uint256 providerQuote,
    uint256 providerCharged,
    string provider
    )
```

This event is emitted when the user is charged for build time and deployment cost.
