import React, { useRef, useState, useEffect } from "react";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiClipboard,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const form = useRef();
  const [budget, setBudget] = useState(2000);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const { t, ready } = useTranslation();
  const [operatingDays, setOperatingDays] = useState([]);

  useEffect(() => {
    if (ready) {
      setOperatingDays([t("Mon-Fri 9AM - 6PM"), t("Closed on weekends")]);
    }
  }, [ready, t]);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is not valid.");
      return;
    }

    emailjs
      .sendForm(
        "service_i1dveti",
        "template_n1s5i9d",
        form.current,
        "BKD2IIRwNh-nECoFt"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSuccess(true);
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Cover Photo Section */}
      <header
        className="relative w-full min-h-[50vh] sm:min-h-screen flex flex-col justify-end text-white overflow-hidden bg-black pb-8"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dehk7msqm/image/upload/v1740843391/Contact_Page_Cover_Photo_komigp.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-0"></div>
        <div className="text-center px-4 relative z-10">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold">
            {t("Contact Us")}
          </h1>
          <p className="text-white text-xs xs:text-sm sm:text-base md:text-lg mt-4">
            {t(
              "Ready to turn your ideas into a stunning website? Let's work together to bring your vision to life and help your business grow online."
            )}
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <main className="py-8 sm:py-16 px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Contact Information and Operating Hours */}
        <section className="bg-black text-[#39FF14] shadow-lg rounded-lg lg:rounded-l-lg lg:rounded-r-none p-6 sm:p-8 space-y-6 border-2 border-[#39FF14]">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            {t("Contact Information")}
          </h2>
          <ul className="space-y-4 text-base sm:text-lg">
            <li className="flex items-center">
              <FiMail className="mr-2 text-[#39FF14]" aria-hidden="true" />
              <strong>{t("Email:")}</strong> jc.customs.sxm@gmail.com
            </li>
            <li className="flex items-center">
              <FiPhone className="mr-2 text-[#39FF14]" aria-hidden="true" />
              <strong>{t("Phone:")}</strong> +33 28.04.96.74
            </li>
            <li className="flex items-center">
              <FiMapPin className="mr-2 text-[#39FF14]" aria-hidden="true" />
              <strong>{t("Address:")}</strong> 54000, Nancy
            </li>
          </ul>

          <h3 className="text-xl sm:text-2xl font-semibold mt-6">
            {t("Operating Hours")}
          </h3>
          <div className="text-base sm:text-lg">
            <p>
              {t("We are available to assist you during the following hours:")}
            </p>
            <ul className="list-disc pl-5">
              {operatingDays.map((day, index) => (
                <li
                  key={index}
                  className={
                    day.includes(t("Closed")) ? "font-bold text-red-500" : ""
                  }
                >
                  {day}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Right Column: Contact Form */}
        <section className="bg-white shadow-lg rounded-lg lg:rounded-r-lg lg:rounded-l-none p-6 sm:p-8 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-green-800 text-center">
            {t("Send Us A Message")}
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Subject */}
            <div className="relative flex items-center">
              <FiClipboard
                className="absolute left-3 text-gray-600"
                aria-hidden="true"
              />
              <label htmlFor="subject" className="sr-only">
                {t("Select a Subject")}
              </label>
              <select
                id="subject"
                name="subject"
                required
                className="w-full pl-10 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
              >
                <option value="">{t("Select a Subject")}</option>
                <option value="Web Creation">{t("Web Creation")}</option>
                <option value="General Inquiries">
                  {t("General Inquiries")}
                </option>
                <option value="Support">{t("Support")}</option>
              </select>
            </div>

            {/* Name Fields */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="w-full relative">
                <label htmlFor="first_name" className="sr-only">
                  {t("First Name")}
                </label>
                <FiUser
                  className="absolute left-3 top-2 text-gray-600"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  placeholder={t("First Name")}
                  className="w-full pl-10 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
                />
              </div>
              <div className="w-full relative">
                <label htmlFor="last_name" className="sr-only">
                  {t("Last Name")}
                </label>
                <FiUser
                  className="absolute left-3 top-2 text-gray-600"
                  aria-hidden="true"
                />
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
                  placeholder={t("Last Name")}
                  className="w-full pl-10 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <div className="w-full relative">
                <label htmlFor="email" className="sr-only">
                  {t("Email")}
                </label>
                <FiMail
                  className="absolute left-3 top-2 text-gray-600"
                  aria-hidden="true"
                />
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder={t("Email")}
                  className="w-full pl-10 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
                />
              </div>
              <div className="w-full relative">
                <label htmlFor="phone" className="sr-only">
                  {t("Phone")}
                </label>
                <FiPhone
                  className="absolute left-3 top-2 text-gray-600"
                  aria-hidden="true"
                />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  placeholder={t("Phone")}
                  className="w-full pl-10 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
                />
              </div>
            </div>

            {/* Budget Slider */}
            <div className="flex flex-col">
              <label
                htmlFor="budget"
                className="text-lg sm:text-xl font-semibold text-green-800 mb-2"
              >
                {t("Estimated Budget (EUR)")}
              </label>
              <input
                type="range"
                id="budget"
                name="budget"
                min="500"
                max="10000"
                step="100"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
              />
              <div className="flex justify-between text-sm text-gray-600 mt-2">
                <span>€500</span>
                <span>€10,000</span>
              </div>
              <div className="text-green-800 text-lg mt-2">
                {t("Budget:")} €{budget}
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <label htmlFor="message" className="sr-only">
                {t("Your Message")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder={t("Your Message")}
                className="w-full pl-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#39FF14] h-32"
              />
            </div>

            {/* Send Button with Icon */}
            <button
              type="submit"
              className="py-2 px-8 bg-white text-green-800 border-2 border-green-800 rounded-full hover:bg-green-800 hover:text-white flex items-center justify-center gap-2 mx-auto mt-6 transition duration-300"
              aria-label={t("Send Message")}
            >
              <FiSend className="text-green-800" aria-hidden="true" />
              {t("Send Message")}
            </button>

            {/* Success Popup */}
            {isSuccess && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg text-center shadow-lg max-w-sm mx-auto">
                  <p className="text-2xl font-semibold text-green-800">
                    {t("Message sent successfully👌")}
                  </p>
                </div>
              </div>
            )}
          </form>
        </section>
      </main>
      {/* Faq */}
      <Faq />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
