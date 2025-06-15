import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import logo from '../../assets/images/logo/pis-logo-white.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Top Row */}
        <div className={styles.topRow}>
          <img src={logo} alt="Platinum Islamic School Logo" className={styles.logo} />
          <p className={styles.tagline}>Ensuring a fulfilled life for your child(ren).</p>
          <div className={styles.socials}>
            <a href="https://facebook.com" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com" aria-label="Twitter"><i className="fa-brands fa-x-twitter"></i></a>
            <a href="https://instagram.com" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        {/* Middle Row */}
        <div className={styles.middleRow}>
          <div>
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">About</Link></li>
              <li><Link to="/">Curriculum</Link></li>
              <li><Link to="/">Blog</Link></li>
              <li><Link to="/">Events</Link></li>
            </ul>
          </div>
          <div>
            <h3>About</h3>
            <ul>
              <li><Link to="/">Overview</Link></li>
              <li><Link to="/">Mission/Vision</Link></li>
              <li><Link to="/">Branches</Link></li>
              <li><Link to="/">Core Value</Link></li>
            </ul>
          </div>
          <div>
            <h3>Admissions</h3>
            <ul>
              <li><Link to="/">Requirements</Link></li>
              <li><Link to="/">School Fee</Link></li>
              <li><Link to="/">Application</Link></li>
              <li><Link to="/">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3>Admissions</h3>
            <ul>
              <li><Link to="/">Requirements</Link></li>
              <li><Link to="/">School Fee</Link></li>
              <li><Link to="/">Application</Link></li>
              <li><Link to="/">FAQs</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className={styles.bottomRow}>
          <div className={styles.contact}>
            {/* <p><i className="fa-solid fa-location-dot"></i> Agbogangan Mabolaje Area, Oyo</p>
            <p><i className="fa-solid fa-location-dot"></i> Alaguntan Oko-Oba Area, Oyo</p> */}
            <p><i className="fa-solid fa-phone"></i> 08164172383, 08056973080</p>
            <p><i className="fa-solid fa-envelope"></i> platinumislamic@gmail.com</p>
          </div>
          <div className={styles.policy}>
            <Link to="/term">Terms of Use</Link> | <Link to="/privacy">Privacy Policy</Link>
            <p>© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
