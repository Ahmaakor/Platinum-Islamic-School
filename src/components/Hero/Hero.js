import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.hero_text}>
          <h1>Welcome To Platinum Islamic School</h1>
          <p>Ensuring a Fulfilled Life</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
