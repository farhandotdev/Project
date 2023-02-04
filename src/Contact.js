import React from "react";
import "./styles.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Banners from "./Components/Banners";
// import { Link } from "react-router-dom";

import ContactBanner from "./contact.jpg";

function Contact() {
  return (
    <div>
      <div>
        <Nav />
        <Banners icon={ContactBanner} />
        <div className="login">
          <h1>Get in touch</h1>
          <div className="main">
            <div className="credential">
              <p>Name</p>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="credential">
              <p>Email</p>
              <input type="email" placeholder="johndoe@gmail.com" />
            </div>
            <div className="credential">
              <p>Contact</p>
              <input type="text" placeholder="Contact" />
            </div>
            <div className="credential">
              <p>Message</p>
              <textarea
                name
                id
                cols={40}
                rows={10}
                placeholder="Type your message..."
                defaultValue={""}
              />
            </div>
          </div>
          <button className="logButton">Send Message</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Contact;
