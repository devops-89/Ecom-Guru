"use client";
import "./HeroMenu.css";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

const SOCIAL_ICONS = [
  { icon: FaFacebookF, href: "https://www.facebook.com/onlinechannelsalessolution" },
  { icon: FaTwitter, href: "https://x.com/theecomg" },
  { icon: FaInstagram, href: "https://www.instagram.com/onlinechannelsales/" },
  { icon: FaLinkedinIn, href: "https://in.linkedin.com/company/theecomguru" },
  { icon: FaPinterest, href: "https://in.pinterest.com/theecomguru_/" },
];

export default function HeroLayout({ children }) {
  const [yellow, setYellow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const clickSound = useRef(null);

  // useEffect(() => {
  //   document.body.style.overflow = menuOpen ? "hidden" : "auto";

  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [menuOpen]);

  useEffect(() => {
  const menu = menuRef.current;
  if (!menu) return;

  let frameId;

  let currentX = 0;
  let currentY = 0;
  let targetX = 0;
  let targetY = 0;
  let currentScale = 1;
  let targetScale = 1;

  const speed = 0.1;

  const animate = () => {
    currentX += (targetX - currentX) * speed;
    currentY += (targetY - currentY) * speed;
    currentScale += (targetScale - currentScale) * speed;

    menu.style.transform =
      `translate(${currentX}px,${currentY}px)
       scale(${currentScale})`;

    frameId=requestAnimationFrame(animate);
  };

  animate();

  const handleMouseMove=(e)=>{
    const rect=menu.getBoundingClientRect();

    const centerX=rect.left+rect.width/2;
    const centerY=rect.top+rect.height/2;

    const distanceX=e.clientX-centerX;
    const distanceY=e.clientY-centerY;

    const distance=Math.sqrt(
      distanceX*distanceX+
      distanceY*distanceY
    );

    if(distance<200){
      targetX=distanceX*0.18;
      targetY=distanceY*0.18;
      targetScale=1.35;
    }else{
      targetX=0;
      targetY=0;
      targetScale=1;
    }
  };

  window.addEventListener(
    "mousemove",
    handleMouseMove
  );

  return ()=>{
    cancelAnimationFrame(frameId);

    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );
  };
},[]);

  const openMenu = () => {
    clickSound.current?.play();
    setYellow(true);
    setTimeout(() => {
      setMenuOpen(true);
      setYellow(false);
    }, 450);
  };

  const closeMenu = () => {
    clickSound.current?.play();
    setYellow(true);
    setMenuOpen(false);
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

      <header className={`header ${menuOpen ? "menuOpen" : ""}`}>
        <Image src="/images/logo.png" alt="logo" width={230} height={45} />

        <div className="menuContainer">
          <span className="menuText">{menuOpen ? "CLOSE" : "MENU"}</span>

          <button
            ref={menuRef}
            className={`menuBtn hamburgerCircle ${menuOpen ? "active" : ""}`}
            onClick={menuOpen ? closeMenu : openMenu}
          >
            <span className="topLine"></span>
            <span className="bottomLine"></span>
          </button>
        </div>
      </header>

      {!menuOpen && (
        <aside className="rightSidebar">
          <div className="socialIcons">
            {SOCIAL_ICONS.map(({ icon: Icon, href }, index) => (
              <a key={index} href={href} target="_blank" rel="noopener noreferrer">
                <Icon />
              </a>
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
        <ul className="menuList">
          {MENU_ITEMS.map((item) => (
            <li key={item.label}>
              <a onClick={(e) => handleLinkClick(e, item.href)}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <main className={`mainContent ${
    menuOpen ? "overflow-hidden h-screen" : ""
  }`}>{children}</main>
    </>
  );
}
