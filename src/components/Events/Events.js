import styles from './Events.module.css';

function Events() {
  const events = [
    { name: "Open Day", date: "July 10, 2025", desc: "Tour our school and meet the staff." },
    { name: "Eid Celebration", date: "August 1, 2025", desc: "Join us for a festive Eid event." },
    { name: "Science Fair", date: "September 15, 2025", desc: "Students showcase their science projects." },
  ];

  return (
    <section className={styles.events} data-aos="fade-up">
      <div className="container">
        <h2>Upcoming Events</h2>
        <div className={styles.eventList}>
          {events.map((e, i) => (
            <div key={i} className={styles.eventCard}>
              <h4>{e.name}</h4>
              <span>{e.date}</span>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;