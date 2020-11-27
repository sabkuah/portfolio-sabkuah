import React from "react";
import Note from "./common/Note";

import { makeStyles } from "@material-ui/core/styles";

// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//     width: 500,
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

export default function About() {
  //const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="about-page">
      <div className="board-wrapper">
        <div className="frame-outer">
          <div className="frame-inner">
            <div className="title-box">
              {/* flex-box */}
              <div className="title-sticky">
                <h3>A Little About Me</h3>
                <p>hello!</p>
              </div>
            </div>
            <div className="about-content">
              <Note
                title="Sabrina Kuah"
                text="I am currently completing the SSD program at BCIT."
              />

              <div className="polaroid-container">
                <div className="polaroid" id="card-1">
                  <div className="photo-container">
                    <img src="shrek.png" className="photo"></img>
                  </div>
                  <div className="caption">
                    <p>this is card 1</p>
                  </div>
                </div>

                <div className="polaroid" id="card-2">
                  <div className="photo-container">
                    <img src="shrek.png" className="photo"></img>
                  </div>
                  <div className="caption">
                    <p>this is card 2</p>
                  </div>
                </div>

                <div className="polaroid" id="card-3">
                  <div className="photo-container">
                    <img src="shrek.png" className="photo"></img>
                  </div>
                  <div className="caption">
                    <p>this is card 3</p>
                  </div>
                </div>

                <div className="polaroid" id="card-4">
                  <div className="photo-container">
                    <img src="shrek.png" className="photo"></img>
                  </div>
                  <div className="caption">
                    <p>this is card 4</p>
                  </div>
                </div>
              </div>
              <ul id="about-stickies">
                <li id="education">
                  <a href="#">
                    <h2>Education</h2>
                    <ul>
                      <li>Software Systems Developer Certificate</li>
                      <p>BCIT (May 2021)</p>
                      <li>Master of Teaching</li>
                      <p>University of Toronto (2017)</p>
                      <li>Bachelor of Science in Biology</li>
                      <p>University of British Columbia (2014)</p>
                    </ul>
                  </a>
                </li>
                <li id="languages">
                  <a href="#">
                    <h2>Technologies</h2>
                    <ul>
                      <li>HTML/CSS/SCSS</li>
                      <li>React/Javascript</li>
                      <li>MSSQL</li>
                      <li>C# / ASP.NET</li>
                    </ul>
                  </a>
                </li>
                <li id="skills">
                  <a href="#">
                    <h2>Skills</h2>
                    <ul>
                      <li>Git Version Control</li>
                      <li>Slack Collaboration</li>
                      <li>Kanban Project Boards</li>
                      <li>Agile Development</li>
                    </ul>
                  </a>
                </li>
                <li id="knowledge">
                  <a href="#">
                    <h2>Tools</h2>
                    <ul>
                      <li>Visual Studio Code</li>
                      <li>MS SQL Server</li>
                      <li>Figma</li>
                      <li>Moqups</li>
                    </ul>
                  </a>
                </li>
                <li id="knowledge">
                  <a href="#">
                    <h2>Other Skills</h2>
                    <ul>
                      <li>
                        I worked at the Gap as a sales associate then team lead
                        for seven years while I was in school.
                      </li>
                      <li>I've taught every grade from pre-K to grade 12.</li>
                      <li>
                        I worked in biotech and as a researcher at the BC Cancer
                        Agency.
                      </li>
                    </ul>
                  </a>
                </li>
              </ul>
              <Note
                title="Life Outside of Work"
                text="I have a cat named Monkey, I've lived in British Columbia, Alberta, Ontario and South Korea. "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
