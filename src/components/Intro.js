import { faBootstrap, faCss3, faGithub, faHtml5, faJs, faReact  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Intro.css";

export default function Intro() {
  return (
    <section className="Intro">
      <h4>Hi, my name is</h4>
      <h2 className="Intro-name">Neil O'Conchuir.</h2>
      <h3 className="Intro-statement">I build things for the web.</h3>
      <p>
        I am an Entry level/Junior Front-end Software Engineer with experience
        in Web Development with React, JavaScript, CSS and HTML. Though new to the 
        tech industry I have nearly 20 years experience working in a demanding, client 
        facing environment, delivering complicated injury rehabilitation protocols. 
        Recently I have been working towards Codecadamys FullStack Software Developer 
        pathway, and have completed their Front-end Pathway. I am continuing to compete 
        personal projects as I try and enter the tech workplace. 
      </p>
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
    </section>
  );
}
