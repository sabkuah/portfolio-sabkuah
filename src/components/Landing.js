import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing container-fluid">
        <div className="row">
          <div id="landing-left" className="col">
            <div id="welcome">
              <h1>Hi, I am Sabrina Kuah</h1>
              <p>Full-Stack Web Developer, Educator</p>
              <div className="row" id="landing-buttons">
                <Link to="/portfolio">
                  <Button variant="contained">See Portfolio</Button>
                </Link>
                <Link to="/about">
                  <Button variant="contained">About Me</Button>
                </Link>
              </div>
            </div>
          </div>
          <div id="landing-right" className="col"></div>
        </div>
      </div>
    );
  }
}
