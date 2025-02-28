import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import Flag from "react-world-flags"; // Import the Flag component

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for dropdown

  const { t, i18n } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  // Function to change the language
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setIsDropdownOpen(false); // Close dropdown after language selection
    navigate(`/${lang}`); // Redirect to the language-specific home page
  };

  return (
    <nav
      className={`bg-black fixed w-full z-30 top-0 left-0 py-6 shadow-md font-skin-and-bones transition-transform duration-300 ${
        isHidden ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-16">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div
            className="text-4xl font-extrabold tracking-wide cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
              color: "#39FF14", // Neon green color
              textShadow: "0 0 10px #39FF14", // Neon effect always visible
              fontFamily: '"silver-northern", sans-serif',
            }}
            whileHover={{
              scale: 1.05,
              textShadow: "0 0 20px #39FF14", // Stronger glow on hover
            }}
          >
            JC Customs Sxm
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {["Home", "Contact"].map((item, index) => (
              <motion.div
                key={index}
                className="relative group transition-all duration-300 ease-in-out"
              >
                <Link
                  to={`/${i18n.language}/${item
                    .toLowerCase()
                    .replace(" ", "-")}`}
                  className="text-lg font-semibold uppercase tracking-widest"
                  style={{
                    color: "#39FF14",
                    textShadow: "0 0 10px #39FF14",
                  }}
                >
                  {t(item)}
                </Link>
                <motion.div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#39FF14] group-hover:w-full transition-all duration-300 ease-out" />
              </motion.div>
            ))}

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                className="text-lg font-semibold uppercase tracking-widest flex items-center"
                style={{
                  color: "#39FF14",
                  textShadow: "0 0 10px #39FF14",
                  fontFamily: '"Poppins", sans-serif', // Added custom font here
                }}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
              >
                {/* Display current language flag */}
                <Flag
                  code={i18n.language === "en" ? "GB" : "FR"}
                  style={{ width: 24, height: 16 }}
                />
                <span className="ml-2">
                  {i18n.language === "en" ? "EN" : "FR"}
                </span>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg w-32 p-2"
                  style={{ zIndex: 50, fontFamily: '"Poppins", sans-serif' }} // Added custom font here too
                >
                  <button
                    className="flex items-center w-full p-2 hover:bg-gray-200"
                    onClick={() => handleLanguageChange("en")}
                    style={{ fontFamily: '"Poppins", sans-serif' }} // Ensuring font is applied
                  >
                    <Flag code="GB" style={{ width: 24, height: 16 }} />
                    <span className="ml-2">EN</span>
                  </button>
                  <button
                    className="flex items-center w-full p-2 hover:bg-gray-200"
                    onClick={() => handleLanguageChange("fr")}
                    style={{ fontFamily: '"Poppins", sans-serif' }} // Ensuring font is applied
                  >
                    <Flag code="FR" style={{ width: 24, height: 16 }} />
                    <span className="ml-2">FR</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl text-white">
              {isOpen ? "X" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black text-white py-4 px-8">
          {["Home", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${i18n.language}/${item.toLowerCase().replace(" ", "-")}`}
              className="block text-lg py-2"
              onClick={() => setIsOpen(false)}
            >
              {t(item)}
            </Link>
          ))}
          <div className="mt-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center text-lg"
              style={{
                color: "#39FF14",
                textShadow: "0 0 10px #39FF14",
                fontFamily: '"Poppins", sans-serif', // Added custom font here for mobile
              }}
            >
              <Flag
                code={i18n.language === "en" ? "GB" : "FR"}
                style={{ width: 24, height: 16 }}
              />
              <span className="ml-2">
                {i18n.language === "en" ? "EN" : "FR"}
              </span>
            </button>

            {/* Mobile Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="bg-white text-black rounded-lg shadow-lg w-32 mt-2"
                style={{ fontFamily: '"Poppins", sans-serif' }} // Ensuring font is applied for mobile dropdown
              >
                <button
                  className="flex items-center w-full p-2 hover:bg-gray-200"
                  onClick={() => handleLanguageChange("en")}
                >
                  <Flag code="GB" style={{ width: 24, height: 16 }} />
                  <span className="ml-2">EN</span>
                </button>
                <button
                  className="flex items-center w-full p-2 hover:bg-gray-200"
                  onClick={() => handleLanguageChange("fr")}
                >
                  <Flag code="FR" style={{ width: 24, height: 16 }} />
                  <span className="ml-2">FR</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
