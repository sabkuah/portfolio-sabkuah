import React, { Component } from "react";
import Note from "./common/Note";

export default class Contact extends Component {
  render() {
    return (
      <Note title="Contact Me" text="lorem" />
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
