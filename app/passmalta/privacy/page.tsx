import type { Metadata } from "next";

import {
  LegalSection,
  legalListClassName,
  PassMaltaLegalPage,
} from "@/components/passmalta-legal-page";

const title = "PassMalta Privacy Policy";
const description =
  "How PassMalta handles local study progress, device backups, question reports, and support messages.";

export const metadata: Metadata = {
  title: `${title} | Giuliano Accorsi`,
  description,
  alternates: {
    canonical: "/passmalta/privacy",
  },
  openGraph: {
    title,
    description,
    url: "/passmalta/privacy",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <PassMaltaLegalPage
      title={title}
      summary="This policy explains what the PassMalta apps store, what they do not send to the developer, and what happens when you contact support."
      relatedHref="/passmalta/terms"
      relatedLabel="Read the Terms of Use"
    >
      <LegalSection id="scope" title="1. Scope">
        <p>
          This Privacy Policy applies to PassMalta for iOS and Android, developed and
          operated by Giuliano Accorsi. It describes the behaviour confirmed in iOS
          0.1.0, build 8, and Android 0.1.0, version code 1.
        </p>
        <p>
          PassMalta is an offline educational study app. It does not require an
          account and does not ask you to provide your name, email address, phone
          number, or payment information to use the app.
        </p>
      </LegalSection>

      <LegalSection id="local-data" title="2. Information stored on your device">
        <p>
          PassMalta stores the following information locally on your device so that
          study features work between launches:
        </p>
        <ul className={legalListClassName}>
          <li>Your selected licence category and content language.</li>
          <li>Whether you completed onboarding.</li>
          <li>
            Question attempts, selected answers, correctness, study mode, course,
            catalogue revision, and the date and time of the attempt.
          </li>
          <li>Completed mock exam scores and completion dates.</li>
          <li>An active mock exam snapshot when you choose to resume it later.</li>
        </ul>
        <p>
          Internal question identifiers and randomly generated session identifiers
          are used to organise this local progress. They are not advertising IDs,
          account IDs, or identifiers assigned to your device.
        </p>
      </LegalSection>

      <LegalSection id="collection" title="3. Information not collected by the app">
        <p>
          The audited versions of PassMalta do not send your study activity to
          Giuliano Accorsi or any server. The apps do not contain a developer backend
          and do not include analytics, advertising, tracking, or crash reporting SDKs.
        </p>
        <p>
          The apps do not request access to location, contacts, photos, camera,
          microphone, notifications, health information, or advertising identifiers.
          The Android app does not request internet access. The iOS app declares no
          collected data types or tracking domains in its privacy manifest.
        </p>
      </LegalSection>

      <LegalSection id="backups" title="4. Device backup and transfer">
        <p>
          Your operating system may include locally stored PassMalta data in a device
          backup or transfer, depending on your device and account settings. These
          services are controlled by Apple, Google, or your device provider. PassMalta
          does not receive a copy of those backups.
        </p>
        <p>
          On Android, the configured backup rules include completed progress and the
          selected course and language. They exclude the active mock exam snapshot.
          Backup availability and retention are controlled by the platform providing
          the backup service.
        </p>
      </LegalSection>

      <LegalSection id="sharing" title="5. Reports and sharing initiated by you">
        <p>
          PassMalta includes a feature for reporting a question. The app prepares a
          text report and opens the sharing interface provided by your device. You
          choose whether to send it and which app or person receives it. PassMalta
          does not send the report automatically and does not receive it unless you
          deliberately send it to Giuliano Accorsi.
        </p>
        <p>
          Once you share information with another app or service, that recipient
          handles it under its own privacy terms.
        </p>
      </LegalSection>

      <LegalSection id="contact-data" title="6. Information you send by email">
        <p>
          If you contact Giuliano Accorsi by email, the email address, name, message,
          and any attachments you provide are received and used to answer your request,
          investigate a reported question, or provide support. This information is
          not generated or transmitted automatically by PassMalta.
        </p>
        <p>
          The published support mailbox uses Google Gmail. Email is processed to take
          steps at your request, to support the legitimate interests of answering users
          and maintaining the app, and when necessary to comply with legal obligations.
          It is kept until the request is resolved and then only while the record is
          needed for follow up, security, a legal claim, or a legal obligation.
        </p>
      </LegalSection>

      <LegalSection id="website" title="7. These legal pages">
        <p>
          The PassMalta legal pages do not include advertising, analytics, or tracking
          scripts. Giuliano.work is hosted by Vercel. Its infrastructure may process
          standard web request information, such as an IP address, browser details, and
          request time, as necessary to deliver, secure, and operate the website. This
          supports the legitimate interest of providing a reliable and secure public
          website. PassMalta does not use this information to build advertising profiles.
        </p>
      </LegalSection>

      <LegalSection id="sharing-disclosure" title="8. Sharing and sale of information">
        <p>
          Giuliano Accorsi does not sell or rent personal information. Information
          included in a support email may be processed by Google as the mailbox provider.
          Standard web request information may be processed by Vercel as the website
          hosting provider. Information may also be disclosed when required by applicable
          law or when necessary to protect legal rights and security.
        </p>
        <p>
          Where a provider processes personal information on behalf of Giuliano Accorsi,
          it is required to handle that information consistently with this policy,
          applicable law, and the purpose for which the information was provided.
        </p>
      </LegalSection>

      <LegalSection id="retention" title="9. Retention and deletion">
        <p>
          Study progress remains stored locally until you remove it. On Android, you can
          clear PassMalta storage in the system app settings or uninstall the app. On
          iOS, use Delete App to remove the app and its local data. Offload App preserves
          documents and data and therefore does not provide the same deletion.
        </p>
        <p>
          Copies may remain in a device backup until Apple, Google, or another platform
          provider deletes or replaces that backup under your account settings and its
          retention rules. Deleting the app does not necessarily delete an existing
          device backup.
        </p>
        <p>
          PassMalta has no user accounts and no server side study profile to delete. You
          may ask for deletion of a support email using the address below. The request
          will be honoured unless the information must be retained for a legal obligation,
          security, or the establishment, exercise, or defence of legal claims.
        </p>
      </LegalSection>

      <LegalSection id="security" title="10. Security">
        <p>
          Local app data is stored using the storage and application sandbox provided
          by iOS or Android. Giuliano.work is delivered over HTTPS, and Google and Vercel
          apply their own organisational and technical controls to the limited information
          they process. Access to support email is restricted to the developer account.
          No method of storage or transmission is completely risk free, so you should
          also keep your device and platform accounts protected.
        </p>
      </LegalSection>

      <LegalSection id="rights" title="11. Your choices and rights">
        <p>
          You control local PassMalta data through your device settings. Depending on
          the law that applies to you, you may have rights to access, correct, erase,
          restrict, or object to processing of personal information held about you, and
          to receive portable data where that right applies. You can ask a privacy
          question or make a request using the contact details below.
        </p>
        <p>
          If you are in the European Union, you may also lodge a complaint with the {" "}
          <a
            href="https://idpc.org.mt/file-a-complaint/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 underline decoration-emerald-400/40 underline-offset-4 hover:decoration-emerald-400"
          >
            Office of the Information and Data Protection Commissioner in Malta
          </a>{" "}
          or with the supervisory authority responsible for your usual place of residence.
        </p>
      </LegalSection>

      <LegalSection id="changes" title="12. Changes to this policy">
        <p>
          This policy may be updated when PassMalta changes its data practices or when
          legal requirements change. The date at the top of this page identifies the
          current version. Material changes should be reflected in the app and store
          disclosures before the changed practice is introduced.
        </p>
      </LegalSection>

      <LegalSection id="contact" title="13. Contact">
        <p>
          Developer and privacy contact: Giuliano Accorsi
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
