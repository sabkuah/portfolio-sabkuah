import React, { Component } from "react";

export default class PortfolioProject extends Component {
  render() {
    const { id, name, img, desc, tech } = this.props;
    return (
      <li key={id}>
        <a data-toggle="modal" data-target="#test">
          <h2>{name}</h2>
          <img src={img} alt={name} />
          <div className="techList">
            {tech.map((t) => {
              return <h4>{t}</h4>;
            })}
          </div>
          <p>{desc}</p>
        </a>
      </li>
    );
  }
}
