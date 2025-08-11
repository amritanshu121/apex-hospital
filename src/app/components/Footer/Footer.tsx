import Link from "next/link"
import Image from "next/image"
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "lucide-react"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          {/* Hospital Info */}
          <div className={styles.section}>
            <div className={styles.logoWrapper}>
              <Image
                src="/images/Apex Logos.svg" // Replace with your actual logo path
                alt="Apex Hospital Logo"
                width={180}
                height={60}
                className={styles.logo}
              />
            </div>
            <p className={styles.text}>
              Leading multi-specialty hospital in Solapur providing world-class healthcare services with compassion and
              excellence.
            </p>
            <div className={styles.socials}>
              <a href="https://www.facebook.com/profile.php?id=61578704582486" className={styles.socialLink}>
                <Facebook />
              </a>
              <a href="https://www.instagram.com/apex_hospital_solapur/" className={styles.socialLink}>
                <Instagram />
              </a>
              <a href="#" className={styles.socialLink}>
                <Youtube />
              </a>
              <a href="https://www.linkedin.com/in/apex-hospital-7a1959376/" className={styles.socialLink}>
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.links}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/gallery">Gallery</Link></li>
              <li><Link href="/centers-of-excellence">Centers of Excellence</Link></li>
              <li><Link href="/specialities">Specialities</Link></li>
              <li><Link href="/health-packages">Health Packages</Link></li>
              <li><Link href="/patients-portal">Patients Portal</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Services</h3>
            <ul className={styles.links}>
              <li><Link href="/appointment">Book Appointment</Link></li>
              <li><Link href="/doctors">Find Doctor</Link></li>
              <li><Link href="/emergency">Emergency Care</Link></li>
              <li><Link href="/facilities">Facilities</Link></li>
              <li><Link href="/health-packages">Health Checkups</Link></li>
              <li><Link href="/dormitory">Dormitory</Link></li>
              <li><Link href="/cafeteria">Cafeteria</Link></li>
              <li><Link href="/parking">Parking Area</Link></li>
            </ul>
          </div>

          {/* Patients */}
          <div className={styles.section}>
            <h3 className={styles.heading}>Patients Portal</h3>
            <ul className={styles.links}>
              <li><Link href="/admissions">Admissions</Link></li>
              <li><Link href="/surgery-prep">Preparing for surgery</Link></li>
              <li><Link href="/patient-safety">Patient Safety</Link></li>
              <li><Link href="/billing">Billing and Insurance</Link></li>
              <li><Link href="/amenities">Amenities</Link></li>
              <li><Link href="/medical-records">Medical Record</Link></li>
              <li><Link href="/patient-stories">Patient Stories</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <div className={styles.bottomContent}>
            <p className={styles.copyright}>© 2025 Apex Hospital. All rights reserved.</p>
            <div className={styles.bottomLinks}>
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/disclaimer">Disclaimer</Link>
              <Link href="/terms">T&C</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
