import React, { useState } from "react";
import "./styles/opd.css";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();

  const specialication = [
    "Allergist/immunologist",
    "Anesthesiologist",
    "Cardiologist",
    "Dermatologist",
    "Endocrinologist",
    "Family physician",
    "Gastroenterologist",
    "Geneticist",
    "Hematologist",
    "Hospice and palliative medicine specialist",
    "Infectious disease physician",
    "Internal Medicine",
    "Nephrologist",
    "Neurologist",
    "Obstetrician/gynecologist (OBGYNs)",
    "Oncologist",
    "Ophthalmologist",
    "Orthopedist",
    "Otolaryngologist",
    "Osteopath",
    "Pathologist",
    "Pediatrician",
    "Physician executive",
    "Plastic surgeon",
    "Podiatrist",
    "Psychiatrist",
    "Pulmonologist",
    "Radiologist",
    "Rheumatologist",
    "Sleep medicine specialist",
    "Surgeon",
    "Urologist",
  ];

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    problem: "",
    email: "",
    contactNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Registration successful!");
        setFormData({
          name: "",
          age: "",
          dob: "",
          specialist: "",
          email: "",
          contactNumber: "",
        });
        navigate("/queue");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2 className="text-2xl pt-3 font-bold">OPD Form</h2>
      <div className="form-input  shadow-xl shadow-teal-300">
        <form onSubmit={handleSubmit} className="bg-transparent ">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <label htmlFor="specialist">Specialist:</label>
          <input
            type="text"
            id="specialist"
            name="specialist"
            value={formData.specialist}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="contactNumber">Contact Number:</label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Form;
