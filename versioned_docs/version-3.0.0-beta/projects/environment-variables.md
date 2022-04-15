---
id: environment-variables
title: Environment Variables
sidebar_label: Environment Variables
slug: /projects/environment-variables
---

Environment Variables are key-value pairs set up outside of your source code that allow each value to vary based on the environment.

Spheron environment variables are accessible during your build. This allows you to change behaviors based on deploy parameters or to include information you don’t want to save in your repository, such as API keys.

All values are encrypted in transit and viewable to any user with Project access. Both non-sensitive and sensitive data, such as tokens, are safe to utilize.

### Adding Environment Variable

<font size="4"><b>1. During Project Build</b></font>

Spheron allows you to add environment variables under <b>Advanced Build Settings</b> while configuring your deployment.

<img src={require('@site/static/img/3.0.0/deploy-env-variable.png').default} />

:::info Note

Adding Environment Variables during new deployment won't work if project already exists, you have to add environment variables by going to your **Project Settings -> Environment Variables**

:::

<font size="4"><b>2. In Build Settings</b></font>

You can add an environment variable by going to **Project Settings -> Environment Variables** as well.

<img src={require('@site/static/img/3.0.0/env-variable.png').default} />

:::info Note

Environmental Changes Variables are only applied to new deployments and are not applied to earlier deployments.

:::
