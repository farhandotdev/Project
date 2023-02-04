import React from "react";
// import logo from "./logo.png";
import Nav from "./Components/Nav";
function Signup() {
  return (
    <div>
      <Nav />
      <div className="login">
        {/* <img className="logoSU" src={logo} alt="" /> */}
        <h1>Create Account</h1>
        <div className="main">
          <div className="credential">
            <p>Full Name</p>
            <input type="text" placeholder="John Doe" />
          </div>
          <div className="credential">
            <p>Email</p>
            <input type="email" placeholder="johndoe@gmail.com" />
          </div>
          <div className="credential">
            <p>Password</p>
            <input type="password" placeholder="Password" />
          </div>
          <div className="credential">
            <p>Re-enter Password</p>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <button className="logButton">Create Account</button>
        <p id="noAccount">
          Already have an account? <a href>Log in</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
