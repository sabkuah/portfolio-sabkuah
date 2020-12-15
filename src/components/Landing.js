import React, { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { pageTransitionSlow, pageWipe } from "./common/Animation";

export default class Landing extends Component {
  render() {
    return (
      <motion.div
        style={{ position: "absolute" }}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageWipe}
        transition={pageTransitionSlow}
        className="landing"
      >
        <div id="landing-message">
          <div id="welcome">
            <img
              className="landing-cartoon"
              src="sabc.gif"
              alt="cartoon of me"
              // style={{ width: "300px", "margin-bottom": "20px" }}
            />
            <h1>Hi, I am Sabrina Kuah</h1>
            {/* <p>Full-Stack Web Developer, Educator</p> */}
            <div className="row" id="landing-buttons">
              <Link to="/portfolio">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="l-btn"
                >
                  See Portfolio
                </motion.button>
              </Link>
              <Link to="/about">
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.5 },
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="l-btn"
                >
                  About Me
                </motion.button>
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
                    <p>
                      FULL-STACK <br />
                      WEB-DEVELOPER
                    </p>
                  </li>
                  <li id="s2">
                    <p>Educator</p>
                  </li>
                  <li id="s3">
                    <p>Cat Mom</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
}
