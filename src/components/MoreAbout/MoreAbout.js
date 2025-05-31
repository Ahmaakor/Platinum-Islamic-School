import { useState } from 'react';
import Modal from 'react-modal';
import styles from './MoreAbout.module.css';

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
        "https://avatars.mds.yandex.net/i?id=4f915abad08a2b514cc0138ed858519061e686e2-5425012-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=487c842a0b9738c09430d91fe6f458eb7577901d-4662214-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=64a1013b234a701f1c8a4a703439491f450d3dd0-11538780-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=0fe1598958d4f00dbbfcd359989066fccce55ae6-6428252-images-thumbs&n=13",
        "https://avatars.mds.yandex.net/i?id=16c0671a09fdc3a4ac034e23f14f99c415505fb1-5495733-images-thumbs&n=13"
    ];

    return (
        <section className={styles.more_about}>
            <div className={`${styles.container} container`}>
                <div className={styles.more_about_text}>
                    <h1>More About Us</h1>
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

                <div className={styles.more_about_image}>
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className={`${styles.image_container} ${styles['img' + (i + 1)]}`}
                            onClick={() => openLightbox(src)}
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
                <img src={modalImage} alt="Zoomed" style={{ maxWidth: '100%', maxHeight: '90vh', borderRadius: '12px' }} />
            </Modal>
        </section>
    );
}

export default MoreAbout;
