---
id: Caching
title: Caching
sidebar_label: Caching
slug: /Edge-Network/Caching
---
## Caching 

The Edge Network caches your content at the edge in order to serve data to your users as fast as possible.

Static caching is automatic for all deployments. This means that no changes need to be made to headers. You get the best performance possible out of the box with zero configuration required.

## Cacheable Responses


The Cache-Control field is an HTTP header that specifies a set of caching rules for both client (browser) requests and server responses. A cache must obey the requirements defined in the Cache-Control header. For server responses to be successfully cached with the Edge Network, the following criteria must be met:


- Request must use GET <span style="color: red;">text</span> or HEAD <span style="color: red;">text</span> method.
- Request must not contain the Range header.
- Request must not contain the Authorization header.
- Request must not contain a _spheron_no_cache=1 cookie.
- Request must not contain a ?_spheron_no_cache=1 request parameter.
- Response must use 200, 404, 301, or 308 status code.
- Response must not exceed 10MB in content length.
- Response must not contain the no-cache directive in the Cache-Control header.


## Cache Invalidation


Each deployment has a one-of-a-kind key utilized for caching in light of the deployment URL made at fabricate time. This implies that clients won't ever see content from a past deployment and there's regularly compelling reason need to invalidate it.

The cache is refreshed upon another deployment being made. Assuming that you at any point need to invalidate the CDN cache, you can continuously re-deploy.


## Limits

Edge Network cache is segmented by region. The following caching limits apply to static assets:

- Max Cacheable Response Size = 10MB
- Max Cache Time = 31 days

