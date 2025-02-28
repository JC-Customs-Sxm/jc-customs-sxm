import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const faqData = [
  {
    question: "faq.whatIsCustomCodedWebsite",
    answer: "faq.customCodedWebsiteAnswer",
  },
  {
    question: "faq.customVsSquarespace",
    answer: "faq.customVsSquarespaceAnswer",
  },
  {
    question: "faq.buildTime",
    answer: "faq.buildTimeAnswer",
  },
  {
    question: "faq.squarespaceServiceIncludes",
    answer: "faq.squarespaceServiceIncludesAnswer",
  },
  {
    question: "faq.ecommerceServices",
    answer: "faq.ecommerceServicesAnswer",
  },
  {
    question: "faq.maintenanceSupport",
    answer: "faq.maintenanceSupportAnswer",
  },
  {
    question: "faq.prebuiltTemplates",
    answer: "faq.prebuiltTemplatesAnswer",
  },
  {
    question: "faq.manageContent",
    answer: "faq.manageContentAnswer",
  },
  {
    question: "faq.getStarted",
    answer: "faq.getStartedAnswer",
  },
];

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center text-neonGreen mb-12">
          {t("FAQHeading")}
        </h1>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <div
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center py-4 cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
              >
                <h3 className="text-xl xs:text-2xl font-semibold text-black">
                  {t(item.question)}
                </h3>
                <span
                  className={`transform transition-transform duration-300 ease-in-out ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    className="text-neonGreen"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </div>

              {openIndex === index && (
                <div className="py-2 px-4">
                  <p className="text-lg text-neonGreen">{t(item.answer)}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
