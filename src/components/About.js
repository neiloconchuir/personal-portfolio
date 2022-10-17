import "./About.css";
import Picture from "./Picture";

export default function About() {
  return (
    <div className="About" id="About">
      <div className="About-info">
      <h2>
        <span>01.</span> About Me
      </h2>
        <p>
          Hello! My name is Neil and I enjoy making great looking online
          business solutions. Attracting clients or delivering digital
          products/services is hard. I am passionate about helping businesses
          deliver.
        </p>
        <p>
          For the best part of 20 years I have been working in a client facing
          role...
        </p>
        <p>Here are some technologies I have been working with:</p>
        <div className="About-list">
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul>
            <li>React</li>
            <li>Git</li>
            <li>APIs</li>
          </ul>
        </div>
      </div>
      <div className="About-picture">
        <Picture />
      </div>
    </div>
  );
}
