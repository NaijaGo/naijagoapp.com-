import { useState } from "react";
import "./DeleteAccount.css";

const API_BASE_URL = "https://naijago-backend.onrender.com";

const getDeletionDeviceFingerprint = () => {
  const storageKey = "naijago_account_deletion_device";
  const existing = window.localStorage.getItem(storageKey);
  if (existing) return existing;

  const fingerprint = window.crypto?.randomUUID
    ? `web-delete-${window.crypto.randomUUID()}`
    : `web-delete-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  window.localStorage.setItem(storageKey, fingerprint);
  return fingerprint;
};

const readResponse = async (response) => {
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { message: text };
  }
};

const DeleteAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [understood, setUnderstood] = useState(false);
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isDeleting, setIsDeleting] = useState(false);

  const canDelete =
    email.trim() !== "" &&
    password !== "" &&
    confirmation.trim().toUpperCase() === "DELETE" &&
    understood &&
    !isDeleting;

  const handleDeletion = async (event) => {
    event.preventDefault();
    if (!canDelete) return;

    if (!window.confirm("Permanently delete your NaijaGo account and associated data? This cannot be undone.")) {
      return;
    }

    setIsDeleting(true);
    setStatus({ type: "pending", message: "Verifying your account securely…" });

    try {
      const loginResponse = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          password,
          deviceFingerprint: getDeletionDeviceFingerprint(),
          oneSignalPlayerId: "",
        }),
      });
      const loginData = await readResponse(loginResponse);
      if (!loginResponse.ok || !loginData.token) {
        throw new Error(loginData.message || "We could not verify your email and password.");
      }

      setStatus({ type: "pending", message: "Account verified. Deleting your account and associated data…" });
      const deleteResponse = await fetch(`${API_BASE_URL}/api/auth/delete-account`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${loginData.token}`,
        },
      });
      const deleteData = await readResponse(deleteResponse);
      if (!deleteResponse.ok) {
        throw new Error(deleteData.message || "Account deletion failed. Please try again.");
      }

      setEmail("");
      setPassword("");
      setConfirmation("");
      setUnderstood(false);
      setStatus({
        type: "success",
        message: deleteData.message || "Your NaijaGo account and associated data have been deleted successfully.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Account deletion failed. Please try again.",
      });
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <main className="delete-page">
      <section className="delete-hero">
        <div className="delete-hero-content">
          <span className="delete-badge">NaijaGo Account & Data Deletion</span>
          <h1>Delete your NaijaGo account</h1>
          <p>
            Use this page to permanently delete the account you created in the
            NaijaGo app and request deletion of its associated personal data.
          </p>
        </div>
      </section>

      <section className="delete-container">
        <div className="delete-card delete-action-card">
          <h2>Delete your account online</h2>
          <p>
            Enter the same email address and password you use in NaijaGo. Your
            credentials are sent securely to NaijaGo for verification and are
            not stored by this website.
          </p>

          <form className="delete-form" onSubmit={handleDeletion}>
            <label htmlFor="delete-email">Account email</label>
            <input id="delete-email" name="email" type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} disabled={isDeleting} required />

            <label htmlFor="delete-password">Account password</label>
            <input id="delete-password" name="password" type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} disabled={isDeleting} required />

            <label htmlFor="delete-confirmation">Type <strong>DELETE</strong> to confirm</label>
            <input id="delete-confirmation" name="confirmation" type="text" autoComplete="off" value={confirmation} onChange={(event) => setConfirmation(event.target.value)} disabled={isDeleting} required />

            <label className="delete-check" htmlFor="delete-understood">
              <input id="delete-understood" type="checkbox" checked={understood} onChange={(event) => setUnderstood(event.target.checked)} disabled={isDeleting} />
              <span>I understand that deletion is permanent and I will lose access to this account.</span>
            </label>

            <button className="delete-button" type="submit" disabled={!canDelete}>
              {isDeleting ? "Deleting account…" : "Permanently delete my account"}
            </button>
          </form>

          {status.type !== "idle" && (
            <div className={`delete-status delete-status-${status.type}`} role={status.type === "error" ? "alert" : "status"} aria-live="polite">
              {status.message}
            </div>
          )}
        </div>

        <div className="delete-card">
          <h2>What will be deleted</h2>
          <p>A completed request deletes the NaijaGo account and associated data, including:</p>
          <ul>
            <li>Profile, name, email address, phone number, and login details</li>
            <li>Saved addresses, preferences, and saved account information</li>
            <li>Reviews, disputes, and return requests created by the user</li>
            <li>Vendor products and vendor profile information, where applicable</li>
          </ul>
        </div>

        <div className="delete-card">
          <h2>Data that may be retained</h2>
          <p>
            Limited transaction, payment, tax, fraud-prevention, security,
            complaint, or dispute records may be retained where required by law
            or necessary to establish, exercise, or defend legal claims. Retained
            records are restricted to those purposes and kept only for the
            applicable legal or operational retention period.
          </p>
        </div>

        <div className="delete-card">
          <h2>Other ways to request deletion</h2>
          <p>
            You can also delete your account in the NaijaGo app from Account
            Settings, or email support if you cannot access your account. Include
            the email address or phone number associated with the account so we
            can verify your request.
          </p>
          <a className="email-link" href="mailto:support@naijagoapp.com?subject=Account%20Deletion%20Request">
            Email support@naijagoapp.com
          </a>
        </div>
      </section>
    </main>
  );
};

export default DeleteAccount;
