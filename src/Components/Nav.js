import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Nav() {
  return (
    <div>
      <nav>
        <img className="logo" src={logo} alt="" />
        <div className="nav-middle">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/book" className="ships">
            Ship
          </Link>
          <Link to="/track" className="tracks">
            Track
          </Link>
          <Link to="/contact" className="contacts">
            Contact
          </Link>
        </div>
        <div className="nav-right">
          <Link to="/login" className="login1">
            Log In
          </Link>
          <Link to="/signup" className="signup1">
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
