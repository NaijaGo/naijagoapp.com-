// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

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

// Global Styles
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

useEffect(() => {

  const params = new URLSearchParams(window.location.search);

  const redirect = params.get("redirect");

  if (redirect) {
    window.history.replaceState(
      {},
      "",
      redirect
    );
  }

}, []);
  return (
    <Router>
      <div className="App-Layout">

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
                  <VideoSection />
                  <CategorySection />
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
          </Routes>
        </main>

        <hr className="section-divider" />

        {/* Footer is outside of Routes so it appears on every page */}
        <FooterComponent />

      </div>
    </Router>
  );
}

export default App;
