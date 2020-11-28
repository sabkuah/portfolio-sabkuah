import React, { Component } from "react";
import { getProjects, getTechnologies } from "../data/ProjectData";
import PortfolioProject from "./Portfolio-project";
import TechFilter from "./TechFilter";
import { FiGithub } from "react-icons/fi";

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
              <div className="title-box row justify-content-center">
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

              <div className="stickies">
                <ul className="projects">
                  {/* flex-box */}
                  {filteredProjects.map(createProject)}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* replace modal code to be dynamically rendered */}
        <div
          class="modal fade"
          id="test"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Project title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body row">
                <div className="col-md-6 project-description">
                  <ul>
                    <li>What inspired this project?</li>
                    <li>The hardest part of this prohect:</li>
                    <li>What I learned from this project:</li>
                  </ul>
                </div>
                <div className="col-md-6 project-screenshots">
                  <img src="shrek.png" alt="placeholder" width="300px"></img>
                  <img src="furious.png" alt="placeholder" width="300px"></img>
                </div>
              </div>
              <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-primary">
                  Live Demo
                </button>
                <button type="button" class="btn btn-success">
                  <FiGithub />
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
