// src/components/PatientByBed.js
import React, { useState } from "react";
import { getPatientByBedId } from "../api/services";

const PatientByBed = () => {
  const [bedId, setBedId] = useState("");
  const [patient, setPatient] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    try {
      const data = await getPatientByBedId(bedId);
      console.log(data);
      setPatient(data);
      setError("");
    } catch (err) {
      setError("No patient allocated to this bed.");
      setPatient(null);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Get Patient by Bed ID</h2>
      <input
        type="number"
        placeholder="Enter Bed ID"
        value={bedId}
        onChange={(e) => setBedId(e.target.value)}
        className="border border-gray-300 p-2 rounded mb-4 w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
      >
        Search
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {patient && (
        <div className="mt-4">
          <h3 className="font-semibold">Patient Details:</h3>
          <p>ID: {patient.id}</p>
          <p>Name: {patient.name}</p>
          {/* Add more patient details as necessary */}
        </div>
      )}
    </div>
  );
};

export default PatientByBed;
