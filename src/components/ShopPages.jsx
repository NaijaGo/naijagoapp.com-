import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PageContainer from "./PageContainer";
import NotFound from "./NotFound";
import AppBadges from "./AppBadges";
import { liveShopCategories } from "../seo/siteMeta";
import { catalog, catalogUpdated } from "../data/catalog";
import { trackEvent } from "../analytics/trackEvent";
import "./GuidePage.css";
import "./ShopPages.css";

const naira = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 });

// Products can only be bought in the app; the website has no product pages
// or app deep links for products, so each card leads to the download page.
function ProductCard({ product, categorySlug }) {
  return (
    <li className="shop-card">
      <Link
        to="/download"
        className="shop-card__link"
        onClick={() => trackEvent("app_download_click", { source: "shop", category: categorySlug })}
      >
        <img src={product.image} alt={product.name} width="400" height="400" loading="lazy" decoding="async" />
        <span className="shop-card__name">{product.name}</span>
        <span className="shop-card__price">{naira.format(product.price)}</span>
      </Link>
    </li>
  );
}

export function ShopIndex() {
  return (
    <PageContainer title="Shop on NaijaGo">
      <div className="guide-page shop-page">
        <p className="guide-page__lead">
          Browse what local vendors in Abuja are selling on NaijaGo, then order in the app.
        </p>
        <ul className="shop-categories">
          {liveShopCategories.map((category) => {
            const data = catalog[category.slug];
            return (
              <li key={category.slug}>
                <Link to={`/shop/${category.slug}`} className="shop-category">
                  <img src={data.products[0]?.image} alt="" width="400" height="400" loading="lazy" decoding="async" />
                  <span className="shop-category__name">{category.name}</span>
                  <span className="shop-category__count">{data.productCount} products</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <section aria-labelledby="shop-app">
          <h2 id="shop-app">Order in the NaijaGo app</h2>
          <p>Search every product, add to cart, check out and follow your order in the app.</p>
          <AppBadges app="customer" />
        </section>
      </div>
    </PageContainer>
  );
}

export function CategoryPage() {
  const { slug } = useParams();
  const category = liveShopCategories.find((item) => item.slug === slug);

  useEffect(() => {
    if (category) trackEvent("category_view", { category: category.slug });
  }, [category]);

  if (!category) return <NotFound />;
  const data = catalog[category.slug];

  return (
    <PageContainer title={`${category.name} on NaijaGo`}>
      <div className="guide-page shop-page">
        <nav aria-label="Breadcrumb" className="shop-breadcrumb">
          <Link to="/">Home</Link> › <Link to="/shop">Shop</Link> › <span>{category.name}</span>
        </nav>
        <p className="guide-page__lead">
          {category.intro} {data.productCount} products from {data.vendorCount} vendors.
        </p>

        <ul className="shop-grid">
          {data.products.map((product) => (
            <ProductCard key={product.id} product={product} categorySlug={category.slug} />
          ))}
        </ul>
        <p className="guide-page__note">
          A selection of recent listings, updated {catalogUpdated}. Prices and availability can change;
          the app always shows the current price.
        </p>

        <section aria-labelledby="category-app">
          <h2 id="category-app">See every {category.name.toLowerCase()} listing in the app</h2>
          <p>Download NaijaGo to search all products, add them to your cart and check out.</p>
          <AppBadges app="customer" />
        </section>

        <section aria-labelledby="category-more">
          <h2 id="category-more">More categories</h2>
          <div className="guide-page__links">
            {liveShopCategories
              .filter((item) => item.slug !== category.slug)
              .map((item) => (
                <Link key={item.slug} to={`/shop/${item.slug}`}>{item.name}</Link>
              ))}
            <Link to="/become-a-vendor">Sell {category.name.toLowerCase()} on NaijaGo</Link>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
