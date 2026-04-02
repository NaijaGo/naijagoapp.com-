import { Button, Container, Form } from "react-bootstrap";
import {
  FaMobileAlt,
  FaSearch,
  FaShieldAlt,
  FaStar,
  FaStore,
  FaTags,
  FaTruck,
} from "react-icons/fa";
import {
  APP_STORE_BADGE_SRC,
  APP_STORE_URL,
  PLAY_STORE_BADGE_SRC,
  PLAY_STORE_URL,
} from "../constants/appLinks";
import StoreBadgeLink from "./StoreBadgeLink";
import "./HeroSection.css";

const categories = [
  "Fashion",
  "Electronics",
  "Beauty",
  "Home & Living",
  "Groceries",
  "Accessories",
];

const spotlightProducts = [
  {
    title: "Premium Sneaker Drop",
    subtitle: "Trending in Fashion",
    price: "₦38,500",
    tag: "Hot",
  },
  {
    title: "Wireless Sound Pro",
    subtitle: "Top-rated electronics",
    price: "₦72,000",
    tag: "Best Seller",
  },
  {
    title: "Smart Kitchen Set",
    subtitle: "Fast-moving home picks",
    price: "₦29,999",
    tag: "New",
  },
];

const trustPoints = [
  {
    icon: <FaShieldAlt />,
    title: "Trusted Sellers",
    text: "Carefully presented stores and reliable buying experience.",
  },
  {
    icon: <FaTruck />,
    title: "Fast Discovery",
    text: "Find products quickly with cleaner navigation and search.",
  },
  {
    icon: <FaStar />,
    title: "Better Experience",
    text: "Designed to make browsing, deciding, and buying feel easier.",
  },
];

const marketplaceStats = [
  {
    value: "10,000+",
    label: "Trusted Vendors",
  },
  {
    value: "250K+",
    label: "Products Listed",
  },
  {
    value: "50K+",
    label: "Happy Customers",
  },
];

const HeroSection = () => {
  return (
    <section className="hero-v2">
      <div className="hero-v2__bg-orb hero-v2__bg-orb--one"></div>
      <div className="hero-v2__bg-orb hero-v2__bg-orb--two"></div>
      <div className="hero-v2__grid-lines"></div>

      <Container className="hero-v2__container">
        <div className="hero-v2__topbar">
          <span className="hero-v2__pill">
            <FaStore className="me-2" />
            Modern marketplace experience
          </span>
        </div>

        <div className="hero-v2__layout">
          <div className="hero-v2__left">
            <p className="hero-v2__eyebrow">DISCOVER. TRUST. SHOP SMARTER.</p>

            <h1 className="hero-v2__title">
              A new kind of shopping experience built for modern Nigerian
              commerce.
            </h1>

            <p className="hero-v2__subtitle">
              Explore quality products, discover trusted vendors, and enjoy a
              cleaner, faster, and more premium marketplace experience from the
              very first click.
            </p>

            <div className="hero-v2__search-wrap">
              <div className="hero-v2__search-box">
                <FaSearch className="hero-v2__search-icon" />
                <Form.Control
                  type="text"
                  placeholder="Search for fashion, electronics, beauty, groceries..."
                  className="hero-v2__search-input"
                />
                <Button className="hero-v2__search-btn">Search</Button>
              </div>
            </div>

            <div className="hero-v2__categories">
              <span className="hero-v2__categories-label">Popular:</span>
              {categories.map((category) => (
                <button key={category} className="hero-v2__category-chip">
                  {category}
                </button>
              ))}
            </div>

            <div className="hero-v2__actions">
              <StoreBadgeLink
                href={PLAY_STORE_URL}
                src={PLAY_STORE_BADGE_SRC}
                alt="Get it on Google Play"
                className="hero-v2__store-badge"
              />

              <StoreBadgeLink
                href={APP_STORE_URL}
                src={APP_STORE_BADGE_SRC}
                alt="Download on the App Store"
                className="hero-v2__store-badge"
              />
            </div>

            <p className="hero-v2__download-note">
              Download the app to sign in, shop, or register as a vendor.
            </p>
          </div>

          <div className="hero-v2__right">
            <div className="hero-v2__showcase">
              <div className="hero-v2__showcase-header">
                <div>
                  <p className="hero-v2__showcase-label">Curated Spotlight</p>
                  <h3 className="hero-v2__showcase-title">
                    Handpicked offers users want to see first
                  </h3>
                </div>
                <div className="hero-v2__mini-badge">Live Trends</div>
              </div>

              <div className="hero-v2__product-list">
                {spotlightProducts.map((product) => (
                  <div key={product.title} className="hero-v2__product-card">
                    <div className="hero-v2__product-visual">
                      <span className="hero-v2__product-icon">
                        <FaMobileAlt />
                      </span>
                    </div>

                    <div className="hero-v2__product-body">
                      <div className="hero-v2__product-top">
                        <span className="hero-v2__product-tag">
                          {product.tag}
                        </span>
                      </div>
                      <h4>{product.title}</h4>
                      <p>{product.subtitle}</p>

                      <div className="hero-v2__product-bottom">
                        <strong>{product.price}</strong>
                        <button className="hero-v2__product-link">View</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hero-v2__promo-card">
                <div className="hero-v2__promo-icon">
                  <FaTags />
                </div>
                <div>
                  <p className="hero-v2__promo-small">Today’s advantage</p>
                  <h4>
                    Cleaner offers. Better visibility. Stronger conversion.
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-v2__stats hero-v2__stats--marketplace">
          {marketplaceStats.map((stat) => (
            <div key={stat.label} className="hero-v2__stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="hero-v2__trust-grid">
          {trustPoints.map((item) => (
            <div key={item.title} className="hero-v2__trust-card">
              <div className="hero-v2__trust-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
