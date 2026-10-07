import { useState } from "react";
import styles from "./Contact.module.css";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    alert(`Thank you ${name}! Your message has been submitted.`);

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <p className={styles.subtitle}>GET IN TOUCH</p>

        <h2>Contact Me</h2>

        <p className={styles.description}>
          Have a question or want to connect with me?
          Fill out the form below.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>

              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="subject">Subject</label>

            <input
              id="subject"
              type="text"
              placeholder="Enter subject"
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              placeholder="Write your message..."
              rows={6}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
            />

          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
