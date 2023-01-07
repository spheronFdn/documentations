---
id: deploy-ireact
title: How to Deploy Ionic React Apps in less than 30 Seconds
sidebar_label: Deploy Ionic React App
slug: /framework-guide/deploy-ireact
---

This guide will show you how to deploy a Ionic React project and set up your domain.

[Ionic React](https://ionicframework.com/) is changing the way mobile apps are built and delivered. From our popular open source mobile SDK to industry-leading mobile CI/CD and micro frontend solutions, Ionic helps you meet the demand for mobile across your business.

## Deploy Ionic React to Spheron

Follow these steps to deploy your Ionic React app on Spheron successfully.

### Step 1: Put Your Ionic React Project Code in a Git Repo

While this feature is not new to developers, the magic of Spheron is that every push to any branch in your GitHub, GitLab, or Bitbucket repo triggers a new build and deployment of your project.

### Step 2: Deploy using the Spheron Platform UI.

You can **create a new Spheron project using the platform UI**. First, visit [Spheron Protocol](https://app.spheron.network/) in your browser.

<img src={require('@site/static/img/3.0.0/guide-ss-1.png').default} /> <br/><br/>

Choose your preferred Git provider from the options and authorize Spheron to access the repo you want to deploy.

In the next screen, select your Ionic React repo from the list.

<img src={require('@site/static/img/3.0.0/guide-ss-6.png').default} /> <br/><br/>

Choose your preferred protocol where you want to deploy your static build. As of now, we support Arweave, Skynet, Filecoin & Pinata. You can choose any one protocol from all 4 of them.

<img src={require('@site/static/img/3.0.0/guide-ss-2.png').default} /> <br/><br/>

The third screen asks for details about where to create the project and how to build it. All the settings are already pre-filled based on the suggested framework. Learn more about each build setting. Check out [here](https://docs.spheron.network/deployments/get-started#configuring-the-deployment).

1. Choose the **branch** to deploy from the dropdown and provide the **root directory** if you have a monorepo-like app structure.

1. Set the **install command** to `yarn install`

1. Set the **build command** to `yarn build`

1. Set the **publish directory** to `build`

1. You can add some **environment variables** before the build.

1. You can change the **node engine** of your deployment as well.

1. Click **Deploy**

<img src={require('@site/static/img/3.0.0/ireact.png').default} /> <br/><br/>

## That's All!

Now that you've deployed your Ionic React project on Spheron, you have all the benefits of Spheron — including a custom deployment environment, continuous deployment whenever you push to your repo, and much more — as well as the benefits of Ionic React like Preview Mode, view different tabs.

After deploying, your new Ionic React project will automatically be assigned a **.spheron.app** suffixed domain. You can then add a [Custom Domain](https://docs.spheron.network/domain-and-https/centralized-domain/attach-domain) on your choice.

We're so excited to see what you build with Ionic React on Spheron!
