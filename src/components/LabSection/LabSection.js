
"use client";
import './LabSection.css';
import { useEffect } from "react";

export default function LabSection() {
  useEffect(() => {
    document.querySelector('.lab-image').classList.add('show');
    document.querySelector('.lab-text').classList.add('show');
  }, []);
  

  return (
    <section className="lab">
      <div className="lab-bg">
        <img src="/images/icons/lab-bg.png" alt="Lab Background" />
      </div>
      <div className="lab-left">
        <div className="lab-image">
          <img src="/images/icons/lab-image.png" alt="Lab Desk" />
        </div>
      </div>
      <div className="lab-right">
        <div className="lab-text">
          <h5>E-COM D2C BRAND SOLUTION LAB</h5>
          <h2>THE ECOMGURU</h2>
          <p>
            The eCom Guru is one stop 360 degree business solution for your brand. We are blend business + team of passionate strategists, creative and technology talent, and culture shapers & sales in our lab.
          </p>
          <a href="#" className="take-look-btn">TAKE A LOOK</a>
        </div>
      </div>
    </section>
  );
}
