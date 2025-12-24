"use client";
import React from "react";
import "./blog9.css";
import LeftBar from "@/components/LeftBar";
import HeroLayout from "@/components/HeroLayout";

export default function Blog9() {
  return (
    <HeroLayout>
      <LeftBar />

      <div className="blog9-header">
        <div className="blog9-header-content">
          <h1 className="page-title">Blog</h1>
        </div>
      </div>

      <div className="blog9-inner-page">

        <div className="blog9-author">
          <img src="./images/profileIcon.jpg" alt="author" />
          <div>
            <span className="author-name">by <b>Arya</b></span>
            <span className="author-date">December 22, 2023</span>
          </div>
        </div>

        <div className="blog9-inner-header">
          <h1>
            Jellybean Casino Review: An Exceptional Online Gaming Experience
          </h1>
        </div>

        <div className="blog9-inner-content">
          <p>
            Jellybean Casino Review: An exceptional online gaming experience for
            French players looking for secure and engaging gameplay.
          </p>

          <h2>Security and Licensing</h2>
          <p>
            Jellybean Casino operates under strict regulatory compliance ensuring
            transparency, security, and player protection.
          </p>

          <h2>Bonuses & Promotions</h2>
          <p>
            New players receive generous welcome bonuses along with loyalty
            rewards and ongoing promotions.
          </p>

          <h2>Game Selection</h2>
          <p>
            The platform offers slots, table games, and live casino games from
            top providers.
          </p>

          <h2>Conclusion</h2>
          <p>
            Jellybean Casino stands out as a reliable, entertaining, and
            rewarding online casino platform.
          </p>
        </div>

      </div>
    </HeroLayout>
  );
}
