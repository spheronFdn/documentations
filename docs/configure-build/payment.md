---
id: payment
title: Payment
sidebar_label: Payment
slug: /deployments/payment
---

All details of payment corresponding to your deployment are shown in the Payment Summary.
The final payment fee will directly be deducted from your wallet, provided your wallet has enough allowance.

## Payment Summary

- **Build Time** - The time required to build and deploy your app in arweave.

- **Provider Fee** - Fee required to upload the deployment to arweave.

- **Total Fee** - The total fee is cut in **$DAI** tokens. It includes

  1. Provider fee
  2. Platform fee to build and deploy your app according to our smart contract.

- **Discount** - Discount depends on how much a user has staked in our pool.
  It will be enabled after the release of our **Mainnet**

- **Final Payment** - Final payment includes the total fee minus the discount given for the build.

<img src={require('@site/static/img/deploy-payment-summary.png').default} />
