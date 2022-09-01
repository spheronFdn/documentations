---
id: get-started
title: Get Started
sidebar_label: Get Started
slug: /deployments/get-started
---

You can use the Spheron Protocol to connect a **GitHub**, **Gitlab**, or **Bitbucket** repository to a site for continuous deployment. Spheron conducts a build with your preferred tool and deploys on your preferred storage networks every time.

Connecting your website's GitHub repository to deploy directly from there and enabling continuous deployment is the simplest method to get started.

## Configuring the deployment

### Deploy parameters

Spheron lets you get more control of how you build and deploy your repository

- **Branch to Deploy**: The branch of the repository to be deployed in Spheron. Ex: main, dev, etc
- **Root directory**: In some projects, the top-level directory of the repository may not be the root directory of the app you’d like to build. For example, your repository might be a monorepo that has a frontend directory, which contains a stand-alone Next.js app.

In cases like this, you can specify the project root directory. If you do so, please note the following:

If you specify a root directory, then your app won’t be able to access files outside of that directory. You also cannot use it to move up a level.

### Build parameters

Spheron has an auto-detect framework option, making it seamless for you by applying appropriate build parameters according to your selected repository. The parameters can also be manually entered, either during the initial site deployment stage or later in the project settings after the project has been deployed.

Below are the build parameters which you can modify.

- **Framework**: The framework on which the site is built one. Ex: create-react-app, No Framework - JavaScript, Vue App, etc.
- **Package Manager**: It helps create project environments and easily import external dependencies. You can choose your package manager here. Ex: npm && yarn
- **Build command**: The commands to execute to build the site. Ex: npm install && npm run build
- **Publish directory**: The name of the directory containing the file of your site after it has been built

### Advanced Build Settings

Build Environment Variables are currently included in Advanced Build Settings. During the construction, you can access Project's environment variables. This allows you to adjust behavior based on deploy settings or include information in your repository that you don't want to save, such as API keys.

You can access the environment variables by following these 2 steps:

- In **Create a new site > Step 3: Build Options, and deploy! > Advanced Build Settings**

- In **Project settings > Environment variables.**

:::info Note

Adding Environment Variables during new deployment won't work if project already exists, you have to add environment variables by going to your **Project Settings -> Environment Variables**

:::

:::caution Deploy to apply changes

Environment variable changes are applied at deploy time and require a re-deploy to take effect.

:::

## Common frameworks

You will also have to define the correct publish directory, here's list of default configurations for popular frameworks:

| Framework                                                     | Link to guide                                                             | Build Command                                  | Publish Directory          |
| ------------------------------------------------------------- | ------------------------------------------------------------------------- | ---------------------------------------------- | -------------------------- |
| Static                                                        |                                                                           | `npm run build` / `yarn build`                 | `build`                    |
| [React](https://reactjs.org/)                                 | [click here](https://docs.spheron.network/framework-guide/deploy-react)   | / `yarn build`                                 | `build`                    |
| [Create Eth App](https://github.com/paulrberg/create-eth-app) |                                                                           | `npm react-app:start` / `yarn react-app:start` | `packages/react-app/build` |
| [Vue](https://vuejs.org/)                                     | [click here](https://docs.spheron.network/framework-guide/deploy-vue)     | `npm run build` / `yarn build`                 | `dist`                     |
| [Next JS](https://nextjs.org/)                                | [click here](https://docs.spheron.network/framework-guide/deploy-next)    | `next build && next export`                    | `out`                      |
| [Angular](https://angular.io/)                                | [click here](https://docs.spheron.network/framework-guide/deploy-angular) | `npm run build` / `yarn build`                 | `dist/your-app-name`       |
| [Nuxt JS](https://nuxtjs.org/)                                | [click here](https://docs.spheron.network/framework-guide/deploy-nuxt)                                                                       | `yarn generate`                                | `dist`                    |
| [Vanilla JS](http://vanilla-js.com/)                          | [click here](https://docs.spheron.network/framework-guide/deploy-vanilla)                                                                            |                                                |                            |
| [Hugo](https://gohugo.io/)                                    |  [click here](https://docs.spheron.network/framework-guild/deploy-hugo)                                                                           | `hugo -D --gc`                                 | `public`                   |
| [Preact](https://preactjs.com/)                                    |                                                                           | `yarn build`                                 | `build`                   |
