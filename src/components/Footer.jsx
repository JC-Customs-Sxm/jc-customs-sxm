import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <p className="text-lg">
            &copy; 2024 JC Customs Sxm. {t("All rights reserved.")}
          </p>
          <p className="text-sm mt-2">
            {t("Designed with love for businesses like yours.")}
          </p>
        </div>

        <div className="mb-4">
          <ul className="flex justify-center space-x-8 text-sm">
            <li>
              <a
                href="/terms"
                className="hover:text-gray-400 transition-colors"
              >
                {t("Terms and Conditions")}
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-gray-400 transition-colors"
              >
                {t("Privacy Policy")}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-black text-green-500 p-4 rounded-full shadow-lg hover:bg-gray-800 transition-all"
        style={{ zIndex: 999 }}
        aria-label={t("Back to top")} // Add this line
      >
        <FaArrowUp size={24} />
      </button>
    </footer>
  );
};

export default Footer;
