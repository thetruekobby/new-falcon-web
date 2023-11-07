import React from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const navOptions = [
    "home",
    "about us",
    "services",
    "portfolio",
    "contact us",
  ];

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="container flex justify-between py-3 mx-auto">
        <div className="flex flex-row items-center">
          <img
            src="/img/brand/logoOnly.png"
            alt="logo"
            className="object-contain h-20 w-20"
          />
          <span className="text-2xl font-bold">Falcon Technologies</span>
        </div>
        <ul className="flex items-center gap-5 capitalize text-xl">
          {navOptions.map((option, index) => (
            <Link
              key={index}
              activeClass="active"
              to={option}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              /* onSetActive={handleSetActive} */ className={
                option === "contact us"
                  ? "btn-primary"
                  : "p-2 font-semibold whitespace-nowrap cursor-pointer"
              }
            >
              {option}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
