import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import PageContainer from "./PageContainer";
import {
  FaBolt,
  FaBullseye,
  FaGlobeAfrica,
  FaShieldAlt,
  FaStore,
} from "react-icons/fa";
import {
  APP_STORE_BADGE_SRC,
  APP_STORE_URL,
  PLAY_STORE_BADGE_SRC,
  PLAY_STORE_URL,
} from "../constants/appLinks";
import StoreBadgeLink from "./StoreBadgeLink";
import "./AboutUs.css";

const brandPillars = [
  {
    title: "Designed for local trust",
    text: "NaijaGo is built to help buyers discover real vendors with more confidence and less friction.",
    icon: FaShieldAlt,
  },
  {
    title: "Built to lift vendors",
    text: "We give businesses a cleaner digital storefront and stronger visibility inside a modern marketplace.",
    icon: FaStore,
  },
  {
    title: "Made for faster decisions",
    text: "The experience is shaped to make browsing, comparing, and shopping feel easier from the first tap.",
    icon: FaBolt,
  },
];

const AboutUs = () => {
  return (
    <PageContainer title="About NaijaGo">
      <Row className="justify-content-center">
        <Col lg={10} className="about-intro">
          <div className="about-card">
            <FaBullseye className="about-icon" />

            <h3>Our Mission</h3>

            <p>
              NaijaGo was established with a clear mission: to create the most
              <strong> efficient, secure, and user-friendly marketplace</strong>
              connecting verified vendors and smart buyers across Nigeria.
            </p>

            <p>
              We empower local businesses using modern technology, enabling
              Nigerian commerce to compete globally.
            </p>
          </div>

          <div className="about-card">
            <FaGlobeAfrica className="about-icon" />

            <h3>Our Vision</h3>

            <p>
              Our vision is to become the <strong>No.1 digital commerce
              platform in West Africa</strong>, enabling millions of
              transactions and helping small businesses scale digitally.
            </p>
          </div>
        </Col>

        <Col xs={12} className="text-center mt-5 mb-4">
          <h2 className="about-feature-title">The NaijaGo Difference</h2>
          <p className="about-feature-subtitle">
            Instead of listing team members here, we use this space to show
            visitors what makes the platform feel different.
          </p>
        </Col>

        {brandPillars.map((item) => (
          <Col
            lg={4}
            md={6}
            key={item.title}
            className="mb-4 d-flex justify-content-center"
          >
            <Card className="about-feature-card">
              <Card.Body className="text-center">
                <item.icon className="about-feature-icon" />

                <Card.Title className="about-feature-name">
                  {item.title}
                </Card.Title>

                <Card.Text className="about-feature-text">
                  {item.text}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}

        <Col xs={12} className="mt-2">
          <div className="about-signature">
            <div className="about-signature__content">
              <p className="about-signature__eyebrow">NaijaGo Standard</p>
              <h3>
                A marketplace experience that feels premium, dependable, and
                proudly built for Nigerian commerce.
              </h3>
              <p>
                We want visitors to remember the brand for trust, clarity, and
                momentum, not just for a list of names. Sign-in and vendor
                onboarding happen directly inside the mobile app.
              </p>
            </div>

            <div className="about-signature__tags">
              <span>Trust-first discovery</span>
              <span>Vendor growth mindset</span>
              <span>Premium local experience</span>
            </div>

            <div className="about-signature__actions">
              <StoreBadgeLink
                href={PLAY_STORE_URL}
                src={PLAY_STORE_BADGE_SRC}
                alt="Get it on Google Play"
                className="about-store-badge"
              />

              <StoreBadgeLink
                href={APP_STORE_URL}
                src={APP_STORE_BADGE_SRC}
                alt="Download on the App Store"
                className="about-store-badge"
              />
            </div>
          </div>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default AboutUs;
