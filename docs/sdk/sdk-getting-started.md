---
id: sdk-getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /sdk/sdk-getting-started
---

## Code

The source code is available on [GitHub](https://github.com/argoapp-live/argo-payments-js).

## Dependencies

The SDK declares its dependencies as peer dependencies. 

This is for two reasons:

- prevent installation of unused dependencies (e.g.` @ethersproject/providers` and `@ethersproject/contracts`, only used in Fetcher)
- prevent duplicate `@ethersproject` dependencies with conflicting versions
However, this means you must install these dependencies alongside the SDK, if you do not already have them installed.