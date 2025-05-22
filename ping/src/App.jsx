import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/General/Navbar";
import Footer from "./Components/General/footer";
import ProductShowcase from "./Components/General/product";
import Header from "./Components/General/header";
import TestimonialSlider from "./Components/General/testimonial";
import FaqAccordion from "./Components/General/faq";
import ContactForm from "./Components/General/contactForm";
import AboutPage from "./Components/General/AboutPage";
import HomePage from "./Components/General/Homepage";

function App() {
  return (
    <div>
      <Header />
      <NavBar />
      <HomePage />
      {/* <Header />
      <NavBar />
      <AboutPage />
      <ProductShowcase />
      <TestimonialSlider />
      <ContactForm />
      <FaqAccordion />
      <Footer /> */}

      {/* Other content */}
    </div>
  );
}

export default App;
