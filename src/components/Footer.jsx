import logo from "../assets/images/logo-footer.svg";

import facebookIcon from "../assets/images/icon-facebook.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";

// Navigation links
const navigationLinks = [
  { id: 1, label: "About", url: "/" },
  { id: 2, label: "Services", url: "/" },
  { id: 3, label: "Projects", url: "/" },
];

// Social media links
const socialMediaLinks = [
  { id: 1, icon: facebookIcon, url: "/", altText: "Facebook logo" },
  { id: 2, icon: instagramIcon, url: "/", altText: "Instagram logo" },
  { id: 3, icon: twitterIcon, url: "/", altText: "Twitter logo" },
  { id: 4, icon: pinterestIcon, url: "/", altText: "Pinterest logo" },
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
          {navigationLinks.map(({ id, label, url }) => (
            <li key={id}>
              <a href={url}>{label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Social Media Links */}
      <ul>
        {socialMediaLinks.map(({ id, icon, url, altText }) => (
          <li key={id}>
            <a href={url}>
              <img src={icon} alt={altText} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
