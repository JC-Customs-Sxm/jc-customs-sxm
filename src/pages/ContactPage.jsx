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
import { useTranslation } from "react-i18next"; // Import the translation hook

const ContactPage = () => {
  const form = useRef();
  const [budget, setBudget] = useState(2000);
  const [isSuccess, setIsSuccess] = useState(false); // State for success message
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  }); // Manage form data
  const { t, ready } = useTranslation(); // Initialize the translation hook
  const [operatingDays, setOperatingDays] = useState([]); // Initialize as empty array

  // Update operatingDays after translations are ready
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
        "service_i1dveti", // Your Service ID
        "template_n1s5i9d", // Your Template ID
        form.current, // The form element reference
        "BKD2IIRwNh-nECoFt" // Your Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSuccess(true); // Show the success popup
          setFormData({
            // Clear form data
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

  // If translations are not ready, show a loading state
  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Cover Photo Section */}
      <div className="relative w-full h-auto overflow-hidden mt-8 pt-0">
        <img
          src="https://res.cloudinary.com/dehk7msqm/image/upload/v1736025343/Contact_Page_Cover_vtbzgz.jpg"
          alt="Contact Cover"
          className="w-full h-full object-cover -mt-8"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <div className="text-center">
            <h1 className="text-white text-5xl font-bold">{t("Contact Us")}</h1>
            <p className="text-white text-lg mt-4">
              {t(
                "Ready to turn your ideas into a stunning website? Let’s work together to bring your vision to life and help your business grow online."
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <main className="py-16 px-8 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Column: Contact Information and Operating Hours */}
        <div className="bg-black text-[#39FF14] shadow-lg rounded-l-lg p-8 space-y-6 border-2 border-[#39FF14]">
          <h2 className="text-3xl font-semibold">{t("Contact Information")}</h2>
          <ul className="space-y-4 text-lg">
            <li className="flex items-center">
              <FiMail className="mr-2 text-[#39FF14]" />
              <strong>{t("Email:")}</strong> jc.customs.sxm@gmail.com
            </li>
            <li className="flex items-center">
              <FiPhone className="mr-2 text-[#39FF14]" />
              <strong>{t("Phone:")}</strong> +33 28.04.96.74
            </li>
            <li className="flex items-center">
              <FiMapPin className="mr-2 text-[#39FF14]" />
              <strong>{t("Address:")}</strong> 54000, Nancy
            </li>
          </ul>

          {/* Operating Hours */}
          <h2 className="text-2xl font-semibold mt-6">
            {t("Operating Hours")}
          </h2>
          <div className="text-lg">
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
        </div>

        {/* Right Column: Contact Form */}
        <div className="bg-white shadow-lg rounded-r-lg p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-[#39FF14] text-center">
            {t("Send Us A Message")}
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Subject */}
            <div className="relative flex items-center">
              <FiClipboard className="absolute left-3 text-gray-600" />
              <select
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
            <div className="flex gap-8">
              <div className="w-full relative">
                <FiUser className="absolute left-3 top-2 text-gray-600" />
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder={t("First Name")}
                  className="w-full pl-10 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
                />
              </div>
              <div className="w-full relative">
                <FiUser className="absolute left-3 top-2 text-gray-600" />
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder={t("Last Name")}
                  className="w-full pl-10 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
                />
              </div>
            </div>

            {/* Email and Phone */}
            <div className="flex gap-8">
              <div className="w-full relative">
                <FiMail className="absolute left-3 top-2 text-gray-600" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={t("Email")}
                  className="w-full pl-10 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
                />
              </div>
              <div className="w-full relative">
                <FiPhone className="absolute left-3 top-2 text-gray-600" />
                <input
                  type="tel"
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
                className="text-xl font-semibold text-[#39FF14] mb-2"
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
              <div className="text-[#39FF14] text-lg mt-2">
                {t("Budget:")} €{budget}
              </div>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                name="message"
                required
                placeholder={t("Your Message")}
                className="w-full pl-3 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#39FF14] h-32"
              />
            </div>

            {/* Send Button with Icon */}
            <button
              type="submit"
              className="py-2 px-8 bg-white text-[#39FF14] border-2 border-[#39FF14] rounded-full hover:bg-[#39FF14] hover:text-black flex items-center justify-center gap-2 mx-auto mt-6 transition duration-300"
            >
              <FiSend className="text-[#39FF14]" />
              {t("Send Message")}
            </button>

            {/* Success Popup */}
            {isSuccess && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
                <div className="bg-white p-6 rounded-lg text-center shadow-lg max-w-sm mx-auto">
                  <p className="text-2xl font-semibold text-[#39FF14]">
                    {t("Message sent successfully👌")}
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </main>

      {/* Faq */}
      <Faq />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
