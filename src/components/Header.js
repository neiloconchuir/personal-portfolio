import "./Header.css";
import Button from "./Button";

export default function Header() {
  return (
    <div className="Header">
      <div className="Header-name">Neil O'Conchuir</div>
      <div className="Header-menu">
        <div className="list">
          <ul>
            <li>
              <span>01.</span> About
            </li>
            <li>
              <span>02.</span> Experience
            </li>
            <li>
              <span>03.</span> Work
            </li>
            <li>
              <span>04.</span> Contact
            </li>
          </ul>
        </div>
        <Button text="Resume" />
      </div>
    </div>
  );
}
