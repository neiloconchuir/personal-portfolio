import './Header.css';
import Button from './Button';

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="../public/Nplaceholder" alt="" />
      </div>
      <div className="menu">
        <div className="list">
          <ul>
            <li>01. About</li>
            <li>02. Experience</li>
            <li>03. Work</li>
            <li>04. Contact</li>
          </ul>
        </div>
        <Button />
      </div>
    </div>
  );
}
