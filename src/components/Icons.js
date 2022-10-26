import './icons.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


export default function Icons() {
  return (
    <section className="Icons">
      <div className="Icons-list">
        <ul>
          <li>
            <a
              href="https://github.com/neiloconchuir"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} className="hightlight" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/neil-o-conchuir-236874254/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} className="hightlight" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}