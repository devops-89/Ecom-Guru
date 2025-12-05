
"use client";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <img src="/images/hero-bg.gif" alt="footer bg" />
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

        {/* CENTER COLUMN */}
        <div className="footer-center">
          <h3>SERVICES</h3>
          <ul>
            <li><a href="#">Channel Sales Management</a></li>
            <li><a href="#">Catalogue Management</a></li>
            <li><a href="#">Inventory Management</a></li>
            <li><a href="#">Manage Pricing, Offers, Discount and Sales</a></li>
            <li><a href="#">Campaign Management</a></li>
            <li><a href="#">Partner Value added Service Management</a></li>
            <li><a href="#">Brand Visibility Management</a></li>
          </ul>
        </div>

        {/* RIGHT COLUMN */}
        <div className="footer-right">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
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
