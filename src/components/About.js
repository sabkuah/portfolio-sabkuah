import React from "react";
import { motion } from "framer-motion";
import { pageTransitionSlow, pageWipe } from "./common/Animation";

export default function About() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageWipe}
      transition={pageTransitionSlow}
      className="about-page"
    >
      <div className="board-wrapper">
        <div className="frame-outer">
          <div className="frame-inner">
            <div className="title-box row justify-content-center">
              {/* flex-box */}
              <div className="title-sticky">
                <h3>A Little About Me</h3>
                <div className="about-btn-container">
                  <a href="https://drive.google.com/file/d/1eH8p1ZbH-gV-pccj6qgn-ppfFllUndNi/view?usp=sharing">
                    <button className="about-btns">See Resume</button>
                  </a>
                </div>
              </div>
            </div>
            <div className="about-content">
              <div className="row row-container">
                {/* LEFT COLUMN: BIO & POLAROIDS */}
                <div className="col-sm-12 col-lg-8">
                  <div className="main-note-container">
                    <div className="note" id="about-me">
                      <div className="tape" />
                      <div className="note-content">
                        <h2 style={{ "font-size": "36px" }}>
                          Education is my passion, <br />
                          Web Development is my niche.
                        </h2>
                        <div className="row">
                          <div className="col-sm-12 col-md-8">
                            <h5 style={{ color: "#4a777a" }}>
                              I decided to learn to code in <br /> a grade five
                              classroom.
                            </h5>
                            <br />
                            <p>
                              I have always been interested in STEM (science,
                              technology, engineering and mathematics) education
                              and its impacts on problem-solving and resilience.
                              I attended workshops and challenged my students to
                              learn code. What began as a challenge for my
                              students however, soon became a personal challenge
                              for me. The more questions they asked, the more
                              greater my curiousity grew.
                              <br />
                              <br />I started coding alongside ten year-olds
                              using Microbits and block code. This year, I will
                              have completed my first of many steps in to the
                              world of web development and
                            </p>
                            <h5 style={{ color: "#4a777a" }}>
                              I am so excited.
                            </h5>
                          </div>

                          <div className="col-sm-12 col-md-4">
                            <div className="d-flex justify-content-center mt-5">
                              <img
                                src="sab-standing.png"
                                alt="cartoon of me"
                                className="standing-cartoon"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Stacked Polaroids */}
                  <div className="polaroid-container">
                    <div className="polaroid" id="card-1">
                      <div className="photo-container">
                        <img src="steam-day.jpeg" className="photo" alt="" />
                      </div>

                      <div className="caption row">
                        <p>
                          Navigating out of a maze by chaining commands on STEM
                          day
                        </p>
                      </div>
                    </div>

                    <div className="polaroid" id="card-2">
                      <div className="photo-container">
                        <img src="microbit.jpeg" className="photo" alt="" />
                      </div>
                      <div className="caption">
                        <p>
                          A Microbit reaction timer game that responds to body
                          conductivity
                        </p>
                      </div>
                    </div>

                    <div className="polaroid" id="card-3">
                      <div className="photo-container">
                        <img
                          src="steam-day2.jpeg"
                          className="photo"
                          alt="steam day"
                        />
                      </div>
                      <div className="caption">
                        <p>this is card 3</p>
                      </div>
                    </div>

                    <div className="polaroid" id="card-4">
                      <div className="photo-container">
                        <img
                          src="shrek.png"
                          className="photo"
                          alt="shrek"
                        ></img>
                      </div>
                      <div className="caption">
                        <p>this is card 4</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* RIGHT COLUMN: STICKIES */}
                <div className="col-sm-12 col-lg-4 d-flex justify-content-center">
                  <div className="stickies">
                    <ul>
                      <li className="about-sticky" id="languages">
                        <h2>Technologies</h2>
                        <p>HTML/CSS/SCSS</p>
                        <p>React/Javascript ES6</p>
                        <p>MSSQL</p>
                        <p>C# / ASP.NET</p>
                      </li>
                      <li className="about-sticky" id="skills">
                        <h2>Skills</h2>
                        <p>Git Version Control</p>
                        <p>Slack Collaboration</p>
                        <p>Kanban Project Boards</p>
                        <p>Agile Development</p>
                      </li>
                      <li className="about-sticky" id="knowledge">
                        <h2>Tools</h2>
                        <p>Visual Studio Code</p>
                        <p>MS SQL Server</p>
                        <p>Figma</p>
                        <p>Moqups</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education Sticky */}
              <div className="note secondary-notes" id="education">
                <div className="tape" />
                <div className="note-content">
                  <h2>Education</h2>
                  <h5>Software Systems Developer Certificate</h5>
                  <p>BCIT (May 2021)</p>
                  <h5>Master of Teaching</h5>
                  <p>University of Toronto (2017)</p>
                  <h5>Bachelor of Science in Biology</h5>
                  <p>University of British Columbia (2014)</p>
                </div>

                <div className="left-shadow"></div>
                <div className="right-shadow"></div>
              </div>
              {/* Other Skills Sticky */}
              <div className="note secondary-notes" id="other-skills">
                <div className="tape" />
                <div className="note-content">
                  <h2>Work Experience</h2>
                  <h5>Intermediate Classroom Teacher</h5>
                  <p>for the Vancouver School Board</p>
                  <h5>Researcher </h5>
                  <p>at BC Cancer Research Center</p>
                  <h5>Sales Manager </h5>
                  <p>at the Gap</p>
                </div>

                <div className="left-shadow"></div>
                <div className="right-shadow"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
