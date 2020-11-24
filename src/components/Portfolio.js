import React, { Component } from "react";
import { getProjects, getTechnologies } from "../data/ProjectData";
import PortfolioProject from "./Portfolio-project";
import TechFilter from "./TechFilter";

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
    const technologies = ["Show All", ...getTechnologies()];

    this.setState({ projects: getProjects(), technologies });
  }

  handleFilterSelect = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  render() {
    const { selectedFilter, projects } = this.state;

    const filteredProjects =
      selectedFilter && selectedFilter !== "Show All"
        ? projects.filter((p) => p.tech.includes(selectedFilter))
        : projects;

    return (
      <div className="portfolio-page">
        <div className="board-wrapper">
          <div className="frame-outer">
            <div className="frame-inner">
              <div className="title-box">
                <div className="title-sticky">
                  <h3>Projects I've Worked On</h3>
                  <div className="project-filters">
                    <TechFilter
                      technologies={this.state.technologies}
                      onFilterSelect={this.handleFilterSelect}
                      selectedFilter={this.state.selectedFilter}
                    />
                  </div>
                </div>
              </div>

              <ul className="projects">
                {/* flex-box */}
                {filteredProjects.map(createProject)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
