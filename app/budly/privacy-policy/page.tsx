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
            Effective date: March 24, 2026
          </p>
          <p className="text-sm text-neutral-500">
            Last updated: March 24, 2026
          </p>
        </header>

        <section className="space-y-4">
          <p>
            Budly is an expense tracking app developed by Giuliano Accorsi
            (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). This Privacy
            Policy explains how we collect, use, store, and protect your
            information when you use Budly.
          </p>
          <p>
            By using Budly, you agree to the collection and use of information
            in accordance with this policy.
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
            4. Third-Party Services
          </h2>
          <p>
            Budly uses the following third-party services, all provided by
            Google LLC:
          </p>
          <div className="overflow-x-auto rounded-lg border border-neutral-800">
            <table className="w-full">
              <thead>
                <tr>
                  <th className={tableHeaderClass}>Service</th>
                  <th className={tableHeaderClass}>Purpose</th>
                  <th className={tableHeaderClass}>Data Processed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={tableCellClass}>Firebase Authentication</td>
                  <td className={tableCellClass}>
                    User sign-in (email/password)
                  </td>
                  <td className={tableCellClass}>Email, password hash</td>
                </tr>
                <tr>
                  <td className={tableCellClass}>Firebase Firestore</td>
                  <td className={tableCellClass}>
                    Cloud data synchronization
                  </td>
                  <td className={tableCellClass}>
                    All user-entered financial data
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>Firebase Crashlytics</td>
                  <td className={tableCellClass}>
                    Crash reporting (production only)
                  </td>
                  <td className={tableCellClass}>
                    Crash logs, stack traces, device model, OS version
                  </td>
                </tr>
                <tr>
                  <td className={tableCellClass}>Firebase App Check</td>
                  <td className={tableCellClass}>API abuse prevention</td>
                  <td className={tableCellClass}>
                    Device attestation tokens
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            Google&apos;s privacy policy:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              policies.google.com/privacy
            </a>
          </p>
          <p>
            No other third-party services, SDKs, or trackers are included in
            the app.
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
                    Local reminders for budgeting goals
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
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            8. International Data Transfers
          </h2>
          <p>
            Your data may be processed on servers located outside your country
            of residence, including in the United States, as part of
            Google&apos;s Firebase infrastructure. By using Budly, you consent
            to this transfer. Google complies with applicable data protection
            frameworks for international transfers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">9. Your Rights</h2>
          <p>
            Depending on your jurisdiction, you may have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong className="text-neutral-200">
                Access your personal data
              </strong>{" "}
              (available via in-app export)
            </li>
            <li>
              <strong className="text-neutral-200">
                Delete your personal data
              </strong>{" "}
              (available via in-app account deletion)
            </li>
            <li>
              <strong className="text-neutral-200">
                Portability of your data
              </strong>{" "}
              (available via CSV export)
            </li>
            <li>
              <strong className="text-neutral-200">Withdraw consent</strong> by
              deleting your account at any time
            </li>
          </ul>
          <p>
            For users in Brazil, your rights under the LGPD (Lei Geral de
            Prote&ccedil;&atilde;o de Dados) are fully supported through the
            features described above.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            10. Children&apos;s Privacy
          </h2>
          <p>
            Budly is not intended for children under the age of 13 (or the
            applicable minimum age in your jurisdiction). We do not knowingly
            collect personal information from children. If you believe a child
            has provided us with personal data, please contact us and we will
            promptly delete it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            11. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            reflected on this page with an updated revision date. We encourage
            you to review this policy periodically.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">12. Contact</h2>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or your data, please contact:
          </p>
          <p>
            <strong className="text-neutral-200">Giuliano Accorsi</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:giulianoaccorsi@gmail.com"
              className="text-blue-400 underline hover:text-blue-300"
            >
              giulianoaccorsi@gmail.com
            </a>
          </p>
        </section>
      </article>
    </main>
  );
}
