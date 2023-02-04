import React from "react";
import "./styles.css";
import logo from "./logo.png";

import { Link } from "react-router-dom";
import Banner from "./delivery.jpg";
function Contact() {
  return (
    <div>
      <div>
        <nav>
          <img src={logo} alt="" />
          <div className="nav-middle">
            <Link to="/">Home</Link>
            <Link to="/track">Track</Link>
            <Link to="/book">Book</Link>
            <Link to="/contact" className="active">
              Contact
            </Link>
          </div>
          <div className="nav-right">
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
        </nav>
        <div className="banner">
          <img src={Banner} alt="" />
        </div>
        <div className="overview">
          <div className="overviewOne">
            <div className="overviewButton">
              <button>Track Your Order</button>
            </div>
          </div>
          <div className="overviewOne">
            <div className="trackSubHead">
              <label>Connect with us</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
