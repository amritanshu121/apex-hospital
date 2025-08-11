// pages/privacy-policy.tsx
import Head from 'next/head';
import styles from './page.module.css';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Apex Hospital Solapur</title>
        <meta
          name="description"
          content="Privacy Policy of Apex Hospital Solapur. How we collect, use, process, store, and protect your personal and health data in compliance with applicable Indian laws."
        />
      </Head>
      <main className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.title}>Apex Hospital Solapur Privacy Policy</h1>
          <p className={styles.paragraph}>
            “We,” “Us,” and “Our” refer to <strong>Apex Hospital Solapur</strong>. We are committed to safeguarding the privacy and security of your personal and health data. This Privacy Policy outlines how we collect, use, process, store, and protect your personal information in compliance with applicable laws, including:
          </p>
          <ul className={styles.list}>
            <li>The Digital Personal Data Protection Act, 2023 (DPDPA),</li>
            <li>The Information Technology Act, 2000 – Section 43A, and</li>
            <li>
              The Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011.
            </li>
          </ul>
          <p className={styles.paragraph}>
            This policy applies to all personal information collected and processed during the course of providing our services, both online (via{' '}
            <a href="https://apexhospitalsolapur.com" className={styles.link}>
              https://apexhospitalsolapur.com
            </a>
            ) and offline. The terms ‘You’ or ‘Your’ refer to patients, caregivers, or visitors, and ‘We,’ ‘Us,’ and ‘Our’ refer to Apex Hospital Solapur.
          </p>

          <section className={styles.section}>
            <h2 className={styles.heading}>1. Scope and Applicability</h2>
            <p className={styles.paragraph}>
              This Privacy Policy applies to:
            </p>
            <ul className={styles.list}>
              <li>
                Personal information collected when you visit our hospital, access our services, or interact with us through our website.
              </li>
              <li>Data shared during consultations, registrations, or other hospital-related processes.</li>
              <li>
                Our compliance with the above laws ensures that we process sensitive personal data with the highest standards of privacy and security.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>2. Personal Information We Collect</h2>
            <p className={styles.paragraph}>
              We may collect the following categories of personal information:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>Identity Information:</strong> Name, gender, date of birth, and contact details.
              </li>
              <li>
                <strong>Health Information:</strong> Medical history, diagnostic records, prescriptions, and treatment plans.
              </li>
              <li>
                <strong>Financial Information:</strong> Billing details, insurance information, and payment transaction data.
              </li>
              <li>
                <strong>Website and Technical Data:</strong> IP address, browser type, device information, and usage patterns through cookies.
              </li>
              <li>Any additional data provided voluntarily by you during registration, feedback, or consultations.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>3. Legal Framework for Data Processing</h2>
            <p className={styles.paragraph}>
              We process your personal information in compliance with:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>The Digital Personal Data Protection Act, 2023 (DPDPA):</strong> Ensuring lawful, fair, and transparent processing of personal and sensitive personal data. Obtaining explicit consent where necessary.
              </li>
              <li>
                <strong>The Information Technology Act, 2000 – Section 43A:</strong> Implementing and maintaining reasonable security practices to protect sensitive personal information.
              </li>
              <li>
                <strong>The 2011 Rules:</strong> Processing sensitive personal information (e.g., medical data) only with consent and following reasonable security practices such as encryption, access controls, and regular audits.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>4. Purpose of Data Collection</h2>
            <p className={styles.paragraph}>
              Your personal information is used for the following purposes:
            </p>
            <ul className={styles.list}>
              <li>Delivering healthcare services, including diagnosis, treatment, and follow-up care.</li>
              <li>Managing hospital operations, such as patient registration, billing, and medical record maintenance.</li>
              <li>Complying with legal, regulatory, and audit requirements.</li>
              <li>Improving the quality of care through research and analysis.</li>
              <li>Communicating appointment reminders, updates, or promotional offers.</li>
              <li>Aggregated, anonymized data may be used for research and operational insights.</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>5. Consent for Data Processing</h2>
            <p className={styles.paragraph}>
              By accessing our services or sharing your personal information, you consent to:
            </p>
            <ul className={styles.list}>
              <li>The collection, use, and transfer of your personal information as per this Privacy Policy.</li>
              <li>The processing of sensitive personal data for the purposes mentioned above, including healthcare delivery.</li>
            </ul>
            <p className={styles.paragraph}>
              You may withdraw consent at any time (refer to Clause 8).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>6. Data Sharing and Transfers</h2>
            <p className={styles.paragraph}>
              We do not sell or rent your personal information. Data may be shared in the following circumstances:
            </p>
            <ul className={styles.list}>
              <li>
                <strong>With Health Professionals:</strong> For delivering medical care.
              </li>
              <li>
                <strong>With Service Providers:</strong> For lab tests, imaging, or insurance claims, under confidentiality agreements.
              </li>
              <li>
                <strong>Legal and Regulatory Requirements:</strong> To comply with applicable laws or court orders.
              </li>
              <li>
                <strong>Cross-Border Transfers:</strong> Data will be shared only with countries that are allow-listed under the applicable provisions of DPDPA, ensuring adequate safeguards are in place.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>7. Data Security</h2>
            <p className={styles.paragraph}>
              We have adopted reasonable security practices and procedures as required under Section 43A of the IT Act and the 2011 Rules. These include:
            </p>
            <ul className={styles.list}>
              <li>Encryption of sensitive personal data during storage and transmission.</li>
              <li>Role-based access controls to ensure only authorized personnel handle your data.</li>
              <li>Regular security audits, monitoring, and vulnerability assessments.</li>
              <li>Secure backups and disaster recovery mechanisms to ensure data availability.</li>
            </ul>
            <p className={styles.paragraph}>
              While we take every precaution, no system is completely secure. We encourage you to protect your login credentials and report any suspicious activity immediately.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>8. Your Rights</h2>
            <p className={styles.paragraph}>
              You have the following rights regarding your personal data:
            </p>
            <ul className={styles.list}>
              <li><strong>Access:</strong> Request details of your personal data.</li>
              <li><strong>Correction:</strong> Rectify inaccuracies in your data.</li>
              <li><strong>Erasure:</strong> Request deletion of your personal information, subject to legal or regulatory requirements.</li>
              <li><strong>Data Portability:</strong> Obtain a copy of your data in a structured format.</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw consent by contacting us at the email address below.</li>
            </ul>
            <p className={styles.paragraph}>
              To exercise your rights, please contact our Grievance Officer (refer to Clause 12).
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>9. Data Retention</h2>
            <p className={styles.paragraph}>
              We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or comply with applicable laws.
            </p>
            <ul className={styles.list}>
              <li><strong>Medical Records:</strong> Retained as per legal and regulatory requirements.</li>
              <li><strong>Billing and Financial Data:</strong> Retained for audit and compliance purposes.</li>
            </ul>
            <p className={styles.paragraph}>
              Once the retention period expires, data is securely deleted or anonymized.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>10. Use of Cookies</h2>
            <p className={styles.paragraph}>
              We use cookies and similar technologies to:
            </p>
            <ul className={styles.list}>
              <li>Enhance the functionality of our website.</li>
              <li>Analyze user behavior and improve user experience.</li>
            </ul>
            <p className={styles.paragraph}>
              You can manage cookie preferences via your browser settings. Disabling cookies may affect certain features of the website.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>11. Changes to This Policy</h2>
            <p className={styles.paragraph}>
              We may update this Privacy Policy from time to time. The latest version will always be available on our website. Significant changes will be communicated directly to you.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.heading}>12. Contact and Grievance Redressal</h2>
            <p className={styles.paragraph}>
              If you have any concerns or complaints regarding this Privacy Policy or your data privacy, please contact us at{' '}
              <a href="mailto:dpo@apexhospitalsolapur.com" className={styles.link}>
                dpo@apexhospitalsolapur.com
              </a>
              . Our Data Protection Officer will address your concerns within a reasonable timeframe.
            </p>
          </section>

          <hr className={styles.divider} />

          <section className={styles.section}>
            <h2 className={styles.heading}>Apex Care App Privacy Policy</h2>
            <p className={styles.paragraph}>
              We use reasonable technical, administrative, and physical security measures for the purpose of safeguarding all data you share with us. We also have comprehensive internal policies in place to prevent unauthorized access to your data. We take adequate steps to ensure that third parties we share data with also adopt reasonable security practices and procedures to ensure the privacy and security of your information. We are committed to maintaining the privacy of the information uploaded by you on the Apex Care App.
            </p>
            <h3 className={styles.subheading}>Your Rights</h3>
            <p className={styles.paragraph}>
              By clicking “I accept” when downloading the App, and/or using our services you represent that you voluntarily provide us with personal information including medical and financial information, and consent to their collection, use, and disclosure in accordance with this Privacy Policy. We shall act as per your representation of authority and shall not make any independent enquiries to ascertain the veracity of your authorisation. We take reasonable steps to ensure that your personal information is accurate, complete, and up to date. However, you have the sole responsibility of ensuring that you review the accuracy of the information provided by you and contact us in case of discrepancies, or in case you wish to discontinue the use of our services.
            </p>
            <p className={styles.paragraph}>
              You are free not to share any medical or other information that you consider confidential and withdraw consent for us to use data that you have already provided. In the event that you refuse to share any information or withdraw consent to process information that you have previously given to us, we reserve the right to restrict or deny the provision of our services for which we consider such information to be necessary.
            </p>
            <p className={styles.paragraph}>
              <strong>Changes to this Privacy Policy:</strong> We may periodically revise or update this Privacy Policy. Your continued use of our products and services after the effective date of the Privacy Policy means that you accept the revised Privacy Policy.
            </p>
          </section>

         
        </div>
      </main>
    </>
  );
}
