import React from "react";
import { Container } from "react-bootstrap";
import "./PageContainer.css";

const PageContainer = ({ title, children }) => {
  return (
    <div className="page-wrapper">
      <Container fluid className="page-content">
        <header className="text-center">
          <h1 className="page-title page-animate">{title}</h1>
          <div className="page-divider page-animate-delay"></div>
        </header>

        <div className="page-body">{children}</div>
      </Container>
    </div>
  );
};

export default PageContainer;
