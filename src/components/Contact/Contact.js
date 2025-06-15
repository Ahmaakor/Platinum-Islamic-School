import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section className={styles.contactSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Get in Touch</span>
          <h2>Contact Us</h2>
          <p>
            We’re here to answer any questions you may have. Reach out to us via phone, email, or visit any of our campuses.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.info}>
            <h3>School Headquarters</h3>
            <h3>Alagutan Oko Oba Branch</h3>
            <p><strong>Oko Oba, Oyo</strong></p>
            <p>Phone: +234 805 697 3080</p>
            <p>Email: okooba@pis.edu.ng</p>

            <div className={styles.line}></div>

            <h3>Agbogangan Mabolaje Branch</h3>
            <p><strong>Agbogangan Mabolaje</strong></p>
            <p>Oyo, Oyo State, Nigeria</p>
            <p>Phone: +234 816 417 2383</p>
            <p>Email: info@pis.edu.ng</p>
            
          </div>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.field}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Enter your full name" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
            </div>
            <button type="submit" className="pri_btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
