---
id: wallet
title: Wallet
sidebar_label: Wallet
slug: /billing/wallet
---

After creating an organization, the user will be given a starter pack by Spheron. The user must attach his/her wallet to reap the benefits of Spheron's Pro package.

## Connect Wallet

<font size="4"> <b>Step 1.</b> Go to Billing section and click on <code>Connect Wallet</code> button. </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/connect-wallet.png').default} />

<font size="4"> <b>Step 2.</b> Choose your preferred token (<b>USDT</b>, <b>DAI</b>, <b>WMATIC</b>, <b>WETH</b>), network (<b>Polygon Mumbai</b>), and wallet (<b>Metamask</b>) on the pop-up modal.</font> <br/><br/>

<img src={require('@site/static/img/3.0.0/connect-wallet-modal.png').default} />

<font size="4"> <b>Step 3.</b> Metamask raises an alert message stating <code>I'm the owner of this wallet and want to attach it to the organization</code>. Sign the transaction. And your wallet is connected. </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/connect-wallet-metamask.png').default} />

## Spheron Faucet

A Faucet is a tool that provides a small number of funds to start using a cryptocurrency without having to buy some. Spheron has its own faucet app, which will send the selected **TEST** tokens straight into your wallet. The goal of this faucet is to make the onboarding to the Spheron Platform smoother.

Spheron faucet sends **100 TEST USDT**, **100 TEST DAI**, **0.05 TEST WETH** or **70 TEST WMATIC** based on the chosen token. You can use it up to 3 times a day.

Please visit Spheron [**Faucet**](https://faucet.spheron.network/) to get **TEST** tokens in your wallet, and get started with Spheron.

## Allowance

Spheron asks you to give a token allowance amount to ensure that your subscription is renewed every month. Unable to cut subscription may stop all the all services running in the platform. Please make sure, your wallet have enough balance.

:::danger Overdue

Failure in payment to pay for a PRO plan may cause your organization to go into an overdue state, halting all platform services for your organization.

:::
It is informed to ensure that your wallet has sufficient funds.

Only the wallet's owner has the ability to set the allowance.

:::info Gasless

We utilize Biconomy for the approval transaction, therefore it's Gasless. As a result, no <b>$MATIC</b> tokens are required for approval.

:::

### Set Allowance

<font size="4"> <b>Step 1.</b> Go to Billing section and under the wallet dropdown, click on <code>Set Allowance</code>. </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/set-allowance.png').default} />

<font size="4"> <b>Step 2.</b> In the allowance popup, input the amount you want to allow Spheron, which can be cut from your wallet for subscriptions. </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/set-allowance-popup.png').default} />

<font size="4"> <b>Step 3.</b> Sign the <b>Metamask</b> Signature Request, and voila! you have set your allowance successfully!</font> <br/><br/>

## View Wallet

Viewing the connected wallet lets you check the pre-set <b>Allowance</b> and <b>Wallet Balance</b>. The wallet also gives you details about the current token and network your organization is connected to.

<img src={require('@site/static/img/3.0.0/view-wallet.png').default} />
