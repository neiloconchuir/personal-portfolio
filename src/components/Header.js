import "./Header.css";
import Button from "./Button";
import NavLinks from "./NavLinks";

export default function Header() {
  return (
    <header className="Header">
      <div className="Header-name">Neil O'Conchuir</div>
      <div className="Header-menu">
        <NavLinks />
        <Button text="Resume" />
      </div>
    </header>
  );
}
