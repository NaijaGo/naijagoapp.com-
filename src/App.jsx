// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Core Components
import NavbarComponent from './components/NavbarComponent';
import HeroSection from './components/HeroSection';
import CategorySection from "./components/CategorySection";
import VideoSection from "./components/VideoSection";

// Page Components
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import DownloadPage from './components/DownloadPage';
import LegalPage from './components/LegalPage'; // Handles both Policies and Terms
import DeleteAccount from './components/DeleteAccount';
import FooterComponent from './components/FooterComponent';
import VisitorAnalytics from './components/VisitorAnalytics';
import RouteMeta from './components/RouteMeta';
import BecomeVendor from './components/BecomeVendor';
import BecomeRider from './components/BecomeRider';
import FaqPage from './components/FaqPage';
import NotFound from './components/NotFound';
import { ShopIndex, CategoryPage } from './components/ShopPages';

// Global Styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
      <div className="App-Layout">

        <RouteMeta />

        {/* Navbar is outside of Routes so it appears on every page */}
        <NavbarComponent />

        {/* Main Content Area */}
        <main>
          <Routes>
            {/* 1. Home Page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <CategorySection />
                  <VideoSection />
                </>
              }
            />

            {/* 2. About Us Page */}
            <Route path="/about" element={<AboutUs />} />

            {/* 3. Contact Us Page */}
            <Route path="/contact" element={<ContactUs />} />

            {/* 4. Download Page */}
            <Route path="/download" element={<DownloadPage />} />

            {/* 5. Policies Page */}
            <Route path="/policies" element={<LegalPage type="Policies" />} />

            {/* 6. Privacy / Terms Page */}
            <Route path="/privacy" element={<LegalPage type="Terms" />} />

            {/* 7. Account & Data Deletion Page for Google Play */}
            <Route path="/delete-account" element={<DeleteAccount />} />

            {/* 8. Vendor, rider and FAQ pages */}
            <Route path="/become-a-vendor" element={<BecomeVendor />} />
            <Route path="/become-a-rider" element={<BecomeRider />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/shop" element={<ShopIndex />} />
            <Route path="/shop/:slug" element={<CategoryPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <hr className="section-divider" />

        {/* Footer is outside of Routes so it appears on every page */}
        <FooterComponent />
        <VisitorAnalytics />

      </div>
    </Router>
  );
}

export default App;
