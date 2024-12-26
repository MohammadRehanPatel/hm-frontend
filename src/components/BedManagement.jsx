import React, { useState, useEffect } from "react";
import axios from "axios";

const BedManagement = () => {
  const [beds, setBeds] = useState([]);
  const [newBed, setNewBed] = useState({ name: "", isAvailability: true });

  useEffect(() => {
    fetchAvailableBeds();
  }, []);

  const fetchAvailableBeds = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/beds"); // Replace with your backend URL
      setBeds(response.data);
    } catch (error) {
      console.error("Error fetching beds:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBed({ ...newBed, [name]: value });
  };

  const handleRegisterBed = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/beds",
        newBed
      ); // Replace with your backend URL
      console.log("Bed registered successfully:", response.data);
      fetchAvailableBeds(); // Refresh the bed list
      setNewBed({ name: "", isAvailability: true }); // Reset form
    } catch (error) {
      console.error("Error registering bed:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Bed Management</h1>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Register New Bed</h2>
        <div className="flex flex-col space-y-4">
          {/* <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Bed Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newBed.name}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Bed Name"
            />
          </div> */}
          <div>
            <label
              htmlFor="bedNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Bed Number:
            </label>
            <input
              type="number"
              id="bedNumber"
              name="bedNumber"
              value={newBed.bedNumber || ""}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Bed Number"
            />
          </div>
          <div>
            <label
              htmlFor="bedType"
              className="block text-gray-700 font-bold mb-2"
            >
              Bed Type:
            </label>
            <input
              type="text"
              id="bedType"
              name="bedType"
              value={newBed.bedType || ""}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Bed Type"
            />
          </div>
          <button
            onClick={handleRegisterBed}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Register Bed
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Available Beds</h2>
        <ul className="list-disc pl-5">
          {beds.map((bed) => (
            <li key={bed.id} className="text-lg mb-2">
              <span className="font-semibold">
                {bed.bedType} - {bed.bedNumber}
              </span>{" "}
              -{" "}
              <span
                className={bed.availability ? "text-green-500" : "text-red-500"}
              >
                {bed.availability ? "Available" : "Not Available"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BedManagement;
