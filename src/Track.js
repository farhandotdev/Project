import React from "react";
import "./styles.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Banners from "./Components/Banners";
import { Link } from "react-router-dom";

import TrackBanner from "./track.jpg";

function Track() {
  return (
    <div>
      <div>
        <Nav />
        <Banners icon={TrackBanner} />
        <div className="overview">
          <div className="overviewOne">
            <div className="overviewButton">
              <Link to="/track" className="link">
                Track Your Order
              </Link>
            </div>
          </div>
          <div className="overviewOne">
            <div className="trackSubHead">
              <label>Track a shipment</label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Track;
