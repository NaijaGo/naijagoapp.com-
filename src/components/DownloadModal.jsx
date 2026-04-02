import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaStore, FaTimes } from "react-icons/fa";
import { appStoreLinks, DOWNLOAD_PAGE_PATH } from "../constants/appLinks";
import "./DownloadModal.css";

const DownloadModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="ng-download-overlay" onClick={onClose}>
      <div
        className="ng-download-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-modal-title"
      >
        <div className="ng-download-modal__top">
          <div>
            <p className="ng-download-modal__eyebrow">
              <FaStore className="me-2" />
              Download NaijaGo
            </p>
            <h3 id="download-modal-title">
              Sign in and vendor registration happen in the mobile app.
            </h3>
            <p className="ng-download-modal__text">
              Choose your device below to continue. Vendors need the app to
              create an account, while shoppers use the app to browse, sign in,
              and buy with confidence.
            </p>
          </div>

          <button
            onClick={onClose}
            className="ng-download-modal__close"
            aria-label="Close download modal"
          >
            <FaTimes />
          </button>
        </div>

        <div className="ng-download-options">
          {appStoreLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className={`ng-download-option ng-download-option--${item.variant}`}
            >
              <div className="ng-download-option__body">
                <img
                  src={item.badgeSrc}
                  alt={item.badgeAlt}
                  className="ng-download-option__badge"
                />
                <span className="ng-download-option__description">
                  {item.description}
                </span>
              </div>

              <FaArrowRight className="ng-download-option__arrow" />
            </a>
          ))}
        </div>

        <div className="ng-download-modal__footer">
          <p>Need a campaign-friendly landing page or direct link hub?</p>
          <Link
            to={DOWNLOAD_PAGE_PATH}
            className="ng-download-modal__page-link"
            onClick={onClose}
          >
            Open the download page <FaArrowRight className="ms-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DownloadModal;
