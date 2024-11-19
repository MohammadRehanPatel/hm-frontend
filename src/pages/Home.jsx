import React from "react";

import AppoinmentPage from "./AppoinmentPage";
import Services from "../components/Services";

import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
  return (
    <div className="">
      <Hero />
      <ServiceCard />
      <Services />
    </div>
  );
};

export default Home;
