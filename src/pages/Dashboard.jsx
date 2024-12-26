import React, { useEffect, useState } from "react";
import axios from "axios";
import BedAllocation from "../components/BedAllocation";
import BedManagement from "../components/BedManagement";
import Tabs from "../components/Tabs";
import AllBedsWithPatients from "../components/AllBedsWithPatient";
import PatientByBed from "../components/PatientByBed";
import AllocateToken from "../components/AllocateToken";
import QueueTokenList from "../components/QueueTokenList";
// import Fade from "react-reveal/Fade";
// import "./style/dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const tabs = [
    { label: "Bed Allocation", content: <BedAllocation /> },
    { label: "Bed Management", content: <BedManagement /> },
    { label: "All Beds ", content: <AllBedsWithPatients /> },
    { label: "Patient Bed ", content: <PatientByBed /> },
    // { label: "Tab 3", content: <Tab3Content /> },
  ];

  useEffect(() => {
    // Simulating API fetch
    axios
      .get
      //"https://jsonplaceholder.typicode.com/users"
      // "https://jsonplaceholder.typicode.com/users"
      ()
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="dashboard">
      <header className="hero">
        <h2>Welcome to the Hospital Dashboard</h2>
      </header>
      {
        /* 
    /*  <section className="stats">
        {loading ? (
          <p>Loading data...</p>
        ) : (
          data.map((item, index) => (
            <div key={item.id} delay={index * 100}>
              <div className="stats-card">
                <h3>{item.name}</h3>
                <p>{item.email}</p>
              </div>
            </div>
          )) /*<div className="stats-section">
        <StatsCard title="Total Patients" value="120" />
        <StatsCard title="Available Doctors" value="25" />
        <StatsCard title="Beds Occupied" value="75%" />
        <StatsCard title="Revenue Today" value="$50,000" />
      </div>
     */
        // )}
        // </section>
      }
      <div className="flex items-center justify-center">
        {/* <h1 className="text-2xl font-bold text-center mt-4">Tabs </h1> */}
        {/* <Tabs tabs={tabs} /> */}
      </div>

      {/* <div className="bedAllocation">
        <BedAllocation />
      </div>
      <div className="bedManagement">
        <BedManagement />
      </div> */}
      <AllocateToken />

      <QueueTokenList />
    </div>
  );
};

export default Dashboard;
