import styles from "./Certifications.module.css";

import virtualInternship from "../../assets/certificates/virtual.jpeg";
import javaFullStack from "../../assets/certificates/java.jpeg";

interface Certification {
  title: string;
  organization: string;
  year: string;
  description: string;
  image: string;
}

const certifications: Certification[] = [
  {
    title: "Virtual Internship Employability Skills",
    organization: "Virtual Internship Program",
    year: "2026",
    description:
      "Certificate of completion for Virtual Internship and Employability Skills - Job Ready Program.",
    image: virtualInternship,
  },
  {
    title: "Java Full Stack Development",
    organization: "Java Full Stack Development Program",
    year: "2026",
    description:
      "Certificate of participation in Java Full Stack Development.",
    image: javaFullStack,
  },
];

function Certifications() {
  return (
    <section
      id="certifications"
      className={styles.certifications}
    >
      <div className={styles.container}>
        <p className={styles.subtitle}>MY ACHIEVEMENTS</p>

        <h2>Certifications</h2>

        <p className={styles.description}>
          Certificates and achievements I have earned during my
          academic and professional learning journey.
        </p>

        <div className={styles.cardGrid}>
          {certifications.map((certificate) => (
            <div
              className={styles.card}
              key={certificate.title}
            >
              <div className={styles.imageContainer}>
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className={styles.certificateImage}
                />
              </div>

              <h3>{certificate.title}</h3>

              <p className={styles.organization}>
                {certificate.organization}
              </p>

              <span className={styles.year}>
                {certificate.year}
              </span>

              <p className={styles.descriptionText}>
                {certificate.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
