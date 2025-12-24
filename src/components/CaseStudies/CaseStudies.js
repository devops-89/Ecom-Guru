"use client";
import 'aos/dist/aos.css';
import AOS from 'aos';
import './CaseStudies.css';
import { useEffect } from "react";

const cases = [
  { img: "/images/icons/redchief.webp", title: "Red Chief", href:"/redChief" },
  { img: "/images/icons/PERF.webp", title: "PERF", href:"/perf"},
  { img: "/images/icons/furo.webp", title: "furo",href:"/furo" },
  { img: "/images/icons/Gabicci.webp", title: "Gabicci", href:"/gabicci" },
  { img: "/images/icons/inkurv.png", title: "Inkurv", href:"/inkurv" },
  { img: "/images/icons/Ausha.webp", title: "Ausha", href:"/ausha" },
];

export default function CaseStudies() {

  useEffect(() => {
    document.querySelectorAll('.case-card').forEach((el, index) => {
      setTimeout(() => el.classList.add('show'), index * 200);
    })
  }, []);

  useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);

  return (
    <section className="case-studies">
      <h2 className="case-title">CASE STUDIES</h2>
      <div className="case-wrapper" data-aos="fade-up">
        {cases.map((c, i) => (
          <div className="case-card" key={i} >
            <img src={c.img} alt={c.title} />
            <p className="case-name">{c.title}</p>
            <a className='case-detail' href={c.href}>case details</a>
          </div>
        ))}
      </div>
    </section>
  );
}
