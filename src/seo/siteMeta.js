// Single source of truth for page metadata. Imported by the React app (to
// update the head on client-side navigation) and by scripts/build-dist.mjs
// (to write a real HTML file per route, so GitHub Pages returns HTTP 200 and
// crawlers see the right title and description without running JavaScript).
// Plain ESM with no JSX so Node can import it directly.

import { MIN_PRODUCTS, shopCategories } from "./shopCategories.js";
import { catalog } from "../data/catalog.js";

export const SITE_URL = "https://naijagoapp.com";
export const PRIVACY_POLICY_URL = "https://naijago-privacy-policy.onrender.com/";
export const SUPPORT_EMAIL = "support@naijagoapp.com";
export const DEFAULT_IMAGE = `${SITE_URL}/naijaLogo.jpg`;

export const apps = {
  customer: {
    name: "NaijaGo",
    playUrl: "https://play.google.com/store/apps/details?id=com.naijago.naija_go",
    appStoreUrl: "https://apps.apple.com/us/app/naijago/id6753323009",
  },
  vendor: {
    name: "Go-Vendors",
    playUrl: "https://play.google.com/store/apps/details?id=com.naijago.govendor",
    appStoreUrl: "https://apps.apple.com/us/app/go-vendors/id6772495396",
  },
  rider: {
    name: "Go-Rider",
    playUrl: "https://play.google.com/store/apps/details?id=com.naijago.gorider",
    // Not published on the App Store yet.
    appStoreUrl: null,
  },
};

// Profile URLs only. The Facebook link in the footer is a share link, not a
// page URL, so it is left out until the official page URL is confirmed.
const sameAs = [
  "https://www.instagram.com/naijago_app",
  "https://www.tiktok.com/@naijago.app",
  apps.customer.playUrl,
  apps.customer.appStoreUrl,
];

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "NaijaGo",
  legalName: "NaijaGo App LTD",
  url: `${SITE_URL}/`,
  logo: { "@type": "ImageObject", url: DEFAULT_IMAGE },
  slogan: "Need it? Dey go NaijaGo.",
  description:
    "NaijaGo is a Nigerian digital marketplace connecting customers with local vendors, products and delivery.",
  identifier: { "@type": "PropertyValue", propertyID: "CAC RC", value: "8704653" },
  areaServed: { "@type": "Country", name: "Nigeria" },
  email: SUPPORT_EMAIL,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SUPPORT_EMAIL,
    areaServed: "NG",
    availableLanguage: ["en"],
  },
  sameAs,
};

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: "NaijaGo",
  inLanguage: "en-NG",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

// No ratings or reviews: only facts that are true for every listing.
const mobileApp = (key, description, category) => {
  const app = apps[key];
  return {
    "@type": "MobileApplication",
    "@id": `${SITE_URL}/#app-${key}`,
    name: app.name,
    description,
    applicationCategory: category,
    operatingSystem: app.appStoreUrl ? "Android, iOS" : "Android",
    installUrl: app.playUrl,
    offers: { "@type": "Offer", price: "0", priceCurrency: "NGN" },
    publisher: { "@id": `${SITE_URL}/#organization` },
    sameAs: [app.playUrl, app.appStoreUrl].filter(Boolean),
  };
};

const customerApp = mobileApp(
  "customer",
  "Shop products from local vendors on the NaijaGo marketplace and track your orders.",
  "ShoppingApplication",
);
const vendorApp = mobileApp(
  "vendor",
  "Register your business, list products and manage customer orders on NaijaGo.",
  "BusinessApplication",
);
const riderApp = mobileApp(
  "rider",
  "Apply as a NaijaGo delivery rider, receive assigned deliveries and track earnings.",
  "BusinessApplication",
);

