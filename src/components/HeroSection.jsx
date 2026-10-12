import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheck, FaShoppingBag, FaStore, FaTruck } from "react-icons/fa";
import {
  APP_STORE_BADGE_SRC, APP_STORE_URL, PLAY_STORE_BADGE_SRC, PLAY_STORE_URL,
  DOWNLOAD_PAGE_PATH,
} from "../constants/appLinks";
import { categoryShowcase } from "../constants/categoryShowcase";
import StoreBadgeLink from "./StoreBadgeLink";
import "./HeroSection.css";

const HeroSection = () => {
  const featured = [categoryShowcase[0], categoryShowcase[1], categoryShowcase[2]];
  return (
    <section className="hero-v2" aria-labelledby="home-heading">
      <Container>
        <div className="hero-v2__layout">
          <div className="hero-v2__copy">
            <p className="hero-v2__eyebrow"><span aria-hidden="true" /> Your everyday marketplace</p>
            <h1 id="home-heading" className="hero-v2__title">
              Everyday finds.<br /><span>Closer to home.</span>
            </h1>
            <p className="hero-v2__subtitle">
              Discover fashion, fresh essentials, gadgets and more from local
              vendors. Find what fits your day with NaijaGo.
            </p>
            <div className="hero-v2__actions">
              <a href="#categories" className="hero-v2__primary-link">
                Explore categories <FaArrowRight aria-hidden="true" />
              </a>
              <Link to={DOWNLOAD_PAGE_PATH} className="hero-v2__secondary-link">
                Get the app <FaArrowRight aria-hidden="true" />
              </Link>
            </div>
            <div className="hero-v2__store-links">
              <StoreBadgeLink href={PLAY_STORE_URL} src={PLAY_STORE_BADGE_SRC}
                alt="Get it on Google Play" className="hero-v2__store-badge" />
              <StoreBadgeLink href={APP_STORE_URL} src={APP_STORE_BADGE_SRC}
                alt="Download on the App Store" className="hero-v2__store-badge" />
            </div>
            <p className="hero-v2__download-note">Browse here. Shop, sell and order in the app.</p>
            <div className="hero-v2__assurances">
              <span><FaCheck aria-hidden="true" /> Local vendors</span>
              <span><FaCheck aria-hidden="true" /> Delivery &amp; pickup</span>
              <span><FaCheck aria-hidden="true" /> Easy discovery</span>
            </div>
          </div>

          <div className="hero-v2__gallery">
            <div className="hero-v2__gallery-intro">
              <span>GOOD FINDS START HERE</span>
              <span className="hero-v2__gallery-mark" aria-hidden="true"><FaShoppingBag /></span>
            </div>
            <a href="#categories" className="hero-v2__feature-card">
              <img src={featured[0].image} alt={featured[0].imageAlt}
                width="960" height="640" fetchPriority="high" decoding="async" />
              <div className="hero-v2__feature-caption">
                <div><span>For work, play and everything between</span><strong>Everyday electronics</strong></div>
                <span className="hero-v2__round-arrow" aria-hidden="true"><FaArrowRight /></span>
              </div>
            </a>
            <div className="hero-v2__gallery-small">
              {featured.slice(1).map((category) => (
                <a href="#categories" className="hero-v2__mini-card" key={category.id}>
                  <img src={category.image} alt={category.imageAlt}
                    width="960" height="640" loading="lazy" decoding="async" />
                  <div><strong>{category.title}</strong><FaArrowRight aria-hidden="true" /></div>
                </a>
              ))}
            </div>
            <div className="hero-v2__gallery-footer"><span aria-hidden="true" /> A little more choice for your everyday.</div>
          </div>
        </div>

        <div className="hero-v2__benefits">
          <div><FaStore aria-hidden="true" /><div><strong>Discover local vendors</strong><p>Explore shops and find new favourites.</p></div></div>
          <div><FaShoppingBag aria-hidden="true" /><div><strong>Find your next great pick</strong><p>Browse categories that fit your day.</p></div></div>
          <div><FaTruck aria-hidden="true" /><div><strong>Choose how to collect</strong><p>See delivery and pickup options in the app.</p></div></div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;