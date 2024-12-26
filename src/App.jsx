import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AppoinmentPage from "./pages/AppoinmentPage";
import About from "./components/About";
import Opd from "./components/opd";
import Dashboard from "./pages/Dashboard";
import QueueManagement from "./pages/QueueManagement";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/appoinment" element={<AppoinmentPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/opd" element={<Opd />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/queue" element={<QueueManagement />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
