import Image from "next/image";
import styles from "./services.module.css";
import Services from "@/components/Services/Services";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import BrandGrid from "@/components/BrandGrid/BrandGrid";
import LeftBar from "@/components/LeftBar";
import RightSidebar from "@/components/RightSidebar";
import HeroLayout from "@/components/HeroLayout";

export const metadata = {
  title:
    "eCommerce Marketing, Branding & Campaign Management Solution, Boost Sales & ROI",
  description:
    "The eComguru provides wide range of services to run and grow your e-commerce business smoothly with digital marketing, campaign management, offer , inventory , catalogue & brand growth.",
  keywords: [
    "campaign management",
    "ecommerce marketing",
    "partner value added service management",
    "brand visibility management",
    "channel sales management",
    "manage pricing, offers, discount and sales",
    "inventory management",
    "inventory planning",
  ],
  openGraph: {
    title:
      "eCommerce Marketing, Branding & Campaign Management Solution, Boost Sales & ROI",
    description:
      "The eComguru provides wide range of services to run and grow your e-commerce business smoothly with digital marketing, campaign management, offer , inventory , catalogue & brand growth.",
    url: "https://theecomguru.com/services/",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "eCommerce Marketing, Branding & Campaign Management Solution, Boost Sales & ROI",
    description:
      "The eComguru provides wide range of services to run and grow your e-commerce business smoothly with digital marketing, campaign management, offer , inventory , catalogue & brand growth.",
  },
};

export default function ServicesSection() {
  return (
    <div className={styles.serviceSection}>
      <LeftBar />
      <section className={styles.heroSection}>
        <h2>Services</h2>
        <p>
          The eComguru has got the sales you need in your e-commerce business
        </p>
        <RightSidebar />
      </section>

      <section className={styles.growthSection}>
        <div className={styles.left}>
          <h2>360° SALES SOLUTIONS</h2>
          <p>
            The eComguru is the perfect partner to help grow your e-commerce
            business. We offer a full range of services and pride ourselves on
            getting results.
          </p>
        </div>

        <div className={styles.right}>
          <p>
            The eComguru is known for winning a crowded D2C consumer market. We
            share our knowledge gained from our e-commerce consulting practices
            and create a perfect win-win situations for the e-commerce
            businesses, as it makes shopping easier and convenient for the
            customers. We you are ready for your e-commerce business; we act as
            a propulsion to your e-commerce journey. ...
          </p>

          <p>
            The eComguru team will be happy to guide you and assist you choosing
            an e-commerce platform best-suited for your business objectives and
            budget expectations, and customize it to exceptionally meet your
            specific needs.
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
