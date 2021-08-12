---
id: https
title: HTTPS
slug: /domain-and-https/https-ssl/https
---

ArGo offers free HTTPS on all sites, including automatic certificate creation and renewal. Our certificates use the modern TLS protocol, which has replaced the now deprecated SSL standard.

HTTPS brings a lot of advantages:

- Content integrity: Without HTTPS, free Wi-Fi services can inject ads into your pages.

- Security: If your site has a login or accepts form submissions, HTTPS is essential for your users’ security and privacy.

- SEO: Google search results prioritize sites with HTTPS enabled.

- Referral analytics: HTTPS-enabled sites will not send referral data to sites without HTTPS enabled.

## OpenResty

OpenResty plugin automatically and transparently issues SSL certificates from Let's Encrypt (a free certificate authority) as requests are received. It works like:

- A SSL request for a SNI hostname is received.
- If the system already has a SSL certificate for that domain, it is immediately returned (with OCSP stapling).
- If the system does not yet have an SSL certificate for this domain, it issues a new SSL certificate from Let's Encrypt. Domain validation is handled for you. After receiving the new certificate (usually within a few seconds), the new certificate is saved, cached, and returned to the client (without dropping the original request).

This uses the ssl_certificate_by_lua functionality in OpenResty 1.9.7.2+.

Check more about OpenResty [here](https://github.com/auto-ssl/lua-resty-auto-ssl).
