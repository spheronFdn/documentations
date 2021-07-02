module.exports = {
  docs: [
    {
      type: "category",
      label: "Home",
      items: ["home/welcome"],
    },
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
          "Custom Domain": [
            "domain-and-https/custom-domain/custom-domain",
            "domain-and-https/custom-domain/attach-domain",
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
    // {
    //   type: "category",
    //   label: "Billing",
    //   items: ["argo-wallet"],
    // },
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

    {
      type: "category",
      label: "References",
      items: ["references/get-help"],
    },
  ],
};
