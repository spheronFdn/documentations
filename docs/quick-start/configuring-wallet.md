---
id: configuring-wallet
title: Configuring Wallet
sidebar_label: Configuring Wallet
slug: /quick-start/configuring-wallet
---

## 1. Enable Wallet

### Part 1. Install Metamask

MetaMask is a software cryptocurrency wallet used to interact with the Ethereum blockchain. It allows you to access their Ethereum wallet through a browser extension or mobile app, which can then be used to interact with decentralized applications. 

Go to [MetaMask.io](http://metamask.io/) and download **Chrome** for desktop. You can also go directly to the Chrome store.

Check out below video to learn how to use MetaMask in your browser.

<iframe src="https://www.youtube.com/embed/ZIGUC9JAAw8" width="100%" height="400" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

:::danger Matic Testnet

Make sure to switch to the Matic Testnet network before connecting.

Please check out [here](https://docs.matic.network/docs/develop/network-details/network/) for information regarding Matic Mumbai Testnet!

:::

:::tip Demo

Please check out our demo [video](https://vimeo.com/570252743) which demonstrates how you can attach Matic Mumbai Testnet in your MetaMask.

:::

Please visit ArGo [**Faucet**](https://faucet.argoapp.live/) to get 80 test $DAI tokens in your wallet.

### Part 2. Connect Wallet

**Step 1.** Go to **Wallet** tab in your organisation

**Step 2.** Click **Connect** to connect your wallet

<img src={require('@site/static/img/org-select-wallet.png').default} />

**Step 3.** Select Metamask Wallet and click **Save** to save the wallet for the organisation

<img src={require('@site/static/img/org-save-wallet.png').default} />

Your wallet is now ready. **Happy Deploying!**

<img src={require('@site/static/img/org-wallet.png').default} />

## 2. Set Allowance

:::caution Allowance

Make sure your **Allowance** is greater than 20 **$DAI** to start deploying.

:::

Allowance can only be set by the owner of the wallet.

Approval transaction is **Gassless** as we use [**Biconomy**](https://biconomy.io/) for it. Thus there is no need to hold $MATIC tokens for approval.

**Step 1.** Click on **Set Allowance**

<img src={require('@site/static/img/org-wallet-increase-allowance.png').default} />

**Step 2.** Provide the Approval Amount and **Approve**.

:::info Requirement

To start deploying your application, minimum allowance required is 20 $DAI and minimum balance required is 20 $DAI tokens.

:::

<img src={require('@site/static/img/org-wallet-increase-allowance-approval.png').default} />

**Step 3.** **SIGN** the Signature Request raised in Metamask

<img src={require('@site/static/img/org-wallet-increase-allowance-approval-sign.png').default} />

**Step 4.** Allowance is set upon successful transaction in Metamask