---
id: get-started
title: Get Started
sidebar_label: Get Started
slug: /projects/get-started
---

The user must first establish a Project before they can deploy it to Spheron. Deployments and custom domains are grouped together in a Project. GitHub, GitLab, and Bitbucket can all send deployments to each project.

## Project Card

The Project Card contains all the necessary information regarding your deployed project. This card is common in all the project pages.

<img src={require('@site/static/img/3.0.0/project-card.png').default} /> <br/><br/>

It shows the following information -

- **Screenshot of the deployed web app**: In the deployment tab, the meta card shows the screenshot of the deployed web app using Spheron. This is called the site preview.

- **Name of the repository**: The project meta card displays the name of the repository that users have forked from the collaborating platform like Github, Gitlab, or Bitbucket.

- **Deployment Environment**: It shows from which development environment the deployment has been deployed mentioned along with the branch opted.
  You can use environments to manage your project's continuous deployment. Your project will be assigned to two deployment environments by default: Production and Development Environments.

- **Deployed branch of the repository**: Workflow requirements varies depending on the organization. Going to production with a branch that isn't designated as the default can sometimes be necessary.

- **Time and date of deployment**: The deployment facilitates users by displaying the date and time at which the particular web app is deployed.

- **Domain attached to the deployment link**: Your Project will be assigned a custom Domain by the Spheron protocol, which others will be able to use to access your Production Deployment.
  By default, each newly created Project is given its own subdomain, ending in **spheron.app**, which is assigned to Production Deployments.

- **GitHub/Gitlab/Bitbucket details of the deployed repository**: Spheron displays the logo of the Git repository or template along with the branch you've chosen for your new project.

- **Site preview link**: The link directs to the page of the web app deployed using Spheron.
