import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.school}>
            <h4>Platinum Islamic School</h4>
            <p>Ensuring a fulfilled life for your child(ren).</p>
            <div className={styles.socials}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className={styles.links}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Curriculum</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3>About</h3>
            <ul>
              <li><a href="#">Overview</a></li>
              <li><a href="#">Mission/Vision</a></li>
              <li><a href="#">Branches</a></li>
              <li><a href="#">Core Value</a></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3>Addmission</h3>
            <ul>
              <li><a href="#">Steps & Requirements</a></li>
              <li><a href="#">School Fee</a></li>
              <li><a href="#">Application</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div className={styles.contact}>
            <h3>Contact Us</h3>
            <p><i className="fa-solid fa-location-dot"></i> Agbogangan Mabolaje Area, Oyo, Oyo State.</p>
            <p><i className="fa-solid fa-location-dot"></i> Alagutan Oko-Oba, Oyo, Oyo State.</p>
            <p><i className="fa-solid fa-phone"></i> 08164172383, 08056973080</p>
            <p><i className="fa-solid fa-envelope"></i> platinumislamic@gmail.com</p>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>All Rights Reserved</p>
          <div>
            <a href="#">Terms of use</a> | <a href="#">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
