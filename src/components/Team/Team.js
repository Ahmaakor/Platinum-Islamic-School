import styles from "./Team.module.css";
import { teamData } from "../../data/team";
import placeholder from "../../assets/images/i.webp"; 

function Team() {
  return (
    <section className={styles.teamSection}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.label}>Meet the Leaders</span>
          <h2>Our Management Team</h2>
          <p>
            The driving force behind Platinum Islamic School's success is our dedicated leadership. With a blend of experience, vision, and passion, they ensure the best for our students and staff every day.
          </p>
        </div>

        <div className={styles.grid}>
          {teamData.map((member, idx) => (
            <div className={styles.memberCard} key={idx}>
              <img
                src={member.img}
                alt={member.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = placeholder;
                }}
                className={styles.photo}
              />
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.desc}>{member.desc}</p>
              <div className={styles.socials}>
                <a href="#" title="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" title="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
