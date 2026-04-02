import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTiktok,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";
import "./FooterComponent.css";

const FooterComponent = () => {
  return (
    <footer className="ng-footer">
      <Container>
        <div className="ng-footer__top">
          <Row className="g-4 align-items-start">
            <Col lg={4} md={6}>
              <div className="ng-footer__brand">
                <div className="ng-footer__brand-badge">NaijaGo</div>
                <h3>Your gateway to smarter Nigerian commerce.</h3>
                <p>
                  Discover trusted vendors, quality products, and a cleaner
                  digital marketplace experience built for modern buyers and
                  sellers.
                </p>

                <button className="ng-footer__cta">
                  Explore Marketplace <FaArrowRight className="ms-2" />
                </button>
              </div>
            </Col>

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
                </ul>
              </div>
            </Col>

            <Col lg={2} md={6}>
              <div className="ng-footer__group">
                <h5>Legal</h5>
                <ul>
                  <li>
                    <Link to="/policies">Policies</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Privacy & Terms</Link>
                  </li>
                </ul>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className="ng-footer__group">
                <h5>Stay Connected</h5>
                <p className="ng-footer__small">
                  Follow NaijaGo across our social platforms and stay updated on
                  marketplace news, offers, and community growth.
                </p>

                <div className="ng-footer__socials">
                  <a
                    href="https://www.facebook.com/share/17fBpxLKKk/"
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
                    href="https://www.instagram.com/naijagoappltd?igsh=MXRueGl1djcyYzU3bQ=="
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

        <div className="ng-footer__bottom">
          <p>© {new Date().getFullYear()} NaijaGo. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default FooterComponent;
