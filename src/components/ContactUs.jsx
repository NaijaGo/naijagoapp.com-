import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaEnvelopeOpenText, FaHeadset, FaPaperPlane } from "react-icons/fa";
import PageContainer from "./PageContainer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <PageContainer title="Get In Touch">
      <Row className="justify-content-center">
        <Col lg={10}>
          <div className="contact-shell">
            <div className="contact-shell__intro">
              <div className="contact-shell__badge">
                <FaHeadset className="me-2" />
                We’re here to help
              </div>

              <h2>Let’s talk about your questions, support needs, or feedback.</h2>

              <p>
                Reach out to the NaijaGo team and we’ll get back to you as soon
                as possible. Whether you’re a buyer, vendor, or partner, we want
                the experience to feel smooth and professional.
              </p>

              <div className="contact-shell__mini-points">
                <div className="contact-mini-card">
                  <FaEnvelopeOpenText />
                  <span>Fast support response</span>
                </div>
                <div className="contact-mini-card">
                  <FaPaperPlane />
                  <span>Clear communication</span>
                </div>
              </div>
            </div>

            <div className="contact-form-card">
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="contactFormName">
                      <Form.Label className="contact-label">Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your name"
                        className="contact-input"
                        required
                      />
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-4" controlId="contactFormEmail">
                      <Form.Label className="contact-label">Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        className="contact-input"
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4" controlId="contactFormSubject">
                  <Form.Label className="contact-label">Subject</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Briefly describe your query"
                    className="contact-input"
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="contactFormMessage">
                  <Form.Label className="contact-label">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    placeholder="Your message..."
                    className="contact-input contact-textarea"
                    required
                  />
                </Form.Group>

                <div className="d-grid mt-4">
                  <Button className="contact-submit-btn" size="lg" type="submit">
                    Send Message
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
    </PageContainer>
  );
};

export default ContactUs;
