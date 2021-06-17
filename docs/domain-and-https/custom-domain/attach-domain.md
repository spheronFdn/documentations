---
id: attach-domain
title: Attach Domain
sidebar_label: Attach Domain
slug: /domain-and-https/custom-domain/attach-domain
---

### Steps to Attach a Custom Domain

- Go to your Dashboard and select your Project
- Click on Domain tab and enter the domain you would like to add
- While attaching domain to a project, attach the records once in your DNS provider and verify it. Thanks to ArGo's **Automated DNS Resolver**, you won't have to change the records after every redeployment
- From here you will have to confirm that you already own this domain

<img src={require('@site/static/img/custom-domain.png').default} />

## Attaching a Custom Subdomain

You can create your Subdomains to organize and navigate to different sections of your Domain.

- Go to your Dashboard and select your Project
- Click on Subdomains tab and enter the Subdomain you would like to add
- While attaching Subdomain to a project, attach the records once in your DNS provider and verify it. Thanks to ArGo's **Automated DNS Resolver**, you won't have to change the records after every redeployment

<img src={require('@site/static/img/sub-domain.png').default} />

## Default ArGo Subdomain 

We have added this new feature for providing a default subdomain for every project on our platform. Now every project created in an organization will have an ArGo subdomain attached to it.

The subdomain will be like - ```{subdomain}.argoapp.live```, where `subdomain`- `{project-name}{random 8 digits}`

The default subdomain will always be pointed to the latest deployment that happened in that project. It also provides a better naming convention for sharing your project previews with others.

## Automated DNS Resolver

Earlier, when users attached their domain to a project, they had to add some records to their DNS provider. So, when users redeployed the project again, they had to again change these records which will point to a new deployment which is a great overhead for the users.

Now, ArGo users just have to attach their domains and add the records only once in their DNS provider. Upon successful verification, once the user redeploys any site, their domain will automatically point to the latest deployment or the user can opt for the domain to point a particular deployment.

## Verifying the Custom Domain

The domain must be verified before it is linked to the site. After adding the domain, add the records shown in the domain item and click on verify. This will check the configuration in the DNS provider. We then must wait for the domain to be propagated before clicking on Verify DNS configuration.

To verify that the DNS is indeed propagated before clicking on the button, you can use a tool such as https://dnschecker.org/

If the verify dns was successfull, then verify button will not be shown anymore.


