import logo from "../assets/images/logo-footer.svg";

import facebookIcon from "../assets/images/icon-facebook.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";

// Navigation links
const navigationLinks = [
  { id: 1, text: "About", href: "/" },
  { id: 2, text: "Services", href: "/" },
  { id: 3, text: "Projects", href: "/" },
];

// Social media links
const socialMediaLinks = [
  { id: 1, icon: facebookIcon, href: "/", altText: "Facebook logo" },
  { id: 2, icon: instagramIcon, href: "/", altText: "Instagram logo" },
  { id: 3, icon: twitterIcon, href: "/", altText: "Twitter logo" },
  { id: 4, icon: pinterestIcon, href: "/", altText: "Pinterest logo" },
];

export default function Footer() {
  return (
    <footer>
      {/* Logo */}
      <a href="/">
        <img src={logo} alt="Sunnyside logo" />
      </a>

      {/* Navigation */}
      <nav>
        <ul>
          {navigationLinks.map(({ id, text, href }) => (
            <li key={id}>
              <a href={href}>{text}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Media Links */}
      <ul>
        {socialMediaLinks.map(({ id, icon, href, altText }) => (
          <li key={id}>
            <a href={href}>
              <img src={icon} alt={altText} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
