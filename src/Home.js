import React from "react";
import "./styles.css";
import logo from "./logo.png";
import Banner from "./delivery.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
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
        <div className="banner">
          <img src={Banner} alt="" />
        </div>
        <div className="overview">
          <div className="overviewOne">
            <div className="text">
              <h4>Pikcup from your place</h4>
              <ul>
                <li>Anytime</li>
                <li>Anywhere</li>
              </ul>
            </div>
            <div className="overviewButton">
              <button>Book a shipment</button>
            </div>
          </div>
          <div className="overviewOne">
            <div className="overviewButton">
              <button>Track a shipment</button>
            </div>
            <div className="text">
              <h4>Track your shipment</h4>
              <ul>
                <li>Live</li>
                <li>Accurate</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services">
          <h1>Our Services</h1>
          <div className="serviceMain">
            <div className="row">
              <div className="service">
                <h2>Live Tracking</h2>
                <p>Track your order live with our precise tracking system.</p>
              </div>
              <div className="service">
                <h2>Custom Transport</h2>
                <p>Choose how you want to ship your order.</p>
              </div>
            </div>
            <div className="row">
              <div className="service">
                <h2>Hassle Free</h2>
                <p>Don’t go anywhere, we come to you.</p>
              </div>
              <div className="service">
                <h2>Quick Service</h2>
                <p>Experience a service, faster than ever.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
