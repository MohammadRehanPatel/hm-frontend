import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginWithBootstrap from './LoginWithBootstrap';


function App() {
  return (
    <>
      <div className="flex justify-center">
        <LoginWithBootstrap />
      </div>
    </>
  );
}

export default App;
