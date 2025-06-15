import React from "react";
import styles from "./Mission.module.css";

function Mission() {
  return (
    <section className={styles.mission}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Our Philosophy</span>
          <h2>Mission & Vision</h2>
          <p>
            At Platinum Islamic School, we are dedicated to delivering academic excellence rooted in Islamic values. Our mission and vision guide every decision we make, aiming to nurture responsible global citizens who are morally upright and intellectually sound.
          </p>
        </div>

        <div className={styles.flexWrap}>
          <div className={styles.block}>
            <h3><i className="fas fa-bullseye"></i> Our Mission</h3>
            <ul className={styles.list}>
              <li>
                <strong>Empowerment Through Knowledge:</strong> Equip students with modern education alongside strong Islamic foundations.
              </li>
              <li>
                <strong>Faith & Character:</strong> Build moral discipline, empathy, and integrity through daily spiritual activities.
              </li>
              <li>
                <strong>Lifelong Skills:</strong> Develop creativity, leadership, and problem-solving abilities to thrive in a dynamic world.
              </li>
            </ul>
          </div>

          <div className={styles.block}>
            <h3><i className="fas fa-eye"></i> Our Vision</h3>
            <ul className={styles.list}>
              <li>
                <strong>Global Recognition:</strong> Become a benchmark Islamic educational institution known for excellence.
              </li>
              <li>
                <strong>Faith-Driven Leadership:</strong> Inspire students to lead with confidence, guided by their beliefs.
              </li>
              <li>
                <strong>Community Impact:</strong> Foster graduates who contribute positively to local and global communities.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
