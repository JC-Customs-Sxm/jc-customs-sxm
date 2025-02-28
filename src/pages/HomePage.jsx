// src/pages/HomePage.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import WhatWeDo from "../components/WhatWeDo";
import AboutUs from "../components/AboutUs";
import Offers from "../components/Offers";
import Pricing from "../components/Pricing";
import RecentProjects from "../components/RecentProjects";
import WhyChooseUs from "../components/WhyChooseUs";
import Faq from "../components/Faq";
import IsThisYou from "../components/IsThisYou";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="HomePage">
      {/* Hero Section */}
      <section className="hero">
        <HeroSection />
      </section>

      {/* What We Do Section */}
      <section className="what-we-do">
        <WhatWeDo />
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <AboutUs />
      </section>

      {/* Offers Section */}
      <section className="offers">
        <Offers />
      </section>

      {/* Pricing Section */}
      <section className="pricing">
        <Pricing />
      </section>

      {/* Recent Projects Section */}
      <section className="recent-projects">
        <RecentProjects />
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <WhyChooseUs /> {/* Add WhyChooseUs component here */}
      </section>

      {/* Faq Section */}
      <section className="faq">
        <Faq />
      </section>

      {/* Is This You Section */}
      <section className="is-this-you">
        <IsThisYou />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
