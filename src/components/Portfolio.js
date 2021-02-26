import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { pageTransitionSlow, pageFade } from "./common/Animation";
import { projects } from "../data/ProjectData";
import PortfolioProject from "./Portfolio-project";
import TechFilter from "./TechFilter";
import ProjectModal from "./Project-modal";

const Portfolio = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {}, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageFade}
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
                    projects={projects}
                    //onFilterSelect={handleFilterSelect}
                    //selectedFilter={selectedFilter}
                  />
                </div>
              </div>
            </div>

            <div className="stickies">
              <ul className="projects">
                {/* flex-box */}
                {filteredProjects.map((project) => (
                  <PortfolioProject key={project.id} project={project} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* replace modal code to be dynamically rendered */}
      {filteredProjects.map((project) => (
        <ProjectModal key={project.id} project={project} />
      ))}
    </motion.div>
  );
};

export default Portfolio;

// componentDidMount() {
//   const technologies = ["Show All", ...getTechnologies()];

//   this.setState({ projects: getProjects(), technologies });
// }

// handleFilterSelect = (filter) => {
//   this.setState({ selectedFilter: filter });
// };

// render() {
//   const { selectedFilter, projects } = this.state;

//   const filteredProjects =
//     selectedFilter && selectedFilter !== "Show All"
//       ? projects.filter((p) => p.tech.includes(selectedFilter))
//       : projects;

//   return (

//   );
// }
