import { useState } from "react";
import logo from "../assets/images/logo-header.svg";
import hamburgerIcon from "../assets/images/icon-hamburger.svg";

const links = [
  { id: 1, text: "About", href: "/" },
  { id: 2, text: "Services", href: "/" },
  { id: 3, text: "Projects", href: "/" },
];

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header className="relative flex items-center justify-between px-6 py-8 xl:px-10 xl:py-8">
      {/* Logo */}
      <a href="/">
        <img src={logo} alt="Sunnyside logo" className="xl:h-8" />
      </a>
      {/* Menu Toggler */}
      <button onClick={() => setIsMenuOpened((m) => !m)} className="xl:hidden">
        <img src={hamburgerIcon} alt="Menu toggler" />
        <p className="sr-only">Menu</p>
      </button>
      {/* Menu */}
      <nav
        className={`${!isMenuOpened ? "hidden xl:block" : ""} absolute inset-x-6 top-full mt-[1.125rem] bg-white py-10 before:absolute before:bottom-full before:right-0 before:size-6 before:bg-white before:content-[''] before:[clip-path:polygon(100%_0%,0%_100%,100%_100%)] xl:static xl:mt-0 xl:bg-transparent xl:p-0 xl:before:hidden`}
      >
        <ul className="flex flex-col items-center gap-8 xl:flex-row xl:gap-12">
          {links.map(({ id, text, href }) => (
            <li key={id}>
              <a
                href={href}
                className="text-xl font-semibold text-dark-grayish-blue xl:text-lg xl:text-white"
              >
                {text}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/"
              className="block rounded-full bg-yellow px-8 py-5 font-serif text-[0.9375rem] font-bold uppercase text-very-dark-desaturated-blue xl:bg-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
