import './Icons.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


export default function Icons() {
  return (
    <section className="Icons">
      <div className="Icons-list">
        <ul>
          <li>
            <a href="https://github.com/neiloconchuir">
              <FontAwesomeIcon icon={faGithub} className="hightlight" />
            </a>
          </li>
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faLinkedinIn} className="hightlight" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}