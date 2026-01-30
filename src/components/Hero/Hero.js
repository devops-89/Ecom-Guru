"use client";
import LeftBar from "../LeftBar";
import RightSidebar from "../RightSidebar";
import "./Hero.css";

export default function Hero() {
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const hero = document.querySelector(".hero");
  //     if (!hero) return;

  //     const scrollY = window.scrollY;
  //     const heroHeight = window.innerHeight;

  //     let opacity = 1 - scrollY / heroHeight;
  //     if (opacity < 0) opacity = 0;

  //     hero.style.opacity = opacity;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <>
      <section className="hero">
        <LeftBar />
        <div className="center-content">
          <img
            src="./images/hero-bg.gif"
            className="hero-bg-gif"
            alt="animated-bg"
          />

          <div className="hero-text-container">
            <h1 className="hero-title">
              A RESULT FOCUSED <br />
              E-COMMERCE <span className="highlight">GROWTH</span> COMPANY
            </h1>

            <div className="feature-grid">
              {[
                {
                  label: "PRODUCT VISIBILITY",
                  icon: "/images/home-hero-icon/visibility.png",
                },
                {
                  label: "LOW ACOS ADS",
                  icon: "/images/home-hero-icon/bonus.png",
                },
                {
                  label: "REVENUE GROWTH",
                  icon: "/images/home-hero-icon/stock-market.png",
                },
                {
                  label: "LIFESTYLE PRODUCT IMAGES",
                  icon: "/images/home-hero-icon/image-gallery.png",
                },
                {
                  label: "BRAND BUILDING",
                  icon: "/images/home-hero-icon/product-brand-building.png",
                },
                {
                  label: "GLOBAL EXPANSION",
                  icon: "/images/home-hero-icon/global.png",
                },
              ].map((item, idx) => (
                <div key={idx} className="feature-box">
                  <div className="icon-placeholder">
                    <img src={item.icon} alt={item.label} />
                  </div>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <RightSidebar />
        </div>
      </section>
    </>
  );
}
