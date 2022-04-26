---
id: decentralized-protocols
title: Decentralized Protocols
sidebar_label: Decentralized Protocols
slug: /deployments/decentralized-protocols
---

<!-- ## Site Deployment -->

Each new website deployment by Spheron Protocol is done atomically, meaning that there will never be any inconsistencies when pushing new files or making changes to existing ones.

:::caution info

There are some issues with Arweave URL that may restrict normal routers.

Thus it is better to use a hash router instead of a browser router.

If using a normal router, please use our custom domain to ensure 404 error does not pop up.

:::

## 1. Creating a Deployment

Select **Deploy** on the homepage and go through the following steps for a successful deployment.

<img src={require('@site/static/img/dashboard.png').default} />

### Part 1. Pick a Repository

<font size="4"> <b>Step 1.</b> Click on <code>GitHub</code> to connect your account with Spheron. </font> <br/><br/>

<img src={require('@site/static/img/deploy-choose-repo.png').default} />

You will be redirected to the GitHub authorization page.

<font size="4"> <b>Step 2.</b> Click <code>Install & Authorize</code> to authorize Spheron to access your repositories. </font> <br/><br/>

<img src={require('@site/static/img/deploy-github-install.png').default} />

After successful installation of your GitHub account, you will be automatically redirected to Spheron, where you can see the repositories present in your account.

<font size="4"> <b>Step 3.</b> Pick the repository you want to deploy. </font> <br/><br/>

<img src={require('@site/static/img/deploy-github-repo.png').default} />

### Part 2. Pick a Protocol

We support multiple decentralized protocols in which you can deploy your app. Pick the protocol which is most suited for your needs.

:::info

Currently, we support **Arweave** and **Skynet** protocols. We are working on adding multiple protocols, which will be added soon.

:::

<img src={require('@site/static/img/deploy-pick-protocol.png').default} />

### Part 3. Configure your Build options

Get control of the build settings for your site based on the framework of your app.

Click [here](deployments/get-started.md/#configuring-the-deployment) to know more about the build settings required by Spheron for your framework.

<img src={require('@site/static/img/deploy-build-options.png').default} />

### Part 4. Deploy

Upon successful selection of all the parameters, click the **Deploy** button to deploy your app.

Your deployment will start and the deployment logs will be visible on the screen.

:::info

Currently Spheron charges its platform fee with respect to the **Build Time** of the application on the selected protocol.

:::

<img src={require('@site/static/img/deploy-success.png').default} />

## 2. Redeploy a deployment

Redeploying a deployment in a project is a very demanded feature from a lot of our users. Earlier, when users had to redeploy a project, they had to do the deployment process from the starting.

Now, Spheron lets user to just redeploy any project with just a click. It will take the latest configuration used by the latest deployment in the project.

<img src={require('@site/static/img/deploy-redeploy.png').default} />

## 3. Screenshot of deployment

With our **V2.2 Release**, users can now view the screenshot of their website, once their website is deployed successfully.
The screenshots are uploaded on Arweave, thus just like your website they are immutable and part of the permaweb.

<img src={require('@site/static/img/screenshot.png').default} />
