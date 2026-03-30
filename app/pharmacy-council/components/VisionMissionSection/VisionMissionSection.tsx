import styles from "./VisionMissionSection.module.css";
import { TbTarget } from "react-icons/tb";
import { LuBuilding2 } from "react-icons/lu";

export default function VisionMissionSection() {
    return (
        <section className={`${styles.sectionContainer} ThaiFont`}>
            {/* Vision Card */}
            <div className={styles.card}>
                <div className={styles.iconWrapper}>
                    <div className={styles.iconBox}>
                        <TbTarget size={36} className={styles.icon} />
                    </div>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.cardTitle}>วิสัยทัศน์ของสำนักงานเลขาธิการสภาเภสัชกรรม</h2>
                    <div className={styles.descriptionArea}>
                        <p className={styles.paragraph}>
                            วิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย มุ่งมั่นพัฒนาบุคลากรและองค์ความรู้ด้านเภสัชกรรมอุตสาหการ เพื่อขับเคลื่อนอุตสาหกรรมยาของประเทศสู่สากล
                        </p>
                        <p className={styles.paragraph}>
                            เราให้ความสำคัญกับทุกขั้นตอนในอุตสาหกรรมยา ตั้งแต่การคิดค้น การผลิต การควบคุมคุณภาพ ไปจนถึงการขึ้นทะเบียนและการติดตามผล เพื่อให้มั่นใจว่ายาทุกชนิดมีคุณภาพและปลอดภัย
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Card */}
            <div className={styles.card}>
                <div className={styles.iconWrapper}>
                    <div className={styles.iconBox}>
                        <LuBuilding2 size={32} className={styles.icon} />
                    </div>
                </div>
                <div className={styles.content}>
                    <h2 className={styles.cardTitle}>พันธกิจของสำนักงานเลขาธิการสภาเภสัชกรรม</h2>
                    <div className={styles.descriptionArea}>
                        <p className={styles.paragraph}>
                            วิทยาลัยเภสัชกรรมอุตสาหการแห่งประเทศไทย ก่อตั้งขึ้นภายใต้การดูแลของสภาเภสัชกรรม เพื่อเป็นศูนย์กลางแห่งความเป็นเลิศในการพัฒนาความรู้ ความสามารถ <span className={styles.highlight}>และยกระดับมาตรฐานวิชาชีพเภสัชกรรมอุตสาหการในประเทศไทย</span>
                        </p>
                        <p className={styles.paragraph}>
                            ครอบคลุมความรู้ในทุกมิติของอุตสาหกรรมยา ตั้งแต่การวิจัยและพัฒนา การผลิต การควบคุมและประกันคุณภาพ ตลอดจนการขออนุมัติทะเบียนยาและการเฝ้าระวังความปลอดภัยของผลิตภัณฑ์
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
