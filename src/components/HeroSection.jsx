import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center w-full min-h-screen text-white relative"
      style={{
        backgroundImage:
          "url('https://images.squarespace-cdn.com/content/66bb1ec7ebbe542363b63fc7/9f2085c4-5b82-4d38-8a78-3bd97b87dfc6/JC+Customs+Hero+Image.png?content-type=image%2Fpng')",
        backgroundSize: "cover",
        backgroundPosition: `center ${-scrollY * 0.3}px`,
      }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>

      {/* Heading */}
      <h1
        className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold neon-green-text text-center px-4 relative z-10"
        style={{
          fontFamily: "'citrus-gothic-shadow', sans-serif",
          fontWeight: 400,
          fontStyle: "italic",
          textShadow: "0 4px 6px rgba(0, 0, 0, 0.6)",
        }}
      >
        {t("HeroSectionHeading")}
      </h1>
    </div>
  );
};

export default HeroSection;
