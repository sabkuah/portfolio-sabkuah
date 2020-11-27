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
              <Note title="Skills" text="none! :( " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
