import React from "react";
import AllocateToken from "../components/AllocateToken";
import NotifyPatient from "../components/NotifyPatient";
import DoctorAvailability from "../components/DoctorAvailability";
import QueueTokenList from "../components/QueueTokenList";

const QueueManagement = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-4">
        Queue Management System
      </h1>

      <NotifyPatient />
      <DoctorAvailability />
    </div>
  );
};

export default QueueManagement;
