import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';
import { slides } from '../../data/slides';

function Hero() { 
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.cont} data-aos="fade-up">
          <div className={styles.hero_content}>
            <div className={`${styles.slide} ${styles.active}`}>
                <div className={styles.hero_text}>
                  <h1>PLATINUM ISLAMIC SCHOOL</h1>
                  <p>Our unique curriculum blends modern academic excellence with traditional Islamic teachings, fostering intellectual growth alongside spiritual development for balanced education</p>
                </div>
              </div>
            {/* {slides.map((slide, index) => (
              <div key={index} className={`${styles.slide} ${index === current ? styles.active : ''}`}>
                <div className={styles.hero_text}>
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                </div>
              </div>
            ))} */}
          </div>
          <Link to="/admissions" className={styles.hero_btn}>
            <span className={styles.icon}> <i className="fa-solid fa-chevron-right"></i></span>
            <span className={styles.link_text}>Apply Now</span>
          </Link>
          </div>
      </div>
    </section>
  );
}

export default Hero;
