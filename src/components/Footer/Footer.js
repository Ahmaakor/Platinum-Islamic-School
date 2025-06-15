import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div>
            <h4>Platinum Islamic School</h4>
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div>
            <h5>Quick Links</h5>
            <ul className={styles.links}>
              <li><strong>About</strong></li>
              <li><a href="/about">About</a></li>
              <li><a href="/faqs">FAQs</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><strong>Academics</strong></li>
              <li><a href="/curriculum">Curriculum</a></li>
              <li><a href="/preschool">Pre-School</a></li>
              <li><a href="/primary">Primary School</a></li>
              <li><a href="/secondary">Secondary School</a></li>
              <li><strong>Admissions & Activities</strong></li>
              <li><a href="/admissions">Admissions</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/blog">Blogs</a></li>
              <li><a href="/">Home</a></li>
            </ul>
          </div>
          <div>
            <p>
              <i className="fa-solid fa-location-dot"></i> 123 School Rd, City
            </p>
            <p>
              <i className="fa-solid fa-envelope"></i> info@platinumislamic.edu
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> +123 456 7890
            </p>
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
        </div>
        <div className={styles.credits}>
          <small>Designed by YourName</small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;