import React from "react";

import { Link } from "react-router-dom";

const Header = props => {
  return (
    <React.Fragment>
      <Link to="/">Home</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/gallery">Gallery</Link>
    </React.Fragment>
  );
};
export default Header;
