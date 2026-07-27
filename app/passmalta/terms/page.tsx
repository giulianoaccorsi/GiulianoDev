import type { Metadata } from "next";

import {
  LegalSection,
  legalListClassName,
  PassMaltaLegalPage,
} from "@/components/passmalta-legal-page";

const title = "PassMalta Terms of Use";
const description =
  "Terms governing use of the PassMalta theory test study app for iOS and Android.";

export const metadata: Metadata = {
  title: `${title} | Giuliano Accorsi`,
  description,
  alternates: {
    canonical: "/passmalta/terms",
  },
  openGraph: {
    title,
    description,
    url: "/passmalta/terms",
    type: "website",
  },
};

export default function TermsPage() {
  return (
    <PassMaltaLegalPage
      title={title}
      summary="These Terms explain the permitted use of PassMalta, its educational purpose, and the limits of the information it provides."
      relatedHref="/passmalta/privacy"
      relatedLabel="Read the Privacy Policy"
    >
      <LegalSection id="acceptance" title="1. Acceptance of these Terms">
        <p>
          These Terms of Use apply when you download, access, or use PassMalta for
          iOS or Android. By using the app, you agree to these Terms. If you do not
          agree, do not use the app.
        </p>
        <p>
          PassMalta is developed and operated by Giuliano Accorsi. Distribution
          platforms impose licence and account terms that also apply to your use of the
          app. These Terms supplement those platform terms by governing PassMalta content,
          educational features, and your relationship with the developer.
        </p>
      </LegalSection>

      <LegalSection id="purpose" title="2. Educational purpose and official status">
        <p>
          PassMalta is an educational study aid for people preparing for driving
          theory tests in Malta. It is not affiliated with, endorsed by, or operated
          by Transport Malta or any testing authority.
        </p>
        <p>
          PassMalta is not a government service, driving school, legal adviser, or
          substitute for official instruction and current information from the
          relevant authority.
        </p>
      </LegalSection>

      <LegalSection id="accuracy" title="3. Accuracy and exam results">
        <p>
          PassMalta is designed to present study material carefully, but questions,
          answers, examination procedures, road rules, and official guidance may be
          corrected or changed. You are responsible for checking current official
          information when preparing for an examination or making decisions on the road.
        </p>
        <p>
          Using PassMalta does not guarantee that you will pass an examination, obtain
          a licence, or achieve any particular result. Your performance in the app is
          for study purposes and is not an official examination result.
        </p>
      </LegalSection>

      <LegalSection id="licence" title="4. Use of the app and content">
        <p>
          Your right to install and run PassMalta is governed by the applicable platform
          licence. Subject to these Terms, you may use the app&apos;s educational features
          and content for your own noncommercial study.
        </p>
        <p>You may not, except where applicable law expressly allows it:</p>
        <ul className={legalListClassName}>
          <li>Sell, sublicense, rent, or commercially redistribute the app.</li>
          <li>
            Copy, modify, sublicense, or redistribute the original PassMalta software,
            interface assets, or original written material.
          </li>
          <li>
            Use question bank material, images, translations, or other third party
            material in a way that infringes the rights of its owner.
          </li>
          <li>Remove ownership, attribution, or legal notices.</li>
          <li>Use the app or its content to violate law or the rights of others.</li>
          <li>Interfere with the security, integrity, or normal operation of the app.</li>
        </ul>
      </LegalSection>

      <LegalSection id="reports" title="5. Question reports and sharing">
        <p>
          The question report feature uses your device sharing interface. You decide
          whether to send a report and where to send it. You are responsible for the
          information you add and for choosing an appropriate recipient. Do not include
          personal or confidential information that is unnecessary for the report.
        </p>
      </LegalSection>

      <LegalSection id="intellectual-property" title="6. Intellectual property">
        <p>
          The PassMalta software, original interface, original design, and original
          written material are protected by applicable intellectual property laws.
          Questions, images, names, marks, and source material originating from or
          referring to Transport Malta or another rights holder remain the property of
          their respective owners.
        </p>
        <p>
          Nothing in these Terms transfers ownership of third party material or
          represents that Giuliano Accorsi can grant rights in it. Any use outside the
          app requires permission from the relevant rights holder or another lawful
          basis. All third party names and marks are used only to identify their
          respective owners or the relevant subject matter.
        </p>
      </LegalSection>

      <LegalSection id="platform-terms" title="7. Platform terms">
        <p>
          If you obtained PassMalta through the Apple App Store, the {" "}
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 underline decoration-emerald-400/40 underline-offset-4 hover:decoration-emerald-400"
          >
            Apple Standard EULA
          </a>{" "}
          applies to the licence unless a custom end user licence agreement is
          supplied through App Store Connect. If you obtain the app through another
          platform, that platform&apos;s applicable distribution and account terms may
          also apply.
        </p>
        <p>
          These Terms are supplemental terms, not a custom end user licence agreement.
          They do not replace the Apple Standard EULA, another applicable platform
          licence, mandatory consumer rights, or platform obligations that cannot
          lawfully be excluded.
        </p>
      </LegalSection>

      <LegalSection id="availability" title="8. Availability and changes">
        <p>
          Features, content, supported platforms, and availability may change for
          objective reasons, including maintenance, legal compliance, content correction,
          platform requirements, or security. The app may be updated, suspended, or
          discontinued when reasonably necessary for those reasons. This does not affect
          remedies or rights that applicable consumer law requires.
        </p>
      </LegalSection>

      <LegalSection id="warranty" title="9. Warranty disclaimer">
        <p>
          To the extent permitted by applicable law, PassMalta is provided as available
          and without promises that it will be uninterrupted, error free, or suitable
          for a particular examination date or purpose. Nothing in these Terms excludes
          warranties or remedies that applicable consumer law does not permit a
          developer to exclude.
        </p>
      </LegalSection>

      <LegalSection id="liability" title="10. Limitation of liability">
        <p>
          To the extent permitted by applicable law, Giuliano Accorsi is not responsible
          for indirect or consequential loss arising from reliance on the app, inability
          to use it, loss of locally stored progress, examination results, or changes in
          official rules or procedures.
        </p>
        <p>
          This section does not limit liability that cannot lawfully be limited and does
          not affect mandatory consumer rights.
        </p>
      </LegalSection>

      <LegalSection id="termination" title="11. Ending use">
        <p>
          You may stop using PassMalta at any time by deleting the app. Access to
          developer provided features or content may be restricted after a material
          breach of these Terms where applicable law permits it. This does not alter your
          rights under an applicable platform licence or mandatory consumer law.
          Provisions concerning intellectual property, disclaimers, liability, and
          applicable law continue where their nature requires it.
        </p>
      </LegalSection>

      <LegalSection id="law" title="12. Applicable law">
        <p>
          These Terms are governed by the laws of Malta, without limiting mandatory
          consumer rights or protections that apply under the law of your usual place
          of residence. Courts with jurisdiction under applicable law may hear disputes.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="13. Changes to these Terms">
        <p>
          These Terms may be updated to reflect changes to PassMalta, applicable law,
          security, or distribution requirements. The date at the top of this page
          identifies the current version. If a change materially affects your rights,
          reasonable advance notice will be provided through the app or this page where
          reasonably possible and where required by law. You may stop using the app if
          you do not accept the updated Terms. Mandatory rights and remedies remain
          unaffected.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="14. Contact">
        <p>
          Developer: Giuliano Accorsi
          <br />
          Email: {" "}
          <a
            href="mailto:giulianoaccorsi@gmail.com"
            className="text-emerald-400 underline decoration-emerald-400/40 underline-offset-4 hover:decoration-emerald-400"
          >
            giulianoaccorsi@gmail.com
          </a>
        </p>
      </LegalSection>
    </PassMaltaLegalPage>
  );
}
