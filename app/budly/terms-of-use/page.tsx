import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use — Budly",
  description: "Terms of Use for the Budly expense tracking app",
};

export default function BudlyTermsOfUse() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-300 px-6 py-16">
      <article className="mx-auto max-w-3xl space-y-8">
        <header>
          <h1 className="text-3xl font-bold text-white">
            Terms of Use — Budly
          </h1>
          <p className="mt-1 text-sm text-neutral-500">
            Effective date: May 10, 2026
          </p>
          <p className="text-sm text-neutral-500">
            Last updated: May 10, 2026
          </p>
        </header>

        <section className="space-y-4">
          <p>
            Budly is an expense tracking app developed by Giuliano Accorsi
            (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). These Terms of Use
            govern your access to and use of Budly. By downloading, installing,
            or using Budly, you agree to be bound by these terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            1. Acceptance of Terms
          </h2>
          <p>
            By creating an account or using Budly, you confirm that you are at
            least 13 years of age (or the minimum age required in your
            jurisdiction) and agree to these Terms of Use and our{" "}
            <a
              href="/budly/privacy-policy"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Privacy Policy
            </a>
            . If you do not agree to these terms, do not use the app.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            2. Subscription & Payment
          </h2>
          <p>
            Budly requires a paid subscription (&quot;Budly Pro&quot;) to use.
            The following plans are available:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-neutral-200">Budly Pro Monthly:</strong>{" "}
              $3.99 USD per month
            </li>
            <li>
              <strong className="text-neutral-200">Budly Pro Annual:</strong>{" "}
              $34.99 USD per year
            </li>
          </ul>
          <p>
            Prices may vary by region. The actual price displayed in the App
            Store at the time of purchase applies. Payment is charged to your
            Apple ID account at the confirmation of purchase. All payments are
            processed by Apple through your Apple ID. Budly does not collect or
            store any payment or billing information.
          </p>
          <p>
            Subscriptions automatically renew unless canceled at least 24 hours
            before the end of the current billing period. Your account will be
            charged for renewal within 24 hours prior to the end of the current
            period. You can manage and cancel your subscription at any time in
            your device&apos;s Settings &gt; Apple ID &gt; Subscriptions.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            3. Free Trial
          </h2>
          <p>
            Budly may offer a free trial period for new subscribers:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong className="text-neutral-200">Monthly plan:</strong> 2-week
              free trial
            </li>
            <li>
              <strong className="text-neutral-200">Annual plan:</strong> 1-month
              free trial
            </li>
          </ul>
          <p>
            At the end of the free trial, your subscription will automatically
            convert to a paid subscription and your Apple ID account will be
            charged unless you cancel at least 24 hours before the trial ends.
            Any unused portion of a free trial period will be forfeited when you
            purchase a subscription. Free trials are offered at our sole
            discretion and may be modified, shortened, or discontinued at any
            time without prior notice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            4. Refunds
          </h2>
          <p>
            All purchases are processed by Apple. Refunds are handled by Apple
            in accordance with their refund policy. To request a refund, visit{" "}
            <a
              href="https://reportaproblem.apple.com"
              className="text-blue-400 underline hover:text-blue-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              reportaproblem.apple.com
            </a>{" "}
            or contact Apple Support. Budly does not process refunds directly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            5. Account & Data
          </h2>
          <p>
            You are responsible for maintaining the confidentiality of your
            account credentials. Your financial data is stored locally on your
            device and, when signed in, synchronized to the cloud via Firebase
            Firestore for backup and multi-device access.
          </p>
          <p>
            You can export your data at any time via Settings &gt; Export Data.
            You can permanently delete your account and all associated data via
            Settings &gt; Delete Account. Deletion is irreversible.
          </p>
          <p>
            Budly also includes an in-app AI assistant powered by Google&apos;s
            Gemini model via Firebase AI Logic (Vertex AI backend). When you
            use the assistant, your chat messages and aggregated financial
            summaries requested by the assistant&apos;s tools are transmitted
            to Google Cloud for processing. Under Google Cloud terms, this
            data is not used to train Google&apos;s foundation models. Chat
            history is stored locally on your device only.
          </p>
          <p>
            For details on how we handle your data, see our{" "}
            <a
              href="/budly/privacy-policy"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            6. Acceptable Use
          </h2>
          <p>
            Budly is intended for personal, non-commercial expense tracking. You
            agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              Reverse engineer, decompile, or disassemble any part of the app
            </li>
            <li>
              Use the app for any unlawful purpose
            </li>
            <li>
              Attempt to gain unauthorized access to our servers or services
            </li>
            <li>
              Distribute, sublicense, or resell access to the app
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            7. Intellectual Property
          </h2>
          <p>
            Budly, including its design, code, features, and content, is the
            property of Giuliano Accorsi and is protected by applicable
            intellectual property laws. Your subscription grants you a limited,
            non-exclusive, non-transferable license to use the app for personal
            purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            8. Disclaimers & Limitation of Liability
          </h2>
          <p>
            Budly is provided &quot;as is&quot; and &quot;as available&quot;
            without warranties of any kind, express or implied. We do not
            guarantee that the app will be error-free or uninterrupted.
          </p>
          <p>
            Budly is a personal finance tracking tool and does not provide
            financial, tax, investment, or legal advice. You are solely
            responsible for your financial decisions.
          </p>
          <p>
            The in-app AI assistant generates responses using a third-party
            generative model and may produce inaccurate, incomplete, or
            misleading information. Its responses are provided for
            informational purposes only and must not be relied upon as
            professional advice. Always verify important figures against your
            own records.
          </p>
          <p>
            To the maximum extent permitted by applicable law, Giuliano Accorsi
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of your use of the
            app.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            9. Termination
          </h2>
          <p>
            You may stop using Budly at any time by canceling your subscription
            and deleting the app. We reserve the right to suspend or terminate
            your access if you violate these terms.
          </p>
          <p>
            Upon termination, your right to use the app ceases immediately. You
            may export your data before deleting your account.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            10. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of Brazil, without regard to its conflict of law
            provisions. Any disputes arising from these terms shall be subject
            to the exclusive jurisdiction of the courts of Brazil.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            11. General Provisions
          </h2>
          <p>
            If any provision of these Terms is found to be unenforceable or
            invalid, that provision shall be limited or eliminated to the
            minimum extent necessary, and the remaining provisions shall
            continue in full force and effect.
          </p>
          <p>
            These Terms of Use, together with the{" "}
            <a
              href="/budly/privacy-policy"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Privacy Policy
            </a>
            , constitute the entire agreement between you and Giuliano Accorsi
            regarding your use of Budly.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            12. Apple Third-Party Beneficiary
          </h2>
          <p>
            You acknowledge and agree that Apple Inc. is a third-party
            beneficiary of these Terms of Use and, upon your acceptance, Apple
            will have the right to enforce these terms against you as a
            third-party beneficiary thereof.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">
            13. Changes to These Terms
          </h2>
          <p>
            We may update these Terms of Use from time to time. Changes will be
            reflected on this page with an updated revision date. Continued use
            of Budly after changes constitutes acceptance of the revised terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white">14. Contact</h2>
          <p>
            If you have any questions about these Terms of Use, please contact:
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

        <footer className="border-t border-neutral-800 pt-8 text-sm text-neutral-500">
          <p>
            See also:{" "}
            <a
              href="/budly/privacy-policy"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Privacy Policy
            </a>
          </p>
        </footer>
      </article>
    </main>
  );
}
