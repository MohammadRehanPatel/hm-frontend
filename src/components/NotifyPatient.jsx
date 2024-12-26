import React, { useState } from "react";
import axios from "axios";
import { notifyPatientService } from "../api/services";

const NotifyPatient = () => {
  const [queueTokenId, setQueueTokenId] = useState("");
  const [message, setMessage] = useState("");

  const notifyPatient = async () => {
    const response = await notifyPatientService(queueTokenId);
    setMessage(response);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Notify Patient</h2>
      <input
        type="number"
        placeholder="Queue Token ID"
        value={queueTokenId}
        onChange={(e) => setQueueTokenId(e.target.value)}
        className="border p-2 mb-2"
      />
      <button
        onClick={notifyPatient}
        className="bg-green-500 text-white p-2 rounded"
      >
        Notify Patient
      </button>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default NotifyPatient;
