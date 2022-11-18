---
id: deploy-vue
title: How to Deploy Vue Apps in less than 30 Seconds
sidebar_label: Deploy Vue App
slug: /framework-guide/deploy-vue
---

This guide will show you how to deploy a Vue.js project and set up your domain.

[Vue.js](https://v3.vuejs.org/guide/introduction.html) is an open-source JavaScript framework for building user interfaces. Vue.js features an incrementally adaptable architecture that focuses on declarative rendering and component composition.

## Deploy Vue.js to Spheron

Follow these steps to deploy your first Vue.js app on Spheron successfully.

### Step 1: Put Your Vue.js Project Code in a Git Repo

While this feature is not new to developers, the magic of Spheron is that every push to any branch in your GitHub, GitLab, or Bitbucket repo triggers a new build and deployment of your project.

### Step 2: Update Your Vue.js Project for Deploying on Decentralised Storage

Decentralized Storage needs a different configuration for the dapp to work without any issues. The only issue you will face after deploying on decentralized Storage is the routing issue. The decentralized Storage works in a hash-based system, so you need to change your routing module from **BrowserRouter** (e.g., `domain.com/testing`) to **HashRouter** (e.g., `domain.com/#/testing`)

Once you change all the instances of browser routing to hash routing, you can now deploy your project via Spheron on any Protocol.

### Step 3: Deploy using the Spheron Platform UI.

You can **create a new Spheron project using the platform UI**. First, visit [Spheron Protocol](https://aqua.spheron.network/) in your browser.

<img src={require('@site/static/img/3.0.0/guide-ss-1.png').default} /> <br/><br/>

Choose your preferred Git provider from the options and authorize Spheron to access the repo you want to deploy.

In the next screen, select your Vue.js repo from the list.

<img src={require('@site/static/img/3.0.0/guide-ss-6.png').default} /> <br/><br/>

Choose your preferred protocol where you want to deploy your static build. As of now, we support Arweave, Skynet, Filecoin & Pinata. You can choose any one protocol from all 4 of them.

<img src={require('@site/static/img/3.0.0/guide-ss-2.png').default} /> <br/><br/>

The third screen asks for details about where to create the project and how to build it. All the settings are already pre-filled based on the suggested framework. Learn more about each build setting. Check out [here](https://docs.spheron.network/deployments/get-started#configuring-the-deployment).

1. Choose the **branch** to deploy from the dropdown and provide the **root directory** if you have a monorepo-like app structure.

1. Set the **install command** to `yarn install`

1. Set the **build command** to `yarn build`

1. Set the **publish directory** to `dist`

1. You can add some **environment variables** before the build.

1. You can change the **node engine** of your deployment as well.

1. Click **Deploy**

<img src={require('@site/static/img/3.0.0/guide-ss-4.png').default} /> <br/><br/>

## That's All!

Now that you've deployed your Vue.js project on Spheron, you have all the benefits of Spheron — including a custom deployment environment, continuous deployment whenever you push to your repo, and much more — as well as the benefits of Vue.js like Preview Mode, Static site rendering.

After deploying, your new Vue project will automatically be assigned a **.spheron.app** suffixed domain. You can then add a [Custom Domain](https://docs.spheron.network/domain-and-https/centralized-domain/attach-domain) on your choice.

We're so excited to see what you build with Vue.js on Spheron!
