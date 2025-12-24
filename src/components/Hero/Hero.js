"use client";
import HeroLayout from "../HeroLayout";
import LeftBar from "../LeftBar";
import "./Hero.css";
// import { useEffect } from "react";

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
        <HeroLayout />
        <LeftBar />
        <div className="center-image">
          <img
            src="./images/hero-bg.gif"
            className="hero-bg-gif"
            alt="animated-bg"
          />
          <img
            src="/images/mob-banner.png"
            className="hero-strip"
            alt="banner"
          />  
        </div>
      </section>
    </>
  );
}
