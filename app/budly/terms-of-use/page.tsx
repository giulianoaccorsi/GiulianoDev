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
            Last updated: May 16, 2026
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
            1. Acceptance of Terms and Eligibility
          </h2>
          <p>
            By creating an account or using Budly, you agree to these Terms of
            Use and our{" "}
            <a
              href="/budly/privacy-policy"
              className="text-blue-400 underline hover:text-blue-300"
            >
              Privacy Policy
            </a>
            . If you do not agree to these terms, do not use the app.
          </p>
          <p>
            <strong className="text-neutral-200">Eligibility:</strong> Budly is
            intended for adults capable of entering into a binding contract
            under the laws of their jurisdiction. By using Budly you confirm
            that:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              You are at least 18 years old; or
            </li>
            <li>
              You are between the legal minimum age of your jurisdiction
              (13 in most cases; 16 in many EU/EEA Member States; subject to
              the Brazilian rules described below) and 18, and you have the
              verifiable consent of a parent or legal guardian to use the app
              and to be bound by these Terms.
            </li>
          </ul>
          <p>
            <strong className="text-neutral-200">
              Brazilian users (LGPD Art. 14):
            </strong>{" "}
            children (under 12) may not create an account. Adolescents (12 to
            17) may use Budly only with specific and prominent consent from a
            parent or legal guardian and only in the adolescent&apos;s best
            interest.
          </p>
          <p>
            If we learn that an account has been created in violation of these
            requirements, we will terminate it and delete the associated data.
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
            Store or Google Play at the time of purchase applies. All payments
            are processed by Apple (App Store / Apple ID) on iOS, or by Google
            (Google Play Billing) on Android. Subscription entitlement is
            managed through RevenueCat, Inc. Budly does not collect or store
            any payment instrument, card number, or billing information.
          </p>
          <p>
            <strong className="text-neutral-200">Auto-renewal:</strong>{" "}
            subscriptions automatically renew unless canceled at least 24
            hours before the end of the current billing period. Your account
            will be charged for renewal within 24 hours prior to the end of
            the current period. The renewal price is the price of the
            equivalent plan in the store on the day of renewal.
          </p>
          <p>
            <strong className="text-neutral-200">Cancellation:</strong> you
            can manage and cancel your subscription at any time:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong className="text-neutral-200">iOS:</strong> Settings
              &gt; [your name] &gt; Subscriptions &gt; Budly.
            </li>
            <li>
              <strong className="text-neutral-200">Android:</strong> Play
              Store app &gt; Profile &gt; Payments &amp; subscriptions &gt;
              Subscriptions &gt; Budly.
            </li>
          </ul>
          <p>
            Canceling stops the next renewal; you keep access until the end of
            the current paid period. Deleting the app does{" "}
            <strong className="text-neutral-200">not</strong> cancel the
            subscription — you must cancel through the store.
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
            4. Refunds and Right of Withdrawal
          </h2>
          <p>
            All purchases are processed by Apple or by Google Play. Refunds
            are handled by the respective store in accordance with that
            store&apos;s policy:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <strong className="text-neutral-200">Apple (iOS):</strong>{" "}
              <a
                href="https://reportaproblem.apple.com"
                className="text-blue-400 underline hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                reportaproblem.apple.com
              </a>
            </li>
            <li>
              <strong className="text-neutral-200">
                Google Play (Android):
              </strong>{" "}
              <a
                href="https://support.google.com/googleplay/answer/2479637"
                className="text-blue-400 underline hover:text-blue-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                support.google.com/googleplay/answer/2479637
              </a>
            </li>
          </ul>
          <p>
            Budly does not process refunds directly and cannot issue refunds on
            behalf of Apple or Google.
          </p>
          <p>
            <strong className="text-neutral-200">
              Brazilian consumers — right of withdrawal (CDC Art. 49):
            </strong>{" "}
            if you purchased the subscription from outside a physical
            establishment (which includes all in-app purchases), you have{" "}
            <strong className="text-neutral-200">7 days</strong> from the date
            of purchase or activation to withdraw and receive a full refund.
            To exercise this right, request the refund through the store
            channel above and, if needed, contact us at{" "}
            <a
              href="mailto:support@budlyapp.app"
              className="text-blue-400 underline hover:text-blue-300"
            >
              support@budlyapp.app
            </a>{" "}
            so we can assist with the store request.
          </p>
          <p>
            <strong className="text-neutral-200">EU/EEA consumers:</strong>{" "}
            you have a 14-day right of withdrawal for digital services under
            Directive 2011/83/EU, except where you have expressly consented to
            immediate performance of the digital service and acknowledged that
            you thereby lose the right of withdrawal. By starting to use a
            paid Budly Pro feature during the withdrawal period, you provide
            such consent and acknowledgement.
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
            10. Governing Law and Jurisdiction
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the Federative Republic of Brazil, without regard to
            its conflict of law provisions.
          </p>
          <p>
            Any dispute arising out of or relating to these Terms or your use
            of Budly shall be submitted to the exclusive jurisdiction of the
            courts of the{" "}
            <strong className="text-neutral-200">
              District of Porto Alegre, Rio Grande do Sul, Brazil
            </strong>
            , with express waiver of any other, however privileged.
          </p>
          <p>
            <strong className="text-neutral-200">Consumers:</strong> nothing
            in this section prevents you from bringing an action in the courts
            of your domicile when such a right is granted to you by mandatory
            consumer-protection law (including the Brazilian C&oacute;digo de
            Defesa do Consumidor and equivalent EU/EEA legislation).
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
            12. Additional Terms for the App Store (Apple) Version
          </h2>
          <p>
            The following terms apply only to the version of Budly downloaded
            from the Apple App Store (the &quot;Licensed Application&quot;)
            and are required by Apple Inc. (&quot;Apple&quot;) under the Apple
            Developer Program License Agreement, Schedule 1. In the event of a
            conflict with the rest of these Terms, this section prevails for
            the App Store version.
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            (a) Acknowledgement
          </h3>
          <p>
            You acknowledge that these Terms of Use are concluded between you
            and Giuliano Accorsi only, and not with Apple. Apple is not
            responsible for the Licensed Application or its content.
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            (b) Scope of License
          </h3>
          <p>
            The license granted to you for the Licensed Application is a
            limited, non-transferable license to use the Licensed Application
            on any Apple-branded products that you own or control, and as
            permitted by the Usage Rules set forth in the Apple Media Services
            Terms and Conditions, except that the Licensed Application may be
            accessed and used by other accounts associated with you via Family
            Sharing or volume purchasing.
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            (c) Maintenance and Support
          </h3>
          <p>
            Giuliano Accorsi is solely responsible for providing any
            maintenance and support services with respect to the Licensed
            Application, as specified in these Terms or as required by
            applicable law. You acknowledge that Apple has no obligation
            whatsoever to furnish any maintenance or support services with
            respect to the Licensed Application.
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            (d) Warranty
          </h3>
          <p>
            Giuliano Accorsi is solely responsible for any product warranties,
            whether express or implied by law, to the extent not effectively
            disclaimed. In the event of any failure of the Licensed
            Application to conform to any applicable warranty, you may notify
            Apple, and Apple will refund the purchase price (if any) for the
            Licensed Application to you. To the maximum extent permitted by
            applicable law, Apple will have no other warranty obligation
            whatsoever with respect to the Licensed Application, and any
            other claims, losses, liabilities, damages, costs or expenses
            attributable to any failure to conform to any warranty will be
            Giuliano Accorsi&apos;s sole responsibility.
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            (e) Product Claims
          </h3>
          <p>
            You and Giuliano Accorsi acknowledge that Giuliano Accorsi, not
            Apple, is responsible for addressing any claims of yours or any
            third party relating to the Licensed Application or your
            possession and/or use of the Licensed Application, including, but
            not limited to: (i) product liability claims; (ii) any claim that
            the Licensed Application fails to conform to any applicable legal
            or regulatory requirement; and (iii) claims arising under
            consumer protection, privacy, or similar legislation, including
            in connection with the Licensed Application&apos;s use of the
            HealthKit or HomeKit frameworks (which Budly does not use).
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            (f) Intellectual Property Rights
          </h3>
          <p>
            You and Giuliano Accorsi acknowledge that, in the event of any
            third-party claim that the Licensed Application or your
            possession and use of the Licensed Application infringes that
            third party&apos;s intellectual property rights, Giuliano
            Accorsi, not Apple, will be solely responsible for the
            investigation, defense, settlement, and discharge of any such
            intellectual property infringement claim.
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            (g) Legal Compliance
          </h3>
          <p>
            You represent and warrant that (i) you are not located in a
            country that is subject to a U.S. Government embargo, or that has
            been designated by the U.S. Government as a &quot;terrorist
            supporting&quot; country; and (ii) you are not listed on any U.S.
            Government list of prohibited or restricted parties.
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            (h) Developer Name and Address
          </h3>
          <p>
            Any questions, complaints, or claims with respect to the Licensed
            Application should be directed to:
          </p>
          <p>
            Giuliano Accorsi
            <br />
            Porto Alegre, Rio Grande do Sul, Brazil
            <br />
            <a
              href="mailto:support@budlyapp.app"
              className="text-blue-400 underline hover:text-blue-300"
            >
              support@budlyapp.app
            </a>
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            (i) Third Party Terms of Agreement
          </h3>
          <p>
            You must comply with applicable third-party terms of agreement
            when using the Licensed Application (for example, your wireless
            data service agreement).
          </p>

          <h3 className="text-lg font-medium text-neutral-200">
            (j) Third Party Beneficiary
          </h3>
          <p>
            You and Giuliano Accorsi acknowledge and agree that Apple, and
            Apple&apos;s subsidiaries, are third-party beneficiaries of these
            Terms of Use, and that, upon your acceptance of these Terms,
            Apple will have the right (and will be deemed to have accepted
            the right) to enforce these Terms against you as a third-party
            beneficiary thereof.
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
            If you have any questions about these Terms of Use, please
            contact:
          </p>
          <p>
            <strong className="text-neutral-200">Giuliano Accorsi</strong>
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
