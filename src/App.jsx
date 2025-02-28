import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import Cursor from "./components/Cursor";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <main>
            <Routes>
              {/* Home Route with Language Code */}
              <Route path="/:lang" element={<HomePage />} />
              <Route path="/:lang/home" element={<HomePage />} />{" "}
              {/* Add this line */}
              {/* Blog Route with Language Code */}
              <Route path="/:lang/blog" element={<BlogPage />} />
              {/* Contact Route with Language Code */}
              <Route path="/:lang/contact" element={<ContactPage />} />
              {/* Default to English if no lang is provided */}
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Cursor />
        </div>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
