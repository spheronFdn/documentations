---
id: contract-multiownable
title: MultiOwnable
sidebar_label: Multiownable
slug: /smart-contracts/multiownable/contract-multiownable
---

This contract manages the owner and Managers of the contract.

## Functions

```jsx
constructor()(public);
```

MultiOwnable constructor sets the owner of the contract

### setManagers

```jsx
setManagers(address[] m) (public)
```

Managers are admins that can call all the necessary functions of the contract. This function can be used to add new managers to the contract.

**Caller -**

- Owners

**Args -**

- **m** - Array of addresses that will act as managers

### removeManagers

```jsx
removeManagers(address[] m) (public)
```

This function can be called to remove managers from the contract.

**Caller -**

- Owners

**Args -**

- Array of addresses to be removed from managers.

### changeOwner

```jsx
changeOwner(address o) (external)
```

To change the master owner of the function, this function can be called and new address will be able to add and remove managers instead of the old one.

**Caller -**

- Owner

**Args -**

- Address of the new owner of the contract.

### getManagers

```jsx
getManagers() → address[] (external)
```

To fetch the list of all the managers of the payments contract, this function can be called.

## Events

### SetManagers

```jsx
SetManagers(address[] managers)
```

Returns a list of all newly set Managers

### RemoveManagers

```jsx
RemoveManagers(address[] managers)
```

Returns a list of removed Managers.

### ChangeOwner

```jsx
ChangeOwner(address owner)
```

Returns address of new Owner of contract.
