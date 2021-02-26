import React from "react";

const PortfolioProject = ({ project }) => {
  return (
    <li key={project.id} className="project-sticky">
      <a
        data-toggle="modal"
        href={`#${project.id}`}
        data-target={`#modal${project.id}`}
        //href="#modalID"
        class="project-link"
      >
        <h2 className="project-name">{project.name}</h2>
        <img src={project.img} alt={project.name} />
        <div className="techList">
          {project.tech.map((t) => {
            return <h4 className="tech-badges">{t}</h4>;
          })}
        </div>
        <p className="project-desc">{project.desc}</p>
      </a>
    </li>
  );
};

export default PortfolioProject;
