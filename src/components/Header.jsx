import logo from "../assets/images/logo-header.svg";
import hamburgerIcon from "../assets/images/icon-hamburger.svg";

const links = [
  { id: 1, name: "About", url: "/" },
  { id: 2, name: "Services", url: "/" },
  { id: 3, name: "Projects", url: "/" },
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
          {links.map(({ id, name, url }) => (
            <li key={id}>
              <a href={url}>{name}</a>
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
