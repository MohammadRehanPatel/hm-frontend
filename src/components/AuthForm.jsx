import React, { useState } from "react";
// import "./styles/stylesign.css";

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSlide = (isLoginSelected) => {
    setIsLogin(isLoginSelected);
  };

  return (
    <div>
      <div className="title-text">
        <div className={`title ${isLogin ? "login" : "signup"}`}>
          {isLogin ? "Login Form" : "Signup Form"}
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input
            type="radio"
            name="slide"
            id="login"
            checked={isLogin}
            onChange={() => handleSlide(true)}
          />
          <input
            type="radio"
            name="slide"
            id="signup"
            checked={!isLogin}
            onChange={() => handleSlide(false)}
          />
          <label
            htmlFor="login"
            className={`slide login ${isLogin ? "active" : ""}`}
          >
            Login
          </label>
          <label
            htmlFor="signup"
            className={`slide signup ${!isLogin ? "active" : ""}`}
          >
            Signup
          </label>
          <div className={`slider-tab ${isLogin ? "" : "shift"}`}></div>
        </div>
        <div className="form-inner">
          {isLogin ? (
            <form className="login">
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="signup-link">
                Not a member?{" "}
                <a href="#" onClick={() => handleSlide(false)}>
                  Signup now
                </a>
              </div>
            </form>
          ) : (
            <form className="signup">
              <div className="field">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="number" placeholder="Phone number" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthForm;