export const routes = [
  {
    path: "/",
    name: "Home",
    title: "NaijaGo | Online Shopping, Local Vendors & Delivery in Nigeria",
    description:
      "Discover NaijaGo, Nigeria's digital commerce marketplace. Shop food, gadgets, fashion, electronics and everyday essentials from local vendors with convenient delivery services.",
    priority: "1.0",
    schema: [organization, website, customerApp],
  },
  {
    path: "/about",
    name: "About NaijaGo",
    title: "About NaijaGo | Nigerian Digital Marketplace by NaijaGo App LTD",
    description:
      "NaijaGo is a Nigerian digital commerce marketplace operated by NaijaGo App LTD (RC 8704653), connecting customers, local vendors and delivery riders.",
    priority: "0.8",
  },
  {
    path: "/download",
    name: "Download NaijaGo",
    title: "Download the NaijaGo App for Android and iPhone",
    description:
      "Get the NaijaGo shopping app on Google Play or the App Store. Browse local vendors, shop everyday essentials and track your orders.",
    priority: "0.9",
    schema: [customerApp],
  },
  {
    path: "/become-a-vendor",
    name: "Become a Vendor",
    title: "Sell on NaijaGo | Register Your Business with Go-Vendors",
    description:
      "Register your business on NaijaGo with the Go-Vendors app. List products, receive customer orders and manage your store from your phone.",
    priority: "0.9",
    schema: [vendorApp],
  },
  {
    path: "/become-a-rider",
    name: "Become a Rider",
    title: "Become a NaijaGo Delivery Rider | Go-Rider App",
    description:
      "Apply to deliver orders for NaijaGo with the Go-Rider app. See the documents you need, how verification works and how deliveries are assigned.",
    priority: "0.8",
    schema: [riderApp],
  },
  {
    path: "/faq",
    name: "FAQ",
    title: "NaijaGo FAQ | Shopping, Vendors, Riders and Accounts",
    description:
      "Answers to common questions about shopping on NaijaGo, selling as a vendor, delivering as a rider, disputes and deleting your account.",
    priority: "0.7",
  },
  {
    path: "/contact",
    name: "Contact",
    title: "Contact NaijaGo | Customer, Vendor and Rider Support",
    description:
      "Contact NaijaGo support by email, WhatsApp or our contact form for help with orders, vendor accounts and rider applications.",
    priority: "0.7",
  },
  {
    path: "/policies",
    name: "Policies",
    title: "NaijaGo Marketplace Policies | Data, Fraud and Disputes",
    description:
      "How NaijaGo protects user data, prevents fraud and resolves disputes between buyers and vendors.",
    priority: "0.4",
  },
  {
    path: "/privacy",
    name: "Privacy & Terms",
    title: "Privacy and Terms of Use | NaijaGo",
    description:
      "NaijaGo terms of use for customers and vendors, with a link to the full privacy policy for the NaijaGo, Go-Vendors and Go-Rider apps.",
    priority: "0.4",
  },
  {
    path: "/delete-account",
    name: "Delete Account",
    title: "Delete Your NaijaGo Account and Data",
    description:
      "How to delete your NaijaGo, Go-Vendors or Go-Rider account and associated data, and what information may be retained.",
    priority: "0.3",
  },
];

// Category pages only exist when the catalogue snapshot has enough products.
export const liveShopCategories = shopCategories.filter(
  (category) => (catalog[category.slug]?.productCount || 0) >= MIN_PRODUCTS,
);

const productList = (category) => ({
  "@type": "ItemList",
  name: `${category.name} on NaijaGo`,
  numberOfItems: catalog[category.slug].products.length,
  itemListElement: catalog[category.slug].products.map((product, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Product",
      name: product.name,
      image: product.image,
      category: category.name,
      offers: {
        "@type": "Offer",
        price: String(product.price),
        priceCurrency: "NGN",
        availability: "https://schema.org/InStock",
      },
    },
  })),
});

routes.push(
  {
    path: "/shop",
    name: "Shop",
    title: "Shop Online in Abuja by Category | NaijaGo",
    description:
      "Browse fashion, groceries, phones, electronics, home, beauty, gaming and food from local vendors in Abuja on NaijaGo.",
    priority: "0.9",
    schema: [
      {
        "@type": "ItemList",
        name: "NaijaGo shopping categories",
        itemListElement: liveShopCategories.map((category, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: category.name,
          url: `${SITE_URL}/shop/${category.slug}/`,
        })),
      },
    ],
  },
  ...liveShopCategories.map((category) => ({
    path: `/shop/${category.slug}`,
    name: category.name,
    parent: { name: "Shop", path: "/shop" },
    title: category.title,
    description: category.description,
    priority: "0.8",
    category,
    schema: [productList(category)],
  })),
);

export const canonicalUrl = (path) => (path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}/`);

export const findRoute = (pathname) => {
  const clean = pathname.replace(/\/+$/, "") || "/";
  return routes.find((route) => route.path === clean);
};

// Builds the JSON-LD graph for a route: its own schema plus a WebPage and,
// for inner pages, a breadcrumb back to the homepage.
export const structuredData = (route) => {
  const url = canonicalUrl(route.path);
  const graph = [...(route.schema || [])];
  graph.push({
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
  });
  if (route.path !== "/") {
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        ...(route.parent
          ? [{ "@type": "ListItem", position: 2, name: route.parent.name, item: canonicalUrl(route.parent.path) }]
          : []),
        { "@type": "ListItem", position: route.parent ? 3 : 2, name: route.name, item: url },
      ],
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
};
