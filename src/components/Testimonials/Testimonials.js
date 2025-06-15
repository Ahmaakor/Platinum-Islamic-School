import { testimonials } from '../../data/reviews';
import { renderStars } from '../../utils/renderStar';
import styles from './Testimonials.module.css';
import userImage from '../../assets/images/i.webp';

function Testimonials() {

  return (
    <section className={styles.testimonials} data-aos="fade-up">
      <div className="container">
        <h2>What Parents Say</h2>
        <div className={styles.testimonialList}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <p className={styles.text} >"{t.text}"</p>

              <div className={styles.down} >
                {renderStars(t.rating)}
                <div className={styles.info} >
                  <img
                    src={t.image}
                    alt={t.name}
                    className={styles.testimonialImage}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = userImage; 
                    }}
                  /> 
                  <div className={styles.side} >
                    <h4>{t.name}</h4>
                    <div className={styles.testimonialDate}>{t.date}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;