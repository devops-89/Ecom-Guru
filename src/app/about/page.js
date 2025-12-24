"use client";
import Image from "next/image";
import styles from "./about.module.css";
import LeftBar from "@/components/LeftBar";                                       
import HeroLayout from "@/components/HeroLayout";
import Partners from "./partnerss";
import BrandGrid from "@/components/BrandGrid/BrandGrid";
export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      {/* HERO0 SECTION */}
      <LeftBar></LeftBar>
      <HeroLayout></HeroLayout>
      <section className={styles.heroSection}>
        <h2>About</h2>
        <p>The eComguru has got the sales you need in your e-commerce business</p>
      </section>

      {/* GROWTH SECTION */}
      <section className={styles.growthSection}>
        <div className={styles.left}>
          <h2>
            LOOKING FOR 10X <br /> GROWTH?
          </h2>
            
          <h6>
            Need help growing your eCommerce business? Search no more,
            The eComguru is here with what you need. Together, let’s expand your
            business and accelerate your sales.
          </h6>
        </div>

        <div className={styles.right}>
          <p>
           The eComguru is our D2C brand solution lab, where we combine strategy,
            art and technology to launch and enhance brands and increased sales. 
            The eComguru focuses on result-oriented strategies to grow your brand 
            and increase your brand visibility and sales on all e-commerce platforms
             such as Amazon, Flipkart, Myntra, Walmart, eBay etc. With The eComguru 
             you can reach out to the large pool of audiences.
          </p>

          <p>
            We are all things e-commerce. We love to re-invent the e-retail in the growing 
            e-commerce market by deploying latest technologies as push the high-performance limits. 
            We simply help brands in preparing their first step or 100th step towards the e-commerce. 
            The eComguru clients have made us achieve our milestone. We believe in long term relationship 
            with clients and our clients love working with us due to our focused service orientation as 
            we align ourselves with clients aim.
          </p>
        </div>
      </section>
        <Partners/>
        <BrandGrid/>
    </div>
  );
}
