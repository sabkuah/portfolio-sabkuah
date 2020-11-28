import React, { Component } from "react";

export default class PortfolioProject extends Component {
  render() {
    const { id, name, img, desc, tech } = this.props;
    return (
      <li key={id}>
        <a data-toggle="modal" data-target="#test">
          <h2 className="project-name">{name}</h2>
          <img src={img} alt={name} />
          <div className="techList">
            {tech.map((t) => {
              return <h4 className="tech-badges">{t}</h4>;
            })}
          </div>
          <p className="project-desc">{desc}</p>
        </a>
      </li>
    );
  }
}
