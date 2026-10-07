import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>My Portfolio</h1>

      <nav>
        <a href="#profile">Profile</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certification</a>
        <a href="#examination">Examination</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
