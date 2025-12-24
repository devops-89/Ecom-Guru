
"use client";
import Image from "next/image";
import styles from "./services.module.css";
import Services from "@/components/Services/Services";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import BrandGrid from "@/components/BrandGrid/BrandGrid";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";
export default function ServicesSection() {
  return (
    <div className={styles.serviceSection}>

      <LeftBar/>
      <HeroLayout/>
      <section className={styles.heroSection}>
        <h2>Services</h2>
        <p>
          Boost your e-commerce sales instantly and rapidly with the eComguru
        </p>
      </section>

      <section className={styles.growthSection}>
        <div className={styles.left}>
          <h2>360° SALES SOLUTIONS</h2>
          <p>
            The eComguru is the perfect partner to help grow your e-commerce business. 
            We offer a full range of services and pride ourselves on getting results.
          </p>
        </div>

        <div className={styles.right}>
          <p>
            The eComguru is known for winning a crowded D2C consumer market.
             We share our knowledge gained from our e-commerce consulting practices
              and create a perfect win-win situations for the e-commerce businesses, 
              as it makes shopping easier and convenient for the customers. 
              We you are ready for your e-commerce business; ...
          </p>

          <p>
            The eComguru team will be happy to guide you and assist you choosing an
             e-commerce platform best-suited for your business objectives and budget expectations,
              and customize it to exceptionally meet your specific needs.
          </p>

        </div>
      </section>
       <div className={styles.horizontalLine}></div>
      <Services />
      <CaseStudies />
      <BrandGrid />

    </div>
  );
}