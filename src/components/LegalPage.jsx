import React from "react";
import { Accordion, Row, Col } from "react-bootstrap";
import { FaShieldAlt, FaFileContract } from "react-icons/fa";
import PageContainer from "./PageContainer";
import "./LegalPage.css";

const legalContent = {
  Policies: [
    {
      header: "1. Data Protection Policy",
      text: "NaijaGo adheres strictly to data privacy laws. All user data is encrypted and used solely for platform functionality and service improvement. We never sell your personal information.",
    },
    {
      header: "2. Anti-Fraud Measures",
      text: "We utilize AI and human review to detect and prevent fraudulent activities, ensuring a safe marketplace for all users. Suspicious accounts are immediately suspended.",
    },
    {
      header: "3. Dispute Resolution",
      text: "Our in-app dispute system provides mediation for buyer-vendor issues, aiming for fair and swift resolutions within 7 business days.",
    },
  ],
  Terms: [
    {
      header: "1. User Account Responsibility",
      text: "Users are responsible for maintaining the confidentiality of their account credentials and for all activities that occur under their account.",
    },
    {
      header: "2. Vendor Listing Rules",
      text: "All products listed by vendors must be legal, accurately described, and priced transparently. Misleading listings are subject to removal.",
    },
    {
      header: "3. Termination Clause",
      text: "NaijaGo reserves the right to suspend or terminate access to the platform for any user violating these terms or engaging in harmful behavior.",
    },
  ],
};

const LegalPage = ({ type }) => {
  const content = legalContent[type] || [];
  const isPolicies = type === "Policies";

  return (
    <PageContainer title={isPolicies ? "Policies" : "Privacy & Terms"}>
      <Row className="justify-content-center">
        <Col lg={10}>
          <div className="legal-shell">
            <div className="legal-shell__intro">
              <div className="legal-shell__badge">
                {isPolicies ? <FaShieldAlt /> : <FaFileContract />}
                <span>{isPolicies ? "Platform Policies" : "User Terms"}</span>
              </div>

              <h2>
                {isPolicies
                  ? "Clear policies that protect the marketplace experience."
                  : "Simple terms that guide responsible use of NaijaGo."}
              </h2>

              <p>
                {isPolicies
                  ? "These policies explain how NaijaGo protects users, reduces fraud, and supports trust across the platform."
                  : "These terms define how users, vendors, and visitors are expected to use the platform responsibly and fairly."}
              </p>
            </div>

            <Accordion defaultActiveKey="0" className="legal-accordion">
              {content.map((item, index) => (
                <Accordion.Item
                  eventKey={String(index)}
                  key={index}
                  className="legal-accordion__item"
                >
                  <Accordion.Header>{item.header}</Accordion.Header>
                  <Accordion.Body>{item.text}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default LegalPage;
