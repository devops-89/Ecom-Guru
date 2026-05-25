"use client";
import "./Footer.css";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SERVICES } from "../../assets/generic-data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-bg">
        <Image
          src="/images/hero-bg.gif"
          className="footer-bg-gif"
          width={20}
          height={20}
          alt="footer bg"
        />
      </div>

      <div className="footer-content relative z-2 m-20 items-center justify-center gap-10">
        {/* LEFT COLUMN */}
        <div className="footer-left w-full">
          <Image src="/images/logo.png" className="footer-logo" width={190} height={190} alt="logo" />
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
          <ul className="text-center leading-2">
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
          <ul className="text-center leading-2">
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
          © {new Date().getFullYear()} Digixito Media Private Limited
        </p>
      </div>
    </footer>
  );
}
