import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const IsThisYou = () => {
  const [toggled, setToggled] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleToggleChange = () => {
    setToggled(!toggled);

    setTimeout(() => {
      if (!toggled) {
        // Hardcode the language prefix for testing (e.g., "en")
        const currentLanguage = "en"; // Replace with the actual language if needed
        // Construct the path with the language prefix
        const contactPath = `/${currentLanguage}/contact`;
        // Navigate to the Contact Page
        navigate(contactPath);
        // Scroll to top after a slight delay to ensure the page has loaded
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
    }, 300);
  };

  return (
    <div className="text-center py-16 px-8 bg-black min-h-[calc(100vh-300px)] flex flex-col justify-between">
      <div>
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl text-neonGreen mb-12">
          {t("Is This You?")}
        </h2>

        <div className="flex flex-wrap justify-center gap-12 text-2xl text-gray-600">
          <div className="flex-1 min-w-[350px] flex flex-col justify-start">
            <p>
              {t(
                "In need of a website solution that is budget-friendly and simple for you to update on your own?"
              )}
            </p>
          </div>

          <div className="flex-1 min-w-[350px] flex flex-col justify-start">
            <p>
              {t(
                "Are you considering moving your existing website from another platform to Squarespace?"
              )}
            </p>
          </div>

          <div className="flex-1 min-w-[350px] flex flex-col justify-start">
            <p>
              {t(
                "Need ongoing support for your website? We provide continuous assistance to ensure your Squarespace site stays up-to-date and runs smoothly."
              )}
            </p>
          </div>
        </div>

        <div className="mt-12 text-xl text-white">
          <p>{t("Let's Work Together")}</p>
        </div>

        <div className="mt-4">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              onChange={handleToggleChange}
              checked={toggled}
            />
            <div
              className={`w-16 h-8 rounded-full ${
                toggled ? "bg-neonGreen" : "bg-gray-600"
              } transition-colors duration-300 ease-in-out relative`}
            >
              <div
                className={`w-8 h-8 bg-white rounded-full shadow-md absolute top-0 transform transition-transform duration-300 ease-in-out ${
                  toggled ? "translate-x-full" : "translate-x-0"
                }`}
              ></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default IsThisYou;
