import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Budly",
  description: "Privacy Policy for the Budly expense tracking app",
};

export default function BudlyPrivacyPolicy() {
  const tableHeaderClass =
    "px-4 py-3 text-left text-sm font-semibold text-white bg-neutral-800/50";
  const tableCellClass =
    "px-4 py-3 text-sm border-t border-neutral-800";

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-300 px-6 py-16">
      <article className="mx-auto max-w-3xl space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-white">
            Privacy Policy — Budly
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Effective date: May 10, 2026
          </p>
          <p className="text-sm text-neutral-500">
            Last updated: May 16, 2026
          </p>
        </header>

        <section className="space-y-4">
          <p>
            Budly is an expense tracking app developed by Giuliano Accorsi
            (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). This Privacy
            Policy explains how we collect, use, store, and protect your
            information when you use Budly, in compliance with Brazil&apos;s
            Lei Geral de Prote&ccedil;&atilde;o de Dados (LGPD, Law 13.709/2018)
            and the European Union&apos;s General Data Protection Regulation
            (GDPR, EU 2016/679).
          </p>
          <p>
            By using Budly, you agree to the collection and use of information
            in accordance with this policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            Data Controller and Data Protection Officer
          </h2>
          <p>
            <strong className="text-neutral-200">Data Controller</strong>{" "}
            (Controlador / Controller): Giuliano Accorsi, individual developer,
            located in Brazil.
          </p>
          <p>
            <strong className="text-neutral-200">
              Data Protection Officer
            </strong>{" "}
            (Encarregado de Prote&ccedil;&atilde;o de Dados, per LGPD Article
            41): Giuliano Accorsi.
          </p>
          <p>
            For any questions about this policy, to exercise your data
            protection rights, or to report an incident, contact the DPO at:{" "}
            <a
              href="mailto:support@budlyapp.app"
              className="text-blue-400 underline hover:text-blue-300"
            >
              support@budlyapp.app
            </a>
            .
          </p>
          <p>
            We currently do not maintain an EU Representative under GDPR
            Article 27. If you are based in the European Union and wish to
            exercise your rights, please contact the DPO above; we will
            appoint a designated representative if and when our user base in
            the EU requires it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            1. Information We Collect
          </h2>

          <h3 className="text-lg font-medium text-neutral-200">
            Account Information
          </h3>
          <p>When you create an account, we collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong className="text-neutral-200">Email address</strong> —
              used for authentication and account recovery
            </li>
            <li>
              <strong className="text-neutral-200">Display name</strong>{" "}
              (optional) — shown in the app interface
            </li>
          </ul>

          <h3 className="text-lg font-medium text-neutral-200">
            Financial Data
          </h3>
          <p>
            To provide the core budgeting experience, Budly stores the following
            data that you enter:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Expenses (amounts, dates, descriptions, payment methods)</li>
            <li>Budget categories and spending limits</li>
            <li>Recurring expenses and installment plans</li>
            <li>Trip budgets (name, dates, currency, budget amount)</li>
            <li>Imported bank statement data (CSV)</li>
          </ul>
          <p>
            We do not have access to your bank accounts, credit cards, or any
            financial institution. All financial data is manually entered or
            imported by you.
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            Diagnostic Data
          </h3>
          <p>To maintain app stability, we collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong className="text-neutral-200">Crash reports</strong> —
              stack traces, error messages, and diagnostic breadcrumbs (via
              Firebase Crashlytics, production builds only)
            </li>
            <li>
              <strong className="text-neutral-200">Device information</strong>{" "}
              — device model and OS version (for crash diagnostics only)
            </li>
            <li>
              <strong className="text-neutral-200">Device identifier</strong>{" "}
              — used solely for data synchronization and conflict resolution
            </li>
          </ul>
          <p>
            We do not collect usage analytics, behavioral data, or advertising
            identifiers.
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            AI Chat Data
          </h3>
          <p>
            Budly includes an in-app AI assistant (&quot;Budly Chat&quot;)
            powered by Google&apos;s Gemini model, accessed through Firebase AI
            Logic on the Vertex AI backend. When you send a message to the
            assistant, the following data is transmitted to Google Cloud
            (Vertex AI) for processing:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              The text of the messages you write in the chat
            </li>
            <li>
              Recent chat history from the current conversation (used as
              context for the reply)
            </li>
            <li>
              Aggregated financial summaries returned by the assistant&apos;s
              built-in tools (e.g., totals per category, recent expenses,
              active trips) when the model requests them to answer your
              question
            </li>
            <li>
              Optional &quot;facts about the user&quot; that you have asked
              the assistant to remember
            </li>
          </ul>
          <p>
            Budly uses the <strong className="text-neutral-200">Vertex AI</strong>{" "}
            backend specifically because, under the Google Cloud Platform terms,
            Google does <strong className="text-neutral-200">not</strong> use
            this data to train its foundation models, and the data is not used
            to improve Google&apos;s products outside the scope of providing the
            service.
          </p>
          <p>
            Each chat request is signed by Firebase App Check (App Attest on
            iOS, Play Integrity on Android) to prevent unauthorized use of our
            backend.
          </p>
          <p>
            Chat history and remembered facts are stored{" "}
            <strong className="text-neutral-200">locally on your device only</strong>{" "}
            and are not synchronized to Firebase Firestore. You can clear the
            chat history at any time from within the chat screen.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            2. How We Use Your Information
          </h2>
          <div className="overflow-x-auto rounded-lg border border-neutral-800">
            <table className="w-full">
              <thead>
                <tr>
                  <th className={tableHeaderClass}>Purpose</th>
                  <th className={tableHeaderClass}>Data Used</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableCellClass}>
                    Provide the expense tracking service
                  </td>
                  <td className={tableCellClass}>
                    Financial data, account info
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Sync data across your devices
                  </td>
                  <td className={tableCellClass}>
                    All user data, device identifier
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Resolve data conflicts during sync
                  </td>
                  <td className={tableCellClass}>
                    Device identifier, timestamps
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Diagnose and fix crashes
                  </td>
                  <td className={tableCellClass}>
                    Crash reports, device info
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Authenticate and secure your account
                  </td>
                  <td className={tableCellClass}>Email address</td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Answer questions in the AI chat assistant
                  </td>
                  <td className={tableCellClass}>
                    Chat messages, recent chat context, financial summaries
                    requested by the assistant&apos;s tools
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Send local and remote notifications (e.g., budget reminders)
                  </td>
                  <td className={tableCellClass}>
                    Firebase Cloud Messaging device token
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We do not use your data for profiling, advertising, or any purpose
            other than providing and improving the Budly service.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            2A. Legal Basis for Processing
          </h2>
          <p>
            Under LGPD Article 7 and GDPR Article 6(1), each processing
            activity must rely on a specific legal basis. The table below maps
            each purpose to the legal basis we rely on:
          </p>
          <div className="overflow-x-auto rounded-lg border border-neutral-800">
            <table className="w-full">
              <thead>
                <tr>
                  <th className={tableHeaderClass}>Purpose</th>
                  <th className={tableHeaderClass}>LGPD basis (Art. 7)</th>
                  <th className={tableHeaderClass}>GDPR basis (Art. 6(1))</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableCellClass}>
                    Account creation, authentication, expense tracking, sync
                  </td>
                  <td className={tableCellClass}>
                    V — execution of contract
                  </td>
                  <td className={tableCellClass}>
                    (b) — performance of a contract
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Subscription billing (Budly Pro)
                  </td>
                  <td className={tableCellClass}>
                    V — execution of contract; VI — legal obligation
                    (tax/consumer law)
                  </td>
                  <td className={tableCellClass}>
                    (b) — performance of a contract; (c) — legal obligation
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Crash diagnostics and app stability
                  </td>
                  <td className={tableCellClass}>
                    IX — legitimate interest of the controller
                  </td>
                  <td className={tableCellClass}>
                    (f) — legitimate interest
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    AI chat assistant (sending data to Google Vertex AI)
                  </td>
                  <td className={tableCellClass}>
                    I — explicit consent of the data subject
                  </td>
                  <td className={tableCellClass}>
                    (a) — explicit consent
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Push notifications (budget reminders)
                  </td>
                  <td className={tableCellClass}>
                    I — consent (granted via OS permission prompt)
                  </td>
                  <td className={tableCellClass}>
                    (a) — consent
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Fraud prevention (App Check, abuse monitoring)
                  </td>
                  <td className={tableCellClass}>
                    IX — legitimate interest
                  </td>
                  <td className={tableCellClass}>
                    (f) — legitimate interest
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            <strong className="text-neutral-200">
              Consent for the AI chat assistant
            </strong>{" "}
            is recorded in-app with an explicit, versioned acceptance: each
            user&apos;s acceptance is stored locally with a version number and
            UTC timestamp, scoped to the signed-in Firebase user. You can
            revoke consent at any time from{" "}
            <strong className="text-neutral-200">
              Settings &gt; Budly AI consent
            </strong>
            ; once revoked, no further data is sent to the assistant. If we
            materially change what data the assistant receives, we will bump
            the consent version and re-prompt you before using the chat again.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            3. Data Storage & Security
          </h2>
          <p>Budly follows an offline-first architecture:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-neutral-200">Local storage:</strong> Your
              data is stored on your device using a local database. The app is
              fully functional without an internet connection.
            </li>
            <li>
              <strong className="text-neutral-200">Cloud backup:</strong> When
              you sign in, your data is synchronized to Firebase Firestore,
              hosted by Google on servers secured under their infrastructure.
              Data is encrypted in transit (TLS) and at rest on Google&apos;s
              servers.
            </li>
            <li>
              <strong className="text-neutral-200">API security:</strong> We use
              Firebase App Check to prevent unauthorized access to our backend
              services.
            </li>
            <li>
              <strong className="text-neutral-200">App lock:</strong> Budly
              offers optional biometric protection (Face ID / Touch ID) to
              restrict access to the app on your device.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            4. Third-Party Services (Subprocessors)
          </h2>
          <p>
            Budly relies on the following subprocessors to deliver the service.
            Each is bound by its own data processing terms, which we have
            accepted in writing:
          </p>
          <div className="overflow-x-auto rounded-lg border border-neutral-800">
            <table className="w-full">
              <thead>
                <tr>
                  <th className={tableHeaderClass}>Subprocessor</th>
                  <th className={tableHeaderClass}>Purpose</th>
                  <th className={tableHeaderClass}>Data Processed</th>
                  <th className={tableHeaderClass}>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableCellClass}>
                    Google LLC — Firebase Authentication
                  </td>
                  <td className={tableCellClass}>
                    User sign-in (email/password)
                  </td>
                  <td className={tableCellClass}>Email, password hash</td>
                  <td className={tableCellClass}>United States</td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Google LLC — Firebase Firestore
                  </td>
                  <td className={tableCellClass}>
                    Cloud data synchronization
                  </td>
                  <td className={tableCellClass}>
                    All user-entered financial data
                  </td>
                  <td className={tableCellClass}>United States</td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Google LLC — Firebase Crashlytics
                  </td>
                  <td className={tableCellClass}>
                    Crash reporting (production only)
                  </td>
                  <td className={tableCellClass}>
                    Crash logs, stack traces, device model, OS version,
                    installation UUID
                  </td>
                  <td className={tableCellClass}>United States</td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Google LLC — Firebase App Check
                  </td>
                  <td className={tableCellClass}>API abuse prevention</td>
                  <td className={tableCellClass}>
                    Device attestation tokens (App Attest / Play Integrity)
                  </td>
                  <td className={tableCellClass}>United States</td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Google LLC — Firebase AI Logic (Vertex AI)
                  </td>
                  <td className={tableCellClass}>
                    Power the in-app AI chat assistant (Gemini 2.5 Flash)
                  </td>
                  <td className={tableCellClass}>
                    Chat messages, conversation context, aggregated financial
                    summaries requested via tool calls, user-saved facts.
                    Vertex AI does not use this data to train foundation
                    models.
                  </td>
                  <td className={tableCellClass}>
                    United States (us-central1 by default)
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Google LLC — Firebase Cloud Messaging (FCM)
                  </td>
                  <td className={tableCellClass}>
                    Deliver push notifications (e.g., budget reminders)
                  </td>
                  <td className={tableCellClass}>Device push token</td>
                  <td className={tableCellClass}>United States</td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    RevenueCat, Inc.
                  </td>
                  <td className={tableCellClass}>
                    Subscription management and entitlement verification
                    (Budly Pro)
                  </td>
                  <td className={tableCellClass}>
                    Firebase user ID (as RevenueCat customer ID), device and
                    platform identifiers, subscription receipts and status
                  </td>
                  <td className={tableCellClass}>United States</td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Apple Inc. — App Store / In-App Purchase
                  </td>
                  <td className={tableCellClass}>
                    Process subscription payments on iOS
                  </td>
                  <td className={tableCellClass}>
                    Apple ID, billing data, purchase receipts. We do not see
                    your payment instrument.
                  </td>
                  <td className={tableCellClass}>
                    United States / regional Apple infrastructure
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>
                    Google LLC — Google Play Billing
                  </td>
                  <td className={tableCellClass}>
                    Process subscription payments on Android
                  </td>
                  <td className={tableCellClass}>
                    Google account identifier, billing data, purchase tokens.
                    We do not see your payment instrument.
                  </td>
                  <td className={tableCellClass}>United States</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Reference policies and terms:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Google Privacy Policy
            </a>
            {" · "}
            <a
              href="https://cloud.google.com/terms/data-processing-addendum"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Google Cloud Data Processing Addendum
            </a>
            {" · "}
            <a
              href="https://cloud.google.com/terms/subprocessors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Google Cloud subprocessors
            </a>
            {" · "}
            <a
              href="https://www.revenuecat.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              RevenueCat Privacy Policy
            </a>
            {" · "}
            <a
              href="https://www.revenuecat.com/dpa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              RevenueCat DPA
            </a>
            {" · "}
            <a
              href="https://www.apple.com/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Apple Privacy Policy
            </a>
          </p>
          <p>
            No other third-party services, SDKs, advertising networks, or
            analytics trackers are included in the app.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">5. Permissions</h2>
          <p>Budly may request the following device permissions:</p>
          <div className="overflow-x-auto rounded-lg border border-neutral-800">
            <table className="w-full">
              <thead>
                <tr>
                  <th className={tableHeaderClass}>Permission</th>
                  <th className={tableHeaderClass}>Purpose</th>
                  <th className={tableHeaderClass}>Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableCellClass}>Face ID / Touch ID</td>
                  <td className={tableCellClass}>
                    Protect access to your financial data
                  </td>
                  <td className={tableCellClass}>Optional</td>
                </tr>
                <tr>
                  <td className={tableCellClass}>Notifications</td>
                  <td className={tableCellClass}>
                    Local reminders for budgeting goals and push notifications
                    delivered via Firebase Cloud Messaging
                  </td>
                  <td className={tableCellClass}>Optional</td>
                </tr>
                <tr>
                  <td className={tableCellClass}>File access</td>
                  <td className={tableCellClass}>
                    Import bank statements (CSV files)
                  </td>
                  <td className={tableCellClass}>Optional, on-demand only</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Budly does <strong className="text-neutral-200">not</strong> access
            your location, contacts, camera, microphone, calendar, photos, or
            health data.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            6. Data Sharing
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>We do not sell your personal or financial data.</li>
            <li>
              We do not share your data with third parties for marketing or
              advertising.
            </li>
            <li>We do not display ads or use marketing trackers.</li>
            <li>
              Your financial data is accessible only to you and is never shared
              with anyone, including us.
            </li>
          </ul>
          <p>
            The only data transmission occurs between your device and Firebase
            services for the purpose of cloud synchronization and crash
            reporting.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            7. Data Portability & Deletion
          </h2>

          <h3 className="text-lg font-medium text-neutral-200">Export</h3>
          <p>
            You can export all your expense data as a CSV file at any time from{" "}
            <strong className="text-neutral-200">
              Settings &gt; Export Data
            </strong>{" "}
            within the app.
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            Account Deletion
          </h3>
          <p>
            You can permanently delete your account from{" "}
            <strong className="text-neutral-200">
              Settings &gt; Delete Account
            </strong>
            . This action:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Immediately deletes your Firebase Authentication account</li>
            <li>
              Permanently removes all your data from Firebase Firestore
            </li>
            <li>Clears all locally stored data on the device</li>
            <li>Is irreversible</li>
          </ul>

          <h3 className="text-lg font-medium text-neutral-200">
            Data Retention
          </h3>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong className="text-neutral-200">Active accounts:</strong>{" "}
              Data is retained as long as your account is active.
            </li>
            <li>
              <strong className="text-neutral-200">Deleted accounts:</strong>{" "}
              All cloud data is permanently deleted upon account deletion. No
              backups or copies are retained.
            </li>
            <li>
              <strong className="text-neutral-200">Crash reports:</strong>{" "}
              Diagnostic data in Firebase Crashlytics is retained for 90 days
              per Google&apos;s default retention policy.
            </li>
            <li>
              <strong className="text-neutral-200">
                Chat history and remembered facts:
              </strong>{" "}
              Stored locally on your device only. They are not synchronized to
              the cloud and are removed when you clear the chat, delete the
              app, or delete your account.
            </li>
            <li>
              <strong className="text-neutral-200">
                AI chat requests on Google Cloud:
              </strong>{" "}
              Vertex AI logs requests for up to 30 days for abuse monitoring
              per Google Cloud&apos;s standard policies, after which they are
              deleted. This data is not used to train Google&apos;s foundation
              models and is not accessible to us as the controller.
            </li>
            <li>
              <strong className="text-neutral-200">
                Subscription records:
              </strong>{" "}
              Retained by RevenueCat, Apple, and Google for as long as required
              by tax and consumer-protection law in the jurisdiction of
              purchase (typically 5–10 years).
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            8. International Data Transfers
          </h2>
          <p>
            Budly processes data on servers located outside Brazil and outside
            the European Economic Area, primarily in the United States, as
            part of the Firebase, Vertex AI, and RevenueCat infrastructure.
          </p>
          <p>
            <strong className="text-neutral-200">
              Safeguards for transfers (LGPD Art. 33 / GDPR Art. 46):
            </strong>{" "}
            we rely on the following contractual safeguards for international
            transfers of personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-neutral-200">
                Google Cloud Platform (Firebase &amp; Vertex AI):
              </strong>{" "}
              Cloud Data Processing Addendum (CDPA), incorporating the
              European Commission&apos;s Standard Contractual Clauses (SCCs)
              and the UK International Data Transfer Addendum, accepted on the
              Google Cloud console.
            </li>
            <li>
              <strong className="text-neutral-200">RevenueCat:</strong> Data
              Processing Addendum incorporating the SCCs.
            </li>
            <li>
              <strong className="text-neutral-200">
                Apple and Google Play:
              </strong>{" "}
              their respective payment-processing terms and privacy frameworks
              apply.
            </li>
          </ul>
          <p>
            Where required, the transfer is also based on your explicit
            consent (LGPD Art. 33, VIII / GDPR Art. 49(1)(a)) — for example,
            when you enable the AI chat assistant.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">9. Your Rights</h2>
          <p>
            Under LGPD Article 18 and GDPR Articles 12–22, you have the
            following rights with respect to your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong className="text-neutral-200">
                Confirmation and access
              </strong>{" "}
              — to confirm whether we process your data and obtain a copy
              (available via in-app CSV export and via written request to the
              DPO)
            </li>
            <li>
              <strong className="text-neutral-200">
                Correction / rectification
              </strong>{" "}
              of incomplete, inaccurate, or outdated data (editable in the
              app, or via request to the DPO)
            </li>
            <li>
              <strong className="text-neutral-200">
                Anonymization, blocking, or deletion
              </strong>{" "}
              of unnecessary, excessive, or unlawfully processed data
            </li>
            <li>
              <strong className="text-neutral-200">
                Portability of your data
              </strong>{" "}
              to another service provider (available as CSV export)
            </li>
            <li>
              <strong className="text-neutral-200">
                Deletion of personal data processed on the basis of consent
              </strong>{" "}
              (available via in-app account deletion)
            </li>
            <li>
              <strong className="text-neutral-200">
                Information about sharing
              </strong>{" "}
              — details of public and private entities with whom we share data
              (see Section 4 above)
            </li>
            <li>
              <strong className="text-neutral-200">
                Information about not consenting
              </strong>{" "}
              — and the consequences of refusing to consent
            </li>
            <li>
              <strong className="text-neutral-200">
                Withdrawal of consent
              </strong>{" "}
              at any time, including for the AI chat assistant
              (Settings &gt; Budly AI consent)
            </li>
            <li>
              <strong className="text-neutral-200">
                Right to lodge a complaint
              </strong>{" "}
              with a supervisory authority: in Brazil, the{" "}
              <a
                href="https://www.gov.br/anpd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 underline hover:text-blue-300"
              >
                Autoridade Nacional de Prote&ccedil;&atilde;o de Dados (ANPD)
              </a>
              ; in the EU/EEA, your local Data Protection Authority.
            </li>
          </ul>
          <h3 className="text-lg font-medium text-neutral-200">
            How to exercise your rights
          </h3>
          <p>
            Send a written request to{" "}
            <a
              href="mailto:support@budlyapp.app"
              className="text-blue-400 underline hover:text-blue-300"
            >
              support@budlyapp.app
            </a>{" "}
            stating which right you wish to exercise. We may ask you to
            confirm your identity by signing in with the e-mail tied to your
            Budly account.
          </p>
          <p>
            <strong className="text-neutral-200">Response timeframe:</strong>{" "}
            we will respond without undue delay and, in any case, within{" "}
            <strong className="text-neutral-200">15 days</strong> as required
            by LGPD Article 19, or within{" "}
            <strong className="text-neutral-200">30 days</strong> as required
            by GDPR Article 12(3) (extendable by two further months for
            complex requests, with notice to you). Exercising your rights is
            free of charge.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            10. Data Breach Notification
          </h2>
          <p>
            In the event of a security incident affecting your personal data
            that creates relevant risk or damage to you, we will notify:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              The <strong className="text-neutral-200">ANPD</strong> and{" "}
              <strong className="text-neutral-200">affected users</strong>{" "}
              within a reasonable timeframe, as required by LGPD Article 48.
            </li>
            <li>
              The competent EU supervisory authority within{" "}
              <strong className="text-neutral-200">72 hours</strong> of
              becoming aware of the breach, as required by GDPR Article 33,
              and affected users without undue delay when the breach is
              likely to result in a high risk to their rights (GDPR Art. 34).
            </li>
          </ul>
          <p>
            Notifications will describe the nature of the incident, the data
            categories affected, the likely consequences, and the measures
            taken or proposed to mitigate the risk.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            11. Children&apos;s and Adolescents&apos; Privacy
          </h2>
          <p>
            Budly is intended for adults. We do not knowingly direct the
            service to, or collect personal data from, children or
            adolescents.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-neutral-200">Brazil (LGPD Art. 14):</strong>{" "}
              data of children (under 12) is processed only with specific and
              prominent consent given by at least one parent or legal
              guardian. Adolescents (12 to 17) may use the service only with
              parental or legal guardian consent, in their best interest.
            </li>
            <li>
              <strong className="text-neutral-200">
                European Union (GDPR Art. 8):
              </strong>{" "}
              consent of users under 16 (or the minimum age set by the
              applicable Member State, which can be as low as 13) must be
              authorized by the holder of parental responsibility.
            </li>
            <li>
              <strong className="text-neutral-200">
                United States (COPPA):
              </strong>{" "}
              the service is not directed to children under 13. We do not
              knowingly collect personal information from children under 13
              without verifiable parental consent.
            </li>
          </ul>
          <p>
            If you believe a child or adolescent has provided personal data
            without the appropriate consent, contact{" "}
            <a
              href="mailto:support@budlyapp.app"
              className="text-blue-400 underline hover:text-blue-300"
            >
              support@budlyapp.app
            </a>{" "}
            and we will promptly delete the data and the related account.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            12. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Material
            changes — for example, adding a new subprocessor, changing what
            data is sent to the AI chat, or changing retention periods — will
            be highlighted on this page with an updated revision date, and we
            will, where reasonable, also notify you in-app. We encourage you
            to review this policy periodically.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">13. Contact</h2>
          <p>
            For any questions, requests to exercise your data protection
            rights, or to report a security incident:
          </p>
          <p>
            <strong className="text-neutral-200">
              Data Controller and Data Protection Officer
            </strong>
            <br />
            Giuliano Accorsi
            <br />
            Email:{" "}
            <a
              href="mailto:support@budlyapp.app"
              className="text-blue-400 underline hover:text-blue-300"
            >
              support@budlyapp.app
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
