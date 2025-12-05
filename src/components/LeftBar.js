"use client";
import Image from "next/image";
import styles from "./LeftBar.module.css";
export default function LeftBar() {
  return (
    <aside className={styles.leftBar}>
      {/* Top Black Arrow Button */}
      <button className={styles.arrowBtn}>
        <span>←</span>
      </button>
      {/* 🔹Yellow Contact Section */}
      <a className={styles.contactSection} href="#contact">
       
        <span className={styles.text}>Contact Us</span>
         <span className={styles.mailIcon}>✉</span>
      </a>

      {/* 🔹Green WhatsApp Button */}
      <a
        className={styles.whatsappBtn}
        href="https://wa.me/9199999999"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/icons/whatsapp.png"
          alt="WhatsApp"
          width={32}
          height={32}
        />
      </a>

    </aside>
  );
}
