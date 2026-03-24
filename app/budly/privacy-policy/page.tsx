import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Budly",
  description: "Privacy Policy for the Budly expense tracking app",
};

export default function BudlyPrivacyPolicy() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-300 px-6 py-16">
      <article className="mx-auto max-w-3xl space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-white">
            Privacy Policy — Budly
          </h1>
          <p className="mt-2 text-sm text-neutral-500">
            Last updated: March 24, 2026
          </p>
        </header>

        <section className="space-y-4">
          <p>
            Budly is an expense tracking app developed by Giuliano Accorsi. This
            Privacy Policy explains how we collect, use, and protect your
            information when you use the Budly app.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            1. Information We Collect
          </h2>

          <h3 className="text-lg font-medium text-neutral-200">
            Account Information
          </h3>
          <p>
            When you create an account via Email, Google Sign-In, or Apple
            Sign-In, we collect:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Email address</li>
            <li>Display name (optional)</li>
            <li>Profile photo URL (optional, from Google/Apple)</li>
          </ul>

          <h3 className="text-lg font-medium text-neutral-200">
            Financial Data
          </h3>
          <p>
            To provide the core budgeting experience, Budly stores the following
            data that you enter:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Expenses (amounts, dates, descriptions, payment methods, tags)</li>
            <li>Budget categories and limits</li>
            <li>Trip budgets and currencies</li>
            <li>Recurring expenses and installment plans</li>
          </ul>

          <h3 className="text-lg font-medium text-neutral-200">
            Device Information
          </h3>
          <p>
            We collect a device identifier solely for data synchronization and
            conflict resolution purposes. We also collect basic device
            information (model, OS version) for crash diagnostics.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To provide and maintain the expense tracking service</li>
            <li>To sync your data across devices via cloud backup</li>
            <li>To resolve data conflicts during synchronization</li>
            <li>To diagnose and fix crashes and errors (via Firebase Crashlytics)</li>
            <li>To authenticate your identity and secure your account</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            3. Data Storage & Security
          </h2>
          <p>
            Budly is designed with an offline-first approach. Your data is stored
            locally on your device using an encrypted database. When you sign in,
            your data is synced to Firebase Firestore for cloud backup.
          </p>
          <p>
            We use Firebase App Check to prevent unauthorized access to our
            backend services. Budly also offers optional biometric protection
            (Face ID) to secure access to the app.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            4. Third-Party Services
          </h2>
          <p>Budly uses the following third-party services:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong className="text-neutral-200">Firebase Authentication</strong>{" "}
              — for user sign-in (Email, Google, Apple)
            </li>
            <li>
              <strong className="text-neutral-200">Firebase Firestore</strong>{" "}
              — for cloud data synchronization
            </li>
            <li>
              <strong className="text-neutral-200">Firebase Crashlytics</strong>{" "}
              — for crash reporting and diagnostics (production only)
            </li>
            <li>
              <strong className="text-neutral-200">Firebase App Check</strong>{" "}
              — for API security
            </li>
          </ul>
          <p>
            These services are provided by Google LLC. You can review their
            privacy policy at{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 underline hover:text-blue-300"
            >
              policies.google.com/privacy
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            5. Permissions
          </h2>
          <p>Budly may request the following permissions:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong className="text-neutral-200">Photo Library</strong> — to
              attach images to expenses (optional, only when you choose to)
            </li>
            <li>
              <strong className="text-neutral-200">Face ID</strong> — to protect
              access to your financial data (optional)
            </li>
            <li>
              <strong className="text-neutral-200">Notifications</strong> — for
              local reminders (optional)
            </li>
          </ul>
          <p>
            Budly does <strong className="text-neutral-200">not</strong> access
            your location, contacts, camera, calendar, or microphone.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            6. Data Sharing
          </h2>
          <p>
            We do <strong className="text-neutral-200">not</strong> sell, trade,
            or share your personal data with third parties for marketing or
            advertising purposes. Your financial data is never shared with anyone.
          </p>
          <p>Budly contains no ads and no marketing trackers.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            7. Data Export & Deletion
          </h2>
          <p>
            You can export all your expense data as a CSV file at any time from
            within the app.
          </p>
          <p>
            You can delete your account from the app settings. This will
            permanently remove your Firebase account and all associated data
            stored in our cloud services. Data stored locally on your device will
            also be cleared upon sign-out.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            8. Children&apos;s Privacy
          </h2>
          <p>
            Budly is not intended for children under the age of 13. We do not
            knowingly collect personal information from children under 13.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will
            be reflected on this page with an updated revision date.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">10. Contact</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at{" "}
            <a
              href="mailto:giulianoaccorsi@gmail.com"
              className="text-blue-400 underline hover:text-blue-300"
            >
              giulianoaccorsi@gmail.com
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
