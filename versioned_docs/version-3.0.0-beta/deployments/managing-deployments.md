---
id: managing-deployments
title: Managing Deployments
sidebar_label: Managing Deployments 
slug: /deployments/managing-deployments
---

The Spheron dashboard lets you manage all your current and previous deployments. 

View all of your current and previous deployments.

## Redeploy a Project

Here, the user is sent to the deployment setting page again with all the pre-filled configurations used on the project. Once the user confirms, he can start the deployment. The deployment will take the latest commit made in the branch selected and deploy the app with current environment variables.

Spheron automatically redeploys your application to integrate new and existing changes. You update an application by editing, adding, or deleting its contents.

However, there can be situations (e.g. bad cached data) where you need to Redeploy your application to fix issues manually. 

<img src={require('@site/static/img/3.0.0/deploy-redeploy.png').default} />


## Redeploy deployment

The user can redeploy any previous deployment by clicking on the menu icon on the deployment card. Only failed or successful deployment will show the redeploy option. Once clicked on redeploy option, the user will be given a prompt with the configuration used for the deployment, and once confirmed, the deployment will start. The deployment will be done on the particular commit and will take the latest environment variable.

Redeploy your previous deployment manually, by clicking on the redeploy button. 

<img src={require('@site/static/img/3.0.0/deploy-redeploy1.png').default} />

<img src={require('@site/static/img/3.0.0/deploy-stats.png').default} />

These are the stats reflected : 

- Total Deployments 
- Pending Deployments 
- Successful Deployments
- Failed Deployments

## Redeploy Configuration

You can check the configuration by clicking on the view configuration before redeploying the project using Spheron. 

<img src={require('@site/static/img/3.0.0/deploy-redeployviewconfig.png').default} />

## When to Redeploy?
- Changing the Environment Variables
- Outage Resiliency
- Making changes to Build & Development Settings
- Redirect or Rewrites from a subdomain to a subpath

## Stop a Deployment

If you no longer need a specific deployment of your app, you can delete it from your project. Click the vertical ellipsis for the deployment you want to delete from the Deployments tab. Then click the Inspect Deployment option, which directs you to the details of that deployment.

When you find the option to stop deployment on the basis of selecting to stop deployment 

<img src={require('@site/static/img/3.0.0/deploy-stopdeployment1.png').default} />

The next step is followed by the following pop-up

<img src={require('@site/static/img/3.0.0/deploy-stopdeployment.png').default} />




