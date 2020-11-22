import React, { Component } from "react";

export default class PortfolioProject extends Component {
  render() {
    const { id, name, img, desc, tech, link } = this.props;
    return (
      <li key={id}>
        <a href={link}>
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
