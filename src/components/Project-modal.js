import React, { Component } from "react";
import { FiGithub } from "react-icons/fi";

export default class ProjectModal extends Component {
  render() {
    const { id, name, img, tech, screenshots, details, link } = this.props;
    console.log("modalkey", id);
    return (
      <div
        class="modal fade"
        id={`modal${id}`}
        //id="modalID"
        tabindex="-1"
        role="dialog"
        aria-labelledby="Project details"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header row">
              <h1 class="modal-title" id="exampleModalLongTitle">
                {name}
              </h1>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div className="row d-flex justify-content-center">
                {tech.map((t) => {
                  return (
                    <p className="tech-badges" style={{ "font-size": "0.9em" }}>
                      {t}
                    </p>
                  );
                })}
              </div>
              <div className="project-description">{details}</div>
              <div class="modal-footer justify-content-center">
                <a href={link}>
                  <button type="button" class="btn btn-primary">
                    Live Demo
                  </button>
                </a>
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
              <div className="project-screenshots">
                <img src={img} alt="gif" width="90%" class="m-3 py-3"></img>
                {screenshots.map((s) => {
                  return (
                    <img
                      src={s}
                      alt="screenshots"
                      width="100%"
                      class="py-2"
                    ></img>
                  );
                })}
              </div>
              <div class="modal-footer justify-content-center">
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
