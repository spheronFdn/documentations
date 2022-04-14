---
id: get-started
title: Get Started
sidebar_label: Get Started
slug: /deployments/get-started
---

Spheron Protocol lets you link a GitHub repository to a site for continuous deployment. Each time you push to your Git provider, Spheron runs a build with your tool of choice and deploys the result to our powerful CDN.

The quickest way to begin is by connecting your website's GitHub repository to deploy directly from there and allow for continuous deployment. If you so choose, you can also deploy by uploading the full code base for your website.

## Configuring the deployment

### Deploy parameters

Spheron lets you get more control of how you build and deploy your repository

- **Owner**: The organization's name, considered the owner of the deployment. Ex: Your Org's name
- **Branch to Deploy**: The branch of the repository to be deployed in Spheron. Ex: main, dev, etc
- **Workspace to Deploy**: A Workspace is how your team will keep GitHub Issues organized. You can add any number of GitHub repos into the same Workspace, letting your team benefit from a shared view on all your work

### Build parameters

Spheron doesn't have autodetect framework feature at this moment, so you have to manually enter the site's framework and apply the correct build parameters for your framework. You need to input the parameters manually, either at the initial site deployment stage, or in the site settings after the site has already been deployed.

Below are the build parameters which you can modify.

- **Framework**: The framework on which the site is built one. Ex: create-react-app, No Framework - JavaScript, Vue App, etc.
- **Package Manager**: It helps create project environments and easily import external dependencies. You can choose your package manager here. Ex: npm && yarn
- **Build command**: The commands to execute to build the site. Ex: npm install && npm run build
- **Publish directory**: The name of the directory containing the file of your site after it has been built

### Advanced Build Settings

Advanced Build Settings currently consists of Build Environment Variables. Spheron environment variables are accessible during your build. This allows you to change behaviors based on deploy parameters or to include information you don’t want to save in your repository, such as API keys.

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

| Framework                                                     | Package Manager | Build Command                                  | Publish Directory          |
| ------------------------------------------------------------- | --------------- | ---------------------------------------------- | -------------------------- |
| Static                                                        | `npm` / `yarn`  | `npm run build` / `yarn build`                 | `build`                    |
| [React](https://reactjs.org/)                                 | `npm` / `yarn`  | `npm run build` / `yarn build`                 | `build`                    |
| [Create Eth App](https://github.com/paulrberg/create-eth-app) | `npm` / `yarn`  | `npm react-app:start` / `yarn react-app:start` | `packages/react-app/build` |
| [Vue](https://vuejs.org/)                                     | `npm` / `yarn`  | `npm run build` / `yarn build`                 | `dist`                     |
| [Next JS](https://nextjs.org/)                                | -               | `next build && next export`                    | `out`                      |
| [Angular](https://angular.io/)                                | `npm`/`yarn`    | `npm run build` / `yarn build`                 | `dist/your-app-name`       |
