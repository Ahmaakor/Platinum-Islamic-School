import styles from './WhyChooseUs.module.css';
import { reasons } from '../../data/whychoose';

function WhyChooseUs() {

  return (
    <section className={styles.whyChooseUs} data-aos="fade-up">
      <div className="container">
        <h2>Why Choose Us</h2>
        <div className={styles.reasons}>
          {reasons.map((r, i) => (
            <div key={i} className={styles.reason}>
              <i className={r.icon}></i>
              <h4>{r.title}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;