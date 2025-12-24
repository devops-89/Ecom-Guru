// // src/components/Partners/Partners.js
// import './Partners.css';

// const partners = [
//   { name: "amazon", img: "https://via.placeholder.com/150x60/ffffff/000000?text=amazon" },
//   { name: "flipkart", img: "https://via.placeholder.com/150x60/ffffff/000000?text=flipkart" },
//   { name: "myntra", img: "https://via.placeholder.com/150x60/ffffff/000000?text=myntra" },
//   { name: "ajio", img: "https://via.placeholder.com/150x60/ffffff/000000?text=ajio" }
// ];

// export default function Partners() {
//   return (
//     <section className="partners">
//       <div className="container">
//         <h2>OUR PARTNERS</h2>
//         <div className="partners-grid">
//           {partners.map((p, i) => (
//             <img key={i} src={p.img} alt={p.name} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import 'aos/dist/aos.css';
import AOS from 'aos';
import './Partners.css';
import { useEffect } from "react";

const partners = [
  { name: "amazon", img: "/images/icons/amazon-Dark.svg" },
  { name: "flipkart", img: "/images/icons/Flipkart-Dark.svg" },
  { name: "myntra", img: "/images/icons/Myntra-Dark.svg" },
  { name: "unicommerce", img: "/images/icons/UNICOMMERCE-Dark.svg" },
];

export default function Partners() {

  useEffect(() => {
    document.querySelectorAll('.partner-card').forEach((el, index) => {
      setTimeout(() => el.classList.add('show'), index * 200);
    });
  }, []);

   useEffect(() => {
      AOS.init({ duration: 1000 }); 
    }, []);

  return (
    <section className="partners">
      <h2 className="partners-title">
        <span>OUR PARTNERS</span>
      </h2>
      
      <div className="partners-row" data-aos="fade-up">
        {partners.map((p, i) => (
        <div key={i} className="partner-card" >
          <img src={p.img} alt={p.name} />
          <p className="partner-text">{p.name}</p>
        </div>
         ))}
      </div>

    </section>
  );
}
