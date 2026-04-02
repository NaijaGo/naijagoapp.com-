import React from "react";
import {
  FaMobileAlt,
  FaTshirt,
  FaAppleAlt,
  FaCouch,
  FaGem,
  FaLaptop,
  FaArrowRight,
  FaStore,
} from "react-icons/fa";
import "./CategorySection.css";

const categories = [
  {
    title: "Electronics",
    subtitle: "Phones, gadgets, devices",
    icon: <FaMobileAlt />,
    accent: "blue",
  },
  {
    title: "Fashion",
    subtitle: "Clothing, shoes, style",
    icon: <FaTshirt />,
    accent: "violet",
  },
  {
    title: "Groceries",
    subtitle: "Fresh food and essentials",
    icon: <FaAppleAlt />,
    accent: "green",
  },
  {
    title: "Home & Living",
    subtitle: "Furniture and comfort",
    icon: <FaCouch />,
    accent: "orange",
  },
  {
    title: "Beauty",
    subtitle: "Cosmetics and care",
    icon: <FaGem />,
    accent: "pink",
  },
  {
    title: "Computing",
    subtitle: "Laptops and accessories",
    icon: <FaLaptop />,
    accent: "slate",
  },
];

const CategorySection = () => {
  return (
    <section className="category-section">
      <div className="container">
        <div className="category-section__header">
          <div>
            <p className="category-section__eyebrow">
              <FaStore className="me-2" />
              Shop by category
            </p>
            <h2 className="category-section__title">
              Explore the marketplace the way customers actually shop
            </h2>
            <p className="category-section__subtitle">
              Clear category discovery improves trust, reduces friction, and
              helps users reach products faster.
            </p>
          </div>

          <button className="category-section__view-all">
            View All Categories <FaArrowRight className="ms-2" />
          </button>
        </div>

        <div className="category-grid">
          {categories.map((item) => (
            <article
              key={item.title}
              className={`category-card category-card--${item.accent}`}
            >
              <div className="category-card__icon">{item.icon}</div>

              <div className="category-card__content">
                <h3>{item.title}</h3>
                <p>{item.subtitle}</p>
              </div>

              <span className="category-card__arrow">
                <FaArrowRight />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
