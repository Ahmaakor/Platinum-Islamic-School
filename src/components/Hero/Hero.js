import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
// import { slides } from '../../data/slides';

function Hero() {

  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.hero_content}>
          <h1 data-aos="zoom-in">Ensuring a fulfilled life.</h1>
          <p data-aos="fade-up">Our unique curriculum blends modern academic excellence with traditional Islamic teachings, fostering intellectual growth alongside spiritual development for balanced education</p>

          <div className={styles.hero_btn} data-aos="fade-up">
            <Link to="/about" className={styles.pri_btn} >
              <span>Explore More</span>
            </Link>
            <Link to="/admissions" className={styles.sec_btn}>
              <span className={styles.icon}> <i className="fa-solid fa-chevron-right"></i></span>
              <span className={styles.link_text}>Apply Now</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
