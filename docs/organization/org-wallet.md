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

Please visit ArGo [**Faucet**](https://faucet.argoapp.live/) to get 80 test $DAI tokens in your wallet.

## 1. Enabling Wallet

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

### Part 2. Connect Wallet

<font size="4"> <b>Step 1.</b> Go to <b>Wallet</b> tab in your organisation. </font> <br/><br/>

<font size="4"> <b>Step 2.</b> Click <b>Connect</b> to connect your wallet. </font> <br/><br/>

<img src={require('@site/static/img/org-select-wallet.png').default} />

<font size="4"> <b>Step 3.</b> Select Metamask Wallet and click <b>Save</b> to save the wallet for the organisation. </font> <br/><br/>

<img src={require('@site/static/img/org-save-wallet.png').default} />

Your wallet is now ready. **Happy Deploying!**

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

## 3. Remove Wallet

Only owner of the wallet can remove the saved wallet from the organization.

<font size="4"> <b>Step 1.</b> Click on <b>Remove Wallet</b> in the <b>Wallet</b> tab. </font> <br/><br/>

<font size="4"> <b>Step 2.</b> <b>Sign</b> the signature request in the Metamask notification. </font> <br/><br/>

<img src={require('@site/static/img/org-remove-wallet.png').default} />
