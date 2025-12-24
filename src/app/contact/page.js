"use client";
import styles from "./contact.module.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";
import BrandGrid from "@/components/BrandGrid/BrandGrid";

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <LeftBar />
      <HeroLayout />
      {/* hero section */}
      <section className={styles.heroSection}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Let's create something amazing together.</p>
      </section>
       {/* contact section */}
      <section className={styles.contactSection}>
        <div className={styles.contactInfo}>
          <h2>WE’D LOVE TO HEAR FROM YOU. LET’S TALK ABOUT IT!</h2>
          <p>If you have any questions or concerns, a member of staff will be happy to assist you. Feel free to contact us by telephone or email, and we will be sure to get back to you as soon as possible.</p>
          <ul>
            <li><strong>Email:</strong> info@theecomguru.com</li>
            <li><strong>Phone:</strong> +9197173 00851 </li>
            <li><strong>Address:</strong>2nd Floor, D-320,
                                          Sector 63, Noida,
                                        Uttar Pradesh – 201307 INDIA</li>
          </ul>
        </div>
        
        <form className={styles.contactForm}>
          <div className={styles.inputGroup}>
            <label>Your Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className={styles.inputGroup}>
            <label>Message</label>
            <textarea placeholder="Write your message"></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>
      </section>
      <BrandGrid />
    </div>
  );
}
