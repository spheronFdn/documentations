---
id: org-wallet
title: Wallet
sidebar_label: Wallet
slug: /organization/org-wallet
---

In this release, to make it easy to onboard for dApp developers, we introduce stablecoin **$DAI**.

Other stablecoins, such as USDT and USDC will be added in future updates.

- Now, any payment transactions are done using Metamask.
- We have integrated our Payment Smart Contract that cut fees based on the usage of our computing system and uploading fees on Decentralized Cloud Protocols. Every deployment will show the payments detail and a complete billing overview can be seen in the organization as well. It will help developers to optimize their costing.

Also to make it more transparent, our build rate is defined in our Payment Smart contracts which can only be changed by governance (for now, it’s the team that maintains the build rate, but we will change the address once we introduce our Governance).

To start any deployments in an **organisation** in our platform, users need to first enable their wallets and approve a minimum amount to our smart contract.

Since the computation time and fees required to upload the app are not predetermined, we only cut fees after the end of deployment. Our smart contract takes care of cutting fees with build time and upload fees. All the payments are done in the Polygon chain (previously Matic), which has higher TPS and lesser fees.

We are also releasing our [Faucet](https://faucet.argoapp.live/) to get some test tokens.

## Enabling Wallet

- Go to **Wallet** tab in your organisation
- Click **Connect** button to connect your Metamask Wallet

<img src={require('@site/static/img/org-select-wallet.png').default} />

:::danger Matic Testnet

Make sure to switch to Matic Testnet network before connecting.

:::

- Select Metamask Wallet and click **Save** to save the wallet for the organisation

<img src={require('@site/static/img/org-save-wallet.png').default} />

- Your wallet is now ready. Happy Deploying!

<img src={require('@site/static/img/org-wallet.png').default} />

## Allowance

Allowance is the allowed amount($DAI) which can used while deploying. Since the fees required to upload apps are not predetermined, we only cut the fees after the end of the deployment.
If the organisation does not have enough $DAI allowance at the start of deployment, the deployment will fail automatically.

:::caution Allowance

Make sure your **Allowance** is greater than 2 **$DAI** to start deploying.

:::

### Increase Allowance

Allowance can only be increased by the owner of the wallet.

Approval transaction is **Gassless** as we use [**Biconomy**](https://biconomy.io/) for it. Thus there is no need to hold $MATIC tokens for approval.

- Click on **Increase Allowance**

<img src={require('@site/static/img/org-wallet-increase-allowance.png').default} />

- Provide the Approval Amount and **Approve**.

:::info Requirement

To start deploying your application, minimum allowance required is 20 $DAI and minimum balance required is 20 $DAI tokens.

:::

<img src={require('@site/static/img/org-wallet-increase-allowance-approval.png').default} />

- **SIGN** the Signature Request raised in Metamask

<img src={require('@site/static/img/org-wallet-increase-allowance-approval-sign.png').default} />

- Allowance is increased upon successful transaction in Metamask

## Remove Wallet

Only owner of the wallet can remove the saved wallet from the organization.

- Click on **Remove Wallet** in the **Wallet** tab
- **Sign** the signature request in the Metamask notification

<img src={require('@site/static/img/org-remove-wallet.png').default} />