import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import LabSection from "@/components/LabSection/LabSection";
import Partners from "@/components/Partners/Partners";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import BrandGrid from "@/components/BrandGrid/BrandGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <LabSection />
      <Partners />
      <CaseStudies />
      <BrandGrid />
    </>
  );
}
