// Category pages under /shop/. `sources` are the backend's top-level category
// names (the part before " > " in a product's category). Only categories with
// a real range of products from more than one vendor get a page, so none are
// thin. Copy must stay factual: no delivery times, prices or guarantees.
export const MIN_PRODUCTS = 15;

export const shopCategories = [
  {
    slug: "fashion",
    name: "Fashion",
    sources: ["Fashion"],
    title: "Buy Fashion Online in Abuja | Clothing, Shoes & More | NaijaGo",
    description: "Shop clothing, footwear and accessories from local fashion vendors in Abuja on the NaijaGo app.",
    intro: "Clothing, footwear, hair and accessories from fashion vendors on NaijaGo.",
  },
  {
    slug: "groceries",
    name: "Groceries",
    sources: ["Groceries", "Supermarket"],
    // Age-restricted products are kept out of the public showcase.
    excludeSubcategories: ["Beer, Wine & Spirits"],
    title: "Online Grocery Shopping in Abuja | NaijaGo",
    description: "Shop groceries and supermarket essentials from local vendors in Abuja on the NaijaGo app.",
    intro: "Fresh produce, food cupboard staples and supermarket essentials from grocery vendors on NaijaGo.",
  },
  {
    slug: "phones-tablets",
    name: "Phones & Tablets",
    sources: ["Phones & Tablets"],
    title: "Buy Phones & Tablets Online in Abuja | NaijaGo",
    description: "Shop mobile phones, tablets and accessories from local gadget vendors in Abuja on the NaijaGo app.",
    intro: "Mobile phones, tablets and accessories from gadget vendors on NaijaGo.",
  },
  {
    slug: "electronics",
    name: "Electronics",
    sources: ["Electronics"],
    title: "Buy Electronics Online in Abuja | NaijaGo",
    description: "Shop electronics and gadgets from local vendors in Abuja on the NaijaGo app.",
    intro: "Electronics and gadgets from vendors on NaijaGo.",
  },
  {
    slug: "home-office",
    name: "Home & Office",
    sources: ["Home & Office"],
    title: "Home, Kitchen & Office Shopping in Abuja | NaijaGo",
    description: "Shop home, kitchen and office essentials from local vendors in Abuja on the NaijaGo app.",
    intro: "Home, kitchen and office essentials from vendors on NaijaGo.",
  },
  {
    slug: "health-beauty",
    name: "Health & Beauty",
    sources: ["Health & Beauty"],
    // Medicines and sexual-health products are kept out of the public showcase.
    excludeSubcategories: ["Medicine", "Condoms"],
    title: "Health & Beauty Products Online in Abuja | NaijaGo",
    description: "Shop fragrance, personal care and skin care from local vendors in Abuja on the NaijaGo app.",
    intro: "Fragrance, personal care and skin care products from vendors on NaijaGo.",
  },
  {
    slug: "sporting-goods",
    name: "Sporting Goods",
    sources: ["Sporting Goods"],
    title: "Sporting Goods & Fitness Gear in Abuja | NaijaGo",
    description: "Shop sports equipment and fitness gear from local vendors in Abuja on the NaijaGo app.",
    intro: "Sports equipment and fitness gear from vendors on NaijaGo.",
  },
  {
    slug: "gaming",
    name: "Gaming",
    sources: ["Gaming"],
    title: "Buy Gaming Consoles & Accessories in Abuja | NaijaGo",
    description: "Shop gaming consoles, games and accessories from local vendors in Abuja on the NaijaGo app.",
    intro: "Consoles, games and gaming accessories from vendors on NaijaGo.",
  },
  {
    slug: "food",
    name: "Food",
    sources: ["Restaurant"],
    title: "Order Food from Restaurants in Abuja | NaijaGo",
    description: "Order meals and drinks from local restaurants in Abuja on the NaijaGo app.",
    intro: "Meals and drinks from restaurants on NaijaGo.",
  },
];
