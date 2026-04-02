import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import PageContainer from "./PageContainer";
import { FaUsers, FaGlobeAfrica, FaBullseye } from "react-icons/fa";
import "./AboutUs.css";

const teamMembers = [
  { name: "Ojemen Destiny Carter", title: "Founder & CEO", icon: FaUsers },
  { name: "Marvinx", title: "Board Member", icon: FaUsers },
  { name: "Mainx", title: "Board Member", icon: FaUsers },
  { name: "Jason", title: "Board Member", icon: FaUsers },
  { name: "Francis", title: "Board Member", icon: FaUsers },
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
          <h2 className="team-title">Meet The Core Team</h2>
        </Col>

        {teamMembers.map((member) => (
          <Col
            lg={4}
            md={6}
            key={member.name}
            className="mb-4 d-flex justify-content-center"
          >
            <Card className="team-card">
              <Card.Body className="text-center">
                <member.icon className="team-icon" />

                <Card.Title className="team-name">{member.name}</Card.Title>

                <Card.Text className="team-role">{member.title}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </PageContainer>
  );
};

export default AboutUs;
