import React from "react";
import "./styles/style.css";
import ServiceCard from "./ServiceCard";

function Services() {
  const servicesData = [
    {
      icon: "fa-laptop-medical",
      title: "Patient Registration (OPD Casualty, Appointment & ORS)",
      description:
        "The patient registration module of the e-Hospital application is used for patient registration in the OPD and Casualty departments as well as to book, confirm and cancel appointments.",
    },

    {
      icon: "fa-bed-pulse",
      title: "Admission, Discharge & Transfer (IPD)",
      description:
        "The IPD module commences when the patient is being registered and allotted bed in the ward.",
    },
    // Add other services here
  ];

  return (
    <div className="services">
      <div className="services_box">
        <div>
          <div class="relative isolate bg-cyan-400 pb-32 pt-24 sm:pt-32">
            <div
              class="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
              aria-hidden="true"
            >
              <div class="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc]"></div>
            </div>
            <div
              class="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-32 opacity-25 blur-3xl sm:pt-40 xl:justify-end"
              aria-hidden="true"
            >
              <div class="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] xl:ml-0 xl:mr-[calc(50%-12rem)]"></div>
            </div>
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-xl text-center">
                <h2 class="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
                  history
                </h2>
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  We changend history (legends)
                </p>
              </div>
              <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4"></div>
            </div>
          </div>
        </div>
        {servicesData.map((service, index) => (
          <>
            {/* <div className="services_card" key={index}>
              <i className={`fa-solid ${service.icon}`}></i>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div> */}
            <div>
              <figure class="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
                <blockquote class="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                  <p>{service.description}</p>
                </blockquote>
                <figcaption class="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                  <img
                    class="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src="https://insidetheperimeter.ca/wp-content/uploads/2015/11/Albert_einstein_by_zuzahin-d5pcbug-WikiCommons.jpg"
                    alt=""
                  />
                  <div class="flex-auto">
                    <div class="font-semibold">{service.title}</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Services;
