import React from "react";
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faFolder } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project(props) {
  return (
    <section className="Project">
      <div className="Project-icons">
        <div className="Project-icons-folder fa-2x">
          <FontAwesomeIcon icon={faFolder} />
        </div>
        <div className="Project-icons-links">
          <a href={props.projects.links.git} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="highlight" />
          </a>
          <a
            href={props.projects.links.website}
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="highlight"
            />
          </a>
        </div>
      </div>
      <div className="Project-details">
        <h4>Featured Project</h4>
        <h3>{props.projects.title}</h3>
        <p>{props.projects.info}</p>
        <ul>
          <li>{props.projects.tech[0]}</li>
          <li>{props.projects.tech[1]}</li>
          <li>{props.projects.tech[2]}</li>
        </ul>
      </div>
    </section>
  );
}
