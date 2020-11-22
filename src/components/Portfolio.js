import React, { Component } from "react";
import { getProjects } from "../data/ProjectData";
import PortfolioProject from "./Portfolio-project";

function createProject(project) {
  return (
    <PortfolioProject
      key={project.id}
      name={project.name}
      img={project.img}
      desc={project.desc}
      tech={project.tech}
      link={project.link}
    />
  );
}

export default class Portfolio extends Component {
  state = {
    projects: [],
    technologies: [],
  };

  componentDidMount() {
    this.setState({ projects: getProjects() });
  }

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
                  {/* <TechFilter
                    items={this.state.technologies}
                    onFilterSelect={this.handleFilterSelect}
                  /> */}
                </div>
              </div>

              <ul className="projects">
                {/* flex-box */}
                {this.state.projects.map(createProject)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
