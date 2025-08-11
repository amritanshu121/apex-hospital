// app/terms/page.tsx
import Head from 'next/head';
import styles from '../privacy/page.module.css'; // adjust path if needed

export default function TermsPage() {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Apex Hospital Solapur</title>
        <meta
          name="description"
          content="Terms and Conditions for use of Apex Hospital Solapur website and Apex Care App."
        />
      </Head>
      <main className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.title}>Terms and Conditions</h1>

          <p className={styles.paragraph}>
            Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Apex Hospital Solapur’s relationship with you in relation to this website. If you disagree with any part of these terms and conditions, please do not use our website.
          </p>

          <p className={styles.paragraph}>
            The term ‘Apex Hospital Solapur’ or ‘us’ or ‘we’ refers to the owner/operator of the website. The term ‘you’ refers to the user or viewer of our website (
            <a
              href="https://apexhospitalsolapur.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://apexhospitalsolapur.com
            </a>
            ).
          </p>

          <section className={styles.section}>
            <h2 className={styles.heading}>Use of Website</h2>
            <ul className={styles.list}>
              <li>
                The content of the pages of this website is for your general information and use only. It is subject to change without notice.
              </li>
              <li>
                This website uses cookies to monitor browsing preferences. If you allow cookies to be used, certain personal information may be stored by us for use by third parties.
              </li>
              <li>
                Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
              </li>
              <li>
                Your use of any information or materials on this website is entirely at your own risk. It shall be your responsibility to ensure that any products, services or information available through this website meet your specific requirements.
              </li>
              <li>
                This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
              </li>
              <li>
                All trademarks reproduced on this website which are not the property of, or licensed to, the operator are acknowledged.
              </li>
              <li>
                Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offence.
              </li>
              <li>
                From time to time, this website may include links to other websites. These links are provided for your convenience and do not signify endorsement. We have no responsibility for the content of linked sites.
              </li>
              <li>
                Your use of this website and any dispute arising out of such use is subject to the laws of India.
              </li>
            </ul>
          </section>

          <hr className={styles.divider} />

          <section className={styles.section}>
            <h2 className={styles.heading}>Apex Care App Consent & Related Terms</h2>

            <h3 className={styles.subheading}>Online Consult Patient Telemedicine Consent & Disclaimer</h3>
            <p className={styles.paragraph}>
              I hereby attest that I have requested and authorized the treating doctor at Apex Hospital Solapur for an online consult for me or the person I represent regarding the diagnosis mentioned.
            </p>
            <p className={styles.paragraph}>
              The treating doctor will reach conclusions regarding my medical diagnosis based solely on the information provided by me. I understand and agree that online consultation is based on submitted information and, in the absence of a physical evaluation, may be limited or provisional. It is not intended to replace a full face-to-face evaluation. The doctor does not assume responsibility for continued care beyond the online consult. My medical information will be handled with confidentiality, but I understand there are inherent risks in electronic transmission.
            </p>
            <p className={styles.paragraph}>
              I have read the Privacy Policy and voluntarily accept the limitations and risks described herein.
            </p>

            <h3 className={styles.subheading}>Communication Consent</h3>
            <p className={styles.paragraph}>
              By agreeing to these terms, I give permission to Apex Hospital Solapur to reach out to me through digital modes of communication including but not limited to WhatsApp, SMS, and email. Communications may include appointment updates, reminders, delivery of results, offers, promotions, and other service-related information necessary for seamless delivery.
            </p>

            <h3 className={styles.subheading}>Disclaimer and Release</h3>
            <p className={styles.paragraph}>
              I hereby completely and irrevocably release Apex Hospital Solapur and its affiliates, medical staff, consultants, and other professionals (collectively, the “Apex Parties”) from any and all errors, omissions, claims, actions or damages arising from or in connection with the online consult, conclusions, or recommendations. I agree that the Apex Parties have no liability for the accuracy or completeness of medical information submitted or any electronic transmission errors.
            </p>
            <p className={styles.paragraph}>
              I acknowledge that I have given this consent freely and assume the risks described herein.
            </p>
          </section>

          <hr className={styles.divider} />

          <section className={styles.section}>
            <h2 className={styles.heading}>Booking Appointments</h2>
            <p className={styles.paragraph}>
              While Apex Hospital Solapur will attempt to confirm appointments requested via the website or app, it does not guarantee a confirmed appointment. Apex Hospital Solapur and its doctors have no liability if a confirmed appointment is later canceled, postponed, or rescheduled, or if the service provider is unavailable at the scheduled time.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Cancellation</h2>
            <p className={styles.paragraph}>
              Consultations can be booked, rescheduled, or canceled free of cost up to 60 minutes prior to the scheduled start for online or physical consultations. Online consultations may be rescheduled up to three times; physical consultations can be rescheduled once.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>Payment & Refund</h2>
            <p className={styles.paragraph}>
              You may use any supported payment method (e.g., UPI, internet banking, debit/credit cards) to pay fees. Payments are processed via third-party payment aggregators; you agree to their terms. Your details may be shared with the aggregator as per our privacy policy.
            </p>
            <p className={styles.paragraph}>
              Refunds for eligible cancellations are issued via the original payment method, except cash (if applicable). Refunds are processed only for genuine, trackable cancellation requests made through your account dashboard. Requests related to delays, advice quality, treatment efficacy, or health outcomes will not be entertained. Refunds may take up to 15 working days. All refund communications should be sent to the helpdesk.
            </p>
          </section>

         
        </div>
      </main>
    </>
  );
}
