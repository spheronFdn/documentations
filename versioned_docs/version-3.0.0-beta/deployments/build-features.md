---
id: build-features
title: Build Features
sidebar_label: Build Features
slug: /deployments/build-features
---

## Build Features

Spheron provides the following features to customize your deployments:

## Ignored files and folders

Spheron ignores certain files and folders by default and prevents them from being uploaded during the deployment process for security and performance reasons.

> .hg
> .git
> .gitmodules
> .svn
> .cache
> .next
> .now
> .npmignore
> .dockerignore
> .gitignore
> ._.swp
> .DS_Store
> .wafpicke-_
> .lock-wscript
> .env.local
> .env.\*.local
> .venv
> npm-debug.log
> node_modules
> venv

## Git submodules

On Spheron you can deploy [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) with a Git provider as long as the submodule is publicly accessible via the HTTP protocol. Git submodules that are private or requested over SSH will fail during the Build step.
