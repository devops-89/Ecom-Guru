"use client";
import "./Footer.css";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useRef } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const router = useRouter();
  const pathname = usePathname();
  const [yellow, setYellow] = useState(false);
  const [loading, setLoading] = useState(false);
  const clickSound = useRef(null);
  const YELLOW_DURATION = 800;

  const handleLogoClick = (e) => {
    e.preventDefault();

    if (pathname === "/") {
      return;
    }

    clickSound.current?.play();
    setYellow(true);

    setTimeout(() => {
      setYellow(false);
      setLoading(true);
      setTimeout(() => {
        router.push("/");
      }, 300);
    }, YELLOW_DURATION);
  };

  return (
    <>
      <audio ref={clickSound} src="/sounds/link.mp3" />
      {yellow && <div className="yellow-screen"></div>}

      <footer className="footer">
        <div className="footer-bg">
          <img
            src="/images/hero-bg.gif"
            className="footer-bg-gif"
            alt="footer bg"
          />
        </div>

        <div className="footer-content">
          {/* LEFT COLUMN */}
          <div className="footer-left">
            <a href="/" onClick={handleLogoClick}>
              <img src="/images/logo.png" className="footer-logo" alt="logo" />
            </a>
            <p className="footer-about">
              The eCom Guru is one stop 360 degree business solution for your
              brand. We are brand scientists – a team of passionate, strategic
              thinkers and incredible data driven artists, who take craft of
              sales seriously. We combine strategy, art and technology to launch
              and enhance brand & sales in our lab.
            </p>
          </div>
          <div className="footer-left-line"></div>
          {/* CENTER COLUMN */}
          <div className="footer-center">
            <h3>SERVICES</h3>
            <ul>
              <li>
                <Link href="/services/channel-sales-management">
                  Channel Sales Management
                </Link>
              </li>
              <li>
                <Link href="/services/catalog-management">
                  Catalog Management
                </Link>
              </li>
              <li>
                <Link href="/services/inventory-management">
                  Inventory Management
                </Link>
              </li>
              <li>
                <Link href="/services/pricing-offers-discounts">
                  Manage Pricing, Offers, Discount and Sales
                </Link>
              </li>
              <li>
                <Link href="/services/campaign-management">
                  Campaign Management
                </Link>
              </li>
              <li>
                <Link href="/services/partner-value-added-services">
                  Partner Value added Service Management
                </Link>
              </li>
              <li>
                <Link href="/services/brand-visibility-management">
                  Brand Visibility Management
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-left-line"></div>
          {/* RIGHT COLUMN */}
          <div className="footer-right">
            <h3>QUICK LINKS</h3>
            <ul>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              {/* <li>
              <Link href="/blog">Blog</Link>
            </li> */}
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/termsofuse">Terms of Use</Link>
              </li>
              <li>
                <Link href="/privacypolicy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* SOCIAL + COPYRIGHT BOTTOM */}
        <div className="footer-bottom">
          <div className="footer-social">
            <a
              href="https://www.facebook.com/onlinechannelsalessolution"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://x.com/TheecomG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/onlinechannelsales/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/theecomguru/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
          <p className="copyright">© 2025 Digixito Media Private Limited</p>
        </div>
      </footer>
    </>
  );
}
