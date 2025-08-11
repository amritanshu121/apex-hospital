"use client"
import { useState, useEffect } from "react"
import { Quote, Star } from "lucide-react" // Removed Globe as source badge is removed
import styles from "./Testimonials.module.css"
import Link from "next/link"

type Testimonial = {
  name: string
  role: string
  text: string
  rating: number // Rating out of 5
  source: string // e.g., "Google", "Yelp", "Trustpilot" - kept for data, but not displayed as a separate badge
}

const testimonials: Testimonial[] = [
  {
    name: "Deepak Shengale",
    role: "",
    text: "First of all I thanks to the whole management Dr.team , actually it really feels good after taking treatment in this Hospital. I won't call it hospital it's like a hospital home. Good 👍",
    rating: 5,
    source: "Google",
  },
  {
    name: "Shimona Adil",
    role: "",
    text: "I had an excellent experience at Dr.Rizwan's Apex hospital. The facility was clean, well-organized, and the staff were incredibly kind and professional.I was especially impressed with Dr.RIZWAN UL HAQUE, the cardiologist. His expertise, and clear communication made a stressful situation much easier to handle.I felt well-informed throughout the process. I highly recommend this hospital for anyone in need of cardiac care.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Bhumika Mane",
    role: "cardio",
    text: "I was especially impressed with Dr.RIZWAN UL HAQUE, the cardiologist. His expertise, and clear communication made a stressful situation much easier to handle.I felt well-informed throughout the process. I highly recommend this hospital for anyone in need of cardiac care.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Aditi Kadam",
    role: "",
    text: "The overall staff is supportive and the hospital is also well maintained with all the facilities.The staff is well behaved with patients and their family members,specially (Fatima sister) and the overall staff of first floor ...had a good experience 👍🏻",
    rating: 4,
    source: "Google",
  },
  {
    name: "Prakash Kalyanashetti",
    role: "Emergency Patient",
    text: "Very good service & well-behaved staff here.My wife has undergone free surgery (Free angiography and angioplasty under Karnataka Health scheme).It's very useful for those who are suffering (poor patients). thank you team for your kind cooperation & very satisfactory service and treatment.",
    rating: 5,
    source: "Google",
  },
  {
    name: "Anup kumthekar",
    role: "",
    text: "My wife's health condition was so critical but after Dr . Rizwan Sir treatment she is totally out of danger and she is well . She got proper treatment by Dr.Rizwan sir and their team .All staffs and nurses treats very friendly and caring with patients & Cleaning, maintenance is excellent.Special thanks to Dr .Rizwan Sir ,Dr.Vidhate sir ,Farooq Sir , Dr.Birajdar mam &Jayshree Agaste Mam...Thank you for your treatment..",
    rating: 5,
    source: "Google",
  },
  {
    name: "Samina Shaikh",
    role: "",
    text: "Down to Earth 24 hours available for pt DR.MAHJBEEN Madam",
    rating: 5,
    source: "Google",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className={styles.header}>
          <h2>What Our Patients Say</h2>
          <p>Real stories of hope, healing, and exceptional care</p>
        </div>

        <div className={styles.slider}>
          {testimonials.map((t, i) => (
            <article key={t.name} className={`${styles.card} ${i === index ? styles.active : ""}`}>
              {/* Logo/Name (Avatar + Person Details) at the very top */}
              <div className={styles.personTop}>
                <div className={styles.avatarPlaceholder}>{t.name.charAt(0).toUpperCase()}</div>
                <div>
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>

              {/* Ratings below Logo/Name */}
              <div className={styles.starRating}>
                {[...Array(5)].map((_, starIndex) => (
                  <Star
                    key={starIndex}
                    size={20}
                    fill={starIndex < t.rating ? "#f59e0b" : "none"}
                    stroke={starIndex < t.rating ? "#f59e0b" : "#d1d5db"}
                    className={styles.starIcon}
                  />
                ))}
              </div>

              {/* Review Message */}
              <div className={styles.quoteIcon}>
                <Quote size={32} />
              </div>
              <p className={styles.text}>&ldquo;{t.text}&rdquo;</p>

              {/* Read More Button */}
              <Link href="/patient-stories" passHref>
                <button className={styles.readMoreButton}>Read More</button>
              </Link>
            </article>
          ))}
        </div>

        {/* Indicators */}
        <div className={styles.indicators}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`${styles.indicator} ${i === index ? styles.active : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
