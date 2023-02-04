import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.png";

function Nav() {
  return (
    <div>
      <nav>
        <img src={logo} alt="" />
        <div className="nav-middle">
          <Link to="/" className="active">
            Home
          </Link>
          <Link to="/book">Ship</Link>
          <Link to="/track">Track</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="nav-right">
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
