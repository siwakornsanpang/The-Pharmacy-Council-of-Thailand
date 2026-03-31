"use client";
import styles from "./HistorySection.module.css";

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
    return (
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
    );
}
