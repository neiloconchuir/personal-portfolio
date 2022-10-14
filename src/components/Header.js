import './Header.css';

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="../public/Nplaceholder" alt="" />
      </div>
      <div className="menu">
        <div className="list">
          <ul>
            <li>About</li>
            <li>Experience</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="button">
          <button>Resume</button>
        </div>
      </div>
    </div>
  );
}
