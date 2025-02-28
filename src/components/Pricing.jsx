import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  const pricingPlans = [
    {
      title: "PricingBasicTitle",
      description: "PricingBasicDescription",
      features: [
        "PricingBasicFeature1",
        "PricingBasicFeature2",
        "PricingBasicFeature3",
        "PricingBasicFeature4",
        "PricingBasicFeature5",
        "PricingBasicFeature6",
        "PricingBasicFeature7",
        "PricingBasicFeature8",
      ],
      price: "PricingBasicPrice",
      note: "PricingBasicNote",
    },
    {
      title: "PricingEcommerceTitle",
      description: "PricingEcommerceDescription",
      features: [
        "PricingEcommerceFeature1",
        "PricingEcommerceFeature2",
        "PricingEcommerceFeature3",
        "PricingEcommerceFeature4",
        "PricingEcommerceFeature5",
        "PricingEcommerceFeature6",
        "PricingEcommerceFeature7",
        "PricingEcommerceFeature8",
      ],
      price: "PricingEcommercePrice",
      note: "PricingEcommerceNote",
    },
    {
      title: "PricingCustomTitle",
      description: "PricingCustomDescription",
      features: [
        "PricingCustomFeature1",
        "PricingCustomFeature2",
        "PricingCustomFeature3",
        "PricingCustomFeature4",
        "PricingCustomFeature5",
        "PricingCustomFeature6",
        "PricingCustomFeature7",
        "PricingCustomFeature8",
      ],
      price: "PricingCustomPrice",
      note: "PricingCustomNote",
    },
  ];

  return (
    <section className="pricing py-16 bg-white text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-center text-neonGreen mb-8">
          {t("PricingSectionTitle")}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="pricing-card p-4 xs:p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h3 className="text-xl xs:text-2xl font-semibold mb-4 text-neonGreen">
                {t(plan.title)}
              </h3>
              <p className="text-sm xs:text-base mb-4">{t(plan.description)}</p>
              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-center text-sm xs:text-base"
                  >
                    <FaRegCheckCircle className="text-neonGreen mr-2" />
                    {t(feature)}
                  </li>
                ))}
              </ul>
              <p className="text-lg xs:text-xl font-semibold">
                {t(plan.price)}
              </p>
              <p className="text-sm text-gray-400 mt-2">{t(plan.note)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
