import "./Header.css";
import Button from "./Button";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-name">Neil O'Conchuir</div>
      <div className="Header-menu">
        <nav className="list">
          <ul>
            <li>
              <a href="#About">
                <span>01.</span> About
              </a>
            </li>
            <li>
              <a href="#Experience">
                <span>02.</span> Experience
              </a>
            </li>
            <li>
              <a href="#Work">
                <span>03.</span> Work
              </a>
            </li>
            <li>
              <a href="#Contact">
                <span>04.</span> Contact
              </a>
            </li>
          </ul>
        </nav>
        <Button text="Resume" />
      </div>
    </header>
  );
}
