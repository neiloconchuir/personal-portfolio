import "./About.css";
import Picture from "./Picture";

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
          Having previously run my own business business, I understand the importance of reaching clients/customers online.
          Providing the best possible customer experience should be key for any modern business looking to stand out. 
          This is what led me to changing careers, and retaining as a frontend developer.
        </p>
        <p>
          Durring 2022 I have been taking online courses, bootcamps, and completeing projects. Details of these can be found below!
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
            <li>GitHub</li>
            <li>APIs</li>
          </ul>
        </div>
      </div>
      <div className="About-picture">
        <Picture />
      </div>
    </section>
  );
}
