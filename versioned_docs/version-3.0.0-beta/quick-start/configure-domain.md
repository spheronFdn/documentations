---
id: configure-domain
title: Configuring Domain
sidebar_label: Configuring Domain
slug: /quick-start/configure-domain
---

## Centralized Domain

## Steps to Attach a Centralized Domain

<font size="4"> <b>Step 1</b> - Go to your Dashboard and select your Project. </font> <br/><br/>

<font size="4"> <b>Step 2</b> - Click on the <code>Domains</code> tab. Input your domain name in the Select Site section, select the deployed link that you want to link with the specified domain, and click on Add. The selected configuration will be added to the screen.  
 </font> <br/><br/>

:::tip Note

Thanks to Spheron's <b>Automated DNS Resolver</b>, you won't have to change the records after every redeployment.

To enable it, select **Latest** from the deployed link options

:::

<font size="4"> <b>Step 3</b> - Add the records shown in the domain item in your DNS provider and click on verify. This will check the configuration in the DNS provider. We then must wait for the domain records to be propagated before clicking on Verify DNS configuration. </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/custom-domain.png').default} />

## Steps to Attach a Centralized Subdomain

You can create your Subdomains to organize and navigate to different sections of your Domain.

<font size="4"> <b>Step 1</b> - Go to your Dashboard and select your Project. </font> <br/><br/>

<font size="4"> <b>Step 2</b> - Click on <code>Subdomains</code> tab. Input your subdomain name in the Select Site section, select the deployed link that you want to link with the specified subdomain, and click on Add. The selected configuration will be added to the screen. </font> <br/><br/>

:::tip Note

Thanks to Spheron's <b>Automated DNS Resolver</b>, you won't have to change the records after every redeployment.

To enable it, select **Latest** from the deployed link options

:::
<font size="4"> <b>Step 3</b> - Add the records shown in the subdomain item in your DNS provider and click on verify. This will check the configuration in the DNS provider. We then must wait for the subdomain records to be propagated before clicking on Verify DNS configuration. </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/custom-subdomain.png').default} />

## HNS Domain

We are using [namebase.io](https://www.namebase.io/) to interact with Handshake.

:::tip Beta

Handshake Domain is currently in the Beta stage. Currently it is hard to set up and view HTTPS sites on Handshake because certificate authorities won’t issue SSL certificates for Handshake TLDs(Top-Level Domains), and no browsers support [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities).

Once major browsers start supporting the DANE/TLSA certificate, we will move it to the production stage.

:::

<iframe src="https://www.youtube.com/embed/Bbm0Yal86WI" width="100%" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Steps to Attach a HNS Domain

<font size="4"> <b>Step 1</b> - Go to your Dashboard and select your Project. </font> <br/><br/>

<font size="4"> <b>Step 2</b> - Click on <code>HNS Domain</code> tab and enter the domain you would like to add. </font> <br/><br/>

<font size="4"> <b>Step 3</b> - Click on <code>Update</code> to update your handshake domain records. You will be redirected to <b>namebase.io</b>, and upon successful confirmation, your records will be updated. </font> <br/><br/>

<font size="4"> <b>Step 4</b> - You can verify if the update is done or not by clicking <code>Verify</code>. We will verify the records for you. </font> <br/><br/>

:::info

Updating your domain name or content will always show you to `Update` record, as it changes the content hash.

:::

<img src={require('@site/static/img/3.0.0/hns-domain.png').default} />

## Steps to Attach a HNS Subdomain

You can create your Subdomains to organize and navigate to different sections of your Domain.

<font size="4"> <b>Step 1</b> - Go to your Dashboard and select your Project. </font> <br/><br/>

<font size="4"> <b>Step 2</b> - Click on <code>HNS Subdomains</code> tab and enter the Subdomain you would like to add. </font> <br/><br/>

<font size="4"> <b>Step 3</b> - Click on <code>Update</code> to update your handshake domain records. You will be redirected to <b>namebase.io</b>, and upon successful confirmation, your records will be updated. </font> <br/><br/>

<font size="4"> <b>Step 4</b> - You can verify if the update is done or not by clicking <code>Verify</code>. We will verify the records for you. </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/hns-subdomain.png').default} />

## ENS Domain

You can easily point an Ethereum Name Service (ENS) domain to your Deployed link and have the content hash automatically updated for your link via Spheron. The benefit of ENS domains is that they are decentralized and trustless, running on the Ethereum blockchain network through smart contracts.

## Steps to Attach an ENS Domain

<font size="4"> <b>Step 1</b> - Go to your Dashboard and select your Project. </font> <br/><br/>

<font size="4"> <b>Step 2</b> - Click on the <code>ENS Domains</code> tab. Input your ENS domain name in the Select Site section, select the deployed link that you want to link with the specified ENS domain, and click on Add.<br/><br/>
The selected configuration will be added to the screen.  
 </font> <br/><br/>

<img src={require('@site/static/img/3.0.0/ens-domain.png').default} />

<font size="4"> <b>Step 3</b> - With Spheron, you can update your ENS content hash directly from the app. Just click on the <code>Update</code> button, confirm the metamask transactions (make sure of the associated gas fees), and boom, the content hash has been updated. Check it out in your ENS Domain Manager<br/><br/>

:::caution info

Make sure you are connected to the same wallet as in your ENS Domain for successful updation.

:::

You can also manually update the content hash of your ENS domain by going to your [ENS dashboard](https://app.ens.domains/) and updating your content hash with the CONTENT provided for the same in Spheron.

</font> <br/><br/>

<font size="4"> <b>Step 4</b> - You can verify if the update is done or not by clicking <code>Verify</code>. We will verify the records for you and the domain will be ready to shoot! </font> <br/><br/>

:::note

Updating your domain name or content will always show you to `Update` record, as it changes the content hash.

:::
