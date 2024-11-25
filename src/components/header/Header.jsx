import logo from "/public/assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navLinks = [
    {
      id: 1,
      title: "Who we are",
      link: "/",
    },
    {
      id: 2,
      title: "Scholarship Programme",
      link: "/scholarship",
    },
    {
      id: 3,
      title: "Our Team",
      link: "/team",
    },
    {
      id: 4,
      title: "Sign Petition",
      link: "https://docs.google.com/forms/d/10MYux1cHGIGf-tvVINSuOxmP2AwibRq4j2Qs354hvh0/edit",
    },
  ];
  return (
    <header>
      <nav className="md:bg-white  border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink
            className="flex items-center space-x-3 rtl:space-x-reverse"
            to="/"
          >
            <img src={logo} className="h-8" alt="AMAL Logo" />
          </NavLink>
          <button
  onClick={handleNav}
  data-collapse-toggle="navbar-default"
  type="button"
  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-black rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
  aria-controls="navbar-default"
  aria-expanded="false"
>
  <span className="sr-only">Open main menu</span>
  <svg
    className="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 17 14"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1h15M1 7h15M1 13h15"
    />
  </svg>
</button>

          <div
            className={
              nav
                ? "show w-full md:block md:w-auto"
                : "hidden w-full md:block md:w-auto"
            }
            id="navbar-default"
          >
            <ul className="font-medium text-black flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent bg-white ">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavLink 
            
                    to={link.link}
                    target={link.id === 4 ? "_blank" : "_self"}
                    className={({ isActive }) =>
                      [
                        isActive
                        ? "block py-2 px-3 text-white bg-main rounded md:bg-transparent md:text-main md:p-0"
                        : "block py-2 px-3 text-black transition-all ease-in-out delay-100 duration-500 hover:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-main md:p-0",
                      ]
                        .filter(Boolean)
                        .join(" ")
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
