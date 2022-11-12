---
id: environment-variables
title: Environment Variables
sidebar_label: Environment Variables
slug: /projects/environment-variables
---

Environment Variables are key-value pairs set up outside of your source code that allow each value to vary based on the environment.

The project's environment variables are accessible during your build. This allows you to change behaviors based on deploy parameters or to include information you don’t want to save in your repository, such as API keys.

All values are encrypted in transit and viewable to any user with Project access. Both non-sensitive and sensitive data, such as tokens, are safe to utilize.

### Adding Environment Variable

<font size="4"><b>1. During Project Build</b></font>

Spheron allows you to add environment variables under <b>Advanced Build Settings</b> while configuring your deployment.

<img src={require('@site/static/img/3.0.0/deploy-env-variable.png').default} />

:::info Note

Adding Environment Variables during new deployment won't work if project already exists, you have to add environment variables by going to your **Project Settings -> Environment Variables**

:::

## Variable got Environment

<strong>You can add an environment variable by going to Project Settings -> Environment Variables </strong>

Spheron users can attach a deployment environment with a particular build environment variable. Attaching an environment to a variable will give users the flexibility to use variables only for a particular environment. For e.g., if users have different environment variables for the development and production environment, they can put 2 different values for the same variable key connected with different deployment environments.

<img src={require('@site/static/img/3.0.0/vge.png').default} />

:::info Note

Environmental Changes Variables are only applied to new deployments and are not applied to earlier deployments.

:::

## Import Environment

Spheron users can import their environment variable from a file. The specification of the file is mentioned in the doc. Users have to create a JSON file that will look like the file below

<img src={require('@site/static/img/3.0.0/ie.png').default} />

:::info
When importing your file, you must specify name, value, and environments in a file and import them from the dashboard. This will reduce the time to incorporate all the environment variables required in the project one by one.

:::

```json
1
2  {
3    "name": "Key5", // name of the key
4    "value": "B" // value of env variable
5    "environments": ["Development"] // environments you need to attach to the variable
6  },
7  {
8    "name": "Key8",
9    "value": "a"
10  },
11  {
12    "name": "Key5",
13    "value": "test",
14    "environments": ["Production"]
15  },
16  {
17    "name": "Key10",
18    "value": "base",
19    "environments": ["Production", "Development"]
20  }
21

```
