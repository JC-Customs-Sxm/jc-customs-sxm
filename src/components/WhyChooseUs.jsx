import React from "react";
import { useTranslation } from "react-i18next";
import Lottie from "react-lottie";
import animationData from "lottie-web";
import AnimationTeamwork from "../assets/animations/teamwork.json";
import AnimationApproach from "../assets/animations/approach.json";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="why-choose-us-section bg-black text-white">
      <section className="py-24 bg-black text-white">
        <div className="text-center mb-12 px-4">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-semibold text-neonGreen mb-6">
            {t("WhyChooseUsSectionTitle")}
          </h2>
          <div className="grid grid-cols-1 bp-400:grid-cols-1 bp-500:grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-black text-white p-6 rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
              <div className="icon mb-4 text-6xl text-neonGreen">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-xl xs:text-2xl font-semibold mb-3">
                {t("WhyChooseUsFeature1Title")}
              </h3>
              <p className="text-gray-300">
                {t("WhyChooseUsFeature1Description")}
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-black text-white p-6 rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
              <div className="icon mb-4 text-6xl text-neonGreen">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl xs:text-2xl font-semibold mb-3">
                {t("WhyChooseUsFeature2Title")}
              </h3>
              <p className="text-gray-300">
                {t("WhyChooseUsFeature2Description")}
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-black text-white p-6 rounded-xl shadow-xl transform transition-all duration-300 ease-in-out hover:scale-105">
              <div className="icon mb-4 text-6xl text-neonGreen">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl xs:text-2xl font-semibold mb-3">
                {t("WhyChooseUsFeature3Title")}
              </h3>
              <p className="text-gray-300">
                {t("WhyChooseUsFeature3Description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teamwork Section */}
      <section className="relative py-16 px-6 bg-black">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2">
            <Lottie
              options={{
                ...defaultOptions,
                animationData: AnimationTeamwork,
              }}
              height={400}
              width={400}
            />
          </div>
          <p className="text-lg text-gray-300 text-center lg:text-left max-w-xl">
            {t("WhyChooseUsTeamworkDescription")}
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="relative py-16 px-6 bg-black">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center gap-8 max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2">
            <Lottie
              options={{
                ...defaultOptions,
                animationData: AnimationApproach,
              }}
              height={400}
              width={400}
            />
          </div>
          <p className="text-lg text-gray-300 text-center lg:text-left max-w-xl">
            {t("WhyChooseUsApproachDescription")}
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
