
"use client";
import HeroLayout from "../HeroLayout";
import LeftBar from "../LeftBar";
import "./Hero.css";
import { useState, useRef } from "react";
export default function Hero() {
  return (
    <>
     <section className="hero">
       <HeroLayout></HeroLayout>
       <LeftBar></LeftBar>
        <div className="center-image">
        
          <img src="/images/mob-banner.png" className="hero-strip" alt="banner" />
        </div>
      </section>
      
    </>
  );
}
