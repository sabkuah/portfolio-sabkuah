import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import board from "../images/3.png";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing container-fluid">
        <div className="row">
          <div id="landing-left" className="col-sm-12 col-md-6">
            <div id="welcome">
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
          <div id="landing-right" className="col-sm-12 col-md-6">
            <div className="board-wrapper">
              <div className="frame-outer">
                <div className="frame-inner">
                  {/* <div className="sticky">
                    <h3 className="sticky-text">this is sticky #1!</h3>
                  </div> */}
                  <ul>
                    <li>
                      <a href="#">
                        <h2>Title #1</h2>
                        <p>Text Content #1</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>Title #2</h2>
                        <p>Text Content #2</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>Title #3</h2>
                        <p>Text Content #3</p>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <h2>Title #4</h2>
                        <p>Text Content #4</p>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
