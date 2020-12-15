import React from "react";
import { motion } from "framer-motion";
import { pageTransition, pageFade } from "./common/Animation";

export default function About() {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageFade}
      transition={pageTransition}
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
                  <button className="about-btns">See Resume</button>
                  <button className="about-btns">See Portfolio</button>
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
                        <h2>Sabrina Kuah!!</h2>
                        <div className="row">
                          <div className="col-sm-12 col-md-8">
                            <p>
                              I am currently completing the SSD program at BCIT.
                            </p>

                            <p>
                              Lorem ipsum dolor sit amet consectetur,
                              adipisicing elit. Magnam quos asperiores quod a
                              aliquam nobis sed recusandae minima quidem, et
                              soluta accusantium sit in suscipit! Earum
                              voluptatem ducimus cumque cupiditate!
                            </p>
                          </div>

                          <div className="col-sm-12 col-md-3">
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
                  {/* Stacked Polaroids */}
                  <div className="polaroid-container">
                    <div className="polaroid" id="card-1">
                      <div className="photo-container">
                        <img src="steam-day.jpeg" className="photo" alt="" />
                      </div>

                      <div className="caption row">
                        <p>Dry coding on STEAM Day</p>
                      </div>
                    </div>

                    <div className="polaroid" id="card-2">
                      <div className="photo-container">
                        <img src="microbit.jpeg" className="photo" alt="" />
                      </div>
                      <div className="caption">
                        <p>Coding with Microbits</p>
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
                        <p>React/Javascript</p>
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
                  <li>Software Systems Developer Certificate</li>
                  <p>BCIT (May 2021)</p>
                  <li>Master of Teaching</li>
                  <p>University of Toronto (2017)</p>
                  <li>Bachelor of Science in Biology</li>
                  <p>University of British Columbia (2014)</p>
                </div>

                <div className="left-shadow"></div>
                <div className="right-shadow"></div>
              </div>
              {/* Other Skills Sticky */}
              <div className="note secondary-notes" id="other-skills">
                <div className="tape" />
                <div className="note-content">
                  <h2>Other Skills</h2>
                  <li>
                    I worked at the Gap as a sales associate then team lead for
                    seven years while I was in school.{" "}
                  </li>
                  <li>I've taught every grade from pre-K to grade 12.</li>
                  <li>
                    I worked in biotech and as a researcher at the BC Cancer
                    Agency.
                  </li>
                </div>

                <div className="left-shadow"></div>
                <div className="right-shadow"></div>
              </div>
              {/* Outside of Work Sticky */}
              {/* <div className="note secondary-notes" id="outside-of-work">
                <div className="tape" />
                <div className="note-content">
                  <h2>Outside of Work</h2>
                  <p>
                    I have a cat named Monkey, I've lived in British Columbia,
                    Alberta, Ontario and South Korea.
                  </p>
                </div>

                <div className="left-shadow"></div>
                <div className="right-shadow"></div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
