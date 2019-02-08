import React from "react";
import "./css/header.css";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <React.Fragment>
      <h1>Rajiv Bhawan</h1>
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
