"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import styles from "./HeroMenu.css"; 

const SOCIAL_ICONS = [
  {
    Icon: FaFacebookF,
    url: "https://www.facebook.com/onlinechannelsalessolution",
  },
  {
    Icon: FaTwitter,
    url: "https://x.com/TheecomG",
  },
  {
    Icon: FaInstagram,
    url: "https://www.instagram.com/onlinechannelsales/",
  },
  {
    Icon: FaLinkedinIn,
    url: "https://www.linkedin.com/company/theecomguru/",
  },
];

export default function RightSidebar() {
  return (
    <aside className="rightSidebar">
      <div className="socialIcons">
        {SOCIAL_ICONS.map(({ Icon, url }, index) => (
          <a key={index} href={url} target="_blank" rel="noopener noreferrer">
            <Icon />
          </a>
        ))}
      </div>

      <div className="scrollDown">
        <span>SCROLL DOWN</span>
        <div className="line"></div>
      </div>
    </aside>
  );
}
