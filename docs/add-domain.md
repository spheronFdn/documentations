---
id: add-domain
title: Add Custom Domain
sidebar_label: Custom Domain
---

### Steps to add a Custom Domain

- Go to your Dashboard and select your Project
- Click on Domain tab and enter the domain you would like to add
- While attaching domain to a project, attach the records once in your DNS provider and verify it. Thanks to ArGo's **Auto DNS Resolver**, you won't have to change the records after every redeployment
- From here you will have to confirm that you already own this domain

:::info Auto DNS Resolver
ArGo users just have to attach their domains and add the records only once in their DNS provider. Upon successful verification, once the user redeploys any site, their domain will automatically point to the latest deployment or the user can opt for the domain to point a particular deployment.
:::

<img src={require('@site/static/img/argo-domain.png').default} />

## Adding Custom Subdomain

You can create your Subdomains to organize and navigate to different sections of your Domain.

- Go to your Dashboard and select your Project
- Click on Subdomains tab and enter the Subdomain you would like to add
- While attaching Subdomain to a project, attach the records once in your DNS provider and verify it. Thanks to ArGo's **Auto DNS Resolver**, you won't have to change the records after every redeployment

<img src={require('@site/static/img/argo-sub-domain.png').default} />
