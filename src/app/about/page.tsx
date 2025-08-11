"use client"

import Image from "next/image"
import { Award, Heart, Users, Target, Eye, Handshake, X, GraduationCap, Star, Calendar} from "lucide-react"
import { useState } from "react"
import styles from "./page.module.css"

interface TeamMember {
  name: string;
  qualifications: string;
  position: string;
  specialization: string;
  experience: string;
  image: string;
  achievements: string[];
  education: string[];
  expertise: string[];
  awards: string[];
  about: string;
}

const AboutPage = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const teamMembers: TeamMember[] = [
    {
      name: "Dr. RIZWAN UL HAQUE",
      qualifications: "MBBS, MD, DNB, MNAMS, DM(Cardiology), FACC(USA), FSCAI(USA), FESC(Paris), FRCP(Glasgow), FCCP(USA), FRSTM(London)",
      position: "Chairman",
      specialization: "Cardiology",
      experience: "25+ years",
      image: "/images/sir.JPG",
      // Rizwan Sir's specific data
      achievements: [
        "Performed over 15,000+ successful cardiac procedures",
        "Pioneer in interventional cardiology in Solapur region",
        "Established first cardiac catheterization lab in the region",
        "Successfully treated complex cardiac cases with 99% success rate"
      ],
      education: [
        "MBBS - Government Medical College, Aurangabad",
        "MD Internal Medicine - Grant Medical College, Mumbai", 
        "DM Cardiology - King Edward Memorial Hospital, Mumbai",
        "Fellowship in Interventional Cardiology - USA"
      ],
      expertise: [
        "Complex Coronary Interventions",
        "Primary Angioplasty",
        "Structural Heart Disease",
        "Cardiac Emergency Management"
      ],
      awards: [
        "Best Cardiologist Award - Maharashtra Medical Association 2023",
        "Excellence in Cardiac Care - Solapur Medical Society 2022",
        "Lifetime Achievement Award - Indian Cardiac Society 2021"
      ],
      about: "Dr. Rizwan Ul Haque is the visionary founder and Chairman of Apex Hospital. With over 25 years of dedicated service, he has revolutionized cardiac care in Solapur and surrounding regions."
    },
    {
      name: "Dr. MEHA JABEEN HAQ",
      qualifications: "M.B.B.S, M.S(OBG), FMAS, DMAS",
      position: "CEO",
      specialization: "High Risk Pregnancy & Gynecological Endoscopic Surgeries",
      experience: "20+ years",
      image: "/images/maam.jpg",
      // Meha Maam's specific data
      achievements: [
        "Successfully managed 8,000+ deliveries including high-risk pregnancies",
        "Expert in advanced laparoscopic gynecological procedures",
        "Established comprehensive women's health center",
        "Zero maternal mortality rate in complex cases over 5 years"
      ],
      education: [
        "MBBS - Government Medical College, Miraj",
        "MS Obstetrics & Gynecology - B.J. Medical College, Pune",
        "Fellowship in Minimal Access Surgery - World Laparoscopy Hospital",
        "Advanced training in High Risk Pregnancy - KEM Hospital, Mumbai"
      ],
      expertise: [
        "High Risk Obstetrics",
        "Advanced Laparoscopic Surgery", 
        "Gynecological Oncology",
        "Infertility Management"
      ],
      awards: [
        "Best Gynecologist Award - Maharashtra Obstetric Society 2023",
        "Excellence in Womens Healthcare - Solapur Medical Association 2022"
      ],
      about: "Dr. Meha Jabeen Haq serves as the CEO of Apex Hospital and is a renowned gynecologist specializing in high-risk pregnancies and minimally invasive surgeries. Her compassionate care has made her the most trusted name in women's healthcare in the region."
    },
    { 
      name: "Dr. FAROOQ MANIYAR",
      qualifications: "B.com, MBA, PhD",
      position: "Managing Director",
      specialization: "Hospital Administration & Healthcare Management",
      experience: "18+ years",
      image: "/placeholder.svg?height=300&width=300",
      // Farooq Sir's specific data (different structure)
      achievements: [
        "Successfully transformed Apex Hospital into NABH accredited facility",
        "Implemented cutting-edge hospital management systems",
        "Led digital transformation initiatives across all departments"
      ],
      education: [
        "B.Com - Solapur University",
        "MBA in Healthcare Management - Symbiosis Institute, Pune",
        "PhD in Hospital Administration - Bharati Vidyapeeth University"
      ],
      expertise: [
        "Hospital Administration",
        "Quality Management Systems",
        "Strategic Healthcare Planning",
        "Healthcare Technology Implementation"
      ],
      awards: [
        "Healthcare Administrator Excellence Award 2023",
        "Best Hospital Management - Maharashtra Healthcare Awards 2022"
      ],
      about: "Dr. Farooq Maniyar is the Managing Director responsible for the strategic operations and administration of Apex Hospital. His innovative approach to healthcare management has positioned the hospital as a leader in quality healthcare delivery."
    }
  ]

  const achievements = [
    { icon: <Award />, title: "NABH Accredited", description: "National Accreditation Board for Hospitals" },
    { icon: <Heart />, title: "50,000+ Lives Saved", description: "Over two decades of service" },
    { icon: <Users />, title: "500+ Medical Staff", description: "Experienced healthcare professionals" },
    { icon: <Target />, title: "99% Success Rate", description: "In critical care procedures" },
  ]

  const openModal = (member: TeamMember) => {
    setSelectedMember(member)
  }

  const closeModal = () => {
    setSelectedMember(null)
  }

  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>About Apex Hospital</h1>
              <p>
                Leading healthcare excellence in Solapur with over 25 years of dedicated service to the community. We
                combine advanced medical technology with compassionate care to provide the best possible outcomes for
                our patients.
              </p>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/images/apex.jpg"
                alt="Apex Hospital Building"
                width={600}
                height={400}
                className={styles.hospitalImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className={styles.visionMissionSection}>
        <div className="container">
          <div className={styles.visionMissionGrid}>
            <div className={styles.visionCard}>
              <div className={styles.cardIcon}>
                <Eye />
              </div>
              <h3>Our Vision</h3>
              <p>
                Our unified vision is to offer a broad range of high quality cost effective tertiary care health services accessible to unique needs of individuals in the region and beyound. To establish a premier heath care facility where each of its speciality will offer its highest quality care for all diseases.
              </p>
            </div>
            <div className={styles.missionCard}>
              <div className={styles.cardIcon}>
                <Target />
              </div>
              <h3>Our Mission</h3>
              <p>
                Our Mission is to create world class health care facility which is committed to deliver highest quality facility medical care.Though superior medical and operational services.We are also committed to provide leadership to enhance the general health status of the population in the region.
              </p>
            </div>
            <div className={styles.valuesCard}>
              <div className={styles.cardIcon}>
                <Handshake />
              </div>
              <h3>Our Values</h3>
              <p>
                Integrity, Excellence, Compassion, Innovation, and Teamwork guide everything we do. We believe in
                treating every patient with dignity and respect while maintaining the highest ethical standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className={styles.aboutContent}>
        <div className="container">
          <div className={styles.contentGrid}>
            <div className={styles.textContent}>
              <h2>Excellence in Healthcare Since 1998</h2>
              <p>
                Apex Hospital has been at the forefront of healthcare innovation in Solapur for over two decades. What
                started as a small clinic has grown into a comprehensive healthcare facility serving thousands of
                patients annually.
              </p>

              <p>
                Our state-of-the-art facility houses advanced medical equipment, modern operation theaters, intensive
                care units, and comfortable patient rooms. We specialize in multiple medical disciplines including
                cardiology, neurology, oncology, orthopedics, and emergency medicine.
              </p>

              <p>
                Located in the heart of Solapur, we serve not only the local community but also patients from
                surrounding districts who seek quality healthcare. Our commitment to excellence has earned us
                recognition as one of the leading hospitals in the region.
              </p>

              <div className={styles.highlights}>
                <h3>Why Choose Apex Hospital?</h3>
                <ul>
                  <li>24/7 Emergency Services with dedicated trauma center</li>
                  <li>Advanced diagnostic and imaging facilities</li>
                  <li>Experienced team of specialist doctors</li>
                  <li>Modern operation theaters with latest technology</li>
                  <li>Comprehensive ICU and NICU facilities</li>
                  <li>Affordable healthcare with insurance support</li>
                  <li>Patient-centered care approach</li>
                  <li>Continuous medical education and research</li>
                </ul>
              </div>
            </div>
           
           <div className={styles.videoContainer}>
              <div className={styles.videoWrapper}>
                <iframe
                  src="https://www.youtube.com/embed/C10e-_VSm3E?si=KNKuYmgDpZfPFyNU"
                  title="Hospital Tour Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <p className={styles.videoTitle}>Hospital Tour Video</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={styles.achievementsSection}>
        <div className="container">
          <h2>Our Achievements</h2>
          <div className={styles.achievementsGrid}>
            {achievements.map((achievement, index) => (
              <div key={index} className={styles.achievementCard}>
                <div className={styles.achievementIcon}>{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Meet Our Leadership Team</h2>
            <p>Our experienced medical professionals are dedicated to providing exceptional healthcare</p>
          </div>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={styles.teamCard}
                onClick={() => openModal(member)}
              >
                <div className={styles.cardFrame}>
                  <div className={styles.memberImage}>
                    <Image src={member.image} alt={member.name} width={600} height={400} />
                    <div className={styles.imageOverlay}>
                      <span className={styles.viewDetails}>View Details</span>
                    </div>
                  </div>
                  <div className={styles.memberInfo}>
                    <h3>{member.name}</h3>
                    <p className={styles.position}>{member.position}</p>
                    <p className={styles.specialization}>{member.specialization}</p>
                    <p className={styles.experience}>{member.experience} Experience</p>
                    <div className={styles.cardFooter}>
                      <Star className={styles.starIcon} />
                      <span >Read more</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedMember && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>
              <X />
            </button>
            
            <div className={styles.modalHeader}>
              <div className={styles.modalImage}>
                <Image 
                  src={selectedMember.image} 
                  alt={selectedMember.name} 
                  width={300} 
                  height={300}
                  className={styles.modalProfileImage}
                />
              </div>
              <div className={styles.modalBasicInfo}>
                <h2>{selectedMember.name}</h2>
                <p className={styles.modalPosition}>{selectedMember.position}</p>
                <p className={styles.modalSpecialization}>{selectedMember.specialization}</p>
                <div className={styles.modalExperience}>
                  <Calendar className={styles.infoIcon} />
                  <span>{selectedMember.experience} Experience</span>
                </div>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalSection}>
                <h3><GraduationCap className={styles.sectionIcon} /> About</h3>
                <p>{selectedMember.about}</p>
              </div>

              <div className={styles.modalSection}>
                <h3><GraduationCap className={styles.sectionIcon} /> Education</h3>
                <ul className={styles.modalList}>
                  {selectedMember.education.map((edu, index: number) => (
                    <li key={index}>{edu}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h3><Target className={styles.sectionIcon} /> Areas of Expertise</h3>
                <div className={styles.expertiseGrid}>
                  {selectedMember.expertise.map((exp, index: number) => (
                    <span key={index} className={styles.expertiseTag}>{exp}</span>
                  ))}
                </div>
              </div>

              <div className={styles.modalSection}>
                <h3><Award className={styles.sectionIcon} /> Key Achievements</h3>
                <ul className={styles.modalList}>
                  {selectedMember.achievements.map((achievement, index: number) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h3><Star className={styles.sectionIcon} /> Awards & Recognition</h3>
                <ul className={styles.modalList}>
                  {selectedMember.awards.map((award, index: number) => (
                    <li key={index}>{award}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.modalSection}>
                <h3><GraduationCap className={styles.sectionIcon} /> Qualifications</h3>
                <p className={styles.qualifications}>{selectedMember.qualifications}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Location Section */}
      <section className={styles.locationSection}>
        <div className="container">
          <div className={styles.locationContent}>
            <div className={styles.locationInfo}>
              <h2>Our Location</h2>
              <p>
                Strategically located in Solapur, Maharashtra, Apex Hospital is easily accessible from all parts of the
                city and surrounding areas.
              </p>
              <div className={styles.addressDetails}>
                <h3>Address</h3>
                <p>
                 Plot No 1 and 6, Vijapur Rd, opp. to Galaxy Panache, Yamini Nagar, Swami Vivekanand Nagar 2, Solapur, Maharashtra 413007
                </p>

                <h3>Contact Information</h3>
                <p>
                  Phone: 0217 260 0603
                  <br />
                  Email: apexhospital777@gmail.com
                  <br />
                 
                </p>

                <h3>Operating Hours</h3>
                <p>
                  24/7 Emergency Services
                  <br />
                  OPD: Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <div className={styles.responsiveMap}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.395279856629!2d75.8945497751705!3d17.63142798329793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da11b8128a47%3A0x2af0cc226d7c6ea6!2sApex%20Hospital!5e0!3m2!1sen!2sin!4v1753784306207!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage