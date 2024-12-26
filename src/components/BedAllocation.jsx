import React, { useState, useEffect } from "react";
import axios from "axios";
import { fetchAllPatients } from "../api/services";

const BedAllocation = () => {
  const [beds, setBeds] = useState([]);
  const [patients, setPatients] = useState([]);
  const [selectedBed, setSelectedBed] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  useEffect(() => {
    fetchAllPatientsData();
    fetchAvailableBeds();
  }, []);

  const fetchAllPatientsData = async () => {
    try {
      const patientData = await fetchAllPatients();
      console.log(patientData);
      setPatients(patientData);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const fetchAvailableBeds = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/beds");
      console.log(response);
      setBeds(response.data);
    } catch (error) {
      console.error("Error fetching beds:", error);
    }
  };

  const handleBedSelection = (bed) => {
    setSelectedBed(bed);
  };

  const handlePatientSelection = (patient) => {
    setSelectedPatient(patient);
  };

  const handleAllocateBed = async () => {
    try {
      if (selectedBed && selectedPatient) {
        const allocationData = {
          bed: { id: selectedBed.id },
          patient: { id: selectedPatient.id },
          allocated: true, // Marking the bed as allocated
        };

        const response = await axios.post(
          "http://localhost:8080/api/bed-allocation",
          allocationData
        );
        console.log("Bed allocated successfully:", response.data);
        fetchAvailableBeds(); // Refresh the bed list
      } else {
        alert("Please select a bed and a patient.");
      }
    } catch (error) {
      console.error("Error allocating bed:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Bed Allocation</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-2xl font-bold mb-4">Available Beds</h2>
          <ul className="bg-white rounded-lg shadow-md p-4">
            {beds.map((bed) => (
              <li key={bed.id} className="mb-2">
                <button
                  onClick={() => handleBedSelection(bed)}
                  className={`w-full text-left p-2 rounded ${
                    bed.availability
                      ? "bg-green-500 hover:bg-green-700"
                      : "bg-red-500 cursor-not-allowed"
                  } text-white`}
                  disabled={!bed.availability}
                >
                  {bed.bedNumber} -{" "}
                  {bed.availability ? "Available" : "Not Available"}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Select Patient</h2>
          <ul className="bg-white rounded-lg shadow-md p-4">
            {patients.map((patient) => (
              <li key={patient.id} className="mb-2">
                <button
                  onClick={() => handlePatientSelection(patient)}
                  className="w-full text-left p-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
                >
                  {patient.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleAllocateBed}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          Allocate Bed
        </button>
      </div>
    </div>
  );
};

export default BedAllocation;
