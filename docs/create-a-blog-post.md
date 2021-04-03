---
# id: doc1
title: Welcome to ArGo
# sidebar_label: Welcome
# slug: /
---

ArGo is an all-in-one platform for automating modern web projects. Replace your hosting infrastructure, continuous integration, and deployment pipeline with a single workflow. Integrate dynamic functionality like serverless functions, user authentication, and form handling as your projects grow.

## Get started

To get started with ArGo, learn how to create deploys. Options for creating deploys range from connecting a Git repository for continuous deployment to publishing a site folder with drag and drop. Use the Deploy to ArGo button on our Jamstack templates to create a Git repository linked to a ArGo site that you can experiment with.

## Discover ArGo

Explore our documentation to learn about ArGo products and features. Here are some highlights from each section of the docs:

**Configure builds** – ArGo can run your build command and deploy the result whenever you push to your Git repo. Get started with basic build settings, learn about managing build dependencies, and explore additional options available with file-based configuration.

**Site deploys** – Atomic deploys with ArGo guarantee that your site is always consistent. Learn how to manage deploys, enable deploy notifications, and run a branch-based split test.

**Domains & HTTPS** – Register a new domain in the ArGo UI, or use a domain you already own, to assign a custom domain to your site. Either way, you can have ArGo handle DNS management for you. We provide free automatic HTTPS on all sites.

**Visitor access** – Enable site-wide password protection, authenticate users with ArGo Identity, or configure role-based access control.

**Forms** – You can use ArGo Forms without adding API calls or extra JavaScript on your site, configure extra spam prevention beyond our automatic spam filtering, and receive notifications about new submissions.

**Functions** – Deploy serverless functions built with JavaScript or with Go. You can even execute Background Functions for long-running tasks and trigger function calls when certain ArGo events happen.

**Large Media** – Get the benefits of Git version tracking for large files without bloating your repository. Use dynamic image transformations so you can upload images at full resolution, then serve the exact size you need when you need it.

**API** – To get started with the ArGo API, learn how to authenticate and make a request. Then explore options for deploying via API and usage for some popular endpoints.

**Accounts & billing** – Learn about managing team members and how to transfer sites between teams.

**Get help** - Explore self-serve and interactive help resources. Get tips for requesting support by email to help our support engineers help you.

## We’re here to help

**Troubleshooting tips** – Find guidance for troubleshooting builds, DNS & HTTPS, and Forms.

**Tutorials** – Explore the tutorials on our blog for step-by-step guides on ArGofeatures, and to learn more about the Jamstack and the future of web development.

**Forums** – Visit the ArGo [Discord Channel](https://discord.com/invite/ywrEVuT2) to discuss ideas and questions with ArGo staff and your fellow ArGo users. Checkout ArGo on [Twitter](https://twitter.com/argoapplive) [LinkedIn](https://www.linkedin.com/company/argoapp/) [Github](https://github.com/argoapp-live) [Telegram](https://t.me/argoofficial) [Medium](https://argoapp.medium.com/) as well.

**Custom packages** – Contact our sales team to create a custom package if you need dedicated secondary DNS, custom deployment options for serverless functions, or other custom Enterprise plan features.

**Docs feedback** – Use the feedback form at the bottom of any docs page to let us know what you find most useful in the docs and what could use improvement. We look forward to hearing from you!
You can write content using [GitHub-flavored Markdown syntax](https://github.github.com/gfm/).

## Markdown Syntax

To serve as an example page when styling markdown based Docusaurus sites.

## Headers

# H1 - Create the best documentation

## H2 - Create the best documentation

### H3 - Create the best documentation

#### H4 - Create the best documentation

##### H5 - Create the best documentation

###### H6 - Create the best documentation

---

## Emphasis

Emphasis, aka italics, with _asterisks_ or _underscores_.

Strong emphasis, aka bold, with **asterisks** or **underscores**.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

---

## Lists

1. First ordered list item
1. Another item
   - Unordered sub-list.
1. Actual numbers don't matter, just that it's a number
   1. Ordered sub-list
1. And another item.

- Unordered list can use asterisks

* Or minuses

- Or pluses

---

## Links

[I'm an inline-style link](https://www.google.com/)

[I'm an inline-style link with title](https://www.google.com/ "Google's Homepage")

[I'm a reference-style link][arbitrary case-insensitive reference text]

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. http://www.example.com/ or <http://www.example.com/> and sometimes example.com (but not on GitHub, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org/
[1]: http://slashdot.org/
[link text itself]: http://www.reddit.com/

---

## Images

Here's our logo (hover to see the title text):

Inline-style: ![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: ![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

Images from any folder can be used by providing path to file. Path should be relative to the original markdown file or absolute to the `/static` folder.

![img](/img/logo.svg)

---

## Code

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```

```python
s = "Python syntax highlighting"
print(s)
```

```
No language indicated, so no syntax highlighting.
But let's throw in a <b>tag</b>.
```

```js {2}
function highlightMe() {
  console.log("This line can be highlighted!");
}
```

---

## Tables

Colons can be used to align columns.

| Tables        |      Are      |   Cool |
| ------------- | :-----------: | -----: |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      |   centered    |   \$12 |
| zebra stripes |   are neat    |    \$1 |

There must be at least 3 dashes separating each header cell. The outer pipes (|) are optional, and you don't need to make the raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |

---

## Blockquotes

> Blockquotes are very handy in email to emulate reply text. This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can _put_ **Markdown** into a blockquote.

---

## Inline HTML

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

---

## Line Breaks

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a _separate paragraph_.

This line is also a separate paragraph, but... This line is only separated by a single newline, so it's a separate line in the _same paragraph_.

---

## Admonitions

:::note

This is a note

:::

:::tip

This is a tip

:::

:::important

This is important

:::

:::caution

This is a caution

:::

:::warning

This is a warning

:::
<!-- ---
title: Create a Blog Post
---

This page will help you on how to create blog posts in Docusaurus.

## Create a Blog Post

Create a file at `blog/2021-02-28-greetings.md`:

```md title="blog/2021-02-28-greetings.md"
---
title: Greetings!
author: Steven Hansel
author_title: Docusaurus Contributor
author_url: https://github.com/ShinteiMai
author_image_url: https://github.com/ShinteiMai.png
---

Congratulations, you have made your first post!

Feel free to play around and edit this post as much you like.
```

A new blog post is now available at `http://localhost:3000/blog/greetings`. -->
