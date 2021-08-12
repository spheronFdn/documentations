---
id: quick-deploy
title: Create a Deployment
sidebar_label: Create a Deployment
slug: /quick-start/quick-deploy
---

Select **Deploy** on the homepage and go through the following steps for a successful deployment.

<img src={require('@site/static/img/dashboard.png').default} />

### Part 1. Pick a Repository

<font size="4"> <b>Step 1.</b> Click on <code>GitHub</code> to connect your account with ArGo. </font> <br/><br/>

<img src={require('@site/static/img/deploy-choose-repo.png').default} />

You will be redirected to the GitHub authorization page.

<font size="4"> <b>Step 2.</b> Click <code>Install & Authorize</code> to authorize ArGo to access your repositories. </font> <br/><br/>

<img src={require('@site/static/img/deploy-github-install.png').default} />

:::info Note

During this process, you can selectively choose some repositories that you want to give write access to ArGo Github App.

:::

After successful installation of your GitHub account, you will be automatically redirected to ArGo, where you can see the repositories present in your account.

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

Click [here](../configure-build/deploy-get-started.md/#configuring-the-deployment) to know more about the build settings required by ArGo for your framework.

<img src={require('@site/static/img/deploy-build-options.png').default} />

<!-- #### Continuous Deployment

Simply set the public directory of your project to your GitHub repository and define the build command. ArGo will run the build command and deploy the result whenever you push to your Git repo. The benefits of using continuous deployment include:

- No deploying without committing and pushing first
- Easy collaboration through pull requests
- Fix a typo through your Git provider's web UI from your mobile -->

### Part 4. Deploy

Upon successful selection of all the parameters, click the **Deploy** button to deploy your app.

Your deployment will start and the deployment logs will be visible on the screen.

:::info

Currently ArGo charges its platform fee with respect to the **Build Time** of the application on the selected protocol.

:::

<img src={require('@site/static/img/deploy-success.png').default} />

:::info

ArGo lets user to redeploy any project with just a click. It will take the latest configuration used by the latest deployment in the project.

:::
