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
          <Link to="/track">Track</Link>
          <Link to="/book">Book</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="nav-right">
          <button>Log In</button>
          <button>Sign Up</button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
