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
    <header className="relative flex items-center justify-between px-[22px] py-8 lg:px-10 lg:py-11">
      {/* Logo */}
      <a href="/">
        <img src={logo} alt="Sunnyside logo" className="lg:h-8 lg:w-auto" />
      </a>
      {/* Menu Toggler */}
      <button onClick={() => setIsMenuOpened((m) => !m)} className="lg:hidden">
        <img src={hamburgerIcon} alt="Menu toggler" />
        <p className="sr-only">Menu</p>
      </button>
      {/* Menu */}
      <nav
        className={`${!isMenuOpened ? "hidden lg:block" : ""} absolute inset-x-[22px] top-full mt-4 bg-white p-10 before:absolute before:bottom-full before:right-0 before:block before:size-6 before:bg-white before:content-[''] before:[clip-path:polygon(100%_0%,0%_100%,100%_100%)] lg:static lg:mt-0 lg:bg-transparent lg:p-0 lg:before:hidden`}
      >
        <ul className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          {links.map(({ id, text, href }) => (
            <li key={id}>
              <a
                href={href}
                className="font-semibold text-very-dark-grayish-blue lg:text-white"
              >
                {text}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/"
              className="block rounded-full bg-yellow px-7 py-5 font-serif text-sm font-bold uppercase text-very-dark-desaturated-blue lg:bg-white"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
