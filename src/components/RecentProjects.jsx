import React from "react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    title: "Taxi Service Website",
    description:
      "A modern taxi service website with booking and real-time tracking.",
    images: [
      "https://res.cloudinary.com/dehk7msqm/image/upload/v1735996566/Still_Standing_Figma_klslcs.png",
    ],
  },
  {
    id: 2,
    title: "Catering Website",
    description: "A catering website with menu options and booking features.",
    images: [
      "https://res.cloudinary.com/dehk7msqm/image/upload/v1736000376/Lillys_Kitchen_Figma_nvpch8.jpg",
    ],
  },
  {
    id: 3,
    title: "Clothing Store Website",
    description: "An online clothing store with an elegant, responsive design.",
    images: [
      "https://res.cloudinary.com/dehk7msqm/image/upload/v1736000898/Style_Grace_Template_se94tg.png",
    ],
  },
  {
    id: 4,
    title: "Baker Website",
    description: "A beautiful website design for a bakery business.",
    images: [
      "https://res.cloudinary.com/dehk7msqm/image/upload/v1736001317/The_Sweet_Spot_Template_y3y8sb.jpg",
    ],
  },
];

const RecentProjects = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      {/*... (heading remains the same) */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <div className="overflow-y-auto max-h-[500px]">
              <div className="flex flex-col items-stretch">
                {" "}
                {/* Ensure images stretch to full width */}
                {project.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={project.title}
                    title={project.title}
                    className="w-full"
                    loading="lazy"
                    style={{ height: "auto" }} // Allow images to maintain aspect ratio
                  />
                ))}
              </div>
            </div>

            {/*... (overlay remains the same) */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
