import logo_image from ".././assets/images/logo.svg";
import hamburger_icon from ".././assets/images/icon-hamburger.svg";

const links = [
  { id: 1, name: "About", url: "/" },
  { id: 2, name: "Services", url: "/" },
  { id: 3, name: "Projects", url: "/" },
];

export default function Header() {
  return (
    <header>
      {/* logo */}
      <a href="/">
        <img src={logo_image} alt="sunnyside logo" width="124" height="24" />
      </a>
      {/* menu toggler */}
      <button>
        <img src={hamburger_icon} alt="Menu toggler" width="24" height="18" />
        <p>Menu</p>
      </button>
      {/* menu */}
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.url}>{link.name}</a>
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
