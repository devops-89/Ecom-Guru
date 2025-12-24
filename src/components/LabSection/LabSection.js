"use client";
import 'aos/dist/aos.css';
import AOS from 'aos';
import './LabSection.css';
import { useEffect } from "react";

export default function LabSection() {
  useEffect(() => {
    document.querySelector('.lab-image').classList.add('show');
    document.querySelector('.lab-text').classList.add('show');
  }, []);
  
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className="lab">
  <div className="lab-bg"></div>

  <div className="lab-left" data-aos="fade-right">
    <div className="lab-image show">
      <img src="/images/icons/lab-image.png" alt="Lab Desk" />
    </div>
  </div>

  <div className="lab-right" data-aos="fade-up">
    <div className="lab-text show">
      <h5>E-COM D2C BRAND SOLUTION LAB</h5>
      <h2>THE ECOMGURU</h2>
      <p>
        The eCom Guru is one stop 360 degree business solution for your brand. We are brand scientists – a team of passionate, strategic thinkers and incredible data driven artists,  who take craft of sales seriously. 
        We combine strategy, art and technology to launch and enhance brand & sales in our lab.
      </p>
      <a href="#" className="take-look-btn">TAKE A LOOK</a>
    </div>
  </div>
</section>

  );
}