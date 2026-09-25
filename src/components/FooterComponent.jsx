```jsx
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaDownload,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";
import DownloadModal from "./DownloadModal";
import { DOWNLOAD_PAGE_PATH } from "../constants/appLinks";
import "./FooterComponent.css";

const FooterComponent = () => {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);

  return (
    <>
      <footer className="ng-footer">
        <Container>
          {/* Footer Top */}
          <div className="ng-footer__top">
            <Row className="g-4 align-items-start">
              {/* Brand */}
              <Col lg={4} md={6}>
                <div className="ng-footer__brand">
                  <div className="ng-footer__brand-badge">
                    NaijaGo
                  </div>

                  <h3>
                    Your gateway to smarter Nigerian commerce.
                  </h3>

                  <p>
                    Discover trusted vendors, quality products, and
                    a cleaner digital marketplace experience built
                    for modern buyers and sellers.
                  </p>

                  <button
                    type="button"
                    className="ng-footer__cta"
                    onClick={() => setDownloadModalOpen(true)}
                  >
                    <FaDownload className="me-2" />
                    Get the App
                  </button>
                </div>
              </Col>

              {/* Quick Links */}
              <Col lg={2} md={6}>
                <div className="ng-footer__group">
                  <h5>Quick Links</h5>

                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>

                    <li>
                      <Link to="/about">About Us</Link>
                    </li>

                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>

                    <li>
                      <Link to={DOWNLOAD_PAGE_PATH}>
                        Download App
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              {/* Legal */}
              <Col lg={2} md={6}>
                <div className="ng-footer__group">
                  <h5>Legal</h5>

                  <ul>
                    <li>
                      <Link to="/policies">
                        Policies
                      </Link>
                    </li>

                    <li>
                      <Link to="/privacy">
                        Privacy & Terms
                      </Link>
                    </li>
                  </ul>
                </div>
              </Col>

              {/* Social */}
              <Col lg={4} md={6}>
                <div className="ng-footer__group">
                  <h5>Stay Connected</h5>

                  <p className="ng-footer__small">
                    Follow NaijaGo across our social platforms
                    and stay updated on marketplace news,
                    offers, and community growth.
                  </p>

                  <div className="ng-footer__socials">
                    <a
                      href="https://www.facebook.com/share/16kunbUn6v/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noreferrer"
                      className="ng-social-link"
                      aria-label="Facebook"
                    >
                      <FaFacebook />
                    </a>

                    <a
                      href="https://www.tiktok.com/@naijago.app?_r=1&_t=ZS-91TNqv2Q0M3"
                      target="_blank"
                      rel="noreferrer"
                      className="ng-social-link"
                      aria-label="TikTok"
                    >
                      <FaTiktok />
                    </a>

                    <a
                      href="https://www.instagram.com/naijago_app?igsh=MXRueGl1djcyYzU3bQ%3D%3D&utm_source=qr"
                      target="_blank"
                      rel="noreferrer"
                      className="ng-social-link"
                      aria-label="Instagram"
                    >
                      <FaInstagram />
                    </a>

                    <a
                      href="https://wa.me/2348084431251"
                      target="_blank"
                      rel="noreferrer"
                      className="ng-social-link"
                      aria-label="WhatsApp"
                    >
                      <FaWhatsapp />
                    </a>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          {/* =========================================
              REGISTERED COMPANY INFORMATION
          ========================================= */}
          <div className="ng-footer__company">
            <div className="ng-footer__company-header">
              <span className="ng-footer__company-label">
                REGISTERED BUSINESS
              </span>

              <h4>
                NAIJAGO APP LTD
              </h4>

              <div className="ng-footer__rc">
                RC 8704653
              </div>
            </div>

            <p>
              <strong>
                NAIJAGO APP LTD (RC 8704653)
              </strong>{" "}
              is a company registered in Nigeria.
            </p>

            <p>
              NaijaGo is a technology platform that connects
              customers with local businesses. Customers can
              discover products and place orders through the
              platform. NaijaGo provides logistics infrastructure
              to facilitate the delivery of products from local
              businesses to customers.
            </p>

            <p className="ng-footer__website">
              <strong>Website:</strong>{" "}
              <a
                href="https://www.naijagoapp.com"
                target="_blank"
                rel="noreferrer"
              >
                www.naijagoapp.com
              </a>
            </p>
          </div>

          {/* =========================================
              COPYRIGHT
          ========================================= */}
          <div className="ng-footer__bottom">
            <p>
              © {new Date().getFullYear()} NaijaGo.
              All Rights Reserved.
            </p>

            <p className="ng-footer__operator">
              Operated by{" "}
              <strong>
                NAIJAGO APP LTD (RC 8704653)
              </strong>
            </p>
          </div>
        </Container>
      </footer>

      {/* Download Modal */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
    </>
  );
};

export default FooterComponent;
```
