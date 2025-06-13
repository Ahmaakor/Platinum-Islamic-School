// import styles from './StatsOverview.module.css';

// function StatsOverview() {
//   return (
//     <div className={styles.stats_overview}>
//       <div className={`${styles.container} container`}>

//         <div className={styles.card} data-aos="fade-up">
//           <div className={styles.card_icon}>
//             <ion-icon name="time-outline"></ion-icon>
//           </div>
//           <h1>Years Experience</h1>
//           <div className={styles.count}>
//             <span className={styles.number}>09</span>
//           </div>
//         </div>

//         <div className={styles.card} data-aos="fade-up">
//           <div className={styles.card_icon}>
//             <ion-icon name="people-outline"></ion-icon>
//           </div>
//           <h1>Students</h1>
//           <div className={styles.count}>
//             <span className={styles.number}>200+</span>
//           </div>
//         </div>

//         <div className={styles.card} data-aos="fade-up">
//           <div className={styles.card_icon}>
//             <ion-icon name="person-outline"></ion-icon>
//           </div>
//           <h1>Teachers</h1>
//           <div className={styles.count}>
//             <span className={styles.number}>20+</span>
//           </div>
//         </div>

//         <div className={styles.card} data-aos="fade-up">
//           <div className={styles.card_icon}>
//             <ion-icon name="checkmark-circle-outline"></ion-icon>
//           </div>
//           <h1>Success Rate</h1>
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
                        <ion-icon name="time-outline"></ion-icon>
                    </div>
                    <h1>Year Experience</h1>
                    <div className={styles.count}>
                        <AnimatedCounter target="9" />
                    </div>
                </div>
                <div className={styles.card} data-aos="fade-up">
                    <div className={styles.card_icon}>
                        <ion-icon name="people-outline"></ion-icon>
                    </div>
                    <h1>Students</h1>
                    <div className={styles.count}>
                        <AnimatedCounter target="200" suffix="+" />
                    </div>
                </div>
                <div className={styles.card} data-aos="fade-up">
                    <div className={styles.card_icon}>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                    <h1>Teachers</h1>
                    <div className={styles.count}>
                        <AnimatedCounter target="20" suffix="+" />
                    </div>
                </div>
                <div className={styles.card} data-aos="fade-up">
                    <div className={styles.card_icon}>
                        <ion-icon name="checkmark-circle-outline"></ion-icon>
                    </div>
                    <h1>Success Rate</h1>
                    <div className={styles.count}>
                        <AnimatedCounter target="80" suffix="%" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatsOverview;
