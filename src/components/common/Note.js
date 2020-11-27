import React from "react";

const Note = ({ title, text }) => {
  return (
    <div className="note">
      <div className="tape" />
      <div className="note-content">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>

      <div className="left-shadow"></div>
      <div className="right-shadow"></div>
    </div>
  );
};

export default Note;
