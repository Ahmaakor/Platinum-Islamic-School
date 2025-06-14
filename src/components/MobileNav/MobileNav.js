// import { Link } from 'react-router-dom';
// import styles from './MobileNav.module.css';

// function MobileNav( props) {

//     return (
//         <>
//             <div className={styles.mobileNav}>
//                 <div className={styles.navbar_closer} onClick={props.close}>
//                     <ion-icon name="close-outline"></ion-icon>
//                 </div>

//                 <div className={styles.blur_closer} onClick={props.close}></div>

//                 <nav className={styles.nav} aria-label="Mobile navigation">
//                     <div className={styles.logo}>
//                         <Link to="/">PIS</Link>
//                     </div>
//                         <ul> 

//                             <li className={styles.dropdownParent}>
//                                 <Link to="#" aria-haspopup="true">
//                                     About <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
//                                 </Link>
//                                 <ul className={styles.dropdown}>
//                                     <li><Link to="/overview">Overview</Link></li>
//                                     <li><Link to="/mission">Mission & Vision</Link></li>
//                                     <li><Link to="/team">Management Team</Link></li>
//                                     <li><Link to="/branches">Our Branches</Link></li>
//                                     <li><Link to="/values">Core Values</Link></li>
//                                 </ul>
//                             </li>

//                             <li className={styles.dropdownParent}>
//                                 <Link to="#" aria-haspopup="true">
//                                     Academics <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
//                                 </Link>
//                                 <ul className={styles.dropdown}>
//                                     <li><Link to="/curriculum">Curriculum</Link></li>
//                                     <li><Link to="/preschool">Pre-School</Link></li>
//                                     <li><Link to="/primary">Primary School</Link></li>
//                                     <li><Link to="/secondary">Secondary School</Link></li>
//                                 </ul>
//                             </li>

//                             <li className={styles.dropdownParent}>
//                                 <Link to="#" aria-haspopup="true">
//                                     Admission <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
//                                 </Link>
//                                 <ul className={styles.dropdown}>
//                                     <li><Link to="/steps&requirements">Steps & Requirements</Link></li>
//                                     <li><Link to="/fees">Fee Structure</Link></li>
//                                     <li><Link to="/faqs">FAQs</Link></li>
//                                     <li><Link to="/admission">Application</Link></li>
//                                 </ul>
//                             </li>

//                             <li className={styles.dropdownParent}>
//                                 <Link to="#" aria-haspopup="true">
//                                     Gallery <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
//                                 </Link>
//                                 <ul className={styles.dropdown}>
//                                     <li><Link to="/image-gallery">Image</Link></li>
//                                     <li><Link to="/video-gallery">Video</Link></li>
//                                 </ul>
//                             </li>

//                             <li><Link to="/events">Events</Link></li>
//                             <li><Link to="/blog">Blog</Link></li>
//                             <li><Link to="/contact">Contact</Link></li>

//                         </ul>
//                     </nav>
//             </div>
//         </>
//     );
// }

// export default MobileNav;


import { Link } from 'react-router-dom';
import styles from './MobileNav.module.css';
import { useState } from 'react';

function MobileNav({ close }) {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleDropdown = (index) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    return (
        <div className={styles.mobileNavContainer}>
            <div className={styles.overlay} onClick={close}></div>
            
            <div className={styles.mobileNav}>
                <button className={styles.navbarCloser} onClick={close} aria-label="Close navigation">
                    <ion-icon name="close-outline"></ion-icon>
                </button>

                <nav className={styles.nav} aria-label="Mobile navigation">
                    <div className={styles.logo}>
                        <Link to="/" onClick={close}>PIS</Link>
                    </div>
                    
                    <ul className={styles.mainMenu}>
                        {[
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
                        ].map((section, index) => (
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
                                            <Link to={item.to} onClick={close}>{item.text}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}

                        <li className={styles.menuItem}>
                            <Link to="/events" onClick={close} className={styles.menuLink}>Events</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/blog" onClick={close} className={styles.menuLink}>Blog</Link>
                        </li>
                        <li className={styles.menuItem}>
                            <Link to="/contact" onClick={close} className={styles.menuLink}>Contact</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default MobileNav;