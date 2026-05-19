"use client";
import HeroLayout from "../HeroLayout";
import LeftBar from "../LeftBar";
import "./Hero.css";
import { useEffect, useRef } from "react";

export default function Hero() {
  const stripRef = useRef(null);

  useEffect(() => {

  const handleMouseMove = (e) => {

    if (!stripRef.current) return;

    const x = (window.innerWidth / 2 - e.clientX) / 12;
    const y = (window.innerHeight / 2 - e.clientY) / 12;

    stripRef.current.style.transform =
      `translate(${x}px, ${y}px)`;
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );
  };

}, []);

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
          ref={stripRef}
            src="/images/mob-banner.png"
            className="hero-strip"
            alt="banner"
          />
        </div>
      </section>
    </>
  );
}
