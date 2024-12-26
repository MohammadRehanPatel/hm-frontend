import React from "react";

import AppoinmentPage from "./AppoinmentPage";
import Services from "../components/Services";

import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import Chatbot from "../components/Chatbot";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <Chatbot />
      {/* <ServiceCard /> */}
      <Services />
    </div>
  );
};

export default Home;
