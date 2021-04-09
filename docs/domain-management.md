---
# id: doc1
title: Domain Management
# sidebar_label: Configure Build
# slug: /
---

## Custom Domains

Upon deploying a site on Internet Computer hosted sites/apps, ArGo will automatically assign a domain name in the following way: [CANISTER_ID].ic.argo.co. For example, it could look like this:

https://x4ytk-6yaaa-aaaab-qaiqq-cai.ic.argo.co/

This domain is created through ArGo's Internet Computer Gateway, our own open source transdimensional portal to the IC. With ArGo's IC Gateway, you can surface and access any canister on the Internet Computer, not just ArGo-hosted ones. Just replace the Canister ID on the URL with the desired canister, and you're ready.

But, aside from this auto-generated domain, on ArGo we allow users to point their IC-hosted sites to a custom domain of their choice.

## Adding a Custom Domain

<img src={require('@site/static/img/argo-domain.png').default} />
