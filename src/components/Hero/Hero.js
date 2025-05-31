import { useEffect, useState } from 'react';
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
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`${styles.slide} ${index === current ? styles.active : ''}`}
                style={{
                  backgroundColor: slide.bgColor,
                  backgroundImage: slide.bgImage,
                  color: slide.color || 'var(--bs-black)',
                }}
              >
            <div className={`${styles.container} container`}>
                <div className={styles.hero_text}>
                    <h1>{slide.title}</h1>
                    <p>{slide.subtitle}</p>
                </div>
          </div>
        </div>
            ))}
    </section>
  );
}

export default Hero;
