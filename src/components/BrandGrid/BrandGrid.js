
"use client";
import './BrandGrid.css';
import { useEffect } from "react";

const brands = [
  "/images/icons/ecom01.webp",
  "/images/icons/ecom02.webp",
  "/images/icons/ecom03.webp",
  "/images/icons/ecom04.webp",
  "/images/icons/ecom05.webp",
  "/images/icons/ecom06.webp",
];

export default function BrandGrid() {

  useEffect(() => {
    document.querySelectorAll(".brand-card").forEach((el, i) => {
      setTimeout(() => el.classList.add("show"), i * 150);
    });
  }, []);

  return (
    <section className="brand-grid">
      <div className="brand-logos">
        {brands.map((b, i) => (
          <div key={i} className="brand-card">
            <img src={b} alt="Brand" />
          </div>
        ))}
      </div>
    </section>
  );
}
