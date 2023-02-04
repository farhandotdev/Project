import React from "react";
import "./styles.css";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Banners from "./Components/Banners";
import { Link } from "react-router-dom";

function Book() {
  return (
    <div>
      <div>
        <Nav />
        <Banners />
        <div className="overview">
          <div className="overviewOne">
            <div className="overviewButton">
              <Link to="/book" className="link">
                Book your order
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Book;
