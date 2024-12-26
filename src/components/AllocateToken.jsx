import React, { useState } from "react";
import axios from "axios";
import { allocateTokenService } from "../api/services";

const AllocateToken = () => {
  const [specialization, setSpecialization] = useState("");
  const [patientId, setPatientId] = useState("");
  const [token, setToken] = useState(null);

  const allocateToken = async () => {
    const response = await allocateTokenService(specialization, patientId);
    console.log("allocateToken " + response);
    setToken(response.data);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Allocate Token</h2>
      <input
        type="text"
        placeholder="Specialization"
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
        className="border p-2 mb-2"
      />
      <input
        type="number"
        placeholder="Patient ID"
        value={patientId}
        onChange={(e) => setPatientId(e.target.value)}
        className="border p-2 mb-2"
      />
      <button
        onClick={allocateToken}
        className="bg-blue-500 text-white p-2 rounded "
      >
        Allocate Token
      </button>
      {token && (
        <div className="mt-4">
          <h3 className="font-bold">Allocated Token:</h3>
          <p>Token Number: {token.tokenNumber}</p>
          <p>Doctor: {token.doctor.name}</p>
          <p>Waiting Time: {token.waitingTime} mins</p>
        </div>
      )}
    </div>
  );
};

export default AllocateToken;
