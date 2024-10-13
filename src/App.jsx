import { useState } from "react";
import "./App.css";
<<<<<<< HEAD
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import AppoinmentPage from "./pages/AppoinmentPage";
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';

>>>>>>> 779e0dec772f0e70db4c40681879e8480e3183aa

function App() {
  return (
    <>
<<<<<<< HEAD
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/appoinment" element={<AppoinmentPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
=======
      <div className="flex justify-center">
        <SignUpForm />
        <Router>
      <div className="App">
        <Switch>
          <Route path="/signup">
            <SignUpForm />
          </Route>
          <Route path="/">
            <LoginForm />
          </Route>
        </Switch>
      </div>
    </Router>
      </div>
>>>>>>> 779e0dec772f0e70db4c40681879e8480e3183aa
    </>
  );
}

export default App;
