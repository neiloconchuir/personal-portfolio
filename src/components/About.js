import './About.css';
import Picture from './Picture';

export default function About() {
  return (
    <div className="About">
      <h2>
        <span>01.</span> About Me
      </h2>
      <p>
        Hello! My name is Neil and I enjoy making great looking online business
        solutions. Attracting clients or delivering digital products/services is
        hard. I am passionate about helping businesses deliver.
      </p>
      <p>
        For the best part of 20 years I have been working in a client facing
        roll...
      </p>
      <p>Here are some technologies I have been working with:</p>
      <div className="About-list">
        <ul>
          <li>
            <span>-</span>HTML
          </li>
          <li>
            <span>-</span>CSS
          </li>
          <li>
            <span>-</span>JavaScript
          </li>
        </ul>
        <ul>
          <li>
            <span>-</span>React
          </li>
          <li>
            <span>-</span>Git
          </li>
          <li>
            <span>-</span>APIs
          </li>
        </ul>
      </div>
      <div className="About-picture">
        <Picture />
      </div>
    </div>
  );
}