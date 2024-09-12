import { useState } from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';


function App() {
  return (
    <>
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
    </>
  );
}

export default App;
