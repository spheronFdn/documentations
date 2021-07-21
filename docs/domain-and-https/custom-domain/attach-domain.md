---
id: attach-domain
title: Attach Domain
sidebar_label: Attach Domain
slug: /domain-and-https/custom-domain/attach-domain
---

## Steps to Attach a Domain

**Step 1** - Go to your Dashboard and select your Project

**Step 2** - Click on Domain tab and enter the domain you would like to add

**Step 3** - While attaching domain to a project, attach the records once in your DNS provider and verify it. Thanks to ArGo's **Automated DNS Resolver**, you won't have to      change the records after every redeployment

**Step 4** - From here you will have to confirm that you already own this domain

<img src={require('@site/static/img/custom-domain.png').default} />

## Steps to Attach a Subdomain

You can create your Subdomains to organize and navigate to different sections of your Domain.

**Step 1** - Go to your Dashboard and select your Project

**Step 2** - Click on Subdomains tab and enter the Subdomain you would like to add

**Step 3** - While attaching Subdomain to a project, attach the records once in your DNS provider and verify it. Thanks to ArGo's **Automated DNS Resolver**, you won't have to change the records after every redeployment

<img src={require('@site/static/img/sub-domain.png').default} />

## Verifying the Domain

The domain must be verified before it is linked to the site. After adding the domain, add the records shown in the domain item and click on verify. This will check the configuration in the DNS provider. We then must wait for the domain to be propagated before clicking on Verify DNS configuration.

To verify that the DNS is indeed propagated before clicking on the button, you can use a tool such as https://dnschecker.org/

If the verify dns was successfull, then verify button will not be shown anymore.


