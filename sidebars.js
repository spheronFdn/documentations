module.exports = {
  docs: [
    "welcome",
    {
      type: "category",
      label: "Architecture",
      items: ["architecture/overview", "architecture/use-cases"],
    },
    {
      type: "category",
      label: "Configure Builds",
      items: [
        "configure-build/get-started",
        "configure-build/deploy",
        "configure-build/continuous-deployment",
        "configure-build/payment",
      ],
    },
    {
      type: "category",
      label: "Domain and HTTPs",
      items: [
        {
          "Centralized Domain": [
            "domain-and-https/centralized-domain/overview-custom-domain",
            "domain-and-https/centralized-domain/attach-domain",
          ],
        },
        {
          "Handshake Domain": [
            "domain-and-https/hns-domain/hns-overview",
            "domain-and-https/hns-domain/hns-attach-domain",
          ],
        },
        {
          "HTTPs (SSL)": ["domain-and-https/https-ssl/https"],
        },
      ],
    },
    {
      type: "category",
      label: "Organisation",
      items: [
        "organization/org",
        "organization/org-wallet",
        "organization/org-payments",
      ],
    },
    {
      type: "category",
      label: "Templates",
      items: ["templates/koii-template"],
    },
    {
      type: "category",
      label: "Quick Start",
      collapsed: false,
      items: [
        "quick-start/configuring-wallet",
        "quick-start/quick-deploy",
        "quick-start/configure-domain",
        "quick-start/create-org",
      ],
    },
    {
      type: "category",
      label: "Smart Contracts",
      items: ["smart-contracts/payments", "smart-contracts/multiownable"],
    },
    {
      type: "category",
      label: "SDK",
      items: ["sdk/sdk-getting-started", "sdk/sdk-payments"],
    },
    "faqs",
    "get-help",
  ],
};
