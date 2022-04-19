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
      hideOnScroll: true,
      items: [
        {
          to: "welcome",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          label: "Blog",
          position: "left",
          to: "https://spheron.medium.com/",
        },

        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownActiveClassDisabled: false,
          activeBasePath: "docs",
        },
        {
          to: "https://github.com/argoapp-live",
          label: "GitHub",
          position: "right",
        },
        // {
        //   to: "https://drive.google.com/file/d/1IlrqGEwhvm-fUfTdy8evGX72gZpfZ-fV/view?usp=sharing",
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
              to: "https://spheron.network/",
            },
            // {
            //   label: "Litepaper",
            //   to: "https://drive.google.com/file/d/1IlrqGEwhvm-fUfTdy8evGX72gZpfZ-fV/view?usp=sharing",
            // },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              to: "https://discord.com/invite/ahxuCtm",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/spheronHQ",
            },
            {
              label: "Medium",
              to: "https://spheron.medium.com/",
            },
            {
              label: "Telegram",
              to: "https://t.me/argoofficial",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://spheron.medium.com/",
            },
            {
              label: "GitHub",
              to: "https://github.com/argoapp-live",
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
          includeCurrentVersion: false,
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
