import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/images/logo/pis-logo-cream.png'

function Footer() {
  return (
    <footer className={styles.footer} >
      <div className="container"  data-aos="fade-up">
        <div className={styles.top}>
          <div className={styles.school}>
            <img src={logo} alt="Platinum Islamic School Logo" />
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
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Curriculum</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Events</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3>About</h3>
            <ul>
              <li><Link to="/">Overview</Link></li>
              <li><Link to="/">Mission/Vision</Link></li>
              <li><Link to="/">Branches</Link></li>
              <li><Link to="/">Core Value</Link></li>
            </ul>
          </div>

          <div className={styles.links}>
            <h3>Addmission</h3>
            <ul>
              <li><Link to="/">Steps & Requirements</Link></li>
              <li><Link to="/">School Fee</Link></li>
              <li><Link to="/">Application</Link></li>
              <li><Link to="/">FAQs</Link></li>
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
            <a href='term'>Terms of use</a> | <a href="/">Privacy policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
