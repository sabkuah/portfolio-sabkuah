import React, { Component } from "react";
import Note from "./common/Note";
import Toggle from "./common/Toggle";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Note title="Contact Me" text="lorem" />
        {/* <Toggle onClick={!clicked} clicked = false /> */}
      </div>
      // <div className="contact-page">
      //   <div id="container">
      //     <div class="paper">
      //       <div class="tape"></div>
      //       <div class="red-line first"></div>
      //       <div class="red-line"></div>
      //       <ul id="lines">
      //         <li></li>
      //         <li>Contact Me </li>
      //         <li>or buy some food</li>
      //         <li></li>
      //         <li>Thanks</li>
      //         <li></li>
      //         <li></li>
      //       </ul>
      //       <div class="left-shadow"></div>
      //       <div class="right-shadow"></div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}
