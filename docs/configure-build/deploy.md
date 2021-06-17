---
id: deploy
title: Site Deployment
sidebar_label: Deploy
slug: /configure-build/deploy
---

<!-- ## Site Deployment -->

Each new website deployment by ArGo is done atomically, meaning that there will never be any inconsistencies when pushing new files or making changes to existing ones.

## Creating a Deployment

### With Git

<img src={require('@site/static/img/deploy.png').default} />

Simply set the public directory of your project to your GitHub repository and define the build command. ArGo will run the build command and deploy the result whenever you push to your Git repo. The benefits of using continuous deployment include:

- No deploying without committing and pushing first
- Easy collaboration through pull requests
- Fix a typo through your Git provider's web UI from your mobile

## Redeploy a deployment

Redeploying a deployment in a project is a very demanded feature from a lot of our users. Earlier, when users had to redeploy a project, they had to do the deployment process from the starting.

Now, ArGo lets user to just redeploy any project with just a click. It will take the latest configuration used by the latest deployment in the project.

<img src={require('@site/static/img/redeploy.png').default} />
