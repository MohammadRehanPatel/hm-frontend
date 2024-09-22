import React from 'react';
import './style.css';

const App = () => {
  return (
    <div>
      <section className="section">
        <NavBar />
        <MainSection />
      </section>
      <Services />
      <About />
      <Footer />
    </div>
  );
};

const NavBar = () => (
  <nav>
    <div className="logo">
      <img src="logo.webp" alt="Logo" />
    </div>
    <ul>
      <li>
        <i className="fa-solid fa-house"></i>
        <a href="#Home"> Home</a>
      </li>
      <li>
        <i className="fa-solid fa-user-doctor"></i>
        <a href="#CreateHealth"> Create Health ID</a>
      </li>
      <li>
        <i className="fa-solid fa-desktop"></i>
        <a href="#Dashboard"> Dashboard</a>
      </li>
      <li>
        <i className="fa-solid fa-tower-broadcast"></i>
        <a href="#LiveStatus"> Live Status</a>
      </li>
      <li>
        <i className="fa-solid fa-address-card"></i>
        <a href="#AboutUs"> About us</a>
      </li>
    
    <div className="social_icon">
      <div className="login">
        <i className="fa-solid fa-arrow-right-to-bracket"></i>
        <a className="log" href="#">Login Now</a>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-heart"></i>
      </div>
    </div>
    </ul>
  </nav>
);

const MainSection = () => (
  <div className="main">
    <div className="main_tag">
      <h1>WELCOME TO<br /><span>Medical Care</span></h1>
      <p>
        Now getting an OPD appointment, lab reports, and blood availability in any government hospital has become online and easy.
      </p>
      <a href="#" className="main_btn">Appointment now</a>
    </div>
    <div className="image-container">
      <img src=" " alt="" className="color-hover" />
    </div>
    <div className="main_img">
      <img src="" alt="" className="color-hover" />
    </div>
  </div>
);

const Services = () => (
  <div className="services">
    <div className="services_box">
      <ServiceCard
        icon="fa-laptop-medical"
        title="Patient Registration (OPD Casualty, Appointment & ORS)"
        description="The patient registration module of the e-Hospital application is used for patient registration in the OPD and Casualty departments as well as to book, confirm and cancel appointments."
      />
      <ServiceCard
        icon="fa-bed-pulse"
        title="Admission, Discharge & Transfer (IPD)"
        description="The IPD module commences when the patient is being registered and allotted bed in the ward."
      />
      <ServiceCard
        icon="fa-receipt"
        title="Billing"
        description="The Billing module handles all types of billing workflows related to receipts and refunds."
      />
      <ServiceCard
        icon="fa-file-medical"
        title="Clinic (OPD & IPD)"
        description="The Clinic module allows clinicians and doctors to record clinical data, visits, examinations, diagnoses, history, treatment, and more."
      />
      <ServiceCard
        icon="fa-mobile-screen-button"
        title="Queue Management Mobile App"
        description="This app facilitates patients sharing demographic data for OPD registration queue."
      />
      <ServiceCard
        icon="fa-bone"
        title="Radiology Information System (RIS)"
        description="The Radiology module automates the procedures in radiology services."
      />
      <ServiceCard
        icon="fa-capsules"
        title="Store & Pharmacy"
        description="The Store & Pharmacy module is used for managing stores and pharmacies along with generating indents."
      />
      <ServiceCard
        icon="fa-gears"
        title="OT Management"
        description="The OT Management module automates functions and workflows of operation theatres in hospitals."
      />
    </div>
  </div>
);

const ServiceCard = ({ icon, title, description }) => (
  <div className="services_card">
    <i className={`fa-solid ${icon}`}></i>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

const About = () => (
  <div className="about">
    <div className="about_image">
      <img src="drss.webp" alt="Doctors" />
    </div>
    <div className="about_tag">
      <h1>About Us</h1>
      <p>
        The e-Hospital application is being offered to government hospitals across the country through SaaS (Software as a Service) model.
      </p>
      <a href="#" className="about_btn">Learn More</a>
    </div>
  </div>
);

const Footer = () => (
  <footer>
    <div className="page" align="center">
      <a href="#">Condition of use</a>
      <a href="#">Privacy Notice</a>
      <a href="#">Your Ads Privacy Choices</a>
    </div>
    <div className="copyright" align="center">
      © 1996-2024, HMS, Inc. or its affiliates
    </div>
  </footer>
);

export default App;
