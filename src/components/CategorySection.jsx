import { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaChevronDown, FaSearch, FaTimes } from "react-icons/fa";
import { categoryShowcase } from "../constants/categoryShowcase";
import { DOWNLOAD_PAGE_PATH } from "../constants/appLinks";
import "./CategorySection.css";

const CategorySection = () => {
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(null);
  const normalizedQuery = query.trim().toLowerCase();
  const visibleCategories = categoryShowcase.filter((category) =>
    [category.title, category.subtitle, ...category.subcategories]
      .join(" ").toLowerCase().includes(normalizedQuery),
  );

  return (
    <section id="categories" className="category-section" aria-labelledby="category-heading">
      <div className="container">
        <div className="category-section__header">
          <div>
            <p className="category-section__eyebrow">A little of everything you love</p>
            <h2 id="category-heading" className="category-section__title">Find your everyday favourites.</h2>
            <p className="category-section__subtitle">
              From fresh essentials to your next great find, start with a category
              and explore more in the NaijaGo app.
            </p>
          </div>
          <Link to={DOWNLOAD_PAGE_PATH} className="category-section__view-all">
            Shop in the app <FaArrowRight aria-hidden="true" />
          </Link>
        </div>

        <div className="category-section__toolbar">
          <label className="category-section__search">
            <FaSearch aria-hidden="true" />
            <span className="visually-hidden">Find a category</span>
            <input type="search"
              placeholder="Find a category — try fashion, headphones or groceries"
              value={query} onChange={(event) => setQuery(event.target.value)}
              aria-controls="category-grid" />
          </label>
          {query && (
            <button className="category-section__clear" type="button"
              aria-label="Clear category search" onClick={() => setQuery("")}>
              <FaTimes aria-hidden="true" /> Clear
            </button>
          )}
          <p className="category-section__count" role="status" aria-live="polite">
            {normalizedQuery ? visibleCategories.length + " matching categories" : "Explore our featured categories"}
          </p>
        </div>

        <div id="category-grid" className="category-grid">
          {visibleCategories.map((category) => {
            const isExpanded = expanded === category.id;
            return (
              <article key={category.id} className={"category-card category-card--" + category.accent}>
                <button type="button" className="category-card__trigger"
                  aria-expanded={isExpanded} aria-controls={"category-details-" + category.id}
                  onClick={() => setExpanded(isExpanded ? null : category.id)}>
                  <div className="category-card__visual">
                    <img src={category.image} alt={category.imageAlt}
                      width="960" height="640" loading="lazy" decoding="async" />
                    <span className="category-card__image-label">Discover {category.title}</span>
                  </div>
                  <div className="category-card__content">
                    <div><h3>{category.title}</h3><p>{category.subtitle}</p></div>
                    <span className={"category-card__arrow" + (isExpanded ? " is-open" : "")}>
                      <FaChevronDown aria-hidden="true" />
                    </span>
                  </div>
                </button>
                <div id={"category-details-" + category.id} className="category-card__details" hidden={!isExpanded}>
                  <p className="category-card__details-label">Explore this category</p>
                  <ul className="category-card__subcategories">
                    {category.subcategories.map((subcategory) => <li key={subcategory}>{subcategory}</li>)}
                  </ul>
                  <Link to={DOWNLOAD_PAGE_PATH} className="category-card__app-link">
                    Browse {category.title} in the app <FaArrowRight aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
        {visibleCategories.length === 0 && (
          <div className="category-section__empty">
            <h3>Looking for something else?</h3>
            <p>Try another category name, or browse the full selection in the app.</p>
            <button type="button" onClick={() => setQuery("")}>Show featured categories</button>
          </div>
        )}
        <p className="category-section__note">
          Images illustrate each category. See current products, prices and availability in the app.
        </p>
      </div>
    </section>
  );
};

export default CategorySection;