import styles from './Events.module.css';
import { events } from '../../data/events';
import placeholder from "../../assets/images/logo/pis-icon-white.png"
import { Link } from 'react-router-dom';

function Events() {

  return (
    <section className={styles.events} data-aos="fade-up">
      <div className="container">
        <h2>Upcoming Events</h2>
        <div className={styles.eventList}>
          {events.map((e, i) => (
            <div key={i} className={styles.eventCard}>
              <div className={styles.eventImg}>
                <img
                  src={e.image}
                  alt={e.name}
                  onError={ev => { ev.target.onerror = null; ev.target.src = placeholder; }}
                />
              </div>
              <div className={styles.eventBody}>
                <h4>{e.name}</h4>
                <span>{e.date}</span>
                <p>{e.desc}</p>
                <Link to="#" className={styles.learnMoreBtn}>Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;