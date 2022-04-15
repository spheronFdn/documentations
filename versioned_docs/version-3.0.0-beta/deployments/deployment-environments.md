---
id: deployment-environments
title: Deployment Environments
sidebar_label: Deployment Environments
slug: /deployments/deployment-environments
---

Spheron gives you the flexibility to use environments to manage your project's continuous deployment. Your project will be assigned to two deployment environments by default: Production and Development.

## Production Environment

All deployments start with production deployment. It will build a production deployment every time you push to a default branch(Main branch) or do a deployment.

The site preview URL will be updated to reflect the most recent deployment when you make a Production deployment. Every time you merge or commit to the Production Branch (usually known as the main), a production deployment is created.

## Development Environment

By default, all the other branches apart from the production branch falls under the development branch. Each time you merge to the development branch(es), it will create a Development deployment.

## Add Environment

While creating a new deployment environment the user will receive an alert message stating "The creation of this deployment environment will cost you a monthly bonus of USD $5. Are you sure you want to create a [your environment name]?"

You will receive information about the payment initiation in the notification. The state of the environment will be moved to PAYMENT PENDING.
On successful confirmation, the deployment environment will be created and the state will be moved to ACTIVE.

NOTE: Branches that are currently in the Production Environment cannot be added to the new environment. If you want to add a specific branch to your new environment, you can edit another branch into Production, and then can add that branch.
