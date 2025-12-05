
"use client";
import './CaseStudies.css';
import { useEffect } from "react";

const cases = [
  { img: "/images/icons/redchief.webp", title: "Red Chief" },
  { img: "/images/icons/PERF.webp", title: "PERF" },
   { img: "/images/icons/furo.webp", title: "furo" },
   { img: "/images/icons/Gabicci.webp", title: "Gabicci" },
   { img: "/images/icons/inkurv.png", title: "Inkurv" },
    { img: "/images/icons/Ausha.webp", title: "Ausha" },
 
];

export default function CaseStudies() {

  useEffect(() => {
    document.querySelectorAll('.case-card').forEach((el, index) => {
      setTimeout(() => el.classList.add('show'), index * 200);
    })
  }, []);

  return (
    <section className="case-studies">

      <h2 className="case-title">CASE STUDIES</h2>

      <div className="case-wrapper">
        {cases.map((c, i) => (
          <div className="case-card" key={i}>
            <img src={c.img} alt={c.title} />
            <p className="case-name">{c.title}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
