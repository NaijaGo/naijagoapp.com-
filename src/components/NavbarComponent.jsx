import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaBars, FaSearch, FaTimes, FaUserCircle } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./NavbarComponent.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Policies", path: "/policies" },
  { label: "Privacy", path: "/privacy" },
];

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="ng-navbar-wrap">
        <Container>
          <div className="ng-navbar">
            <Link to="/" className="ng-brand" onClick={closeMenu}>
              <div className="ng-brand__logo">
                <img src="/naijaLogo.jpg" alt="NaijaGo Logo" />
              </div>

              <div className="ng-brand__text">
                <span className="ng-brand__name">NaijaGo</span>
                <span className="ng-brand__tag">Modern Commerce</span>
              </div>
            </Link>

            <nav className="ng-nav-links">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`ng-nav-link ${
                    location.pathname === item.path ? "active" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="ng-navbar-actions">
              <button className="ng-icon-btn" aria-label="Search">
                <FaSearch />
              </button>

              <button className="ng-signin-btn">
                <FaUserCircle className="me-2" />
                Sign In
              </button>

              <button
                className="ng-mobile-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      <div className={`ng-mobile-panel ${menuOpen ? "open" : ""}`}>
        <div className="ng-mobile-panel__inner">
          <div className="ng-mobile-panel__top">
            <span>Menu</span>
            <button onClick={closeMenu} className="ng-mobile-close">
              <FaTimes />
            </button>
          </div>

          <div className="ng-mobile-links">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`ng-mobile-link ${
                  location.pathname === item.path ? "active" : ""
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button className="ng-mobile-signin-btn">
            <FaUserCircle className="me-2" />
            Sign In
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
