import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import QRCode from "react-qr-code";
import {
  FaArrowRight,
  FaBolt,
  FaBullhorn,
  FaCheckCircle,
  FaQrcode,
  FaStore,
  FaUsers,
} from "react-icons/fa";
import PageContainer from "./PageContainer";
import {
  appStoreLinks,
  DOWNLOAD_PAGE_URL,
} from "../constants/appLinks";
import StoreBadgeLink from "./StoreBadgeLink";
import "./DownloadPage.css";

const downloadReasons = [
  {
    icon: <FaUsers />,
    title: "For shoppers",
    text: "Download the app to sign in, explore products, and shop from trusted vendors.",
  },
  {
    icon: <FaStore />,
    title: "For vendors",
    text: "Vendor registration happens inside the app, so this page becomes the right landing point for onboarding.",
  },
  {
    icon: <FaBullhorn />,
    title: "For campaigns",
    text: "Use this page for Instagram bio links, QR codes, flyers, ads, and every direct-response campaign.",
  },
];

const launchSteps = [
  "Tap your device store below",
  "Install NaijaGo on your phone",
  "Open the app to sign in or register",
];

const DownloadPage = () => {
  const qrValue =
    typeof window !== "undefined" ? window.location.href : DOWNLOAD_PAGE_URL;

  return (
    <PageContainer title="Download NaijaGo">
      <Row className="justify-content-center g-4">
        <Col lg={10}>
          <section className="download-page__hero">
            <div className="download-page__hero-copy">
              <p className="download-page__eyebrow">
                <FaBolt className="me-2" />
                Direct link hub
              </p>

              <h2>
                One clean destination for app downloads, vendor onboarding, and
                campaign traffic.
              </h2>

              <p className="download-page__intro">
                Send people here from social media, ads, QR codes, or promo
                materials. From this page, they can choose their device and go
                straight to the correct app store.
              </p>

              <div className="download-page__actions">
                {appStoreLinks.map((item) => (
                  <StoreBadgeLink
                    key={item.name}
                    href={item.href}
                    src={item.badgeSrc}
                    alt={item.badgeAlt}
                    className="download-page__badge-link"
                  />
                ))}
              </div>

              <div className="download-page__support-line">
                <FaCheckCircle className="me-2" />
                Sign in and vendor registration both happen inside the mobile
                app.
              </div>
            </div>

            <div className="download-page__hero-panel">
              <div className="download-page__hero-badge">
                <FaQrcode className="me-2" />
                Campaign-ready landing page
              </div>

              <div className="download-page__step-list">
                {launchSteps.map((step, index) => (
                  <div key={step} className="download-page__step-item">
                    <span>{index + 1}</span>
                    <p>{step}</p>
                  </div>
                ))}
              </div>

              <div className="download-page__qr-card">
                <div className="download-page__qr-box">
                  <QRCode
                    value={qrValue}
                    size={160}
                    bgColor="#ffffff"
                    fgColor="#0f172a"
                    level="M"
                  />
                </div>

                <div className="download-page__qr-copy">
                  <h3>Share this page instantly</h3>
                  <p>
                    This QR code points to the current `/download` page, making
                    it easy to use on flyers, social posts, or event stands.
                  </p>
                  <span>{qrValue}</span>
                </div>
              </div>

              <Link to="/contact" className="download-page__contact-link">
                Need partnership or vendor support? Contact the team{" "}
                <FaArrowRight className="ms-2" />
              </Link>
            </div>
          </section>
        </Col>

        <Col lg={10}>
          <section className="download-page__stores">
            {appStoreLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`download-page__store-card download-page__store-card--${item.variant}`}
              >
                <div className="download-page__store-copy">
                  <img
                    src={item.badgeSrc}
                    alt={item.badgeAlt}
                    className="download-page__store-badge"
                  />
                  <p>{item.description}</p>
                </div>

                <FaArrowRight className="download-page__store-arrow" />
              </a>
            ))}
          </section>
        </Col>

        <Col lg={10}>
          <Row className="g-4">
            {downloadReasons.map((item) => (
              <Col md={4} key={item.title}>
                <div className="download-page__reason-card">
                  <div className="download-page__reason-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Col>

        <Col lg={10}>
          <p className="download-page__legal">
            Google Play and the Google Play logo are trademarks of Google LLC.
            App Store is a service mark of Apple Inc.
          </p>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default DownloadPage;
