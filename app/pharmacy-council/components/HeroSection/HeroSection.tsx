import styles from "./HeroSection.module.css";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.textContent}>
                    <h1 className={styles.titleTh}>สำนักงานเลขาธิการสภาเภสัชกรรม</h1>
                    <h2 className={styles.titleEn}>The Pharmacy Council of Thailand</h2>
                </div>
            </div>
        </section>
    );
}
