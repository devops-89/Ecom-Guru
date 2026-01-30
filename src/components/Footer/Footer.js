"use client";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SERVICES } from "@/assets/generic-data";
import Link from "next/link";

export default function Footer() {
  return (
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
          <img src="/images/logo.png" className="footer-logo" alt="logo" />
          <p className="footer-about">
            The eCom Guru is one stop 360 degree business solution for your brand. We are
            brand scientists – a team of passionate, strategic thinkers and incredible
            data driven artists, who take craft of sales seriously. We combine strategy,
            art and technology to launch and enhance brand & sales in our lab.
          </p>
        </div>
        <div className="footer-left-line"></div>
        {/* CENTER COLUMN */}
        <div className="footer-center">
          <h3>SERVICES</h3>
          <ul>
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link href={`/services/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-left-line"></div>
        {/* RIGHT COLUMN */}
        <div className="footer-right">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/termsofuse">Terms of Use</Link></li>
            <li><Link href="/privacypolicy">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      {/* SOCIAL + COPYRIGHT BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-social">
          <FaFacebookF /> <FaTwitter /> <FaInstagram /> <FaLinkedinIn />
        </div>
        <p className="copyright">
          © 2025 Digixito Media Private Limited
        </p>
      </div>
    </footer>
  );
}
