import styles from './Testimonials.module.css';

function Testimonials() {
  const testimonials = [
    {
      name: "Aisha K.",
      text: "Platinum Islamic School has given my child a strong foundation in both academics and faith.",
    },
    {
      name: "Omar S.",
      text: "The teachers are caring and the environment is nurturing. Highly recommended!",
    },
    {
      name: "Fatima R.",
      text: "A wonderful blend of modern education and Islamic values.",
    },
  ];

  return (
    <section className={styles.testimonials} data-aos="fade-up">
      <div className="container">
        <h2>What Parents Say</h2>
        <div className={styles.testimonialList}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <p>"{t.text}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;