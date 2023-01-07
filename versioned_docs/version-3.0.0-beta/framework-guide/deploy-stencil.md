---
id: deploy-stencil
title: How to Deploy Stencil Apps on Spheron
sidebar_label: Deploy Stencil App
slug: /framework-guide/deploy-stencil
---

This guide will show you how to deploy a Stencil project and get your domain up.

[Stencil](https://stenciljs.com/) Stencil is a compiler that generates Web Components (more specifically, Custom Elements). Stencil combines the best concepts of the most popular frameworks into a simple build-time tool.

## Follow these steps to deploy your Stencil app on Spheron.

### Step 1: Put Your Stencil Project Code in a Git Repo

While this feature is not new to developers, the magic of Spheron is that every push to any branch in your GitHub, GitLab, or Bitbucket repo triggers a new build and deployment of your project.

### Step 2: Deploy using the Spheron Platform UI.

You can **create a new Spheron project using the platform UI**. First, visit [Spheron Protocol](https://app.spheron.network/) in your browser.

<img src={require('@site/static/img/3.0.0/doca-git.png').default} /> <br/><br/>

Choose your preferred Git provider from the options as seen above and authorize Spheron to access the repo you want to deploy.

In the next screen, select your Stencil repo from the list.

<img src={require('@site/static/img/3.0.0/doca-repo.png').default} /> <br/><br/>

Choose your preferred protocol where you want to deploy your static build. As of now, we support Arweave, Skynet, Filecoin & Pinata. You can choose any one protocol from all 4 of them.

<img src={require('@site/static/img/3.0.0/doca-proto.png').default} /> <br/><br/>

The third screen asks for details about where to create the project and how to build it. All the settings are already pre-filled based on the suggested framework. Learn more about each build setting. Check out [here](https://docs.spheron.network/deployments/get-started#configuring-the-deployment).

1. Choose the **branch** to deploy from the dropdown and provide the **root directory** if you have a mono repo-like app structure.

1. Set the **install command** to `yarn install`

1. Set the **build command** to `yarn build`

1. Set the **publish directory** to `dist`

1. You can add some **environment variables** before the build.

1. You can change the **node engine** of your deployment as well.

1. Click **Deploy**

<img src={require('@site/static/img/3.0.0/stencil.png').default} /> <br/><br/>

## That's All!

Now that you've deployed your Stencil project on Spheron, you have all the benefits of Spheron — including a custom deployment environment, continuous deployment whenever you push to your repo, and much more — as well as the benefits of Stencil framework.

After deploying, your new Stencil project will automatically be assigned a **.spheron.app** suffixed domain. You can then add a [Custom Domain](https://docs.spheron.network/domain-and-https/centralized-domain/attach-domain) of your choice.

We're so excited to see what you build with Stencil on Spheron!
