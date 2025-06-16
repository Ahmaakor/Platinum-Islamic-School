import styles from "./Branches.module.css";

function Branches() {
  return (
    <section className={styles.section}>
      <div className={styles.demo}>
        <div className="container">
          <div className={styles.header}>
            <h2>Our Branches</h2>
            <p>
              Platinum Islamic School operates two well-structured campuses, each offering a range of educational levels in a nurturing environment.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.grid}>
          <div className={styles.branch}>
            <h2>Oko Oba Alagutan</h2>
            <p className={styles.address}>Oko Oba, Alagutan Area, Oyo</p>
            <h4>Available Levels:</h4>
            <ul className={styles.levels}>
              <li>Pre-School</li>
              <li>Kindergarten</li>
              <li>Nursery</li>
              <li>Primary Education</li>
              <li>Junior Secondary School</li>
              <li>Senior Secondary School</li>
            </ul>
          </div>

          <div className={styles.branch}>
            <h2>Agbogangan Mabolaje</h2>
            <p className={styles.address}>Agbogangan, Mabolaje Area, Oyo</p>
            <h4>Available Levels:</h4>
            <ul className={styles.levels}>
              <li>Pre-School</li>
              <li>Kindergarten</li>
              <li>Nursery</li>
              <li>Primary Education</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Branches;
