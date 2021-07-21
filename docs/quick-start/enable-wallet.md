---
id: enable-wallet
title: Enable Wallet
sidebar_label: Enable Wallet
slug: /quick-start/enable-wallet
---

### Part 1. Install Metamask

MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows you to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications. 

Go to [MetaMask.io](http://metamask.io/) and **Chrome** for desktop. You can also go directly to the Chrome store.

You can visit [here](https://www.youtube.com/watch?v=ZIGUC9JAAw8) to learn how to use MetaMask in your browser.

:::danger Matic Testnet

Make sure to switch to the Matic Testnet network before connecting.

Please check out [here](https://docs.matic.network/docs/develop/network-details/network/) for information regarding Matic Mumbai Testnet!

:::

:::tip Demo

Please check out our demo [video](https://vimeo.com/570252743) which demonstrates how you can attach Matic Mumbai Testnet in your MetaMask.

:::

Please visit ArGo [**Faucet**](https://faucet.argoapp.live/) to get 80 test $DAI tokens in your wallet.

### Part 2. Connect Wallet

- Go to **Wallet** tab in your organisation
- Click **Connect** to connect your wallet

<img src={require('@site/static/img/org-select-wallet.png').default} />

- Select Metamask Wallet and click **Save** to save the wallet for the organisation

<img src={require('@site/static/img/org-save-wallet.png').default} />

- Your wallet is now ready. Happy Deploying!

<img src={require('@site/static/img/org-wallet.png').default} />

## 2. Allowance

Allowance is the allowed amount($DAI) which can used while deploying. Since the fees required to upload apps are not predetermined, we only cut the fees after the end of the deployment.
If the organisation does not have enough $DAI allowance at the start of deployment, the deployment will fail automatically.

:::caution Allowance

Make sure your **Allowance** is greater than 20 **$DAI** to start deploying.

:::

### Set Allowance

Allowance can only be set by the owner of the wallet.

Approval transaction is **Gassless** as we use [**Biconomy**](https://biconomy.io/) for it. Thus there is no need to hold $MATIC tokens for approval.

- Click on **Set Allowance**

<img src={require('@site/static/img/org-wallet-increase-allowance.png').default} />

- Provide the Approval Amount and **Approve**.

:::info Requirement

To start deploying your application, minimum allowance required is 20 $DAI and minimum balance required is 20 $DAI tokens.

:::

<img src={require('@site/static/img/org-wallet-increase-allowance-approval.png').default} />

- **SIGN** the Signature Request raised in Metamask

<img src={require('@site/static/img/org-wallet-increase-allowance-approval-sign.png').default} />

- Allowance is set upon successful transaction in Metamask