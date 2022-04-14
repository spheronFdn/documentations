module.exports = {
  docs: [
    "welcome",
    {
      type: "category",
      label: "Deployments",
      items: [
        "configure-build/get-started",
        "configure-build/decentralized-protocols",
        "configure-build/continuous-deployment",
        "configure-build/payment",
      ],
    },
    {
      type: "category",
      label: "Projects",
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
      label: "Organization",
      items: [
        "organization/org",
        "organization/org-wallet",
        "organization/org-payments",
      ],
    },
    {
      type: "category",
      label: "NFT Gated Access",
      items: ["templates/koii-template"],
    },
    {
      type: "category",
      label: "Billing",
      items: ["templates/koii-template"],
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
    "faqs",
    "get-help",
  ],
};
