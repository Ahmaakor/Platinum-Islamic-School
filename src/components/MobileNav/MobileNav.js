import { Link } from 'react-router-dom';
import styles from './MobileNav.module.css';
import { useState, useEffect } from 'react';

function MobileNav({ close }) {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileNavActive, setMobileNavActive] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setMobileNavActive(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const menu = [
        {
            title: "About",
            items: [
                { to: "/overview", text: "Overview" },
                { to: "/mission", text: "Mission & Vision" },
                { to: "/team", text: "Management Team" },
                { to: "/branches", text: "Our Branches" },
                { to: "/values", text: "Core Values" }
            ]
        },
        {
            title: "Academics",
            items: [
                { to: "/curriculum", text: "Curriculum" },
                { to: "/preschool", text: "Pre-School" },
                { to: "/primary", text: "Primary School" },
                { to: "/secondary", text: "Secondary School" }
            ]
        },
        {
            title: "Admission",
            items: [
                { to: "/steps&requirements", text: "Steps & Requirements" },
                { to: "/fees", text: "Fee Structure" },
                { to: "/faqs", text: "FAQs" },
                { to: "/admission", text: "Application" }
            ]
        },
        {
            title: "Gallery",
            items: [
                { to: "/image-gallery", text: "Image" },
                { to: "/video-gallery", text: "Video" }
            ]
        }
    ];

    function closeMobileNav() {
        setMobileNavActive(false);
        setTimeout(() => {
            close();
        }, 300); // match your animation duration
    }

    return (
        <div className={styles.mobileNavContainer}>
            <div className={styles.overlay} onClick={closeMobileNav}></div>

            <div className={`${styles.mobileNav} ${mobileNavActive ? styles.active : ''}`}>
                <button className={styles.navbarCloser} onClick={closeMobileNav} aria-label="Close navigation">
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <nav className={styles.nav} aria-label="Mobile navigation">
                    <div className={styles.logo}>
                        <Link to="/" onClick={closeMobileNav}>PIS</Link>
                    </div>

                    <ul className={styles.mainMenu}>
                        {menu.map((section, index) => (
                            <li key={index} className={`${styles.menuItem} ${activeDropdown === index ? styles.active : ''}`}>
                                <div className={styles.menuItemContent}>
                                    <Link
                                        to="#"
                                        className={styles.menuLink}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleDropdown(index);
                                        }}
                                    >
                                        {section.title}
                                    </Link>
                                    <button
                                        className={styles.chevronButton}
                                        onClick={() => toggleDropdown(index)}
                                        aria-label={`${activeDropdown === index ? 'Collapse' : 'Expand'} ${section.title} menu`}
                                    >
                                        <i className={`fa-solid fa-chevron-${activeDropdown === index ? 'up' : 'down'}`}></i>
                                    </button>
                                </div>
                                <ul className={styles.dropdown}>
                                    {section.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Link to={item.to} onClick={closeMobileNav}>{item.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}

                        <li className={styles.menuItem}>
                            <Link to="/events" onClick={closeMobileNav} className={styles.menuLink}>Events</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/blog" onClick={closeMobileNav} className={styles.menuLink}>Blog</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/contact" onClick={closeMobileNav} className={styles.menuLink}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MobileNav;