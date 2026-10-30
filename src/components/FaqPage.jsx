import { Link } from "react-router-dom";
import PageContainer from "./PageContainer";
import { PRIVACY_POLICY_URL, SUPPORT_EMAIL } from "../seo/siteMeta";
import "./GuidePage.css";

const sections = [
  {
    id: "faq-shopping",
    title: "Shopping",
    items: [
      {
        q: "What is NaijaGo?",
        a: <>NaijaGo is a Nigerian digital marketplace operated by NaijaGo App LTD (RC 8704653). It connects customers with local vendors and delivery riders.</>,
      },
      {
        q: "How do I shop on NaijaGo?",
        a: <>Download the NaijaGo app, create an account, browse categories or search for products, add items to your cart and check out. You can follow your orders under My Orders. <Link to="/download">Download NaijaGo</Link>.</>,
      },
      {
        q: "Where does NaijaGo deliver?",
        a: <>NaijaGo launched in Abuja. Delivery is available within each vendor's delivery zones.</>,
      },
      {
        q: "What if there's a problem with my order?",
        a: <>Open a dispute from your order in the app. The in-app dispute system lets you explain the issue and chat with our team, who mediate between you and the vendor.</>,
      },
    ],
  },
  {
    id: "faq-vendors",
    title: "Vendors",
    items: [
      {
        q: "How do I sell on NaijaGo?",
        a: <>Register your business in the Go-Vendors app. You'll need your business details, a valid ID, shop and product photos and a bank account for payouts. <Link to="/become-a-vendor">See the full vendor guide</Link>.</>,
      },
      {
        q: "Do I need a CAC registration to sell?",
        a: <>No. Upload your CAC certificate if your business is registered; it isn't required to apply.</>,
      },
      {
        q: "How long does vendor approval take?",
        a: <>Your application shows as “Under review” until NaijaGo verifies your details. If it's taking longer than expected, <Link to="/contact">contact us</Link>.</>,
      },
    ],
  },
  {
    id: "faq-riders",
    title: "Riders",
    items: [
      {
        q: "How do I become a NaijaGo rider?",
        a: <>Apply in the Go-Rider app with your personal details, vehicle details, NIN images, a selfie and a bank account. <Link to="/become-a-rider">See the full rider guide</Link>.</>,
      },
      {
        q: "Which vehicles can I use?",
        a: <>The application accepts motorcycles, bicycles, cars and scooters.</>,
      },
    ],
  },
  {
    id: "faq-account",
    title: "Accounts and privacy",
    items: [
      {
        q: "How do I delete my account?",
        a: <>Follow the steps on our <Link to="/delete-account">account deletion page</Link>. It covers the NaijaGo, Go-Vendors and Go-Rider apps.</>,
      },
      {
        q: "How does NaijaGo use my data?",
        a: <>Read the <a href={PRIVACY_POLICY_URL} target="_blank" rel="noreferrer">NaijaGo privacy policy</a>, which covers all three apps.</>,
      },
      {
        q: "How do I contact support?",
        a: <>Email <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> or use our <Link to="/contact">contact page</Link>.</>,
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <PageContainer title="Frequently Asked Questions">
      <div className="guide-page">
        {sections.map((section) => (
          <section key={section.id} aria-labelledby={section.id}>
            <h2 id={section.id}>{section.title}</h2>
            <dl className="guide-page__faq">
              {section.items.map((item) => (
                <div key={item.q}>
                  <dt>{item.q}</dt>
                  <dd>{item.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </PageContainer>
  );
}
