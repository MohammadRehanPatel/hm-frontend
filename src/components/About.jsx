import React from "react";
import drss from "../assets/img/drss.webp";
import "./styles/style.css";

function About() {
  return (
    <div className="about bg-gray-100 py-12 ">
      <div className="container flex  items-center justify-evenly ">
        {/* Image Section */}
        <div className="about_image w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={drss}
            alt="About Us"
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="about_tag  md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 mb-6">
            The e-Hospital application is being offered as an as-is product to
            the government hospitals across the country through SaaS (Software
            as a Service) model.
          </p>
          <a
            href="#"
            className="about_btn inline-block px-6 py-3 text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
