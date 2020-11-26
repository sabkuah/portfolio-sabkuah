import React from "react";

const Note = ({ title, text }) => {
  return (
    <div class="note">
      <div class="tape" />
      <div class="note-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <div class="left-shadow"></div>
      <div class="right-shadow"></div>
    </div>
  );
};

export default Note;
