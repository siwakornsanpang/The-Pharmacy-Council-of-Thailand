import styles from "./CommitteeSection.module.css";

const MEMBERS = [
    {
        image: "/images/committee/member1.png",
        name: "รศ.ดร.ภญ.นริศา คำแก่น",
        role: "นายกสภาเภสัชกรรม",
        position: "ประธาน",
    },
    {
        image: "/images/committee/member2.png",
        name: "ดร.ภก.นพดล อัจจิมาธีระ",
        role: "อุปนายกสภาเภสัชกรรมคนที่สอง",
        position: "รองประธาน",
    },
    {
        image: "/images/committee/member3.png",
        name: "รศ.ดร.ภก.วิชัย สันติมาลีวรกุล",
        role: "ประธานวิทยาลัยเภสัชบำบัด",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member4.png",
        name: "รศ.ดร.ภญ.วรรณา ศรีวิริยานุภาพ",
        role: "ประธานวิทยาลัยการคุ้มครองผู้บริโภคฯ",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member5.png",
        name: "รศ.ดร.ภญ.นริศา คำแก่น",
        role: "ประธานวิทยาลัยเภสัชกรรมสมุนไพร.",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member6.png",
        name: "รศ.ดร.ภก.สาธิต พุทธิพิพัฒน์ขจร",
        role: "ประธานวิทยาลัยเภสัชกรรมอุตสาหการ",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member7.png",
        name: "รศ.ดร.ภก.กร ศรเลิศล้ำวาณิช",
        role: "ประธานวิทยาลัยการบริหารเภสัชกิจ",
        position: "กรรมการ",
    },
     {
        image: "/images/committee/member8.png",
        name: "รศ.ดร.ภก.กร ศรเลิศล้ำวาณิช",
        role: "ประธานวิทยาลัยการบริหารเภสัชกิจ",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member9.png",
        name: "ศ.ดร.ภก.พรศักดิ์ ศรีอมรศักดิ์",
        role: "ประธานสภาคณบดีคณะเภสัชศาสตร์ฯ",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member10.png",
        name: "รศ.ดร.ภก.สุมนต์ สกลไชย",
        role: "ประธานสภาคณบดีคณะเภสัชศาสตร์ฯ",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member11.png",
        name: "รศ.ดร.ภก.สุมนต์ สกลไชย",
        role: "ผู้ทรงคุณวุฒิ",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member12.png",
        name: "รศ.พิเศษ ภก.กิตติ พิทักษ์นิตินันท์",
        role: "ผู้ทรงคุณวุฒิ",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member13.png",
        name: "รศ.ภก.ปรีชา มนทกานติกุล",
        role: "ผู้ทรงคุณวุฒิ",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member14.png",
        name: "ผศ.พิเศษ ดร.ภก.อภิสิทธิ์ ฉัตรทนานนท์",
        role: "ผู้ทรงคุณวุฒิ",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member15.png",
        name: "ผศ.ดร.ภญ.รจพร วัชโรทยางกูร",
        role: "ผู้ทรงคุณวุฒิ",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member16.png",
        name: "รศ.ภก.สุรกิจ นาทีสุวรรณ",
        role: "ผู้ทรงคุณวุฒิ",
        position: "กรรมการ",
    },
    {
        image: "/images/committee/member17.png",
        name: "ดร.ภญ.สุภาภรณ์ ปิติพร",
        role: "ผู้ทรงคุณวุฒิ",
        position: "Automated water management ",
    },
    {
        image: "/images/committee/member18.png",
        name: "รศ.ภญ. สุณี เลิศสินอุดม",
        role: "เลขาธิการสภาเภสัชกรรม",
        position: "กรรมการและเลขานุการ",
    },
    {
        image: "/images/committee/member19.png",
        name: "ภก.เพียร เพลินบรรณกิจ",
        role: "รองเลขาธิการสภาเภสัชกรรม",
        position: "รองเลขาธิการสภาเภสัชกรรม",
    },
];

export default function CommitteeSection() {
    const chairman = MEMBERS[0];
    const otherMembers = MEMBERS.slice(1);

    return (
        <section className={styles.section}>

            {/* HEADER */}
            <div className={styles.header}>
                <h2>“ผสานพลังแห่งความเชี่ยวชาญและวิสัยทัศน์<br />เพื่อยกระดับการคุ้มครองผู้บริโภคอย่างยั่งยืน”</h2>
                <p>
                    คณะกรรมการบริหารผู้ทรงคุณวุฒิ มุ่งมั่นขับเคลื่อนมาตรฐานวิชาชีพสู่ความเป็นเลิศในระดับสากล
                </p>
            </div>

            {/* CHAIRMAN - row 1 */}
            <div className={styles.chairmanRow}>
                <div className={`${styles.card} ${styles.chairmanCard}`}>
                    <div className={styles.photoArea}>
                        <img src={chairman.image} alt={chairman.name} className={styles.memberPhoto} />
                    </div>
                    <div className={styles.nameArea}>
                        <span className={styles.memberName}>{chairman.name}</span>
                        <span className={styles.memberRole}>{chairman.role}</span>
                        <span className={styles.memberPosition}>{chairman.position}</span>
                    </div>
                </div>
            </div>

            {/* OTHER MEMBERS */}
            <div className={styles.membersRow}>
                {otherMembers.map((m, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.photoArea}>
                            <img src={m.image} alt={m.name} className={styles.memberPhoto} />
                        </div>
                        <div className={styles.nameArea}>
                            <span className={styles.memberName}>{m.name}</span>
                            <span className={styles.memberRole}>{m.role}</span>
                            <span className={styles.memberPosition}>{m.position}</span>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}