"use client";
import "./BrandGrid.css";
import { useEffect } from "react";

const brands = [
  { name: "red chief", img: "/images/icons/ecom01.webp" },
  { name: "furo", img: "/images/icons/ecom02.webp" },
  { name: "ausha", img: "/images/icons/ecom03.webp" },
  { name: "perf", img: "/images/icons/ecom04.webp" },
  { name: "inkurv", img: "/images/icons/ecom05.webp" },
  { name: "gabicci", img: "/images/icons/ecom06.webp" },
];

export default function BrandGrid() {
  useEffect(() => {
    document.querySelectorAll(".brand-card").forEach((el, i) => {
      setTimeout(() => el.classList.add("show"), i * 150);
    });
  }, []);

  return (
    <section className="brand-grid" data-aos="fade-up">
      <div className="brand-logos">
        {brands.map((b, i) => (
          <div key={i} className="brand-card">
            <img src={b.img} alt={b.name} />
            <p className="brand-text">{b.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
