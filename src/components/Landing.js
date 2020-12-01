import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import board from "../images/3.png";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div id="landing-message">
          <div id="welcome">
            <img
              src="profile_cartoon.svg"
              alt="cartoon of me"
              style={{ width: "300px", "margin-bottom": "20px" }}
            />
            <h1>Hi, I am Sabrina Kuah</h1>
            <p>Full-Stack Web Developer, Educator</p>
            <div className="row" id="landing-buttons">
              <Link to="/portfolio">
                <li className="l-btn">See Portfolio</li>
              </Link>
              <Link to="/about">
                <button className="l-btn">About Me</button>
              </Link>
            </div>
          </div>
        </div>
        <div id="landing-board">
          <div className="board-wrapper">
            <div className="frame-outer">
              <div className="frame-inner">
                <ul className="landing-stickies">
                  <li id="s1">
                    <a href="#">
                      <h2></h2>
                      <p>
                        FULL-STACK <br />
                        WEB-DEVELOPER
                      </p>
                    </a>
                  </li>
                  <li id="s2">
                    <a href="#">
                      <p>Educator</p>
                    </a>
                  </li>
                  <li id="s3">
                    <a href="#">
                      <p>Cat Mom</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
