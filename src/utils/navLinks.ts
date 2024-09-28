const navLinks = [
  {
    name: "L'AGENCE",
    href: "/agence",
    hasdropdown: false,
  },
  {
    name: "COMMUNICATION",
    href: "/agence-communication",
    hasdropdown: true,
    subLinks: [
      {
        name: "Création logo & charte graphique",
        href: "/agence-communication/creation-logo-et-charte-graphique",
      },
      {
        name: "Edition / print",
        href: "/agence-communication/edition-et-print",
      },
      {
        name: "Webdesign / UX-UI",
        href: "/agence-communication/webdesign-et-ux-ui",
      },
      {
        name: "Motion design",
        href: "/agence-communication/motion-design",
      },
    ],
  },
  {
    name: "WEBMARKETING",
    href: "/agence-webmarketing",
    hasdropdown: true,
    subLinks: [
      {
        name: "Référencement naturel (SEO)",
        href: "/agence-webmarketing/referencement-naturel-seo",
      },
      {
        name: "Référencement payant (SEA)",
        href: "/agence-webmarketing/referencement-payant-sea",
      },
      {
        name: "Stratégie réseaux sociaux",
        href: "/agence-webmarketing/strategie-reseaux-sociaux",
      },
    ],
  },
  {
    name: "WEB",
    href: "/agence-web",
    hasdropdown: true,
    subLinks: [
      {
        name: "Site vitrine",
        href: "/agence-web/site-vitrine",
      },
      {
        name: "Site ecommerce",
        href: "/agence-web/site-ecommerce",
      },
      {
        name: "Applications web et mobile",
        href: "/agence-web/applications-web-et-mobile",
      },
      {
        name: "Conseil en stratégie digitale",
        href: "/agence-web/conseil-en-strategie-digitale",
      },
    ],
  },
  {
    name: "RÉALISATIONS",
    href: "/agence-realisations",
    hasdropdown: false,
  },
  {
    name: "CONTACT",
    href: "/agence-contact",
    hasdropdown: false,
  },
];

export default navLinks;
