---
id: encryption
title: Encryption
sidebar_label: Encryption
slug: /edge-network/encryption
---

Every Deployment on Spheron is served over an HTTPS connection. The SSL certificates for these unique URLs are automatically generated free of charge.

Any HTTP requests to your Deployments are automatically forwarded to HTTPS using the 308 status code:

HTTP/1.1 308 Moved Permanently
Content-Type: text/plain
Location: https://\<your-deployment-host\>

_An example showing how all HTTP requests are forwarded to HTTPS_

It is not possible to disable this redirection or prevent the Deployment from being served over HTTPS as it is considered an industry standard to serve web content over a secure connection.

## How certificates are handled?

OpenResty plugin automatically and transparently issues SSL certificates from Let's Encrypt (a free certificate authority) as requests are received. It works like:

A SSL request for a SNI hostname is received.
If the system already has a SSL certificate for that domain, it is immediately returned (with OCSP stapling).

If the system does not yet have an SSL certificate for this domain, it issues a new SSL certificate from Let's Encrypt. Domain validation is handled for you. After receiving the new certificate (usually within a few seconds), the new certificate is saved, cached, and returned to the client (without dropping the original request).

This uses the ssl_certificate_by_lua functionality in OpenResty 1.9.7.2+.
