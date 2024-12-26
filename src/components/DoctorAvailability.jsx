import React, { useState } from "react";
import axios from "axios";
import { checkAvailabilityService } from "../api/services";

const DoctorAvailability = () => {
  const [doctorId, setDoctorId] = useState("");
  const [availability, setAvailability] = useState("");

  const checkAvailability = async () => {
    const response = await checkAvailabilityService(doctorId);
    setAvailability(response);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Check Doctor Availability</h2>
      <input
        type="number"
        placeholder="Doctor ID"
        value={doctorId}
        onChange={(e) => setDoctorId(e.target.value)}
        className="border p-2 mb-2"
      />
      <button
        onClick={checkAvailability}
        className="bg-yellow-500 text-white p-2 rounded"
      >
        Check Availability
      </button>
      {availability && <p className="mt-4">{availability}</p>}
    </div>
  );
};

export default DoctorAvailability;
