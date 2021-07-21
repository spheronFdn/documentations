---
id: hns-attach-domain
title: Attach Domain
sidebar_label: Attach Domain
slug: /domain-and-https/hns-domain/hns-attach-domain
---

[Handshake](https://handshake.org/) and ArGo both support [Arweave](https://www.arweave.org/) and [Skynet](https://siasky.net/), thus it is possible to connect the Handshake domain with Skynet as well as the Arweave site.

We are using [namebase.io](https://www.namebase.io/) to interact with Handshake.

:::tip Beta

Handshake Domain is currently in the Beta stage. Currently it is hard to set up and view HTTPS sites on Handshake because certificate authorities won’t issue SSL certificates for Handshake TLDs(Top-Level Domains), and no browsers support [DANE](https://en.wikipedia.org/wiki/DNS-based_Authentication_of_Named_Entities).

Once major browsers start supporting the DANE/TLSA certificate, we will move it to the production stage.

:::

<iframe src="https://www.youtube.com/embed/Bbm0Yal86WI" width="100%" height="500" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>

## Steps to Attach a Domain

**Step 1** - Go to your Dashboard and select your Project

**Step 2** - Click on `HNS Domain` tab and enter the domain you would like to add

**Step 3** - Click on `Update` to update your handshake domain records. You will be redirected to [namebase.io](https://www.namebase.io/), and upon successful confirmation, your records will be updated.

**Step 4** - You can verify if the update is done or not by clicking `Verify`. We will verify the records for you.

:::note

Updating your domain name or content will always show you to `Update` record, as it changes the content hash.

:::

<img src={require('@site/static/img/hns-domain.png').default} />

## Steps to Attach a Subdomain

You can create your Subdomains to organize and navigate to different sections of your Domain.

**Step 1** - Go to your Dashboard and select your Project

**Step 2** - Click on `HNS Subdomains` tab and enter the Subdomain you would like to add

**Step 3** - Click on `Update` to update your handshake domain records. You will be redirected to [namebase.io](https://www.namebase.io/), and upon successful confirmation, your records will be updated.

**Step 4** - You can verify if the update is done or not by clicking `Verify`. We will verify the records for you.

<img src={require('@site/static/img/hns-subdomain.png').default} />