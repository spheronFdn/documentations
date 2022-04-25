---
id: attach-domain
title: Attach Domain
sidebar_label: Attach Domain
slug: /domain-and-https/centralized-domain/attach-domain
---

## Steps to Attach a Domain

<font size="4"> <b>Step 1</b> - Go to your Dashboard and select your Project. </font> <br/><br/>

<font size="4"> <b>Step 2</b> - Click on the <code>Domains</code> tab. Input your domain name in the Select Site section, select the deployed link that you want to link with the specified domain, and click on Add. The selected configuration will be added to the screen.  
 </font> <br/><br/>

:::tip Note

Thanks to Spheron's <b>Automated DNS Resolver</b>, you won't have to change the records after every redeployment.

:::

<font size="4"> <b>Step 3</b> - Add the records shown in the domain item in your DNS provider and click on verify. This will check the configuration in the DNS provider. We then must wait for the domain records to be propagated before clicking on Verify DNS configuration. </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/custom-domain.png').default} />

## Steps to Attach a Subdomain

You can create your Subdomains to organize and navigate to different sections of your Domain.

<font size="4"> <b>Step 1</b> - Go to your Dashboard and select your Project. </font> <br/><br/>

<font size="4"> <b>Step 2</b> - Click on <code>Subdomains</code> tab. Input your subdomain name in the Select Site section, select the deployed link that you want to link with the specified subdomain, and click on Add. The selected configuration will be added to the screen. </font> <br/><br/>

:::tip Note

Thanks to Spheron's <b>Automated DNS Resolver</b>, you won't have to change the records after every redeployment.

:::

<font size="4"> <b>Step 3</b> - Add the records shown in the subdomain item in your DNS provider and click on verify. This will check the configuration in the DNS provider. We then must wait for the subdomain records to be propagated before clicking on Verify DNS configuration. </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/custom-subdomain.png').default} />

## Verifying the Domain

The domain must be verified before it is linked to the site. After adding the domain, add the records shown in the domain item and click on verify. This will check the configuration in the DNS provider. We then must wait for the domain to be propagated before clicking on Verify DNS configuration.

To verify that the DNS is indeed propagated before clicking on the button, you can use a tool such as https://dnschecker.org/

If the verify dns was successfull, then verify button will not be shown anymore.
