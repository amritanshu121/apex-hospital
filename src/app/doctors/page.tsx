"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Calendar } from "lucide-react"
import styles from "./page.module.css"

const doctors = [
  {
    id: 1,
    name: "Dr. Rizwan ul Haque",
    specialization: "Cardiology",
    designation: "Chairman",
    experience: "25+ years",
    // rating: 4.9,
    // reviews: 156,
    image: "/images/doctors.svg",
    qualifications: "MBBS, MD, DNB, MNAMS, DM(Cardiology), FACC(USA), FSCAI(USA), FESC(Paris), FRCP(Glasgow), FCCP(USA), FRSTM(London)",
    // availability: "Mon, Wed, Fri",
    // consultationFee: "₹800",
  },
  {
    id: 2,
    name: "Dr. Sanjay Gaikwad",
    specialization: "Cardiothoracic Surgery",
    // designation: "",
    experience: "25+ years",
    // rating: 4.9,
    // reviews: 156,
    image: "/images/doctors.svg",
    qualifications: "MCH , CVTS",
    // availability: "Mon, Wed, Fri",
    // consultationFee: "₹800",
  },
  {
    id: 3,
    name: "Dr. Kishore Deore",
    specialization: "Cardiothoracic Surgery",
    designation: "",
    experience: "20+ years",
    rating: 4.8,
    reviews: 142,
    image: "/images/doctors.svg",
    qualifications: "MCH , CVTS",
    availability: "Tue, Thu, Sat",
    consultationFee: "₹750",
  },
  {
    id: 4,
    name: "Dr. P. Kasegoankar",
    specialization: "Neurology",
    designation: "",
    experience: "18+ years",
    rating: 4.7,
    reviews: 98,
    image: "/images/doctors.svg",
    qualifications: "DM NEUROLOGY",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹700",
  },
  {
    id: 5,
    name: "Dr. Ashish Bhutda",
    specialization: "Neurology",
    designation: "",
    experience: "22+ years",
    rating: 4.9,
    reviews: 203,
    image: "/images/doctors.svg",
    qualifications: "DM NEUROLOGY",
    availability: "Mon to Sat",
    consultationFee: "₹600",
  },
  {
    id: 6,
    name: "Dr. Karuna Kabadi",
    specialization: "Neurosurgery",
    designation: "",
    experience: "15+ years",
    rating: 4.8,
    reviews: 87,
    image: "/images/doctors.svg",
    qualifications: "MBBS, DNB",
    availability: "Tue, Thu, Sat",
    consultationFee: "₹900",
  },
  {
    id: 7,
    name: "Dr. G. Chimanchode",
    specialization: "Plastic Surgery",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "MCH (Plastic Surgery)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 8,
    name: "Dr. S. Hiremath",
    specialization: "Plastic Surgery",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "MCH (Plastic Surgery)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 9,
    name: "Dr. Sandeep Holkar",
    specialization: "Nephrology",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "MD.MEDICINE, DNB(Nephro)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 10,
    name: "Dr. Anand Mallu",
    specialization: "Nephrology",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "MD.MEDICINE, DNB(Nephro)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 11,
    name: "Dr. Pravin Patne",
    specialization: "Urology",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "MCH UROLOGY",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 12,
    name: "Dr. Vaibhav Swami",
    specialization: "Paediatrics",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "MBBS, M.D",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 13,
    name: "Dr. Usha Dindore",
    specialization: "Paediatrics",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "DNB, DCH (Paed)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 14,
    name: "Dr. Meha Jabeen Haq",
    specialization: "Obstetrician & Gynaecology",
    designation: "CEO",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.B.B.S, M.S(OBG), FMAS, DMAS",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 15,
    name: "Dr. Vrushali Gurav",
    specialization: "Obstetrician & Gynaecology",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.S (OBG)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 16,
    name: "Dr. Sangmeshwar Patil",
    specialization: "General Medicine",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.D (GENERAL MEDICINE)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 17,
    name: "Dr. Abhijeet Deshmukhe",
    specialization: "General Medicine",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.D (GENERAL MEDICINE)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 18,
    name: "Dr.Y. Kalmankar",
    specialization: "Anesthesia",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.D (ANAESHESIOLOGY)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 19,
    name: "Dr. Samin Kazi",
    specialization: "Anesthesia",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.B.B.S, D.A.C.P.S",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 20,
    name: "Dr. Parimal R. Rathod",
    specialization: "Radiology",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "MBBS, DMRD, DNB",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 21,
    name: "Dr. Smita Swami",
    specialization: "Diabetology",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.B.B.S.D. DIABETOLOGY",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 22,
    name: "Dr. Shashank Karvekar",
    specialization: "Orthopedics",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "DNB (ORTHO)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 23,
    name: "Dr. Pradeep Gajakosh",
    specialization: "Orthopedics",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.S (GENERAL SURGERY)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 24,
    name: "Dr. Firoz Sayyed",
    specialization: "Pulmonology & Intensive care",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.B.B.S, DTDC, DNB",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 25,
    name: "Dr. Shetal Holkar",
    specialization: "Ophthalmology",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.S",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 26,
    name: "Dr. Ajinkya Pingale",
    specialization: "Orthopedic (Spl in Spine Surgery)",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.S (ORTHD)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 27,
    name: "Dr. P. Kumthekar",
    specialization: "Surgical Oncology",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.S, MCH",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 28,
    name: "Dr. Pravin Patil",
    specialization: "Gastro Enterology",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "MS, FTE, FSGEI, FMAS, FACS (USA)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 29,
    name: "Dr. Varsha Sul",
    specialization: "Pathology",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "DNB",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 30,
    name: "Dr. V. Kashetti",
    specialization: "Microbiology",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.D, DCP",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 31,
    name: "Dr. Owaiz Momin",
    specialization: "Physiotherapist",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "M.S (ORTHD)",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 32,
    name: "Dr. Meena Mulay",
    specialization: "Nutrition & Dietetics",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "DIETICIAN",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
  {
    id: 33,
    name: "Dr. Nitin Bhoge",
    specialization: "Psychatric",
    designation: "",
    experience: "16+ years",
    rating: 4.7,
    reviews: 134,
    image: "/images/doctors.svg",
    qualifications: "MBBS, M.D",
    availability: "Mon, Wed, Fri",
    consultationFee: "₹650",
  },
]

const specializations = [
  "All Specializations",
  "Cardiology",
  "Neurology",
  "Orthopedics",
  "Paediatrics",
  "Surgical Oncology",
  "Obstetrician & Gynaecology",
  "Dermatology",
  "Pulmonology & Intensive care",
  "Urology",
  "Diabetology",
  "Ophthalmology",
  "Psychatric",
  "Nutrition & Dietetics",
  "Physiotherapist",
  "Microbiology",
  "Pathology",
  "Gastro Enterology",
  "Orthopedic (Spl in Spine Surgery)",
  "Orthopedics",
  "Radiology",
  "General Medicine",
  "Anesthesia",
  "Paediatrics",
  "Nephrology",
  "Plastic Surgery",
  "Neurosurgery",
  "Cardiothoracic Surgery"
]

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations")
  const [filteredDoctors, setFilteredDoctors] = useState(doctors)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterDoctors(term, selectedSpecialization)
  }

  const handleSpecializationFilter = (specialization: string) => {
    setSelectedSpecialization(specialization)
    filterDoctors(searchTerm, specialization)
  }

  const filterDoctors = (term: string, specialization: string) => {
    let filtered = doctors

    if (term) {
      filtered = filtered.filter(
        (doctor) =>
          doctor.name.toLowerCase().includes(term.toLowerCase()) ||
          doctor.specialization.toLowerCase().includes(term.toLowerCase()),
      )
    }

    if (specialization !== "All Specializations") {
      filtered = filtered.filter((doctor) => doctor.specialization === specialization)
    }

    setFilteredDoctors(filtered)
  }

  return (
    <div className={styles.doctorsPage}>
      <div className="container">
        <div className={styles.pageHeader}>
          <h1>Find a Doctor</h1>
          <p>Connect with our experienced medical professionals</p>
        </div>

        <div className={styles.searchSection}>
          <div className={styles.searchBar}>
            <Search className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search by doctor name or specialization..."
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          <div className={styles.filterSection}>
            <Filter size={20} />
            <select
              value={selectedSpecialization}
              onChange={(e) => handleSpecializationFilter(e.target.value)}
              className={styles.filterSelect}
            >
              {specializations.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.resultsSection}>
          <p className={styles.resultsCount}>
            Showing {filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? "s" : ""}
          </p>

          <div className={styles.doctorsGrid}>
            {filteredDoctors.map((doctor) => (
              <div key={doctor.id} className={styles.doctorCard}>
                <div className={styles.doctorImage}>
                  <Image src={doctor.image} alt={doctor.name} width={300} height={300} />
                </div>
                <div className={styles.doctorInfo}>
                  <h3>{doctor.name}</h3>
                  <p className={styles.specialization}>{doctor.specialization}</p>
                  <p className={styles.designation}>{doctor.designation}</p>
                  <p className={styles.qualifications}>{doctor.qualifications}</p>
                  <p className={styles.experience}>{doctor.experience} Experience</p>

                  {/* <div className={styles.rating}>
                    <div className={styles.stars}>
                      <Star size={16} fill="currentColor" />
                      <span>{doctor.rating}</span>
                    </div>
                    <span className={styles.reviews}>({doctor.reviews} reviews)</span>
                  </div> */}

                  {/* <div className={styles.availability}>
                    <MapPin size={16} />
                    <span>Available: {doctor.availability}</span>
                  </div> */}

                  {/* <div className={styles.consultationFee}>
                    <span>Consultation Fee: {doctor.consultationFee}</span>
                  </div> */}

                  <Link href="/appointment" className="btn-primary">
                    <Calendar size={16} />
                    Book Appointment
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredDoctors.length === 0 && (
            <div className={styles.noResults}>
              <h3>No doctors found</h3>
              <p>Try adjusting your search criteria or browse all doctors.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
