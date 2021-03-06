import React from "react";
import carl from "../img/codercarl.png";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="NavBar">
      <nav className="nav">
        <div className="profile">
          <img src={carl} alt="" />
        </div>

        <ul className="nav-items">
          <li className="nav-item">
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" exact activeClassName="active">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" exact activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blogs" exact activeClassName="active">
              Blogs
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" exact activeClassName="active">
              Contact
            </NavLink>
          </li>
        </ul>

        <footer className="footer">
          <p>@2021 Carl McIntosh</p>
        </footer>
      </nav>
    </div>
  );
}

export default Navbar;
