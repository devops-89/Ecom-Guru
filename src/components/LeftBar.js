"use client";
import Image from "next/image";
import styles from "./LeftBar.module.css";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
export default function LeftBar() {
  const router = useRouter();
  return (
    <aside className={styles.leftBar}>
      {/* Arrow Button */}
      <button className={styles.arrowBtn} onClick={() => router.back()}>
        <ArrowLeftIcon className={styles.arrowIcon} />
      </button>
      {/* Contact Section */}
      <a className={styles.contactSection} href="/contact">
        <span className={styles.text}>Contact Us</span>
        <EnvelopeIcon className={styles.mailIcon} />
      </a>

      {/* WhatsApp Button */}
      <a
        className={styles.whatsappBtn}
        href="https://wa.me/918800291352"
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
