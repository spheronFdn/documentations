---
id: sdk-getting-started
title: Getting Started
sidebar_label: Getting Started
slug: /sdk/sdk-getting-started
---

The SDK is written in TypeScript, has a robust test suite, performs arbitrary precision arithmetic, and supports rounding to significant digits or fixed decimal places. The principal exports of the SDK are entities: classes that contain initialization and validation checks, necessary data fields, and helper functions.

## Code

The source code is available on [GitHub](https://github.com/spheron/argo-payments-js).

## Dependencies

The SDK declares its dependencies as peer dependencies.

This is for two reasons:

- prevent installation of unused dependencies (e.g.` @ethersproject/providers` and `@ethersproject/contracts`, only used in Fetcher)
- prevent duplicate `@ethersproject` dependencies with conflicting versions
  However, this means you must install these dependencies alongside the SDK, if you do not already have them installed.
