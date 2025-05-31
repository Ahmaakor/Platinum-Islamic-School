import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import MobileNav from '../MobileNav/MobileNav';

function Header() {
    return (
        <header className={styles.header} id="main-header">
            <div className="container">
                <div className={styles.navbar}>
                    <h1 className={styles.logo}>PIS</h1>
                    <nav className={styles.nav} aria-label="Main navigation">
                        <ul>
                            <li className={styles.dropdownParent}>
                                <Link to="/" aria-haspopup="true">
                                    About <ion-icon name="chevron-down-outline" aria-hidden="true" />
                                </Link>
                                <ul className={styles.dropdown}>
                                    <li><Link to="/overview">Overview</Link></li>
                                    <li><Link to="/mission">Mission & Vision</Link></li>
                                    <li><Link to="/team">Management Team</Link></li>
                                    <li><Link to="/branches">Our Branches</Link></li>
                                    <li><Link to="/values">Core Values</Link></li>
                                </ul>
                            </li>

                            <li className={styles.dropdownParent}>
                                <Link to="/academics" aria-haspopup="true">
                                    Academics <ion-icon name="chevron-down-outline" aria-hidden="true" />
                                </Link>
                                <ul className={styles.dropdown}>
                                    <li><Link to="/curriculum">Curriculum</Link></li>
                                    <li><Link to="/preschool">Pre-School</Link></li>
                                    <li><Link to="/primary">Primary School</Link></li>
                                    <li><Link to="/secondary">Secondary School</Link></li>
                                    <li><Link to="/islamic-studies">Islamic Studies</Link></li>
                                </ul>
                            </li>

                            <li className={styles.dropdownParent}>
                                <Link to="/admission" aria-haspopup="true">
                                    Admission <ion-icon name="chevron-down-outline" aria-hidden="true" />
                                </Link>
                                <ul className={styles.dropdown}>
                                    <li><Link to="/how-to-apply">How to Apply</Link></li>
                                    <li><Link to="/requirements">Requirements</Link></li>
                                    <li><Link to="/fees">Fee Structure</Link></li>
                                    <li><Link to="/scholarships">Scholarships</Link></li>
                                    <li><Link to="/faqs">FAQs</Link></li>
                                </ul>
                            </li>

                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    {/* <MobileNav /> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
