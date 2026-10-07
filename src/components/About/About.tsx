import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <p className={styles.subtitle}>GET TO KNOW ME</p>

        <h2>About Me</h2>

        <p className={styles.text}>
          I am an MCA student with a strong interest in software development,
          web development and modern technologies. I enjoy learning new
          programming languages and developing creative solutions to
          real-world problems.
        </p>

        <p className={styles.text}>
          I am currently improving my technical skills in ReactJS, TypeScript,
          JavaScript, HTML, CSS and other computer technologies. My goal is to
          become a skilled software professional and contribute to innovative
          projects.
        </p>

        <div className={styles.details}>
          <div>
            <strong>Name:</strong>
            <span>Payal Wankhade</span>
          </div>

          <div>
            <strong>Course:</strong>
            <span>Master of Computer Applications</span>
          </div>

          <div>
            <strong>Interest:</strong>
            <span>Web Development</span>
          </div>

          <div>
            <strong>Location:</strong>
            <span>Amravati</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
