import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next"; // Import the translation hook

const WhatWeDo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation(); // Initialize the translation hook

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight;
      const triggerPoint = document.getElementById("what-we-do").offsetTop;

      // When the section is visible in the viewport, trigger animation
      if (position > triggerPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="py-16 px-4 bg-black text-black" id="what-we-do">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-semibold text-[#39FF14] mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }} // Fades in when visible
          transition={{ duration: 1 }}
        >
          {t("What We Do")}
        </motion.h2>
        {/* Description */}
        <div className="mb-12">
          <p className="text-lg text-white">
            {t("Reliable Web Design That Grows With Your Business")}
          </p>
          <p className="text-md text-white mt-4">
            {t(
              "Whether you’re looking to build your first online presence or refresh an existing one, we provide personalized web design solutions that cater to your unique needs."
            )}
          </p>
          <p className="text-md text-white mt-4">
            {t(
              "Each website we design focuses on performance and user experience, helping you attract visitors and engage with your audience. For the first three months, we provide free site management to ensure everything runs smoothly while you get familiar with your new website. After the initial period, ongoing management is available with a monthly charge based on the volume and complexity of the updates required."
            )}
          </p>
          <p className="text-md text-white mt-4">
            {t(
              "Our goal is to build long-lasting relationships with our clients, offering continuous support and updates to ensure your site grows alongside your business."
            )}
          </p>
        </div>
        <br />
        {/* Space between description and services */}
        <div className="my-8"></div> {/* Adjusted space */}
        {/* Service Section */}
        <style>
          {`
            .services-section {
              padding: 40px 20px;
              text-align: center;
              position: relative;
              width: 100%;
              max-width: 1200px;
              margin: 0 auto;
              box-sizing: border-box;
              z-index: 10;
              margin-top: -90px;
            }

            .services-grid {
              display: flex;
              justify-content: center;
              align-items: stretch;
              gap: 0;
              flex-wrap: nowrap;
              overflow-x: auto;
              width: 100%;
            }

            .service-box, .intro-box {
              background: rgba(255, 255, 255, 0.05);
              padding: 20px;
              width: 180px;
              text-align: center;
              position: relative;
              box-sizing: border-box;
              transition: transform 0.15s ease, box-shadow 0.15s ease;
              backdrop-filter: blur(10px);
              border: 1px solid rgba(57, 255, 20, 0.3);
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              border-radius: 8px;
              cursor: pointer;
            }

            .service-box:hover {
              transform: scale(1.015); /* Even more subtle scaling */
              box-shadow: 0 5px 11px rgba(0, 0, 0, 0.15); /* Subtle shadow adjustment */
            }

            .service-box img, .intro-box img {
              width: 60px;
              height: 60px;
              margin-bottom: 10px;
            }

            .service-box h3, .intro-box h2 {
              font-size: 16px;
              color: #39FF14;
              margin-bottom: 8px;
              font-weight: bold;
            }

            .service-box p, .intro-box p {
              font-size: 12px;
              color: white;
            }

            .intro-box {
              background-color: rgba(57, 255, 20, 0.1);
              color: #39FF14;
              border-right: none;
            }

            .service-box::after, .intro-box::after {
              content: '';
              display: block;
              width: 100%;
              height: 4px;
              background: linear-gradient(to right, #39FF14, #24c6dc);
              position: absolute;
              bottom: 0;
              left: 0;
            }

            @media (max-width: 768px) {
              .services-grid {
                flex-direction: column;
                overflow-x: hidden;
              }

              .service-box, .intro-box {
                width: 100%;
                border-right: none;
                border-top: 2px solid #ddd;
                margin-bottom: 20px;
                position: static;
              }

              .service-box:last-child, .intro-box:last-child {
                margin-bottom: 0;
              }
            }
          `}
        </style>
        <div className="services-section">
          <div className="services-grid">
            {/* Intro Box */}
            <div className="intro-box">
              <h2>{t("Our Services")}</h2>
              <p>{t("Explore the range of services we offer.")}</p>
            </div>

            {/* Custom Coded Website Service */}
            <div className="service-box">
              <img
                src="https://images.squarespace-cdn.com/content/66bb1ec7ebbe542363b63fc7/098bdd67-28fd-4fd7-abe1-030657307ff5/software-development.png?content-type=image%2Fpng"
                alt="Custom Coded Website Icon"
              />
              <h3>{t("Custom Coded Websites")}</h3>
              <p>
                {t(
                  "Tailored websites built from scratch to meet your unique business needs."
                )}
              </p>
            </div>

            {/* Squarespace Website Service */}
            <div className="service-box">
              <img
                src="https://images.squarespace-cdn.com/content/66bb1ec7ebbe542363b63fc7/06130172-b20f-470a-b0ac-6e1282630743/Web+creation.png?content-type=image%2Fpng"
                alt="Web design icon"
              />
              <h3>{t("Squarespace Website Creation")}</h3>
              <p>
                {t(
                  "Professional websites designed using Squarespace's powerful platform."
                )}
              </p>
            </div>

            {/* E-Commerce Solutions Service */}
            <div className="service-box">
              <img
                src="https://images.squarespace-cdn.com/content/66bb1ec7ebbe542363b63fc7/2e05da4d-4a74-4d4e-96c4-1c1a65657868/E-Commerce+icon.png?content-type=image%2Fpng"
                alt="E-Commerce Icon"
              />
              <h3>{t("E-Commerce Solutions")}</h3>
              <p>
                {t("Full-fledged e-commerce setups to grow your online store.")}
              </p>
            </div>

            {/* Maintenance & Support Service */}
            <div className="service-box">
              <img
                src="https://images.squarespace-cdn.com/content/66bb1ec7ebbe542363b63fc7/94d87f22-deaa-421a-9beb-6a40c8c97b1b/Maintenance+and+Support+.png?content-type=image%2Fpng"
                alt="Maintenance and Support Icon"
              />
              <h3>{t("Maintenance & Support")}</h3>
              <p>
                {t(
                  "Ongoing support and updates to ensure your website's smooth operation."
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
