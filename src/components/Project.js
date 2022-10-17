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
        <h3>React Weather App</h3>
        <p>
          A minimal, responsive React application providing current weather and forecasting, hosted on Netlify.
          Making use of the free openweather API, location searches will return up-to-date information. 
        </p>
        <ul>
          <li>VS Code</li>
          <li>React</li>
          <li>OpenWeatherApp API</li>
          <li>GitHub</li>
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
