// src/components/AllBedsWithPatients.js
import React, { useEffect, useState } from "react";
import { getAllBedsWithPatients } from "../api/services";

const AllBedsWithPatients = () => {
  const [beds, setBeds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBedsWithPatients = async () => {
      try {
        const data = await getAllBedsWithPatients();
        setBeds(data);
      } catch (error) {
        console.error("Error fetching beds with patients:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBedsWithPatients();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">All Beds with Patients</h2>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Bed Number</th>
            <th className="border border-gray-300 p-2">Patient Name</th>
          </tr>
        </thead>
        <tbody>
          {beds.map((allocation, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">
                {allocation.bed.bedNumber}
              </td>
              <td className="border border-gray-300 p-2">
                {allocation.patient
                  ? allocation.patient.name
                  : "No patient allocated"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllBedsWithPatients;
