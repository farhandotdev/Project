import React from "react";
import "./styles.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Banners from "./Components/Banners";
import { Link } from "react-router-dom";

import TrackBanner from "./2.png";
// import BookBanner from "./book.jpg";

function Book() {
  return (
    <div>
      <div>
        <Nav />
        <Banners icon={TrackBanner} />
        <div className="overview">
          <div className="overviewOne">
            <div className="ship">
              <div className="shipHeading">
                <h3>SHIP YOUR ORDER</h3>
              </div>
              <form>
                <fieldset>
                  <legend>Sender's Details:</legend>
                  <div className="shipForm">
                    <input
                      type="text"
                      id="fname"
                      placeholder="Full name:"
                      name="fname"
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      id="contactNo"
                      placeholder="Contact no:"
                      name="lname"
                    />
                    <br />
                    <br />
                    <input
                      type="email"
                      id="email"
                      placeholder="Email ID:"
                      name="email"
                    />
                    <br />
                    <br />
                    <input
                      type="email"
                      id="address1"
                      placeholder="Address Line 1:"
                      name="email"
                    />
                    <br />
                    <br />
                    <input
                      type="email"
                      id="address2"
                      placeholder="Address Line 2:"
                      name="email"
                    />
                    <br />
                    <br />
                  </div>
                </fieldset>
              </form>
              <form>
                <fieldset>
                  <legend>Receiver's Details:</legend>
                  <div className="shipForm">
                    <input
                      type="text"
                      id="fname"
                      placeholder="Full name:"
                      name="fname"
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      id="contactNo"
                      placeholder="Contact no:"
                      name="lname"
                    />
                    <br />
                    <br />
                    <input
                      type="email"
                      id="email"
                      placeholder="Email ID:"
                      name="email"
                    />
                    <br />
                    <br />
                    <input
                      type="email"
                      id="address1"
                      placeholder="Address Line 1:"
                      name="email"
                    />
                    <br />
                    <br />
                    <input
                      type="email"
                      id="address2"
                      placeholder="Address Line 2:"
                      name="email"
                    />
                    <br />
                    <br />
                    {/* <input type="submit" value="Submit"> */}
                  </div>
                </fieldset>
              </form>
              <form>
                <fieldset>
                  <legend>Consignment Details:</legend>
                  <div className="shipForm">
                    <input
                      type="text"
                      id="fname"
                      placeholder="Actual Weight Of Consignment (in Kg)"
                      name="fname"
                    />
                    <br />
                    <br />
                    <input
                      type="text"
                      id="contactNo"
                      placeholder="Dimension Of Consignment ( LxBxH )"
                      name="lname"
                    />
                    <br />
                    <br />
                    {/* <input type="submit" value="Submit"> */}
                  </div>
                </fieldset>
              </form>
              <button id="shipNow">Ship Now</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Book;
