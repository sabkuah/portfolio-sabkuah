import React, { Component } from "react";
import { motion } from "framer-motion";
import { pageTransitionSlow, pageFade, pageWipe } from "./common/Animation";
import { getProjects, getTechnologies } from "../data/ProjectData";
import PortfolioProject from "./Portfolio-project";
import TechFilter from "./TechFilter";
import ProjectModal from "./Project-modal";

function createProject(project) {
  return (
    <PortfolioProject
      id={project.id}
      name={project.name}
      img={project.img}
      desc={project.desc}
      tech={project.tech}
      link={project.link}
    />
  );
}

function createModal(project) {
  return (
    <ProjectModal
      id={project.id}
      name={project.name}
      img={project.img}
      desc={project.desc}
      tech={project.tech}
      link={project.link}
      screenshots={project.screenshots}
      details={project.details}
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
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageWipe}
        transition={pageTransitionSlow}
        className="portfolio-page"
      >
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
        {filteredProjects.map(createModal)}
      </motion.div>
    );
  }
}
