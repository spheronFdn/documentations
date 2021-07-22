module.exports = {
  docs: [
    "welcome",    
    {
      type: "category",
      label: "Architecture",
      items: ["architecture/arch-overview", "architecture/arch-use-cases"],
    },
    {
      type: "category",
      label: "Configure Builds",
      items: [
        "configure-build/deploy-get-started",
        "configure-build/deploy",
        "configure-build/deploy-payment",
      ],
    },
    {
      type: "category",
      label: "Domain and HTTPs",
      items: [
        {
          "Centralized Domain": [
            "domain-and-https/custom-domain/overview-custom-domain",
            "domain-and-https/custom-domain/attach-domain",
          ],
        },
        {
          "Handshake Domain": [
            "domain-and-https/hns-domain/overview-hns-domain",
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
      label: "Quick Start",      
      collapsed: false,
      items: ["quick-start/configuring-wallet", "quick-start/quick-deploy", "quick-start/configure-domain", "quick-start/create-org"],
    },
    {
      type: "category",
      label: "Smart Contracts",
      items: [
        "smart-contracts/payments/contract-payments",
        "smart-contracts/multiownable/contract-multiownable",
      ],
    },
    {
      type: "category",
      label: "SDK",
      items: ["sdk/sdk-getting-started", "sdk/sdk-payments"],
    },
    "get-help",
  ],
};
