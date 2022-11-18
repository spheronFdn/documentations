---
id: deploy-next
title: How to Deploy a Next.js Site with Spheron
sidebar_label: Deploy Next.js App
slug: /framework-guide/deploy-next
---

This guide will show you how to deploy a Next.js project and get your domain up.

[Next.js](https://vercel.com/solutions/nextjs) is the React framework created by Vercel. Next.js is an [open-source](https://en.wikipedia.org/wiki/Open-source) web development framework built on [Node.js](https://en.wikipedia.org/wiki/Node.js), enabling [React](<https://en.wikipedia.org/wiki/React_(JavaScript_library)>)-based web applications functionalities such as [server-side rendering](https://en.wikipedia.org/wiki/Server-side_scripting) and generating [static websites](https://en.wikipedia.org/wiki/Static_web_page).

## Deploy Next.js to Spheron

Follow these steps to deploy your first Next.js app on Spheron successfully.

### Step 1: Put Your Next.js Project Code in a Git Repo

While this feature is not new to developers, the magic of Spheron is that every push to any branch in your GitHub, GitLab, or Bitbucket repo triggers a new build and deployment of your project.

### Step 2: Update Your Next.js Project for Deploying on Decentralised Storage

Now, deploying your Next.js app without doing any manual process is possible. But to ensure the decentralized storage deployment works completely fine, we need to update specific configurations on the Next.js. Here are all the changes you need to make to make the deployment work:

Add this configuration in your `next.config.js` file:

```js
module.exports = {
  ...,
  images: {
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
}
```

If you are getting this error while deploying your app using Spheron → `Error: Image Optimization using Next.js' default loader is incompatible with 'next export.'`
The fix for this issue is images:

```json
{
  "loader": "akamai",
  "path": ""
}
```

The `trailingSlash: true` will fix the routing refresh issue in IPFS or Skynet.

Also, if you see images not found in your other routes, you need to update the `next.config.js` file with this configuration:

```js
const isProd = process.env.NODE_ENV === "production";

module.exports = {
  ...,
  assetPrefix: isProd ? "https://your-domain.com" : "",
}
```

### Step 3: Deploy using the Spheron Platform UI.

You can **create a new Spheron project using the platform UI**. First, visit [Spheron Protocol](https://aqua.spheron.network/) in your browser.

<img src={require('@site/static/img/3.0.0/guide-ss-1.png').default} /> <br/><br/>

Choose your preferred Git provider from the options and authorize Spheron to access the repo you want to deploy.

In the next screen, select your Next.js repo from the list.

<img src={require('@site/static/img/3.0.0/guide-ss-6.png').default} /> <br/><br/>

Choose your preferred protocol where you want to deploy your static build. As of now, we support Arweave, Skynet, Filecoin & Pinata. You can choose any one protocol from all 4 of them.

<img src={require('@site/static/img/3.0.0/guide-ss-2.png').default} /> <br/><br/>

The third screen asks for details about where to create the project and how to build it. All the settings are already pre-filled based on the suggested framework. Learn more about each build setting. Check out [here](https://docs.spheron.network/deployments/get-started#configuring-the-deployment).

1. Choose the **branch** to deploy from the dropdown and provide the **root directory** if you have a monorepo-like app structure.

1. Set the **install command** to `yarn install`

1. Set the **build command** to `next build && next export`

1. Set the **publish directory** to `out`

1. You can add some **environment variables** before the build.

1. You can change the **node engine** of your deployment as well.

1. Click **Deploy**

<img src={require('@site/static/img/3.0.0/guide-ss-7.png').default} /> <br/><br/>

## That's All!

Now that you've deployed your Next.js project on Spheron, you have all the benefits of Spheron — including a custom deployment environment, continuous deployment whenever you push to your repo, and much more — as well as the benefits of Next.js like Preview Mode, Static site rendering.

After deploying, your new Next.js project will automatically be assigned a **.spheron.app** suffixed domain. You can then add a [Custom Domain](https://docs.spheron.network/domain-and-https/centralized-domain/attach-domain) on your choice.

We're so excited to see what you build with Next.js on Spheron!
