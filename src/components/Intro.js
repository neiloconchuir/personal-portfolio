import "./Intro.css";
import Button from "./Button";

export default function Intro() {
  return (
    <section className="Intro">
      <h4>Hi, my name is</h4>
      <h2>Neil O'Conchuir.</h2>
      <h3>I build things for the web.</h3>
      <p>I am a junior front-end sofware engineer</p>
      <Button text="Check out my certs!" />
    </section>
  );
}
