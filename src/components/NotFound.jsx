import { Link } from "react-router-dom";
import PageContainer from "./PageContainer";
import "./GuidePage.css";

export default function NotFound() {
  return (
    <PageContainer title="Page not found">
      <div className="guide-page">
        <p className="guide-page__lead">
          We couldn't find that page. Try one of these instead:
        </p>
        <div className="guide-page__links" style={{ justifyContent: "center" }}>
          <Link to="/">Home</Link>
          <Link to="/download">Download NaijaGo</Link>
          <Link to="/become-a-vendor">Sell on NaijaGo</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </PageContainer>
  );
}
