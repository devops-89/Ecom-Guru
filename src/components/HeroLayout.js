"use client";
import "./HeroMenu.css";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Loader from "@/components/Loader/loader";
import AOS from "aos";
import "aos/dist/aos.css";

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partners", href: "/partners" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export default function HeroLayout({ children }) {
  const [yellow, setYellow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const clickSound = useRef(null);

  const YELLOW_DURATION = 800;

  useEffect(() => {
    setLoading(false);
    setYellow(false);
    setMenuOpen(false);

    // Ensure body scroll is reset when navigation completes
    document.body.style.overflow = "auto";

    const timer = setTimeout(() => {
      AOS.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const openMenu = () => {
    clickSound.current?.play();
    setYellow(true);
    setTimeout(() => {
      setMenuOpen(true);
      setYellow(false);
    }, YELLOW_DURATION);
  };

  const closeMenu = () => {
    clickSound.current?.play();
    setYellow(true);
    setMenuOpen(false);
    setTimeout(() => {
      setYellow(false);
    }, YELLOW_DURATION);
  };

  const handleLinkClick = (e, url) => {
    e.preventDefault();
    clickSound.current?.play();
    setYellow(true);
    setMenuOpen(false);

    if (url === pathname) {
      setMenuOpen(false);
      setYellow(true);
      setTimeout(() => {
        setYellow(false);
      }, YELLOW_DURATION);
      return;
    }

    setTimeout(() => {
      setYellow(false);
      setLoading(true);
      setTimeout(() => {
        router.push(url);
      }, 300);
    }, YELLOW_DURATION);
  };

  return (
    <>
      <audio ref={clickSound} src="/sounds/link.mp3" />

      {!menuOpen && (
        <header className="header">
          <a href="/" onClick={(e) => handleLinkClick(e, "/")}>
            <Image src="/images/logo.png" alt="logo" width={220} height={50} />
          </a>

          <button className="menuBtn" onClick={openMenu}>
            MENU
            <div className="hamburgerCircle">
              <span></span>
              <span></span>
            </div>
          </button>
        </header>
      )}

      {yellow && <div className="yellow-screen"></div>}
      {loading && <Loader />}

      <div className={`menu-overlay ${menuOpen ? "show" : ""}`}>
        <button className="closeBtn" onClick={closeMenu}>
          <IoMdClose size={32} />
        </button>
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
