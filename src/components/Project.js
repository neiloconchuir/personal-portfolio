import React from "react";
import "./project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Project() {
  return (
    <div className="Project">
      <div className="Project-image"></div>
      <div className="Project-details">
        <h4>Featured Project</h4>
        <h3>Halcyon Theme</h3>
        <p>
          A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and
          more. Available on Visual Studio Marketplace, Package Control, Atom
          Package Manager, and npm.
        </p>
        <ul>
          <li>VS Code</li>
          <li>Sublime Text</li>
          <li>Atom</li>
          <li>iTerm2</li>
          <li>Hyper</li>
        </ul>
        <div className="Project-details-links">
          <a href="https://github.com/neiloconchuir/react-weather-app">
            <FontAwesomeIcon icon={faGithub} className="highlight" />
          </a>
          <a href="https://enchanting-wisp-e19296.netlify.app/">
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              className="highlight"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
