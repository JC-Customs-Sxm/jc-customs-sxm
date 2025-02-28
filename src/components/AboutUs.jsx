import React from "react";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import {
  SiTailwindcss,
  SiSquarespace,
  SiNotion,
  SiAdobexd,
} from "react-icons/si";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  const { ref: p1Ref, inView: p1InView } = useInView({ triggerOnce: false });
  const { ref: p2Ref, inView: p2InView } = useInView({ triggerOnce: false });
  const { ref: p3Ref, inView: p3InView } = useInView({ triggerOnce: false });

  const skills = [
    { icon: FaHtml5, color: "text-orange-600", name: "HTML5" },
    { icon: FaCss3Alt, color: "text-blue-600", name: "CSS3" },
    { icon: FaJs, color: "text-yellow-500", name: "JavaScript" },
    { icon: FaReact, color: "text-blue-400", name: "React" },
    { icon: SiTailwindcss, color: "text-teal-400", name: "Tailwind CSS" },
    { icon: SiAdobexd, color: "text-pink-500", name: "Adobe XD" },
    { icon: SiSquarespace, color: "text-black", name: "Squarespace" },
    { icon: SiNotion, color: "text-gray-900", name: "Notion" },
  ];

  return (
    <section className="py-16 bg-white text-white w-full" id="about">
      <div className="text-center mb-16 w-full max-w-screen-lg mx-auto px-4">
        <h2
          className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold relative inline-block mb-8"
          style={{ color: "#39FF14" }}
        >
          {t("AboutJC")}
          <span
            className="absolute bottom-0 left-0 w-24 xs:w-32 h-1 rounded-lg"
            style={{ backgroundColor: "#39FF14" }}
          ></span>
        </h2>

        <div className="text-base xs:text-lg text-black leading-relaxed mt-4 space-y-6">
          <p
            ref={p1Ref}
            className={`${
              p1InView ? "animate-fly-in" : "opacity-0"
            } transition-all duration-700`}
          >
            {t("AboutUsParagraph1")}
          </p>
          <p
            ref={p2Ref}
            className={`${
              p2InView ? "animate-fly-in" : "opacity-0"
            } transition-all duration-700`}
          >
            {t("AboutUsParagraph2")}
          </p>
          <p
            ref={p3Ref}
            className={`${
              p3InView ? "animate-fly-in" : "opacity-0"
            } transition-all duration-700`}
          >
            {t("AboutUsParagraph3")}
          </p>
        </div>
      </div>

      <div className="text-center w-full max-w-screen-lg mx-auto px-4">
        <h3
          className="text-2xl xs:text-3xl sm:text-4xl font-bold relative inline-block mb-12"
          style={{ color: "#39FF14" }}
        >
          {t("OurSkills")}
        </h3>

        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="text-center">
              <skill.icon
                className={`${skill.color} text-4xl xs:text-6xl mx-auto mb-2`}
              />
              <p className="text-sm xs:text-lg text-black">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
