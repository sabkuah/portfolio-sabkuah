import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-page">
        <div className="board-wrapper">
          <div className="frame-outer">
            <div className="frame-inner">
              <div className="title-box">
                {/* flex-box */}
                <div className="title-sticky">
                  <h3>Projects I've Worked On</h3>
                  <div className="project-filters">
                    {/* replace with map - dynamically render */}
                    <button className="filter">tech1</button>
                    <button className="filter">tech2</button>
                    <button className="filter">tech3</button>
                  </div>
                </div>
              </div>

              <ul className="projects">
                {/* flex-box */}
                <li>
                  <a href="#">
                    <h2>#1</h2>
                    <p>Front-end Project</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <h2> #2</h2>
                    <p>Movie DB - React</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <h2> #3</h2>
                    <p>Scorekeeper</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <h2> #4</h2>
                    <p>Vidly</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <h2> #5</h2>
                    <p>Other</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <h2> #6</h2>
                    <p>lorem</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
