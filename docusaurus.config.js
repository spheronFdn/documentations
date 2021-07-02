/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "ArGo Docs",
  tagline: "Decentralised cloud deployment & storage aggregator",
  url: "https://docs.argoapp.live",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo_light.svg",
  organizationName: "argoapp-live", // Usually your GitHub org/user name.
  projectName: "argo-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "",
      logo: {
        alt: "ArGo Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "/home/welcome",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
          href: "https://argoapp.medium.com/",
        },
        {
          href: "https://github.com/argoapp-live",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://drive.google.com/file/d/1IlrqGEwhvm-fUfTdy8evGX72gZpfZ-fV/view?usp=sharing",
          label: "Litepaper",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Home",
              to: "home/welcome",
            },
            {
              label: "Website",
              href: "https://argoapp.live/",
            },
            {
              label: "Litepaper",
              href: "https://drive.google.com/file/d/1OUcqwtlavWqCKqKpHA5WOdesuzChLUxB/view",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/5p4XqrNhVB",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/argoapplive",
            },
            {
              label: "Medium",
              href: "https://argoapp.medium.com/",
            },
            {
              label: "Telegram",
              href: "https://t.me/argoofficial",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://argoapp.live/blogs",
            },
            {
              label: "GitHub",
              href: "https://github.com/argoapp-live",
            },
          ],
        },
      ],
      copyright: `© 2021 ArGo • Built on Decentralized Cloud Protocols`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/argoapp-live/argo-docs",
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }
    ],
  ],
};
