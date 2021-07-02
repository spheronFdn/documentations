---
id: deploy-get-started
title: Get Started
sidebar_label: Get Started
slug: /configure-build/deploy-configure-build
---

ArGo lets you link a GitHub repository to a site for continuous deployment. Each time you push to your Git provider, ArGo runs a build with your tool of choice and deploys the result to our powerful CDN.

The quickest way to begin is by connecting your website's GitHub repository to deploy directly from there and allow for continuous deployment. If you so choose, you can also deploy by uploading the full code base for your website.

## Configuring the deployment

### Deploy parameters

ArGo lets you get more control of how you build and deploy your repository

- **Owner**: The organization's name, considered the owner of the deployment. Ex: Your Org's name
- **Branch to Deploy**: The branch of the repository to be deployed in ArGo. Ex: master branch
- **Workspace to Deploy**: A Workspace is how your team will keep GitHub Issues organized. You can add any number of GitHub repos into the same Workspace, letting your team benefit from a shared view on all your work

### Build parameters

ArGo will attempt to autodetect the site's framework and apply the correct build parameters. In some cases, however, you might need to input the parameters manually, either at the initial site deployment stage, or in the site settings after the site has already been deployed.

Below are the build parameters which you can modify.

- **Framework**: The framework on which the site is built one. Ex: create-react-app, No Framework - JavaScript, Vue App, etc.
- **Package Manager**: It helps create project environments and easily import external dependencies. You can choose your package manager here. Ex: npm && yarn
- **Build command**: The commands to execute to build the site. Ex: npm install && npm run build
- **Publish directory**: The name of the directory containing the file of your site after it has been built

## Common frameworks

You will also have to define the correct publish directory, here's list of default configurations for popular frameworks:

| Framework    | Package Manager | Build Command                  | Publish Directory    |
| ------------ | --------------- | ------------------------------ | -------------------- |
| `JavaScript` | `npm` / `yarn`  | `npm run build` / `yarn build` | `build`              |
| `React`      | `npm` / `yarn`  | `npm run build` / `yarn build` | `build`              |
| `Vue`        | `npm` / `yarn`  | `npm run build` / `yarn build` | `dist`               |
| `Next JS`    | -               | `next build && next export`    | `out`                |
| `Angular`    | `npm`/`yarn`    | `npm run build` / `yarn build` | `dist/your-app-name` |
