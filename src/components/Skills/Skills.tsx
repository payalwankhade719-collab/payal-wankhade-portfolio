import styles from "./Skills.module.css";

interface Skill {
  name: string;
  category: string;
}

const skills: Skill[] = [
  {
    name: "HTML",
    category: "Frontend",
  },
  {
    name: "CSS",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    category: "Programming",
  },
  {
    name: "ReactJS",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    category: "Programming",
  },
  {
    name: "Java",
    category: "Programming",
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>

        <p className={styles.subtitle}>
          MY TECHNICAL ABILITIES
        </p>

        <h2>Skills & Technologies</h2>

        <p className={styles.description}>
          Technologies and programming languages I have learned
          and used during my academic journey.
        </p>

        <div className={styles.skillGrid}>
          {skills.map((skill) => (
            <div
              className={styles.skillCard}
              key={skill.name}
            >
              <h3>{skill.name}</h3>

              <span>{skill.category}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;
