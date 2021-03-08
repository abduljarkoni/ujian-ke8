import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark container">
      {/* <h4>
        <Link to="/" className="link">
          HOME
        </Link>
      </h4> */}
      <h4>
        <Link to="/" className="link">
          LIST
        </Link>
      </h4>
      <h4>
        <Link to="/createNote" className="link">
          REGISTER
        </Link>
      </h4>
    </nav>
  );
};

export default Navbar;
