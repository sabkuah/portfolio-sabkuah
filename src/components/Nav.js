import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

export default class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg sticky-top">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li className="nav-item nav-link active">
              <NavLink to="/" exact className="nav-link">
                Home<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item nav-link">
              <NavLink to="/about" exact className="nav-link">
                About Me
              </NavLink>
            </li>
            <li className="nav-item nav-link">
              <NavLink to="/portfolio" exact className="nav-link">
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item nav-link">
              <NavLink to="/contact" exact className="nav-link">
                Contact
              </NavLink>
            </li>
          </div>
        </div>
        <div className="social-icons">
          <FiGithub className="icon" />
          <FiLinkedin className="icon" />
          <FiMail className="icon" />
        </div>
      </nav>
    );
  }
}
