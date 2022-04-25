---
id: ens-domain
title: ENS Domain
sidebar_label: ENS Domain
slug: /domain-and-https/ens-domain
---

You can easily point an Ethereum Name Service (ENS) domain to your Deployed link and have the content hash automatically updated for your link via Spheron. The benefit of ENS domains is that they are decentralized and trustless, running on the Ethereum blockchain network through smart contracts.

:::tip

For a user to resolve/visit an ENS domain they will need to have a compatible provider/browser installed that is able to resolve them. Using the MetaMask browser extension is one option, as it resolves .eth domains.

:::

Once your app is deployed on Spheron, go to the project settings page in the domains tab. On the left sidebar section, you will find ENS Domains.

## Attaching ENS Domain:

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

## Review Your ENS Site with Supported Resolvers.

If you’re using an ENS-compatible browser, like Brave, or if you have the MetaMask extension installed, you can just type your address in the search bar “address.eth/” (don’t forget the “/”) and it should be automatically resolved.

#### Using eth.link

If you have none of those, you can always append the “.link” suffix after your domain to visit your ENS website on any browser, thanks to a service made available by ENS and Cloudflare that makes all the .eth domains accessible via traditional DNS addresses. Anyone can visit and resolve your site. Visit the ENS app with .link!

#### Using eth.limo

An alternative to eth.link is eth.limo! It's a decentralized option (Cloudflare's eth.link is centralized and can experience downtimes) that was created so that there is not only one Web2 gateway to ENS sites. As easy as .eth.link. You just add .limo at the end of your ENS name, e.g, http://{your-ens}.eth.limo

All of these are third-party resolving options you, or anyone can use to visit your site using .eth ENS domains. If your ENS record is configured properly, and you experience an issue on any of these gateways, contact that specific provider.
