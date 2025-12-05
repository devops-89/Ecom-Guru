// app/partners/page.js  OR  components/PartnersSection.jsx
"use client";
import LeftBar from "@/components/LeftBar";
import styles from "./partners.module.css";
import HeroLayout from "@/components/HeroLayout";
import BrandGrid from "@/components/BrandGrid/BrandGrid";
import LabSection from "@/components/LabSection/LabSection";
export default function PartnersSection() {
  return (
    <div className={styles.partnerSection}>
        <LeftBar/>
        <HeroLayout/>
      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <h1>Partners</h1>
        <p>Your e-commerce business growth is our aim.</p>
      </section>

      {/* WE GROW TOGETHER SECTION */}
      <section className={styles.growTogether}>
        <div className={styles.growLeft}>
          <h2>
            WE GROW <br /> TOGETHER
          </h2>
          <p>
            As Howard Schultz claims "Success is best when it’s shared", 
            we here at eComguru share our success with our industry partners Amazon,
             Flipkart, Unicommerce, and Myntra.
          </p>
        </div>

        <div className={styles.growRight}>
          <p>
            Engaging with the market place brands will help you deliver more value 
            to your customers and achieve business objectives. With the digitally-enabled 
            business interactions between your e-commerce and market places is an important
             industry segment within the supply chain. It can be used in numerous ways like sourcing...
          </p>
          <p>
            The eComguru works in alignment with your brand’s aim and works on marketing, sales strategies,
             techniques, managing vendors, ACOS (Advertising Cost of Sales) management and PPC (Pay-Per-Click)
              management in collaboration with the well-known partners.
          </p>
        </div>
      </section>
      {/* <Partners/> */}
      
      <LabSection/>
      <BrandGrid/>
    </div>
  );
}