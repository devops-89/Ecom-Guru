/**
 * ContactHero Component
 * 
 * Displays the main hero section for the contact page with:
 * - Large "Contact Us" heading
 * - Descriptive text about global presence
 * - Full-screen layout with centered content
 */
export default function ContactHero() {
  return (
   <section className="min-h-[80vh] flex items-center px-4 py-16 sm:px-6 sm:py-20 md:px-10 md:py-24 lg:px-18 lg:py-28 xl:px-20 xl:py-32">
      <div className="max-w-7xl w-2/3">
        {/* Main Heading */}
        <h1 className="text-[4.5rem] leading-[0.95] font-black tracking-[-3px] text-white md:text-[3rem] lg:text-[4rem] xl:text-[5rem]">
          Contact Us
        </h1>

        {/* Description */}
        <p className="mt-4 max-w-190 text-[1.4rem] leading-[1.45] font-normal text-white/80 md:text-[1.8rem] lg:mt-8">
          Worldwide locations and an international culture shape our global footprint.
        </p>
      </div>
    </section>
  );
}
