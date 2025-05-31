import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MobileNav.module.css';

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button 
                className={styles.hamburger}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
            >
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
                <span className={styles.hamburgerLine}></span>
            </button>

            <div className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
                <nav aria-label="Mobile navigation">
                    <ul>
                        <li className={styles.dropdownParent}>
                            <button 
                                className={styles.dropdownButton}
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                About <ion-icon name="chevron-down-outline" aria-hidden="true" />
                            </button>
                            <ul className={styles.dropdown}>
                                <li><Link to="/overview">Overview</Link></li>
                                <li><Link to="/mission">Mission & Vision</Link></li>
                                <li><Link to="/team">Management Team</Link></li>
                                <li><Link to="/branches">Our Branches</Link></li>
                                <li><Link to="/values">Core Values</Link></li>
                            </ul>
                        </li>

                        <li className={styles.dropdownParent}>
                            <button 
                                className={styles.dropdownButton}
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Academics <ion-icon name="chevron-down-outline" aria-hidden="true" />
                            </button>
                            <ul className={styles.dropdown}>
                                <li><Link to="/curriculum">Curriculum</Link></li>
                                <li><Link to="/preschool">Pre-School</Link></li>
                                <li><Link to="/primary">Primary School</Link></li>
                                <li><Link to="/secondary">Secondary School</Link></li>
                                <li><Link to="/islamic-studies">Islamic Studies</Link></li>
                            </ul>
                        </li>

                        <li className={styles.dropdownParent}>
                            <button 
                                className={styles.dropdownButton}
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Admission <ion-icon name="chevron-down-outline" aria-hidden="true" />
                            </button>
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
            </div>
        </>
    );
}

export default MobileNav;