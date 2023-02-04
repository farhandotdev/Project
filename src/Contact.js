import React from "react";
import "./styles.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Banners from "./Components/Banners";
import { Link } from "react-router-dom";

import ContactBanner from "./contact.jpg";

function Contact() {
  return (
    <div>
      <div>
        <Nav />
        <Banners icon={ContactBanner} />
        <div className="overview">
          <div className="overviewOne">
            <div className="overviewButton">
              <Link to="/contact" className="link">
                Contact
              </Link>
            </div>
          </div>
          <div className="overviewOne">
            <div className="trackSubHead">
              <label>Connect with us</label>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
