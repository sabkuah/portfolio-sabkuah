import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Contact extends Component {
  render() {
    return (
      <div className="landing">
        <div id="landing-board">
          <div className="board-wrapper">
            <div className="frame-outer">
              <div className="frame-inner">
                {/* Contact Form */}

                <div class="container">
                  <div class="poster">
                    <div className="contact-form">
                      <form>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Email address</label>
                          <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                          />
                          <small id="emailHelp" class="form-text text-muted">
                            We'll never share your email with anyone else.
                          </small>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputPassword1">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                          />
                        </div>
                        <div class="form-group">
                          <label for="exampleFormControlTextarea1">
                            Example textarea
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                          ></textarea>
                        </div>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="exampleCheck1"
                          />
                          <label class="form-check-label" for="exampleCheck1">
                            Check me out
                          </label>
                        </div>
                        <button type="submit" class="btn btn-primary">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="landing-message">
          <div id="welcome">
            <img
              className="landing-cartoon"
              src="profile_cartoon.svg"
              alt="cartoon of me"
            />
            <h1>Let's chat!</h1>
            <p>perhaps I can be of service</p>
            {/* <p>Full-Stack Web Developer, Educator</p> */}
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
      </div>
    );
  }
}
