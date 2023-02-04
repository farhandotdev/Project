import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import air from "./air.png";
import train from "./train.png";
import road from "./road.png";

import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Banners from "./Components/Banners";

import HomeBanner from "./delivery.jpg";

function Home() {
  return (
    <div>
      <div>
        <Nav />
        <Banners icon={HomeBanner} />
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
              <Link to="/book" className="link">
                Book a shipment
              </Link>
            </div>
          </div>
          <div className="overviewOne">
            <div className="overviewButton">
              <Link to="/track" className="link">
                Track a shipment
              </Link>
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
      <div>
        <div className="transport">
          <h1>Modes of Transport</h1>
          <div className="modes">
            <div className="mode">
              <img src={air} alt="" />
              <h4>BY AIR</h4>
            </div>
            <div className="mode">
              <img src={road} alt="" />
              <h4>BY ROAD</h4>
            </div>
            <div className="mode">
              <img src={train} alt="" />
              <h4>BY TRAIN</h4>
            </div>
          </div>
          <p>WHICHEVER SUITS YOU</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
export default Home;
