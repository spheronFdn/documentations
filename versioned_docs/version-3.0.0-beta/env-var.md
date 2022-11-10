---
id: env-var
title: Environment variable
sidebar_label: Environment variable
slug: /env-var
---

## Domain got Environment

Spheron users can attach a deployment environment with a particular domain. Attaching a deployment environment to the domain will give users the flexibility to segregate their domains based on the environment of a project. That means, that if the deployment of a deployment environment is finished, the domain attached to the deployment environment will get updated with the new deployment link.

<img src={require('@site/static/img/3.0.0/dge.png').default} />

## Variable got Environment

Spheron users can attach a deployment environment with a particular build environment variable. Attaching an environment to a variable will give users the flexibility to use variables only for a particular environment. For e.g., if users have different environment variables for the development and production environment, they can put 2 different values for the same variable key connected with different deployment environments.

<img src={require('@site/static/img/3.0.0/vge.png').default} />

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
