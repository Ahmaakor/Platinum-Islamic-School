import { useState } from 'react';
import Modal from 'react-modal';
import styles from './MoreAbout.module.css';
import image3 from '../../assets/images/image1.jpg'
// import { data } from 'react-router-dom';

Modal.setAppElement('#root'); // Ensure this matches your root div ID

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

    const images = [
        "https://avatars.mds.yandex.net/i?id=c0debbd28e16385598967379a63f1e1453032f42-8209628-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=69fb31605a1b4ee510f6b4e8a0c2158645f21e2e-4034399-images-thumbs&n=13",
        image3,
        // "https://avatars.mds.yandex.net/i?id=b532b81714a736808883c365d25c19b03378b79e-10749046-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=d262f2d82e4db3e3ca2ae89f17d62c07cdab0bc5-12319660-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=47c75b7c7e2892498d004be67fa286c26d5d54e7-9148169-images-thumbs&n=13"
    ];

    const aosAnimations = [
        "fade-right",
        "fade-down",
        "fade-up",
        "zoom-in",
        "fade-left"
    ];

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
                </div>

                <div className={styles.more_about_image} data-aos="fade-left">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className={`${styles.image_container} ${styles['img' + (i + 1)]}`}
                            onClick={() => openLightbox(src)}
                            data-aos={aosAnimations[i] || "fade-up"}
                        >
                            <img src={src} alt="More About Us" />
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
