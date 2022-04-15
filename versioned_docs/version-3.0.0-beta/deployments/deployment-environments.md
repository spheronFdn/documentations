---
id: deployment-environments
title: Deployment Environments
sidebar_label: Deployment Environments
slug: /deployments/deployment-environments
---

Spheron gives you the flexibility to use environments to manage your project's continuous deployment. Your project will be assigned to two deployment environments by default: Production and Development.

<img src={require('@site/static/img/3.0.0/deployment-env.png').default} />

There are three states of an Environment -

1. <b>ACTIVE</b> - The selected Environment up and active.

2. <b>INACTIVE</b> - The selected Environment is deactivated and not serving your deployed site. You can activate the environment by clicking on the <code>Activate</code> button.

3. <b>PAYMENT PENDING</b> - The selected Environment has just been added and is waiting for the payment to be processed. The state will be changed to <b>ACTIVE</b> once the payment is successful. A notification alert (on the top right) will also be generated for both successful and unsuccessful payments.

## Production Environment

All deployments start with production deployment. It will build a production deployment every time you push to a default branch (Main branch) or do a deployment.

The site preview URL will be updated to reflect the most recent deployment when you make a Production deployment.

:::info

Every time you merge or commit to the Production Branch (usually the main), a production deployment is created.

:::

## Development Environment

By default, all the other branches apart from the production branch falls under the development branch. Each time you merge to the development branch(es), it will create a Development deployment.

## Add Environment

While creating a new deployment environment the user will receive an alert message stating `The creation of this deployment environment will cost you a monthly bonus of USD $5. Are you sure you want to create a [your environment name]?`

<img src={require('@site/static/img/3.0.0/create-deployment-env.png').default} />

You will receive information about the payment initiation in the notification. The state of the environment will be moved to <b>PAYMENT PENDING</b>.
On successful confirmation, the deployment environment will be created and the state will be moved to <b>ACTIVE</b>.

:::caution

Branches that are currently in the Production Environment cannot be added to the new environment. If you want to add a specific branch to your new environment, you can edit another branch into Production, and then can add that branch.

:::
