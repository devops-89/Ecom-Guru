// "use client";
// import "./HeroMenu.css";
// import Image from "next/image";
// import { useState, useRef } from "react";
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

// const MENU_ITEMS = [
//   { label: "Home", href: "/" },
//   { label: "About", href: "/about" },
//   { label: "Services", href: "/services" },
//   { label: "Partners", href: "/partners" },
//   { label: "Blog", href: "/blog" },
//   { label: "Contact Us", href: "/contact" },
// ];

// const SOCIAL_ICONS = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn];

// export default function HeroLayout({ children }) {
//   const [yellow, setYellow] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const clickSound = useRef(null);

//   const openMenu = () => {
//     clickSound.current?.play();
//     setYellow(true);
//     setTimeout(() => {
//       setMenuOpen(true);
//       document.body.style.overflow = "hidden";
//     }, 450);
//   };

//   const closeMenu = () => {
//     clickSound.current?.play();
//     setMenuOpen(false);
//     document.body.style.overflow = "auto";
//     setTimeout(() => setYellow(false), 450);
//   };

//   const handleLinkClick = (e, url) => {
//     e.preventDefault();
//     clickSound.current?.play();
//     closeMenu();
//     setTimeout(() => {
//       window.location.href = url;
//     }, 600);
//   };

//   return (
//     <>
//       <audio ref={clickSound} src="/sounds/link.mp3" />

//       <header className="header">
//         <Image src="/images/logo.png" alt="logo" width={160} height={40} />

//         {!menuOpen && (
//           <button className="menuBtn" onClick={openMenu}>
//             MENU
//             <div className="hamburgerCircle">
//               <span></span><span></span>
//             </div>
//           </button>
//         )}
//       </header>

//       {!menuOpen && (
//         <aside className="rightSidebar">
//           <div className="socialIcons">
//             {SOCIAL_ICONS.map((Icon, index) => (
//               <a key={index}><Icon /></a>
//             ))}
//           </div>

//           <div className="scrollDown">
//             <span>SCROLL DOWN</span>
//             <div className="line"></div>
//           </div>
//         </aside>
//       )}

//       {yellow && <div className="yellow-screen"></div>}

//       <div className={`menu-overlay ${menuOpen ? "show" : ""}`}>
//         <button className="closeBtn" onClick={closeMenu}>×</button>
//         <ul className="menuList">
//           {MENU_ITEMS.map((item) => (
//             <li key={item.label}>
//               <a onClick={(e) => handleLinkClick(e, item.href)}>{item.label}</a>
//             </li>
//           ))}
//         </ul>
//       </div>
      
//       <main className="mainContent">{children}</main>
//     </>
//   );
// }











"use client";
import "./HeroMenu.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_ICONS = [FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn];

export default function HeroLayout({ children }) {
  const [yellow, setYellow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const clickSound = useRef(null);

  // added page loaded yellow screen animation
  useEffect(() => {
    const runYellow = () => {
      setYellow(true);
      setTimeout(() => setYellow(false), 500);
    };

    window.addEventListener("page-loaded", runYellow);
    return () => window.removeEventListener("page-loaded", runYellow);
  }, []);

  const openMenu = () => {
    clickSound.current?.play();
    setYellow(true);
    setTimeout(() => {
      setMenuOpen(true);
      document.body.style.overflow = "hidden";
      setYellow(false);
    }, 450);
  };

  const closeMenu = () => {
    clickSound.current?.play();
    setYellow(true);
    setMenuOpen(false);
    document.body.style.overflow = "auto";

    setTimeout(() => setYellow(false), 450);
  };

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    clickSound.current?.play();
    closeMenu();
    setTimeout(() => {
      window.location.href = url;
    }, 600);
  };

  return (
    <>
      <audio ref={clickSound} src="/sounds/link.mp3" />

      <header className="header">
        <Image src="/images/logo.png" alt="logo" width={160} height={40} />

        {!menuOpen && (
          <button className="menuBtn" onClick={openMenu}>
            MENU
            <div className="hamburgerCircle">
              <span></span><span></span>
            </div>
          </button>
        )}
      </header>

      {!menuOpen && (
        <aside className="rightSidebar">
          <div className="socialIcons">
            {SOCIAL_ICONS.map((Icon, index) => (
              <a key={index}><Icon /></a>
            ))}
          </div>

          <div className="scrollDown">
            <span>SCROLL DOWN</span>
            <div className="line"></div>
          </div>
        </aside>
      )}

      {yellow && <div className="yellow-screen"></div>}

      <div className={`menu-overlay ${menuOpen ? "show" : ""}`}>
        <button className="closeBtn" onClick={closeMenu}>×</button>
        <ul className="menuList">
          {MENU_ITEMS.map((item) => (
            <li key={item.label}>
              <a onClick={(e) => handleLinkClick(e, item.href)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <main className="mainContent">{children}</main>
    </>
  );
}