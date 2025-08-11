import Image from "next/image"
import { Heart, Star, Calendar } from 'lucide-react'
import styles from "./page.module.css" // Import the CSS Module

export default function PatientStoriesPage() {
  const stories = [
    {
      id: 1,
      name: "Rajesh Patil",
      age: 45,
      condition: "Cardiac Surgery",
      story:
        "After my heart attack, I was terrified. But the cardiac team at Apex Hospital gave me hope and a new lease on life. The surgery was successful, and the post-operative care was exceptional.A heartfelt thank you to Dr. Rizwan ul Haque for his expertise. Today, I'm back to my normal activities and feeling stronger than ever.",
      image: "/images/rajesh.jpg",
      date: "2024-01-10",
      rating: 5,
    },
    {
      id: 2,
      name: "Sunita Deshmukh",
      age: 29,
      condition: "Maternity Care",
      story:
        "The maternity ward at Apex Hospital made my delivery experience wonderful. The doctors and nurses were so caring and supportive. They made sure both my baby and I were comfortable throughout. I could not have asked for better care during such an important time.",
      image: "/images/priya.jpg",
      date: "2024-01-05",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Sharma",
      age: 59,
      condition: "Orthopedic Surgery",
      story:
        "I had been suffering from knee pain for years. The orthopedic team at Apex Hospital performed a knee replacement surgery that changed my life. The rehabilitation program was excellent, and now I can walk without pain. Thanks to Dr.Ajinkya Pingale for giving me my mobility back!",
      image: "/images/amit.jpg",
      date: "2023-12-28",
      rating: 5,
    },
    {
      id: 4,
      name: "Priya Joshi",
      age: 38,
      condition: "Cancer Treatment",
      story:
        "Being diagnosed with cancer was devastating, but the oncology team at Apex Hospital stood by me throughout my treatment journey. Their expertise, compassion, and constant support helped me fight and win against cancer. I'm now cancer-free and grateful for their care.",
      image: "/images/sunita.jpg",
      date: "2023-12-20",
      rating: 5,
    },
    {
      id: 5,
      name: "Deepak Kumar",
      age: 52,
      condition: "Diabetes Management",
      story:
        "Managing my diabetes was a constant struggle until I came to Apex Hospital. The endocrinology team provided comprehensive care and education that empowered me to take control of my health. My blood sugar levels are now stable, and I feel much healthier.",
      date: "2024-02-15",
      rating: 4,
    },
    {
      id: 6,
      name: "Anjali Singh",
      age: 22,
      condition: "Dermatology",
      story:
        "I had persistent skin issues that no other clinic could resolve. The dermatologists at Apex Hospital accurately diagnosed my condition and provided effective treatment. My skin has never looked better, and I feel so much more confident.",
      date: "2024-02-01",
      rating: 5,
    },
    {
      id: 7,
      name: "Sanjay Gupta",
      age: 68,
      condition: "Neurology",
      story:
        "After experiencing severe headaches, I was referred to the neurology department. The doctors were thorough in their diagnosis and treatment plan. I'm now free from headaches and incredibly thankful for their expertise and care.",
      date: "2024-01-25",
      rating: 5,
    },
    {
      id: 8,
      name: "Meena Devi",
      age: 75,
      condition: "Geriatric Care",
      story:
        "Apex Hospital's geriatric care team has been a blessing for my mother. They provide holistic care, addressing her medical needs and ensuring her comfort and well-being. It's reassuring to know she's in such capable and compassionate hands.",
      date: "2024-01-18",
      rating: 5,
    },
     {
      id: 9,
      name: "Ajay koti",
      age: 39,
      condition: "Cardiology",
      story:
        "I highly recommend Apex Hospital, Solapur for anyone seeking quality medical care.The doctors are experienced, the staff is supportive, and facilities are modern. Special Thanks to Dr. Rizwan Ul Haque for his expert and compassionate treatment.",
      date: "2024-06-01",
      rating: 5,
    },
     {
      id: 10,
      name: "Sakshi Kadam",
      age: 30,
      condition: "Gynecology",
      story:
        "I highly recommend Apex Hospital, Solapur for gynecology care. Dr.Meha Jabeen haq is highly skilled, compassionate, and supportive throught my treatment. Her care made the entire journey smooth and easy.",
      date: "2024-04-01",
      rating: 5,
    },
     {
      id: 11,
      name: "Naeem Ahmed",
      age: 40,
      condition: "Gastro",
      story:
      "I highly recommend the gastroenterology care at Apex Hospital,Solapur.The treatment was  effective, and care was excellent.Thanks to, Dr. Pravin Patil, for your expert guidance and support throughout my recovery.",
      date: "2025-02-01",
      rating: 5,
    },
     {
      id: 12,
      name: "Rohan denge",
      age: 45,
      condition: "Cardio",
      story:
      "I went to many hospitals for my mothers treatment, but her condition did not        improve.Finally, I came to Apex Hospital, Solapur and now she is feeling much better-her pain is gone. Dr.Rizwan sir not only treated her well but also Hospital help us during our financial diffculties. The staff here is also very kind and supportive. ",
      date: "2025-07-01",
      rating: 5,
    },
    
     {
      id: 13,
      name: "Rohit koti",
      age: 37,
      condition: "Pulmonology",
      story:
        "I had been struggling with breathing issues for a long time. The pulmonology and intensive care team at Apex Hospital provided exceptional treatment that improved my condition drastically. Dr. Firoz Sayyed accurate diagnosis, compassionate care, and expert guidance have made a huge difference in my health. I can now breathe freely and live more comfortably. Thank you, Dr. Sayyed, for giving me my health back!",
      date: "2025-05-23",
      rating: 4,
    },
    
     {
      id: 14,
      name: "Vedant Vinarkar",
      age: 29,
      condition: "ophthalmology",
      story:
        "I was facing severe vision problems that were affecting my daily life. When I visited Apex Hospital, Dr. Shetal Holkar carefully examined my eyes and explained everything in a way I could understand. Her treatment was accurate and effective, and within a short time, I noticed a big improvement. Today, I can read, work, and enjoy life without the constant strain. I’m truly grateful to Dr. Holkar and the ophthalmology team for giving me back my clear vision",
      date: "2025-01-23",
      rating: 4,
    },
    
     {
      id: 15,
      name: "Akansha pal",
      age: 26,
      condition: "Plastic Surgery",
      story:
        "I had to undergo plastic surgery after an accident, and I was very nervous at first. But from the moment I met Dr. G. Chimanchode and Dr. S. Hiremath at Apex Hospital Solapur, I felt reassured. They explained the entire procedure in detail and answered all my questions patiently. The surgery went smoothly, and the results were even better than I expected. The follow-up care was excellent, and the doctors were always approachable. Thanks to their skill and dedication, I have regained my confidence and can move forward without hesitation.",
      date: "2025-02-23",
      rating: 4,
    },
    
     {
      id: 16,
      name: "Raju kadam",
      age: 26,
      condition: "Infectious Diseases",
      story:
        "Dengue fever had left me feeling weak and exhausted. At Apex Hospital, the infectious diseases team provided the right treatment and constant monitoring, which helped me recover quickly. The doctors explained each step clearly and took great care throughout my stay. I’m thankful for their expertise and support during my recovery.",
      date: "2025-04-23",
      rating: 4,
    },
     {
      id: 17,
      name: "Sandeep Kumar",
      age: 45,
      condition: "Vascular Surgery",
      story:
        "I had developed a serious blockage in my leg artery that was causing pain and swelling. The vascular surgery team at Apex Hospital performed a successful procedure that restored proper blood flow. Their skill, clear communication, and attentive post-surgery care made my recovery smooth. I’m truly grateful for their excellent treatment and support.",
      date: "2025-06-23",
      rating: 5,
    },
    
  ]

  return (
    <div className={styles.storiesPage}>
      <div className={styles.container}>
        <div className={styles.pageHeader}>
          <h1>
            <Heart size={40} className={styles.heartIcon} />
            Patient Stories
          </h1>
          <p>Real stories of hope, healing, and recovery from our patients</p>
        </div>

        <div className={styles.contentGrid}>
          <section className={styles.section}>
            <div className={styles.introCard}>
              <h2>Stories of Hope and Healing</h2>
              <p>
                Every patient who walks through our doors has a unique story. Here are some inspiring journeys of
                recovery, hope, and the exceptional care our patients have received at Apex Hospital. These stories
                reflect our commitment to providing compassionate, quality healthcare that makes a real difference in
                people lives.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.storiesGrid}>
              {stories.map((story) => (
                <div key={story.id} className={styles.storyCard}>
                  <div className={styles.patientInfo}>
                    <div className={styles.patientImage}>
                      {story.image ? (
                        <Image
                          src={story.image || "/placeholder.svg"}
                          alt={story.name}
                          width={80}
                          height={80}
                          className={styles.profileImage}
                        />
                      ) : (
                        <div className={styles.profileAvatar}>
                          {story.name.charAt(0)}
                        </div>
                      )}
                    </div>
                    <div className={styles.patientDetails}>
                      <h3>{story.name}</h3>
                      <p className={styles.age}>Age: {story.age}</p>
                      <p className={styles.condition}>{story.condition}</p>
                      <div className={styles.rating}>
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className={styles.storyContent}>
                    <p>{story.story}</p>
                  </div>
                  <div className={styles.storyMeta}>
                    <div className={styles.date}>
                      <Calendar size={16} />
                      <span>{new Date(story.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* <section className={styles.section}>
            <div className={styles.shareStoryCard}>
              <h2>Share Your Story</h2>
              <p>
                Have you had a positive experience at Apex Hospital? We love to hear your story and share it with
                others who might benefit from your experience.
              </p>
              <div className={styles.shareContact}>
                <div className={styles.contactMethod}>
                  <User size={20} />
                  <div>
                    <strong>Patient Relations</strong>
                    <p>Phone: 0217 260 0603</p>
                    <p>Email: apexhospital777@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  )
}
