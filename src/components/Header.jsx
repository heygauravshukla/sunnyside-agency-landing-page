import logo from "../assets/images/logo-header.svg";
import hamburgerIcon from "../assets/images/icon-hamburger.svg";

const links = [
  { id: 1, text: "About", href: "/" },
  { id: 2, text: "Services", href: "/" },
  { id: 3, text: "Projects", href: "/" },
];

export default function Header() {
  return (
    <header>
      {/* Logo */}
      <a href="/">
        <img src={logo} alt="Sunnyside logo" />
      </a>
      {/* Menu Toggler */}
      <button>
        <img src={hamburgerIcon} alt="Menu toggler" />
        <p>Menu</p>
      </button>
      {/* Menu */}
      <nav>
        <ul>
          {links.map(({ id, text, href }) => (
            <li key={id}>
              <a href={href}>{text}</a>
            </li>
          ))}
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
