import "./about.css";
import Picture from "./Picture";
import {
  faBootstrap,
  faCss3,
  faGithub,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  return (
    <section className="About" id="About">
      <div className="About-info">
        <h2>
          <span>01.</span> About Me
        </h2>
        <p>
          Hello! My name is Neil and I enjoy making great looking online
          business solutions.
        </p>
        <p>
          Having previously run my own business business, I understand the
          importance of reaching clients/customers online. Providing the best
          possible customer experience should be key for any modern business
          looking to stand out. This is what led me to changing careers, and
          retaining as a frontend developer.
        </p>
        <p>
          Durring 2022 I have been taking online courses, bootcamps, and
          completeing projects. Details of these can be found below!
        </p>
        <p>Here are some technologies I have been working with:</p>
        <div className="About-list">
          <ul>
            <li>
              <FontAwesomeIcon icon={faHtml5} className="highlight" />
              <br />
              HTML
            </li>
            <li>
              <FontAwesomeIcon icon={faCss3} className="highlight" />
              <br />
              CSS
            </li>
            <li>
              <FontAwesomeIcon icon={faJs} className="highlight" />
              <br />
              JavaScript
            </li>
            <li>
              <FontAwesomeIcon icon={faBootstrap} className="highlight" />
              <br />
              Bootstrap
            </li>
            <li>
              <FontAwesomeIcon icon={faReact} className="highlight" />
              <br />
              React
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} className="highlight" />
              <br />
              GitHub
            </li>
          </ul>
        </div>
      </div>
      <div className="About-picture">
        <Picture />
      </div>
    </section>
  );
}
