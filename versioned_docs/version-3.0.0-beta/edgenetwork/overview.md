---
id: overview
title: Overview
sidebar_label: Overview
slug: /edge-network/overview
---

Deployments delivered to visitors all over the world. A seamless integration to Spheron which makes it a layer between you and spheron deployments.

Edge Network sits in between the internet and your Spheron deployments. This type of network topology is sometimes called a Content Delivery Network or CDN.

## Caching

The Edge Network caches your content at the edge in order to serve data to your users as fast as possible.

## Additional Responsibilities

Aside from routing your requests to the correct destination, the Edge Network also takes care of a few other important aspects of a working Deployment:

- Terminating SSL
- Compressing your responses

All of these actions are performed automatically with careful attention to performance (ensured by our choices of technology). In turn, we highly recommend not implementing SSL termination or compression in your own code, as it would be unnecessary.
