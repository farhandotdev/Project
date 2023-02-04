import React from "react";
import "./styles.css";
import logo from "./logo.png";

import { Link } from "react-router-dom";
import Banner from "./delivery.jpg";
function Book() {
  return (
    <div>
      <div>
        <nav>
          <img src={logo} alt="" />
          <div className="nav-middle">
            <Link to="/">Home</Link>
            <Link to="/track">Track</Link>
            <Link to="/book" className="active">
              Book
            </Link>
            <Link to="/contact">Contact</Link>
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
              <button>Book Your Order</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Book;
