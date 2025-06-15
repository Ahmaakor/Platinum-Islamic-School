import styles from "./Overview.module.css";
import overviewImage from "../../assets/images/image1.jpg"; // Replace with your actual image path

function Overview() {
  return (
    <section className={styles.overview}>
      <div className="container">
        <div className={styles.topContent}>
          <div className={styles.imageWrapper}>
            <img src={overviewImage} alt="Overview" />
          </div>
          <div className={styles.textContent}>
            <span className={styles.label}>Overview</span>
            <h2>Digital & Academic Excellence at Platinum Islamic School</h2>
            <p>
              Platinum Islamic School is a vibrant learning community where students are encouraged to excel academically and grow spiritually. We provide a safe, inclusive, and stimulating environment that nurtures curiosity, creativity, and a love for lifelong learning.
            </p>
            {/* <div className={styles.highlights}>
              <div>
                <i className="fa-solid fa-graduation-cap"></i>
                <p>Academic Excellence</p>
              </div>
              <div>
                <i className="fa-solid fa-mosque"></i>
                <p>Islamic Morals</p>
              </div>
              <div>
                <i className="fa-solid fa-heart"></i>
                <p>Student Wellbeing</p>
              </div>
            </div> */}
          </div>
        </div>

        <div className={styles.featureSection}>
          <div className={styles.sectionIntro}>
            <h3>We’re Ready To Build Your Child’s Future</h3>
            <p>We combine academic rigor with moral values to ensure your child's holistic development.</p>
            <a href="#admission" className="pri_btn">Get Started</a>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <span>01</span>
              <h4>Dedicated Teachers</h4>
              <p>Our experienced educators are passionate and committed to nurturing potential in every child.</p>
            </div>
            <div className={styles.card}>
              <span>02</span>
              <h4>Balanced Curriculum</h4>
              <p>We offer a blend of Islamic and modern education tailored to meet 21st-century needs.</p>
            </div>
            <div className={styles.card}>
              <span>03</span>
              <h4>Community Engagement</h4>
              <p>We promote partnerships with parents and community members for shared success.</p>
            </div>
            <div className={styles.card}>
              <span>04</span>
              <h4>Spiritual Development</h4>
              <p>We instill Islamic values through daily prayers, Qur’an studies, and moral instruction.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;
