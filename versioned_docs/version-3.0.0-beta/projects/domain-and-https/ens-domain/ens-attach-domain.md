---
id: ens-attach-domain
title: Attach Domain
sidebar_label: Attach Domain
slug: /domain-and-https/ens-domain/attach-domain
---

[Handshake](https://handshake.org/) and Spheron both support [Arweave](https://www.arweave.org/) and [Skynet](https://siasky.net/), thus it is possible to connect the Handshake domain with Skynet as well as the Arweave site.

We are using [namebase.io](https://www.namebase.io/) to interact with Handshake.

:::tip Beta

Handshake Domain is currently in the Beta stage. Currently it is hard to set up and view HTTPS sites on Handshake because certificate authorities won’t issue SSL certificates for Handshake TLDs(Top-Level Domains), and no browsers support [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities).

Once major browsers start supporting the DANE/TLSA certificate, we will move it to the production stage.

:::

<iframe src="https://www.youtube.com/embed/Bbm0Yal86WI" width="100%" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Steps to Attach a Domain

<font size="4"> <b>Step 1</b> - Go to your Dashboard and select your Project. </font> <br/><br/>

<font size="4"> <b>Step 2</b> - Click on <code>HNS Domain</code> tab and enter the domain you would like to add. </font> <br/><br/>

<font size="4"> <b>Step 3</b> - Click on <code>Update</code> to update your handshake domain records. You will be redirected to <b>namebase.io</b>, and upon successful confirmation, your records will be updated. </font> <br/><br/>

<font size="4"> <b>Step 4</b> - You can verify if the update is done or not by clicking <code>Verify</code>. We will verify the records for you. </font> <br/><br/>

:::note

Updating your domain name or content will always show you to `Update` record, as it changes the content hash.

:::

<img src={require('@site/static/img/hns-domain.png').default} />

## Steps to Attach a Subdomain

You can create your Subdomains to organize and navigate to different sections of your Domain.

<font size="4"> <b>Step 1</b> - Go to your Dashboard and select your Project. </font> <br/><br/>

<font size="4"> <b>Step 2</b> - Click on <code>HNS Subdomains</code> tab and enter the Subdomain you would like to add. </font> <br/><br/>

<font size="4"> <b>Step 3</b> - Click on <code>Update</code> to update your handshake domain records. You will be redirected to <b>namebase.io</b>, and upon successful confirmation, your records will be updated. </font> <br/><br/>

<font size="4"> <b>Step 4</b> - You can verify if the update is done or not by clicking <code>Verify</code>. We will verify the records for you. </font> <br/><br/>

<img src={require('@site/static/img/hns-subdomain.png').default} />
