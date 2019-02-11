import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <React.Fragment>
      <div className="text-center mainText"
          style={{
              width: "100%",
              height: "100px",
              zIndex: "-1",
              background:"url('https://www.iitr.ac.in/campus_life/Hostels/RajivBhawan/images/slider_main/rgb4.jpg')",
              backgroundPosition: "top",
              position:"absolute",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              opacity: "0.6"
            }}
        ></div>
      <h1 className="text-center mainText" style={{ zIndex: "1"}}> RAJIV BHAWAN</h1>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <ul class="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/facilities">
                Facilities
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Header;
