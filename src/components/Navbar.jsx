import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/40 border-b border-white/20">
      <div className="flex justify-between items-center px-4 md:px-12 py-4 md:py-5">
        <Link
          to="/"
          className="flex items-center gap-2 md:gap-3"
          onClick={() => setOpen(false)}
        >
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
          />
          <h1 className="text-lg md:text-2xl tracking-wide font-velista italic whitespace-nowrap">
            N&M ArtHouse
          </h1>
        </Link>
        <div className="hidden md:flex items-center gap-10 text-lg font-[Playfair_Display]">
          {["Home", "Events", "Packages", "Reviews"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          <Link
            to="/connect"
            className="ml-6 px-6 py-2 rounded-full border-2 border-primary text-primary transition hover:bg-primary hover:text-white"
          >
            Let's Connect
          </Link>
        </div>
        <div className="md:hidden text-2xl cursor-pointer">
          {open ? (
            <FiX onClick={() => setOpen(false)} />
          ) : (
            <FiMenu onClick={() => setOpen(true)} />
          )}
        </div>

      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#faf7f5] text-lg font-[Playfair_Display]">

          {["Home", "Events", "Packages", "Reviews"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}

          <Link
            to="/connect"
            onClick={() => setOpen(false)}
            className="px-6 py-2 rounded-full border border-black"
          >
            Let's Connect
          </Link>

        </div>
      )}

    </nav>
  );
};

export default Navbar;