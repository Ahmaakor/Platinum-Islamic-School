import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { aboutImages } from '../../data/aboutImageData';
import styles from './MoreAbout.module.css';

Modal.setAppElement('#root');

function MoreAbout() {
    const [isOpen, setIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const openLightbox = (src) => {
        setModalImage(src);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setModalImage('');
    };

    return (
        <section className={styles.more_about}>
            <div className={`${styles.container} container`}>
                <div className={styles.more_about_text} data-aos="fade-right">
                    <h1>About Us</h1>
                    <p>
                        At Platinum Islamic School, we are deeply committed to nurturing well-rounded individuals through a holistic educational approach.
                        Our institution focuses not only on academic excellence but also on moral integrity, spiritual growth, and character development.
                        We aim to foster a culture of respect, compassion, and lifelong learning.
                    </p>
                    <p>
                        With a team of dedicated educators and support staff, we ensure that every student receives personal attention and guidance.
                        Our core values—integrity, excellence, and community—are reflected in our teaching methods, leadership style, and collaborative environment.
                        We believe that by investing in our students, we are shaping the leaders of tomorrow.
                    </p>
                    <Link to='/about/overview' className="pri_btn">Learn more</Link>
                </div>

                <div className={styles.more_about_image} data-aos="fade-left">
                    {aboutImages.map((ai, i) => (
                        <div
                            key={i}
                            className={`${styles.image_container} ${styles['img' + (i + 1)]}`}
                            onClick={() => openLightbox(ai.image)}
                            data-aos={ai.aosAnimations || "fade-up"}
                        >
                            <img src={ai.image} alt="More About Us" />
                        </div>
                    ))}
                </div>
            </div>

            <Modal
                isOpen={isOpen}
                onRequestClose={closeLightbox}
                contentLabel="Image Lightbox"
                style={{
                    content: {
                        background: 'none',
                        border: 'none',
                        inset: '10%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: "1rem",
                        height: 'fit-content',
                        width: 'fit-content',
                        margin: 'auto',
                    },
                    overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        zIndex: 999,
                    },
                }}
            >
                <div className={styles.close_button} onClick={closeLightbox}>
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <img src={modalImage} alt="Zoomed" style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '12px' }} />
            </Modal>
        </section>
    );
}

export default MoreAbout;
