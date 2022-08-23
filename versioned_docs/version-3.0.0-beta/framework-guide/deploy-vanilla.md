---
id: deploy-vanilla
title: How to Deploy Vanilla Apps in less than 30 Seconds
sidebar_label: Deploy Vanilla App
slug: /framework-guide/deploy-vanilla
---

This guide will show you how to deploy a Vanilla project and set up your domain.

[Vanilla JS](http://vanilla-js.com/) is a fast, lightweight, cross-platform framework for building incredible, powerful JavaScript applications.

## Follow these steps to deploy your  Vanilla app on Spheron successfully.

### Step 1: Put Your Vanilla Project Code in a Git Repo

While this feature is not new to developers, the magic of Spheron is that every push to any branch in your GitHub, GitLab, or Bitbucket repo triggers a new build and deployment of your project.


Once you change all the instances of browser routing to hash routing, you can now deploy your project via Spheron on any Protocol.

### Step 2: Deploy using the Spheron Platform UI.

You can **create a new Spheron project using the platform UI**. First, visit [Spheron Protocol](https://aqua.spheron.network/) in your browser.

<img src={require('@site/static/img/3.0.0/guide-ss-1.png').default} /> <br/><br/>

Choose your preferred Git provider from the options and authorize Spheron to access the repo you want to deploy.

In the next screen, select your Vanilla repo from the list.

<img src={require('@site/static/img/3.0.0/guide-ss-6.png').default} /> <br/><br/>

Choose your preferred protocol where you want to deploy your static build. As of now, we support Arweave, Skynet, Filecoin & Pinata. You can choose any one protocol from all 4 of them.

<img src={require('@site/static/img/3.0.0/doca-proto.png').default} /> <br/><br/>

The third screen asks for details about where to create the project and how to build it. All the settings are already pre-filled based on the suggested framework. Learn more about each build setting. Check out [here](https://docs.spheron.network/deployments/get-started#configuring-the-deployment).

1. Choose the **branch** to deploy from the dropdown and provide the **root directory** if you have a monorepo-like app structure.

1. Leave the **install command** `empty`

1. Leave the **build command** `empty`

1. Leave the **publish directory** `empty`.

1. You can add some **environment variables** before the build.

1. You can change the **node engine** of your deployment as well.

1. Click **Deploy**

<img src={require('@site/static/img/3.0.0/vanilla-build.png').default} /> <br/><br/>

## That's All!

Now that you've deployed your Vanilla project on Spheron, you have all the benefits of Spheron — including a custom deployment environment, continuous deployment whenever you push to your repo, and much more — as well as the benefits of Vanilla like Preview Mode, Static site rendering.

After deploying, your new Vanilla site will automatically be assigned a **.spheron.app** suffixed domain. You can then add a [Custom Domain](https://docs.spheron.network/domain-and-https/centralized-domain/attach-domain) on your choice.

We're so excited to see what you build with Vanilla on Spheron!
