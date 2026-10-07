import styles from "./Profile.module.css";
import payalImage from "../../assets/certificates/payal.jpeg";

function Profile() {
  return (
    <section id="profile" className={styles.profile}>
      <div className={styles.content}>
        <p className={styles.greeting}>Hello, I am</p>

        <h1>Payal Wankhade</h1>

        <h2>MCA Student</h2>

        <p className={styles.description}>
          I am an MCA student passionate about web development,
          programming and learning new technologies. I enjoy
          exploring new technologies and improving my technical skills.
        </p>

        <div className={styles.buttons}>
          <a href="#contact" className={styles.primaryButton}>
            Contact Me
          </a>

          <a href="#about" className={styles.secondaryButton}>
            About Me
          </a>
        </div>
      </div>

      <div className={styles.photoContainer}>
        <div className={styles.photoCircle}>
          <img
            src={payalImage}
            alt="Payal Wankhade"
            className={styles.photo}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
