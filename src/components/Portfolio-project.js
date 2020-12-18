import React, { Component } from "react";

export default class PortfolioProject extends Component {
  render() {
    const { id, name, img, desc, tech } = this.props;
    console.log("projectkey", id);
    return (
      <li key={id} className="project-sticky">
        <a
          data-toggle="modal"
          href={`#${id}`}
          data-target={`#modal${id}`}
          //href="#modalID"
          class="project-link"
        >
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
