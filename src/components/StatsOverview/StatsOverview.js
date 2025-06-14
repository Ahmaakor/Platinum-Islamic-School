// import styles from './StatsOverview.module.css';

// function StatsOverview() {
//   return (
//     <div className={styles.stats_overview}>
//       <div className={`${styles.container} container`}>

//         <div className={styles.card} data-aos="fade-up">
//           <div className={styles.card_icon}>
//             <i className="fa-regular fa-clock"></i>
//           </div>
//           <h4>Years Experience</h4>
//           <div className={styles.count}>
//             <span className={styles.number}>09</span>
//           </div>
//         </div>

//         <div className={styles.card} data-aos="fade-up">
//           <div className={styles.card_icon}>
//             <i className="fa-solid fa-users"></i>
//           </div>
//           <h4>Students</h4>
//           <div className={styles.count}>
//             <span className={styles.number}>200+</span>
//           </div>
//         </div>

//         <div className={styles.card} data-aos="fade-up">
//           <div className={styles.card_icon}>
//             <i className="fa-solid fa-chalkboard-teacher"></i>
//           </div>
//           <h4>Teachers</h4>
//           <div className={styles.count}>
//             <span className={styles.number}>20+</span>
//           </div>
//         </div>

//         <div className={styles.card} data-aos="fade-up">
//           <div className={styles.card_icon}>
//             <i class="fa-regular fa-percent"></i>
//           </div>
//           <h4>Success Rate</h4>
//           <div className={styles.count}>
//             <span className={styles.number}>80%</span>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default StatsOverview;


import { useEffect, useRef, useState } from 'react';
import styles from './StatsOverview.module.css';

function AnimatedCounter({ target, suffix = '', duration = 2000 }) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    let start = 0;
                    const end = parseInt(target, 10);
                    const step = Math.ceil(duration / end);
                    const interval = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start >= end) {
                            clearInterval(interval);
                            setHasAnimated(true);
                        }
                    }, step);
                }
            },
            { threshold: 0.6 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [target, duration, hasAnimated]);

    return (
        <span ref={ref} className={styles.number}>
            {count}{suffix}
        </span>
    );
}

function StatsOverview() {
    return (
        <div className={styles.stats_overview}>
            <div className={`${styles.container} container`}>
                <div className={styles.card} data-aos="fade-up">
                    <div className={styles.card_icon}>
                        <i className="fa-regular fa-clock"></i>
                    </div>
                    <h4>Year Experience</h4>
                    <div className={styles.count}>
                        <AnimatedCounter target="9" />
                    </div>
                </div>
                <div className={styles.card} data-aos="fade-up">
                    <div className={styles.card_icon}>
                        <i className="fa-solid fa-users"></i>
                    </div>
                    <h4>Students</h4>
                    <div className={styles.count}>
                        <AnimatedCounter target="250" suffix="+" />
                    </div>
                </div>
                <div className={styles.card} data-aos="fade-up">
                    <div className={styles.card_icon}>
                        <i className="fa-solid fa-chalkboard-teacher"></i>
                    </div>
                    <h4>Staff</h4>
                    <div className={styles.count}>
                        <AnimatedCounter target="20" suffix="+" />
                    </div>
                </div>
                <div className={styles.card} data-aos="fade-up">
                    <div className={styles.card_icon}>
                        <i class="fa-solid fa-award"></i>
                    </div>
                    <h4>Success Rate</h4>
                    <div className={styles.count}>
                        <AnimatedCounter target="80" suffix="%" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatsOverview;
