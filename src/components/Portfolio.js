import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-page">
        <div className="board-wrapper">
          <div className="frame-outer">
            <div className="frame-inner">
              <div className="title-sticky">
                <h3 className="title">Projects I've Worked On</h3>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <h2>Title #1</h2>
                    <p>Buying a CAR!</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <h2>Title #2</h2>
                    <p>Going on a TREK :)</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <h2>Title #3</h2>
                    <p>MONEY</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <h2>Title #4</h2>
                    <p>happiness, joy, contentment</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <h2>Title #5</h2>
                    <p>Family, Friends</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <h2>Title #6</h2>
                    <p>Health</p>
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
