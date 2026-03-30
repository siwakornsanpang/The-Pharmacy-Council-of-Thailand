"use client";
import { useState } from "react";
import CommitteeSection from "../CommitteeSection/CommitteeSection";
import LocationSection from "../LocationSection/LocationSection";
import VisionMissionSection from "../VisionMissionSection/VisionMissionSection";

import styles from "./HistorySection.module.css";

const MENU_ITEMS = [
    "ประวัติความเป็นมา",
    "วิสัยทัศน์และพันธกิจ",
    "คณะกรรมการสำนักงานเลขาธิการเภสัชกรรม",
    "สถานที่ตั้ง",
];

const TIMELINE_DATA = [
    {
        year: "พ.ศ. 2478 - 2480",
        title: "จุดเริ่มต้นแห่งมาตรฐาน",
        description:
            "พ.ศ. 2478: ประกาศใช้พระราชบัญญัติควบคุมการประกอบโรคศิลปะ เพื่อยกระดับมาตรฐานวิชาชีพเภสัชกรรมและคุ้มครองสุขภาพประชาชน",
    },
    {
        year: "พ.ศ. 2565 - 2567",
        title: "การวางรากฐานและปณิธาน",
        description:
            "พ.ศ. 2560: สภาเภสัชกรรมมีมติให้จัดตั้งสำนักงานเลขาธิการสภาเภสัชกรรม เพื่อเป็นหน่วยงานหลักในการบริหารจัดการและดำเนินงานของสภาฯ",
    },
    {
        year: "15 พฤศจิกายน 2567",
        title: "การประกาศใช้อย่างเป็นทางการ",
        description:
            "พ.ศ. 2561: จัดตั้งสำนักงานเลขาธิการสภาเภสัชกรรมอย่างเป็นทางการ ณ อาคารกระทรวงสาธารณสุข เพื่อเป็นศูนย์กลางการประสานงานและขับเคลื่อนนโยบาย",
    },
    {
        year: "ปัจจุบัน (พ.ศ. 2568 เป็นต้นไป)",
        title: "การขับเคลื่อนสู่ทางปฏิบัติ",
        description:
            "ปัจจุบัน: สำนักงานฯ มุ่งมั่นพัฒนาศักยภาพเภสัชกร ส่งเสริมการบริการเภสัชกรรมที่มีคุณภาพ และสร้างความร่วมมือกับภาคีเครือข่าย เพื่อสุขภาพที่ดีของประชาชน"
    }
];



export default function HistorySection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className={styles.historySection}>

            {/* LEFT MENU */}
            <div className={styles.historyMenu}>
                <h3>“ที่นี่คือหัวใจของเภสัชกรรมไทย<br></br>จุดประกายสู่การดูแลสุขภาพที่ยั่งยืน”</h3>

                <ul>
                    {MENU_ITEMS.map((item, index) => (
                        <li
                            key={index}
                            className={`${styles.menuItem} ${activeTab === index ? styles.active : ""}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* RIGHT CONTENT */}
            <div className={styles.historyContent}>

                {activeTab === 0 && (
                    <>
                        {/* HEADING */}
                        <h2 className={styles.mainHeading}>
                            "จากความมุ่งมั่นในการพัฒนาวิชาชีพเภสัชกรรม สู่การเป็นผู้นำด้านวิชาการและบริการสุขภาพของประเทศ"
                        </h2>

                        <p className={styles.subText}>
                           ความเป็นมาของสำนักงานเลขาธิการสภาเภสัชกรรม มีรากฐานมาจากการพัฒนาวิชาชีพเภสัชกรรมของชาติ โดยมีเหตุการณ์สำคัญตามลำดับดังนี้:
                        </p>

                        {/* TIMELINE */}
                        <div className={styles.timeline}>
                            {TIMELINE_DATA.map((item, index) => (
                                <div key={index} className={styles.timelineItem}>
                                    <div className={styles.yearBox}>
                                        <span className={styles.yearText}>{item.year}</span>
                                        <span className={styles.titleText}>{item.title}</span>
                                    </div>
                                    <p className={styles.timelineDesc} >{item.description}</p>
                                </div>
                            ))}
                        </div>

                     
                        
                    </>
                )}

                {activeTab === 1 && <VisionMissionSection />}

                {activeTab === 2 && <CommitteeSection />}

                {activeTab === 3 && <LocationSection />}

            </div>

        </section>
    );
}
