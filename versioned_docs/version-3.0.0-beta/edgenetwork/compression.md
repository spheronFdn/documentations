---
id: compression
title: Compression
sidebar_label: Compression
slug: /edge-network/compression
---

To save bandwidth and make your application or site faster, the Spheron Edge Network implements two compression algorithms gzip and brotli.

While gzip has been around for quite some time, brotli is a relatively new compression algorithm built by Google that best serves text compression. brotli also has an advantage over gzip since it uses a dictionary of common keywords on both the client and server-side, which gives a better compression ratio.

These compression methods are widely used to increase the performance of web apps. A study by Google reveals:

- 40% of people leave a website that loads in more than 3 seconds.
- 1-second time delay in page response reduces conversions by 7%.
- That's why using these compression methods will result in the best performance and least maintenance.

If your client supports brotli, it's recommended over gzip because:

- brotli compressed Javascript files are 14% smaller than gzip.
- HTML files are 21% smaller than gzip, and
- CSS files are 17% smaller than gzip.

Assuming that the program requests deployment resources with the appropriate Accept-Encoding header, the response will be compressed automatically.
