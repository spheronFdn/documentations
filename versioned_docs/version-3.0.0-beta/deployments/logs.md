---
id: logs
title: Logs
sidebar_label: Logs
slug: /deployments/logs
---

For all Deployments, build logs are created at build time. With a few small improvements from Spheron's Build system, it's comparable to the output of your framework's Build Command. No more logs will be uploaded to this page once a Build is done.

<img src={require('@site/static/img/3.0.0/deploy-logs.png').default} />

If there are any faults or warnings in the Build logs, they will be marked in various colors (e.g. yellow for warnings). This makes it simple to pinpoint the source of any unsuccessful Builds and locations you might want to look into more.

Build logs are kept on each Deployment forever.
