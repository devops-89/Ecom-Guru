import LeftBar from "@/components/LeftBar";
import styles from "./partners.module.css";
import BrandGrid from "@/components/BrandGrid/BrandGrid";
import LabSection from "@/components/LabSection/LabSection";
import PartnersSection from "@/app/about/partnerss";
import Services from "@/components/Services/Services";
import RightSidebar from "@/components/RightSidebar";

export const metadata = {
  title:
    "Partners – eCommerce Growth Company – D2C Brand Solution Lab | The eComGuru",
  keywords: [
    "the ecomguru",
    "our partners",
    "amazon",
    "flipkart",
    "myntra",
    "meesho",
    "tatacliq",
    "paytm",
    "unicommerce",
  ],
  openGraph: {
    title:
      "Partners – eCommerce Growth Company – D2C Brand Solution Lab | The eComGuru",
    url: "https://theecomguru.com/partners/",
  },
  twitter: {
    title:
      "Partners – eCommerce Growth Company – D2C Brand Solution Lab | The eComGuru",
  },
};

export default function PartnersPage() {
  return (
    <div className={styles.partnerSection}>
      <LeftBar />
      <section className={styles.heroSection}>
        <h2>Partners</h2>
        <p>Your e-commerce business growth is our aim.</p>
        <RightSidebar />
      </section>

      <section className={styles.growTogether}>
        <div className={styles.growLeft}>
          <h2>WE GROW TOGETHER</h2>
          <p>
            As Howard Schultz claims "Success is best when it’s shared", we here
            at eComguru share our success with our industry partners Amazon,
            Flipkart, Unicommerce, and Myntra.
          </p>
        </div>

        <div className={styles.growRight}>
          <p>
            Engaging with the market place brands will help you deliver more
            value to your customers and achieve business objectives. With the
            digitally-enabled business interactions between your e-commerce and
            market places is an important industry segment within the supply
            chain. It can be used in numerous ways like sourcing...
          </p>
          <p>
            The eComguru works in alignment with your brand’s aim and works on
            marketing, sales strategies, techniques, managing vendors, ACOS
            (Advertising Cost of Sales) management and PPC (Pay-Per-Click)
            management in collaboration with the well-known partners.
          </p>
        </div>
      </section>
      <PartnersSection />
      <Services />
      <LabSection />
      <BrandGrid />
    </div>
  );
}
