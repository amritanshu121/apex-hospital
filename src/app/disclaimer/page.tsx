// pages/disclaimer.tsx
import Head from 'next/head';
import styles from './page.module.css'; // Reuse the same CSS as privacy policy

export default function Disclaimer() {
  return (
    <>
      <Head>
        <title>Disclaimer | Apex Hospital Solapur</title>
        <meta
          name="description"
          content="Disclaimer for Apex Hospital Solapur website. Please read the limitations of liability and terms of use."
        />
      </Head>
      <main className={styles.page}>
        <div className={styles.card}>
          <h1 className={styles.title}>Disclaimer</h1>
          <p className={styles.paragraph}>
            The information contained in this website (
            <a
              href="https://apexhospitalsolapur.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              https://apexhospitalsolapur.com
            </a>
            ) is for general information purposes only. The information is provided by Apex Hospital
            Solapur and while we endeavour to keep the information up-to-date and correct, we make
            no representations or warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, suitability or availability with respect to the website or the
            information, products, services, or related graphics contained on the website for any
            purpose. Any reliance you place on such information is therefore strictly at your own risk.
          </p>

          <p className={styles.paragraph}>
            In no event will we be liable for any loss or damage including without limitation, indirect
            or consequential loss or damage, or any loss or damage whatsoever arising from loss of data
            or profits, arising out of, or in connection with, the use of this website.
          </p>

          <p className={styles.paragraph}>
            Through this website you are able to link to other websites which are not under the control
            of Apex Hospital Solapur. We have no control over the nature, content and availability of
            those sites. The inclusion of any links does not necessarily imply a recommendation or
            endorse the views expressed within them.
          </p>

          <p className={styles.paragraph}>
            Every effort is made to keep the website up and running smoothly. However, Apex Hospital
            Solapur takes no responsibility for, and will not be liable for, the website being
            temporarily unavailable due to technical issues beyond our control.
          </p>

    
        </div>
      </main>
    </>
  );
}
