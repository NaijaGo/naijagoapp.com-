import { Link } from "react-router-dom";
import PageContainer from "./PageContainer";
import AppBadges from "./AppBadges";
import "./GuidePage.css";

// Requirements mirror the Go-Vendors registration form
// (go-vendor/lib/vendor/screens/vendor_registration_screen.dart).
export default function BecomeVendor() {
  return (
    <PageContainer title="Sell on NaijaGo">
      <div className="guide-page">
        <p className="guide-page__lead">
          Bring your business to NaijaGo customers. Register with the Go-Vendors
          app, list your products, and receive and manage orders from your phone.
        </p>

        <section aria-labelledby="vendor-what">
          <h2 id="vendor-what">What you can do with Go-Vendors</h2>
          <ul>
            <li>Create your business profile with your categories, address, opening hours and delivery zones.</li>
            <li>Add products with photos, prices and options, and edit them at any time.</li>
            <li>Receive customer orders and manage them from order to delivery.</li>
            <li>Chat with customers and see your reviews and ratings.</li>
            <li>Create deals for your products.</li>
            <li>Track your wallet balance and request withdrawals to your bank account.</li>
          </ul>
        </section>

        <section aria-labelledby="vendor-steps">
          <h2 id="vendor-steps">How to register</h2>
          <ol className="guide-page__steps">
            <li>Download Go-Vendors and create your account.</li>
            <li>Fill in your business identity, contact details, address and delivery zones.</li>
            <li>Add your bank details for payouts and your opening hours.</li>
            <li>Upload your ID, shop photos and product photos.</li>
            <li>Accept the seller agreement and submit. Your application shows as “Under review” until NaijaGo verifies it.</li>
          </ol>
          <AppBadges app="vendor" />
        </section>

        <section aria-labelledby="vendor-needs">
          <h2 id="vendor-needs">What you need</h2>
          <ul>
            <li>Business name and the categories you actually sell in.</li>
            <li>Shop address and city. GPS location is optional if it's unavailable.</li>
            <li>Owner's full name, an active phone number and a WhatsApp number. Email is optional.</li>
            <li>A Nigerian bank account (10-digit account number) for payouts.</li>
            <li>A valid ID: National ID, Driver's Licence, Voter's Card or International Passport.</li>
            <li>At least one clear shop photo, plus clear product photos.</li>
            <li>Your CAC certificate, if your business is registered.</li>
          </ul>
          <p className="guide-page__note">
            Only list products you're allowed to sell. Listings must be legal, accurately
            described and clearly priced. See our <Link to="/privacy">terms</Link>.
          </p>
        </section>

        <section aria-labelledby="vendor-more">
          <h2 id="vendor-more">Questions?</h2>
          <div className="guide-page__links">
            <Link to="/faq">Read the vendor FAQ</Link>
            <Link to="/contact">Contact vendor support</Link>
            <Link to="/become-a-rider">Want to deliver instead? Become a rider</Link>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
