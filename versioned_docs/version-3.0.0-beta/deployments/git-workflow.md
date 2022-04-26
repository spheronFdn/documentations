---
id: git-workflow
title: Git Workflow
sidebar_label: Git Workflow
slug: /deployments/git-workflow
---

<!--
<font size="4"> Continuous Deployment is now possible with Spheron directly from Github, users can now enable continuous deployment and every merge to the branch will trigger a new build and their website will be always updated with the latest changes. We have mitigated the hassle of manually deploying the website again and again. </font> <br/><br/>

<font size="4"> <b>Note: To use Continuous Deployment make sure you accept the updated Spheron Github app permissions. It is necessary for Continuous Deployment to work.</b> </font> <br/><br/>

<font size="4"> You can accept the update permissions by following these steps - </font> <br/>

1. Open https://github.com/apps/spheron-protocol/installations/new and open the GitHub Organizations where you configured the **Spheron Protocol GitHub App**
   <img src={require('@site/static/img/argoapplive-permission.png').default} />

2. Now you will see a permission request, just click **Review request** and accept the new permission. -->

Spheron has worked on making it possible to collaborate and see previews directly in the Github repository. We have added lots of meaningful workflows to make it easy for a team to collaborate effectively without visiting the dashboard.

Some of these new feature addition includes:

### PR Comments

Spheron posts comments whenever users create a PR and start deploying the last commit of the PR. After successful deployment, it will post the deployment **Preview link** and **Deployment Logs link**.

<img src={require('@site/static/img/3.0.0/git-workflow.png').default} /> <br/><br/>

### PR Checks

Spheron also posts the deployment checks as the deployment gets started for any commit. It can also be seen in the PR which will redirect to the deployment log page.

<img src={require('@site/static/img/3.0.0/git-tick.png').default} /> <br/><br/>

:::info

Clicking on **Details** will redirect you to the Spheron Deployment page.

:::

### Github Environments

Spheron creates a deployment environment in Github as well. By default, users get 2 deployment environments from the platform - **Production** & **Development**. More details in section [Deployment Environment](/deployments/deployment-environments). We post the deployment link to these deployment environments on Github such that the team can view deployment history.

<img src={require('@site/static/img/3.0.0/git-env.png').default} /> <br/><br/>

### Gitlab Builds

This is the same as the Github Environments, just with a different flavor of Gitlab. Similar to Github Env, Spheron creates 2 build pipelines based on the 2 deployment environments. Spheron adds deployment links to these builds for the team to view all the deployment history done for a specific environment in Gitlab.

With the addition of a new workflow for Git Provider, the continuous deployment is now enabled by default.

### Git Fork Protection

If you receive a pull request from a fork of your repository that includes a change to your file, Spheron will move the deployment to **Awaiting Authorization** state and require authorization from you or a Team Member to deploy the pull request.

This behavior protects you from leaking sensitive Project information.

<img src={require('@site/static/img/3.0.0/auth-needed.png').default} /> <br/><br/>

On clicking on the card, you will be forwarded to **Authorize Fork Deployment** page.

<img src={require('@site/static/img/3.0.0/authorize-fork.png').default} /> <br/><br/>

Clicking on **Authorize** will start the deployment and soon will be published.
