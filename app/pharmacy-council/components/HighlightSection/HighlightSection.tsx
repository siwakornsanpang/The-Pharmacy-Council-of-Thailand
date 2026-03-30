import React from 'react';
import styles from './HighlightSection.module.css';

const HighlightSection: React.FC = () => {
    // Array of image filenames to display in the marquee
    const images = Array.from({ length: 9 }, (_, i) => `/images/highlight/img (${i + 1}).png`);

    return (
        <section className={styles.highlightSection}>
            <div className={styles.backgroundOverlay}></div>

            {/* Container for Header and Marquee */}
            <div className={styles.container}>
                {/* Center Header */}
                <div className={styles.header}>
                    <p className={styles.label}>Highlight สำนักงานเลขาธิการสภาเภสัชกรรม</p>
                    <h1 className={styles.mainTitle}>ความเป็นเลิศแห่งวิชาชีพ เพื่อสุขภาพที่ดีกว่า</h1>
                </div>

                {/* Marquee Gallery Container */}
                <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeContent}>
                        {/* Duplicate lists of items for seamless transition */}
                        {[...images, ...images].map((img, index) => (
                            <div key={index} className={styles.marqueeItem}>
                                <div className={styles.imageCard}>
                                    <img src={img} alt={`Highlight ${index + 1}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighlightSection;
