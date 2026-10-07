import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const api = import.meta.env.VITE_API_BASE_URL || 'https://naijago-backend.onrender.com';
const pages = { '/': 'home', '/about': 'about', '/contact': 'contact', '/download': 'download',
  '/policies': 'policies', '/privacy': 'privacy', '/delete-account': 'delete_account' };
const consentKey = 'naijago_visitor_consent';
function readConsent() {
  try { return localStorage.getItem(consentKey); } catch { return null; }
}
function sessionId() {
  const day = Math.floor(Date.now() / 86400000).toString();
  let value = sessionStorage.getItem('naijago_visitor_session');
  if (sessionStorage.getItem('naijago_visitor_day') !== day || !/^[a-f0-9]{32}$/.test(value || '')) {
    value = Array.from(crypto.getRandomValues(new Uint8Array(16)), (byte) => byte.toString(16).padStart(2, '0')).join('');
    sessionStorage.setItem('naijago_visitor_session', value);
    sessionStorage.setItem('naijago_visitor_day', day);
  }
  return value;
}

export default function VisitorAnalytics() {
  const { pathname } = useLocation();
  const [enabled, setEnabled] = useState(false);
  const [consent, setConsent] = useState(readConsent);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    const onStorage = (event) => {
      if (event.key === consentKey || event.key === null) setConsent(readConsent());
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    fetch(`${api}/api/analytics/visitor-config`, { signal: controller.signal })
      .then((response) => response.ok ? response.json() : { enabled: false })
      .then((data) => setEnabled(data.enabled === true)).catch(() => {});
    return () => { clearTimeout(timeout); controller.abort(); };
  }, []);
  useEffect(() => {
    const page = pages[pathname.replace(/\/$/, '') || '/'];
    if (!enabled || consent !== 'allow' || !page) return undefined;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);
    try {
      void fetch(`${api}/api/analytics/visitor`, { method: 'POST', headers: { 'Content-Type': 'application/json' },
        signal: controller.signal, body: JSON.stringify({ sessionId: sessionId(), page, source: 'website',
          deviceClass: window.matchMedia('(max-width: 767px)').matches ? 'web_mobile' : 'web_desktop', consent: true }) }).catch(() => {});
    } catch { /* Storage unavailable: skip tracking. Website functionality is unaffected. */ }
    return () => { clearTimeout(timeout); controller.abort(); };
  }, [enabled, consent, pathname]);
  function choose(value) {
    try {
      localStorage.setItem(consentKey, value);
      if (value !== 'allow') {
        sessionStorage.removeItem('naijago_visitor_session');
        sessionStorage.removeItem('naijago_visitor_day');
      }
    } catch { /* Session-only preference when storage is unavailable. */ }
    setConsent(value);
    setEditing(false);
  }
  if (!enabled) return null;
  return <aside aria-label="Visitor privacy choices" className="container py-3 text-center">
    {(!consent || editing) ? <div className="border rounded-3 p-3 bg-light">
      <p className="mb-2">Help improve NaijaGo by allowing anonymous page statistics. We collect a random session, page name and device category—not names, contact details, locations or search text. Records expire after 30 days. You can withdraw consent here.</p>
      <button className="btn btn-primary me-2" onClick={() => choose('allow')}>Allow statistics</button>
      <button className="btn btn-outline-secondary" onClick={() => choose('decline')}>Decline statistics</button>
    </div> : <button className="btn btn-link btn-sm" onClick={() => setEditing(true)}>Visitor privacy choices</button>}
  </aside>;
}
