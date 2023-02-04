import React from "react";
// import logo from "./logo.png";
import Nav from "./Components/Nav";

function Login() {
  return (
    <div>
      <Nav />
      <div className="login">
        {/* <img className="logoSU" src={logo} alt="" /> */}
        <h1>Welcome to PikcupPal</h1>
        <div className="main">
          <div className="credential">
            <p>Username/email</p>
            <input type="text" placeholder="Username/Email" />
          </div>
          <div className="credential">
            <p>Password</p>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <button className="logButton">Login</button>
        <p id="noAccount">
          Don't have an account? <a href>Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
