import React from "react";
import styles from "./Values.module.css";

function Values() {
  return (
    <section className={styles.section}>
      <div className="container">
        <h1 className={styles.heading}>Our Core Values</h1>
        <p className={styles.intro}>
          These values are the heart of Platinum Islamic School’s identity, guiding our daily practices and shaping the future of our students.
        </p>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Academic Excellence</h3>
            <p>We provide a learning environment that promotes high academic standards, critical thinking, and curiosity-driven learning.</p>
          </div>
          <div className={styles.card}>
            <h3>Islamic Ethics & Morals</h3>
            <p>We uphold the teachings of Islam in our character, promoting honesty, humility, sincerity, and spiritual growth.</p>
          </div>
          <div className={styles.card}>
            <h3>Respect & Compassion</h3>
            <p>Every individual is valued and treated with empathy, tolerance, and kindness within our diverse school community.</p>
          </div>
          <div className={styles.card}>
            <h3>Community Service</h3>
            <p>We encourage our students to positively impact the world by actively serving their communities with responsibility and leadership.</p>
          </div>
          <div className={styles.card}>
            <h3>Continuous Improvement</h3>
            <p>We foster a culture of lifelong learning, innovation, and self-reflection to continually grow and evolve.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;
