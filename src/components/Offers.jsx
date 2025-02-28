import React from "react";
import {
  FaLock,
  FaPaintBrush,
  FaTachometerAlt,
  FaCheckCircle,
  FaHeadset,
  FaSearch,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Offers = () => {
  const { t } = useTranslation();

  const offers = [
    {
      icon: FaLock,
      title: "OffersSecurityTitle",
      description: "OffersSecurityDescription",
    },
    {
      icon: FaPaintBrush,
      title: "OffersDesignTitle",
      description: "OffersDesignDescription",
    },
    {
      icon: FaTachometerAlt,
      title: "OffersSpeedTitle",
      description: "OffersSpeedDescription",
    },
    {
      icon: FaCheckCircle,
      title: "OffersReliabilityTitle",
      description: "OffersReliabilityDescription",
    },
    {
      icon: FaHeadset,
      title: "OffersSupportTitle",
      description: "OffersSupportDescription",
    },
    { icon: FaSearch, title: "SEO", description: "OffersSeoDescription" },
  ];

  return (
    <div className="offers py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-neonGreen">
          {t("OffersSectionTitle")}
        </h2>
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="offer-card p-4 xs:p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="icon mb-4 text-4xl xs:text-6xl text-neonGreen">
                <offer.icon />
              </div>
              <h3 className="text-xl xs:text-2xl font-semibold mb-3 text-neonGreen">
                {t(offer.title)}
              </h3>
              <p className="text-sm xs:text-base text-gray-300">
                {t(offer.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
