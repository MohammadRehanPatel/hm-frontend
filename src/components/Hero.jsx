import React from "react";
import bg from "../assets/img/bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={bg}
        className="w-full h-screen object-cover opacity-60 absolute z-0"
        alt="Background"
      />
      <div className="relative z-10 text-white py-10">
        <div className="container  flex flex-col md:flex-row items-center justify-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-2">
            <h1 className="text-4xl md:text-6xl p-2 text-yellow-300 tracking-loose font-bold">
              MediTrack
            </h1>
            <h2 className="text-2xl md:text-5xl leading-relaxed md:leading-snug mb-4">
              Making Life Easier
            </h2>
            <p className="text-sm md:text-lg text-[#101010] mb-6">
              Explore your favorite events and register now to showcase your
              talent and win exciting prizes.
            </p>
            <Link
              to={"/opd"}
              className="bg-yellow-300 text-black rounded shadow hover:shadow-lg py-3 px-6 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Generate Token
            </Link>
          </div>
        </div>
      </div>

      {/* <Services /> */}
    </section>
  );
};

export default Hero;
