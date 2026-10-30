// Records conversion events (app_download_click, vendor_signup_click,
// rider_signup_click, contact_click) on window.dataLayer for Google Tag Manager.
// Nothing leaves the browser until a GTM container is installed, and events are
// only recorded for visitors who allowed statistics in the consent banner.
// Never pass personal, payment or login data in params.
const CONSENT_KEY = "naijago_visitor_consent";

export function trackEvent(event, params = {}) {
  try {
    if (localStorage.getItem(CONSENT_KEY) !== "allow") return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...params });
  } catch {
    // Storage blocked: skip tracking. Links still work.
  }
}
