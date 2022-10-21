import "./header.css";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-name">Neil O'Conchuir</div>
      <div className="Header-menu">
        <NavLinks />
      </div>
    </header>
  );
}
