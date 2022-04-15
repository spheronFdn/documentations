---
id: configuring-wallet
title: Configuring Wallet
sidebar_label: Configuring Wallet
slug: /quick-start/configuring-wallet
---

## 1. Enabling your Organization Wallet

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

Please visit Spheron [**Faucet**](https://faucet.spheron.network/) to get 80 test $DAI tokens in your wallet.

### Part 2. Connect Wallet

<font size="4"> <b>Step 1.</b> Go to <b>Wallet</b> tab in your organisation. </font> <br/><br/>

<font size="4"> <b>Step 2.</b> Click <b>Connect</b> to connect your wallet. We currently support all the wallet mentioned in the screenshot below</font> <br/><br/>

<img src={require('@site/static/img/org-select-wallet.png').default} />

<font size="4"> <b>Step 3.</b> Select you favorite Wallet and click <b>Save</b> to save the wallet for the organisation. </font> <br/><br/>

<img src={require('@site/static/img/org-save-wallet.png').default} />

Your wallet is now ready. **Happy Deploying!**

<img src={require('@site/static/img/org-wallet.png').default} />

## 2. Set Allowance

:::caution Allowance

Make sure your **Allowance** is greater than 20 **$DAI** to start deploying.

:::

Allowance can only be set by the owner of the wallet.

Approval transaction is **Gassless** as we use [**Biconomy**](https://biconomy.io/) for it. Thus there is no need to hold $MATIC tokens for approval.

<font size="4"> <b>Step 1.</b> Click on <b>Set Allowance</b>. </font> <br/><br/>

<img src={require('@site/static/img/org-wallet-increase-allowance.png').default} />

<font size="4"> <b>Step 2.</b> Provide the Approval Amount and <b>Approve</b>. </font> <br/><br/>

:::info Requirement

To start deploying your application, minimum allowance required is 20 $DAI and minimum balance required is 20 $DAI tokens.

:::

<img src={require('@site/static/img/org-wallet-increase-allowance-approval.png').default} />

<font size="4"> <b>Step 3.</b> <b>SIGN</b> the Signature Request raised in Metamask. </font> <br/><br/>

<img src={require('@site/static/img/org-wallet-increase-allowance-approval-sign.png').default} />

<font size="4"> <b>Step 4.</b> Allowance is set upon successful transaction in Metamask. </font> <br/><br/>
