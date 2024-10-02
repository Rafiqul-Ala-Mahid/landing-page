import { useState, useEffect } from "react";
import { TfiWorld } from "react-icons/tfi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r via-[#21AE7C] from-[#045661] to-[#37C9B8]">
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center border-b lg:border-white border-gray-300">
          <div className="flex">
            <div>
              <h1
                className={`text-2xl flex items-center gap-1 font-cosmic font-bold ${
                  isScrolled ? "text-black lg:text-white" : "text-white"
                }`}
              >
                Everything
                <TfiWorld />
                Green
              </h1>
              <p className="text-white">Measuring Impact, Driving Change</p>
            </div>
          </div>
          <div className="hidden lg:flex space-x-4 items-center">
            <a
              href="/"
              className={`px-2 ${
                isScrolled ? "text-black lg:text-white" : "text-white"
              }`}
            >
              Sustainable Websites
            </a>
            <a
              href="/about"
              className={`px-2 ${
                isScrolled ? "text-black lg:text-white" : "text-white"
              }`}
            >
              Blog
            </a>
            <a
              href="/services"
              className={`px-2 ${
                isScrolled ? "text-black lg:text-white" : "text-white"
              }`}
            >
              Contact Us
            </a>
            <a
              href="/contact"
              className={`px-2 ${
                isScrolled ? "text-black lg:text-white" : "text-white"
              }`}
            >
              Login
            </a>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${
                isScrolled ? "text-black" : "text-white"
              } hover:text-gray-900 focus:outline-none`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-black border-2 block p-2 rounded-md">
              Sustainable Websites
            </a>
            <a
              href="/about"
              className="text-black border-2 block p-2 rounded-md"
            >
              Blog
            </a>
            <a
              href="/services"
              className="text-black border-2 block p-2 rounded-md"
            >
              Contact Us
            </a>
            <a
              href="/contact"
              className="text-black border-2 block p-2 rounded-md"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
