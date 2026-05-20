import React from "react";
import "./DeleteAccount.css";

const DeleteAccount = () => {
  return (
    <main className="delete-page">
      <section className="delete-hero">
        <div className="delete-hero-content">
          <span className="delete-badge">NaijaGo Data Deletion</span>
          <h1>Account & Data Deletion Request</h1>
          <p>
            This page explains how users of Go-Rider and Go-Vendors can request
            deletion of their account and associated personal information.
          </p>
        </div>
      </section>

      <section className="delete-container">
        <div className="delete-card">
          <h2>Apps Covered</h2>
          <p>This deletion request page applies to:</p>

          <div className="app-list">
            <span>Go-Rider</span>
            <span>Go-Vendors</span>
            <span>NaijaGo</span>
          </div>
        </div>

        <div className="delete-card">
          <h2>How to Request Account Deletion</h2>
          <p>
            To request account deletion, send an email to:
          </p>

          <a className="email-link" href="mailto:support@naijagoapp.com">
            support@naijagoapp.com
          </a>

          <p>
            Use the subject line:
          </p>

          <div className="subject-box">
            Account Deletion Request
          </div>

          <p>
            In your email, include the phone number or email address linked to
            your Go-Rider or Go-Vendors account so we can identify your account.
          </p>
        </div>

        <div className="delete-card">
          <h2>Go-Rider Account Deletion</h2>
          <p>
            If you are a Go-Rider user, deleting your account will remove your
            rider profile and access to delivery features.
          </p>

          <h3>Data that may be deleted:</h3>
          <ul>
            <li>Rider profile information</li>
            <li>Name, phone number, and email address</li>
            <li>Profile photo, where applicable</li>
            <li>Login account details</li>
            <li>Personal information not required for legal or operational records</li>
          </ul>
        </div>

        <div className="delete-card">
          <h2>Go-Vendors Account Deletion</h2>
          <p>
            If you are a Go-Vendors user, deleting your account will remove your
            vendor profile and access to vendor selling features.
          </p>

          <h3>Data that may be deleted:</h3>
          <ul>
            <li>Vendor profile information</li>
            <li>Business owner details</li>
            <li>Business contact information</li>
            <li>Product listings from public display</li>
            <li>Saved business information not required for compliance</li>
          </ul>
        </div>

        <div className="delete-card">
          <h2>Data That May Be Retained</h2>
          <p>
            Some information may be retained where required for legal, security,
            audit, fraud prevention, tax, dispute resolution, or operational
            compliance purposes.
          </p>

          <ul>
            <li>Completed order records</li>
            <li>Delivery records</li>
            <li>Payment or settlement records</li>
            <li>Dispute or complaint records</li>
            <li>Fraud prevention and security logs</li>
          </ul>
        </div>

        <div className="delete-card">
          <h2>Retention Period</h2>
          <p>
            Where data must be retained for compliance, safety, audit, or dispute
            resolution, we may keep limited records for up to 90 days or longer
            where required by applicable law or business compliance obligations.
          </p>
        </div>

        <div className="delete-card">
          <h2>Partial Data Deletion</h2>
          <p>
            Users may also request deletion of some personal data without deleting
            their full account. To do this, contact:
          </p>

          <a className="email-link" href="mailto:support@naijagoapp.com">
            support@naijagoapp.com
          </a>

          <p>
            Please clearly state the specific data you want deleted.
          </p>
        </div>
      </section>
    </main>
  );
};

export default DeleteAccount;
