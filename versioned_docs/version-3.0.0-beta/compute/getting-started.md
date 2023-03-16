---
id: getting-started
title: Getting Started
sidebar_label: Getting Started 
slug: /compute/getting-started
---

### H3 Spheron Compute 

Compute refers to the processing power and resources required to perform computational tasks such as data processing, simulations, and algorithms. In computing, compute is often measured in terms of CPU cycles, memory, and storage. The amount of compute required for a particular task is determined by the complexity of the task and the size of the data being processed

A Compute Instance is a virtual machine that can be used to host applications and services. This document provides step-by-step instructions for creating a Compute Instance using the Akash's cloud computing platform. 

## Prerequisites
1. A Spheron account with project set up.
2. Dockerised image to create an instance. 

:::info

Here is how **Create a docker image** and push it to Dockerhub. Check [this link here][def].

:::

## Steps
1. Open the Spheron dashboard in your browser and navigate to the Compute section.
2. Click on the "Create New Cluster" button to start creating your instance.
3. On the "Create a new project" page, you will need to configure the following:
- Import form Dockerhub 
- Start from a new template

<img src={require('@site/static/img/compute-1.png').default} />

## 	Add Organization Name and Username 

Add Organisation name and the username aslo you can add organisation avatar and then click on save. 

<img src={require('@site/static/img/addorg.png').default} />

## Create new cluster 

Click to create a new cluster, and the organization name will be reflected on the top left corner. 

<img src={require('@site/static/img/newcluster.png').default} />

## Create a new project 

static/img/createnew.png

<img src={require('@site/static/img/createnew.png').default} />

## Conclusion
Creating a compute instance in Spheron is a straightforward process that can be completed in just a few steps. By following the steps outlined in this document, you can quickly and easily create a virtual machine to host your applications and services.

[def]: https://www.pluralsight.com/guides/create-docker-images-docker-hub