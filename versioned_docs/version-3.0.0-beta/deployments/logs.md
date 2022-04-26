---
id: logs
title: Logs
sidebar_label: Logs
slug: /deployments/logs
---

For all deployments, build logs are created at build time. With a few small improvements from Spheron's build system, it's comparable to the output of your framework's build command. No more logs will be uploaded to this page once a build is done.

<img src={require('@site/static/img/3.0.0/deploy-logs.png').default} />

If there are any faults or warnings in the build logs, they will be marked in various colors (e.g. yellow for warnings & red for errors). This makes it simple to pinpoint the source of any unsuccessful builds and locations you might want to look into more.

:::info

Build logs are kept on each deployment forever.

:::
