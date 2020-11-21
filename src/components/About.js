import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    width: 500,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="about-page">
      <div className="board-wrapper">
        <div className="frame-outer">
          <div className="frame-inner">
            <div className="title-sticky">
              <h3 className="title">A Little Bit About Me</h3>
            </div>

            <div className="sticky">
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="h2">
                    EDU{bull}CA{bull}TION
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    noun
                  </Typography>
                  <Typography variant="body2" component="p">
                    {/* well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'} */}
                    <ul>
                      <li>
                        Software Systems Developer - Web-Programming Option
                      </li>
                      <li className="sub-list">BCIT</li>
                      <li>Master of Teaching</li>
                      <li className="sub-list">University of Toronto</li>
                      <li>Bachelor of Science in Cell Biology</li>
                      <li className="sub-list">
                        University of British Columbia
                      </li>
                    </ul>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>

            <div uk-scrollspy="target: > div; cls: uk-animation-fade; delay: 500">
              <div>hello 1</div>
              <div>bye 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
