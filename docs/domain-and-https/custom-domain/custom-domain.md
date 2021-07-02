---
id: custom-domain
title: Overview
sidebar_label: Overview
slug: /domain-and-https/custom-domain/overview
---

Upon deploying a site on Arweave, ArGo will automatically assign a domain name in the following way: https://arweave.net/[TXID].

:::tip info

Custom Domains allows user to access their site via one or more non-ArGo domain names. By default, the site is always accessible via arweave gateway based on transaction id.

:::

:::caution info

Custom Domains use our domain resolver to serve deployed links. As it is a beta version and our system is not stable to handle a lot of traffic, we would like to inform you that if you are using it for the production app, please keep in mind that it may break due to unexpected heavy traffic. We are currently working on it to stabilize the system and we will inform everyone about it.

:::

## Custom domains

A domain name is the URL or web address where visitors find your site.

Custom domains allow you to make your sites accessible at your own, non-ArGo domain names (for example, `www.yourcustomdomain.com`). ArGo supports all top-level domains in custom domains.

## Multiple Domains

All the domains which selected the latest option when setting it up on the ArGo platform will point to the latest deployed transaction in Arweave. Otherwise, users can point to a single deployment and the domain site won't change with any new deployment.

## Definitions

- Domain name (or domain for short): full name used to access a site. For example, `yoursitename.argo.app` or `www.yourcustomdomain.com`

- Top-level domain: last part of the domain name. For example, the `.com` part in `www.yourcustomdomain.com`.

- Apex domain (also known as a root, bare, or naked domain): the `yourcustomdomain.com` part in `www.yourcustomdomain.com`.

- Subdomain: a domain that is part of a larger domain; the only domain that is not also a subdomain is the apex domain. For example, `www.yourcustomdomain.com` and `app.yourcustomdomain.com` are subdomains of `yourcustomdomain.com`.

- Custom domain: a non-ArGo domain assigned to a site.

- Primary domain: ArGo term for the main custom domain assigned to a site.

- Domain alias: ArGo term for additional custom domains assigned to a site.
