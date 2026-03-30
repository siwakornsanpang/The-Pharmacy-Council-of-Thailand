"use client";

import styles from "./AboutSection.module.css";
import { LuSearch, LuChevronDown } from "react-icons/lu";
import { HiMenuAlt2 } from "react-icons/hi";

export default function AboutSection() {
  return (
    <section className={styles.container}>
      {/* Left Column: Image Card */}
      <div className={styles.imageSection}>
        <div className={styles.imageCard}>
          <img
            src="/images/home/Container.png"
            alt="Pharmacy Council Secretariat"
            className={styles.image}
          />
          <div className={styles.imageOverlay}>
            <h3 className={styles.overlayTitle}>สำนักงานเลขาธิการสภาเภสัชกรรม</h3>
            <p className={styles.overlaySubtitle}>
              The Pharmacy Council of Thailand
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Content Section */}
      <div className={styles.contentSection}>
        <h1 className={styles.headline}>สำนักงานเลขาธิการสภาเภสัชกรรม</h1>
        <p className={styles.description}>
          สำนักงานเลขาธิการสภาเภสัชกรรมเป็นหน่วยงานหลักในการบริหารจัดการ
          การงานของสภาเภสัชกรรม ดำเนินงานตามกฎหมาย
          และข้อบังคับที่เกี่ยวข้อง มุ่งเน้นการพัฒนาระบบงานและบุคลากร
          เพื่อให้การดำเนินงานของสภาเภสัชกรรมเป็นไปอย่างมีประสิทธิภาพ
          โปร่งใส และเป็นธรรม เพื่อประโยชน์สูงสุดแก่ประชาชนและประเทศชาติ
        </p>

        {/* Search Card */}
        <div className={styles.searchCard}>
          <h2 className={styles.searchTitle}>ค้นหารายชื่อ</h2>
          <p className={styles.searchSubtitle}>ผู้ประกอบวิชาชีพเภสัชกรรม</p>
          
          <div className={styles.inputGroup}>
            {/* Dropdown Type */}
            <div className={styles.dropdown}>
              <HiMenuAlt2 className={styles.filterIcon} />
              <span>เลขที่ใบอนุญาต</span>
              <LuChevronDown className={styles.chevronIcon} />
            </div>
            
            {/* Search Input */}
            <div className={styles.searchInputWrapper}>
              <LuSearch className={styles.searchIcon} />
              <input 
                type="text" 
                placeholder="ค้นหาเลขที่ใบอนุญาต" 
                className={styles.searchInput}
              />
            </div>
            
            {/* Search Button */}
            <button className={styles.searchButton}>
              ค้นหา
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}