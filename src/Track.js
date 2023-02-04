import React from "react";
import "./styles.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Banners from "./Components/Banners";
import { Link } from "react-router-dom";

import BookBanner from "./3.png";

function Track() {
  return (
    <div>
      <div>
        <Nav />
        <Banners icon={BookBanner} />
        <div className="overview">
          <div className="bookingCard">
            <div className="bookHeading">
              <h1>TRACK YOUR ORDER</h1>
            </div>
            <div className="bookInput">
              <div className="radio-group">
                <input
                  type="radio"
                  id="mobile-number"
                  name="identifier"
                  defaultValue="mobile-number"
                />
                <label htmlFor="mobile-number">Mobile Number</label>
                <input
                  type="radio"
                  id="tracking-id"
                  name="identifier"
                  defaultValue="tracking-id"
                />
                <label htmlFor="tracking-id">Tracking ID</label>
                <input
                  type="radio"
                  id="order-id"
                  name="identifier"
                  defaultValue="order-id"
                />
                <label htmlFor="order-id">Order ID</label>
              </div>
            </div>
            <input type="text" placeholder="Enter the option" id="trackingID" />
            <button>Get OTP and Track</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Track;
