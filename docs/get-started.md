---
id: get-started
title: Get Started
# sidebar_label: Welcome
# slug: /
---

<!-- ## Get started with build configuration -->

ArGo lets you link a GitHub repository to a site for continuous deployment. Each time you push to your Git provider, ArGo runs a build with your tool of choice and deploys the result to our powerful CDN.

The quickest way to begin is by connecting your website's GitHub repository to deploy directly from there and allow for continuous deployment. If you so choose, you can also deploy by uploading the full code base for your website.

<!-- ## Basic build settings -->

## Site Deployment

Each new website deployment by ArGo is done atomically, meaning that there will never be any inconsistencies when pushing new files or making changes to existing ones.

## Creating a Deployment

### With Git

<img src={require('@site/static/img/argo-deploy.png').default} />

Simply set the public directory of your project to your GitHub repository and define the build command. ArGo will run the build command and deploy the result whenever you push to your Git repo. The benefits of using continuous deployment include:

- No deploying without committing and pushing first
- Easy collaboration through pull requests
- Fix a typo through your Git provider's web UI from your mobile

## Configuring the deployment

### Build parameters

ArGo will attempt to autodetect the site's framework and apply the correct build parameters. In some cases, however, you might need to input the parameters manually, either at the initial site deployment stage, or in the site settings after the site has already been deployed.

Below are the build parameters which you can modify.

- **Docker image**: The name of the docker image on docker hub in which your site will be built, defaults to node:slim. ArGo provides images for many popular frameworks, but you can use any that suits your project.
- **Build command**: The commands to execute to build the site. EG: npm install && npm run build
- **Publish directory**: The name of the directory containing the index.html file of your site after it has been built
  Environment variables: The values of your environment variables. It is here for example that you might set your environment as production

## Common frameworks

You will also have to define the correct publish directory, here's list of default configurations for popular frameworks:

| Framework | Docker Image | Build Command | Public Directory | Additional Documentation |
| --------- | ------------ | ------------- | ---------------- | ------------------------ |
