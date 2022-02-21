/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Spheron Protocol Docs",
  tagline: "Build. Deploy. Decentralize.",
  url: "https://docs.spheron.network",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "argoapp-live", // Usually your GitHub org/user name.
  projectName: "argo-docs", // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: "",
      logo: {
        alt: "Spheron Logo",
        src: "img/favicon.ico",
      },
      items: [
        {
          to: "welcome",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "blog",
          label: "Blog",
          position: "left",
          href: "https://spheron.medium.com/",
        },
        {
          href: "https://github.com/argoapp-live",
          label: "GitHub",
          position: "right",
        },
        // {
        //   href: "https://drive.google.com/file/d/1IlrqGEwhvm-fUfTdy8evGX72gZpfZ-fV/view?usp=sharing",
        //   label: "Litepaper",
        //   position: "left",
        // },
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
              to: "welcome",
            },
            {
              label: "Website",
              href: "https://spheron.network/",
            },
            // {
            //   label: "Litepaper",
            //   href: "https://drive.google.com/file/d/1IlrqGEwhvm-fUfTdy8evGX72gZpfZ-fV/view?usp=sharing",
            // },
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
              href: "https://twitter.com/spheronHQ",
            },
            {
              label: "Medium",
              href: "https://spheron.medium.com/",
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
              href: "https://spheron.medium.com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/argoapp-live",
            },
          ],
        },
      ],
      copyright: `© 2021 Spheron Protocol • Built on Decentralized Cloud Protocols`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/argoapp-live/argo-docs",
          routeBasePath: "/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
