import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, fetchQueueTokensService } from "../api/services";

const QueueTokenList = () => {
  const [queueTokens, setQueueTokens] = useState([]);
  // const [queueTokenId, setQueueTokenId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchQueueTokens();
  }, []);
  const fetchQueueTokens = async () => {
    const response = await fetchQueueTokensService();
    console.log("queue tokens" + response);
    setQueueTokens(response);
  };

  const handleRemovePatient = async (queueTokenId) => {
    try {
      const response = await axios.delete(BASE_URL + `/queue/${queueTokenId}`);
      setMessage(response.data); // Success message
      setError(""); // Clear any previous error
    } catch (err) {
      setError("Failed to remove patient from queue. Please try again.");
      setMessage(""); // Clear any previous success message
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Queue Tokens</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Token Number</th>
            <th className="py-2 px-4 border-b">Patient Name</th>
            <th className="py-2 px-4 border-b">Doctor</th>
            <th className="py-2 px-4 border-b">Waiting Time</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Delete</th>
          </tr>
        </thead>
        <tbody>
          {queueTokens?.map((token) => (
            <tr key={token.id}>
              <td className="py-2 px-4 border-b">{token.tokenNumber}</td>
              <td className="py-2 px-4 border-b">{token.patient.name}</td>
              <td className="py-2 px-4 border-b">{token.doctor.name}</td>
              <td className="py-2 px-4 border-b">{token.waitingTime} mins</td>
              <td className="py-2 px-4 border-b">
                {token.checkedUp ? "Checked Up" : "Waiting"}
              </td>
              <td>
                <button
                  onClick={handleRemovePatient(token.id)}
                  className="w-full bg-red-600 text-white font-semibold py-2 rounded-md hover:bg-red-700 transition"
                >
                  Remove Patient
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueueTokenList;
