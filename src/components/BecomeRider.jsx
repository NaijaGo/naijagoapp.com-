import { Link } from "react-router-dom";
import PageContainer from "./PageContainer";
import AppBadges from "./AppBadges";
import "./GuidePage.css";

// Requirements mirror the Go-Rider registration form
// (Go-Rider/lib/features/auth/view/register_view.dart).
export default function BecomeRider() {
  return (
    <PageContainer title="Become a NaijaGo Rider">
      <div className="guide-page">
        <p className="guide-page__lead">
          Deliver orders from local vendors to NaijaGo customers. Apply with the
          Go-Rider app; NaijaGo reviews every application before a rider can take
          deliveries.
        </p>

        <section aria-labelledby="rider-how">
          <h2 id="rider-how">How deliveries work</h2>
          <ul>
            <li>Approved riders receive assigned deliveries in the app, with alerts.</li>
            <li>Confirm pickup at the vendor, follow the delivery on the map, then confirm delivery.</li>
            <li>See your earnings in the app and request withdrawals to your bank account.</li>
          </ul>
          <p className="guide-page__note">
            Delivery availability depends on your area and current demand. NaijaGo
            does not guarantee a number of deliveries or a level of earnings.
          </p>
        </section>

        <section aria-labelledby="rider-steps">
          <h2 id="rider-steps">How to apply</h2>
          <ol className="guide-page__steps">
            <li>Download Go-Rider and start your application.</li>
            <li>Enter your personal details, city or operating area, and vehicle details.</li>
            <li>Upload your verification images and add an emergency contact.</li>
            <li>Add your payout bank account, accept the rider terms and submit.</li>
            <li>Your account stays pending until NaijaGo verifies and approves it.</li>
          </ol>
          <AppBadges app="rider" />
          <p className="guide-page__note">Go-Rider is currently available on Android.</p>
        </section>

        <section aria-labelledby="rider-needs">
          <h2 id="rider-needs">What you need</h2>
          <ul>
            <li>Full name, phone number, email address, date of birth and home address.</li>
            <li>A vehicle: motorcycle, bicycle, car or scooter, with its brand or model and plate number.</li>
            <li>Your driver's licence number.</li>
            <li>Front and back images of your NIN, a clear image of the vehicle plate, and a selfie.</li>
            <li>An emergency contact name and phone number.</li>
            <li>A Nigerian bank account (10-digit account number) for payouts.</li>
          </ul>
        </section>

        <section aria-labelledby="rider-more">
          <h2 id="rider-more">Questions?</h2>
          <div className="guide-page__links">
            <Link to="/faq">Read the rider FAQ</Link>
            <Link to="/contact">Contact rider support</Link>
            <Link to="/become-a-vendor">Own a business? Sell on NaijaGo</Link>
          </div>
        </section>
      </div>
    </PageContainer>
  );
}
