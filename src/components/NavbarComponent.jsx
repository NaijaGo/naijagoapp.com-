import { useState } from "react";
import { Container } from "react-bootstrap";
import { FaBars, FaDownload, FaMobileAlt, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { DOWNLOAD_PAGE_PATH } from "../constants/appLinks";
import DownloadModal from "./DownloadModal";
import "./NavbarComponent.css";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Download App", path: DOWNLOAD_PAGE_PATH },
  { label: "Policies", path: "/policies" },
  { label: "Privacy", path: "/privacy" },
];

const NavbarComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);
  const openDownloadModal = () => {
    setMenuOpen(false);
    setDownloadModalOpen(true);
  };
  const closeDownloadModal = () => setDownloadModalOpen(false);

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
              <Link to={DOWNLOAD_PAGE_PATH} className="ng-download-shortcut">
                <FaMobileAlt className="me-2" />
                Download Page
              </Link>

              <button className="ng-download-btn" onClick={openDownloadModal}>
                <FaDownload className="me-2" />
                Get the App
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

          <div className="ng-mobile-download-note">
            Sign in and vendor registration happen inside the NaijaGo app.
          </div>

          <Link
            to={DOWNLOAD_PAGE_PATH}
            className="ng-mobile-download-link"
            onClick={closeMenu}
          >
            Open the download page
          </Link>

          <button className="ng-mobile-download-btn" onClick={openDownloadModal}>
            <FaDownload className="me-2" />
            Get the App
          </button>
        </div>
      </div>

      <DownloadModal isOpen={downloadModalOpen} onClose={closeDownloadModal} />
    </>
  );
};

export default NavbarComponent;
