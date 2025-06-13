import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
// import MobileNav from '../MobileNav/MobileNav';

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className={styles.header} id="main-header">
            <div className="container">
                <div className={styles.navbar}>
                    <Link className={styles.logo}>PIS</Link>

                    <nav className={styles.nav} aria-label="Main navigation">
                        <ul>

                            <li className={styles.dropdownParent}>
                                <Link to="#" aria-haspopup="true">
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
                                <Link to="#" aria-haspopup="true">
                                    Academics <ion-icon name="chevron-down-outline" aria-hidden="true" />
                                </Link>
                                <ul className={styles.dropdown}>
                                    <li><Link to="/curriculum">Curriculum</Link></li>
                                    <li><Link to="/preschool">Pre-School</Link></li>
                                    <li><Link to="/primary">Primary School</Link></li>
                                    <li><Link to="/secondary">Secondary School</Link></li>
                                </ul>
                            </li>

                            <li className={styles.dropdownParent}>
                                <Link to="#" aria-haspopup="true">
                                    Admission <ion-icon name="chevron-down-outline" aria-hidden="true" />
                                </Link>
                                <ul className={styles.dropdown}>
                                    <li><Link to="/steps&requirements">Steps & Requirements</Link></li>
                                    <li><Link to="/fees">Fee Structure</Link></li>
                                    <li><Link to="/faqs">FAQs</Link></li>
                                    <li><Link to="/admission">Application</Link></li>
                                </ul>
                            </li>

                            <li className={styles.dropdownParent}>
                                <Link to="#" aria-haspopup="true">
                                    Gallery <ion-icon name="chevron-down-outline" aria-hidden="true" />
                                </Link>
                                <ul className={styles.dropdown}>
                                    <li><Link to="/image-gallery">Image</Link></li>
                                    <li><Link to="/video-gallery">Video</Link></li>
                                </ul>
                            </li>

                            <li><Link to="/events">Events</Link></li>
                            <li><Link to="/blog">Blogs</Link></li>
                            <li><Link id={styles.contact} to="/contact"> <span>Contact</span></Link></li>

                        </ul>
                    </nav>

                    <a
                        className={styles.hamburger}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen}
                        aria-label="Toggle navigation"
                    >
                        <span className={styles.hamburger_icon}>
                            <ion-icon name="menu" aria-hidden="true"></ion-icon>
                        </span>
                    </a>

                    {/* <MobileNav /> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
