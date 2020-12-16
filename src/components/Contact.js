import React, { Component } from "react";
import { pageTransitionSlow, pageWipe } from "./common/Animation";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default class Contact extends Component {
  render() {
    return (
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageWipe}
        transition={pageTransitionSlow}
        className="landing"
        id="contact"
      >
        <div id="landing-message">
          <div id="welcome">
            <img
              className="landing-cartoon"
              src="sabc.png"
              alt="cartoon of me"
            />
            <h1>Send me a message</h1>
            <div className="row" id="landing-buttons">
              <a href="https://github.com/sabkuah">
                <li className="l-btn">
                  GitHub
                  <FiGithub className="icon mx-2" />
                </li>
              </a>

              <a href="https://www.linkedin.com/in/sabkuah/">
                <button className="l-btn">
                  LinkedIn
                  <FiLinkedin className="icon mx-2" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div id="landing-board">
          <div className="board-wrapper">
            <div className="frame-outer">
              <div className="frame-inner">
                {/* Contact Form */}
                <div class="container contact-container">
                  <div className="note" id="contact-form">
                    <div className="tape" />
                    <div className="note-content px-3">
                      <h2>Contact Me</h2>
                      <form>
                        <div class="form-group py-2">
                          <label for="inputEmail4">Your Email</label>
                          <input
                            type="email"
                            class="form-control"
                            id="inputEmail4"
                            placeholder="Email"
                          />
                        </div>
                        <div class="form-group py-2">
                          <label for="exampleFormControlTextarea1">
                            Message
                          </label>
                          <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            rows="5"
                            placeholder="Your message"
                          ></textarea>
                        </div>
                        <button type="submit" class="form-button">
                          Submit
                        </button>
                      </form>
                    </div>

                    <div className="left-shadow"></div>
                    <div className="right-shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
