---
id: overview
title: Overview
sidebar_label: Overview
slug: /architecture/overview
---

Spheron Protocol is working toward bringing more usability layers on top of existing **Decentralised Cloud Protocols**.

<p>To give users the ability to choose between multiple blockchain protocols, we have come up with a different approach.</p>
<p>There are 3 different layers of components interacting with each other to bring more decentralization and usability into the system. </p>

These 3 layers are -

1. **Platform -** The platform handles the app logic, version control, automation, and GitHub-related logic.
2. **Foundation -** The foundation is a set of nodes responsible for all the computation required during the deployment of the application.
3. **Billing -** Payments in the Spheron Protocol happened with the $DAI token. Every deployment on any protocol can be paid with $DAI.

<img src={require('@site/static/img/arch-overview.png').default} />

## 1. Platform

The first main component is the Platform that interacts with our APIs. The platform handles the app logic, version control, automation, and GitHub-related logic. The platform provides users a lot of useful tools & features that are essential for dApp development life cycles. Users get the same experience they get from centralized deployment services like Netlify, Vercel, etc. Some of the useful features that help increase productivity for dApp developers are -

### 1.1 Organizations & Projects

Spheron provides an intuitive way of managing deployments. The experience is very similar to the GitHub workflow. Users can create multiple organizations for maintaining their development workflow. Users can also invite their teams to the organization and can collaborate on projects and deployments. Projects are the repository in GitHub and whenever there is any deployment on that repository, it will show under the mapped project. This provides the user a better way to maintain their deployment version.

### 1.2 Continuous Deployment

Spheron can connect with repositories in GitHub and automatically detect changes and trigger automated deployments based on the project configuration.

### 1.3 Domains

Spheron platform users can add both centralized & decentralized domains for their project. Spheron also provides an automated domain resolver
that mitigates the overhead of developers for resolving the latest deployment. This is an important feature for developers as most of the decentralized cloud protocols provide the deployed URL in hashes which is not human readable.

## 2. Foundation

The second main component is the **Foundation**. The foundation is a set of **Worker** Nodes responsible for all the computation required during the deployment of the application. These nodes interact with the different Blockchain protocols to upload the application files. These nodes also take care of cloning the GitHub repositories, installing the dependencies, building the static files in an application & deploying it to Blockchain protocols. These nodes can be run by any community members. To run a node, the user needs to have both the $DAI token as well as the Protocol Native Token that the node is going to upload files on. The node owners need to
stake $DAI tokens before they can run the nodes.

The Platform will interact with the Foundation layer for performing computation for deployment requests and generate the URI of the deployed app. The best thing about the foundation layer is that it can support not just one but multiple protocols for deploying a web app. This way we mitigate the issue of holding multiple wallets and tokens for deploying any web application on Spheron. The user only needs to pay in **$DAI** token and start deploying on any protocol they like. We incentives the node owner in $DAI. Any malicious activity from nodes results in penalties which include slashing of all the staked tokens.

The **Foundation** is completely open to any developer who want to build their applications on top of Spheron Protocol. We will be providing more tooling for the foundation layer which will give developers a much better way to start building dApps on top of our foundation.

## 3. Billing

To solve the complexity of holding multiple wallets and tokens, we came up with a unified currency for deploying anything on any protocols. For payment, users need to hold $DAI tokens in **Matic Mainnet**. Before any deployment, users need to approve a certain amount of $DAI tokens to our Payment Smart Contract. After every deployment, we cut small fees for building their web app and deploy it on the blockchain. Spheron calculates the fees required based on the build time and uploading fee of blockchain in their native tokens. We convert the cumulative amount to $DAI, $USDT, $MATIC, $WETH, etc based on the current market price and cut it using our payment smart contracts. The rate for build time is stored in our smart contract for better transparency and can only be changed by governance and updated through proposals. We have discounts for every payment which can only be available to developers who have staked some tokens in our Staking Pool.
