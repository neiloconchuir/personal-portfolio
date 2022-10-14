import './Intro.css';
import Button from './Button';

export default function Intro() {
  return (
    <div className="Intro">
      <div className="Intro-para-one">
        Hi, my name is
      </div>
      <div className="Intro-bold-one">
        Neil O'Conchuir.
      </div>
      <div className="Intro-bold-two">
        I build things for the web.
      </div>
      <div className="Intro-para-two">
        I am a junior front-end sofware engineer 
      </div>
      <div className="Intro-button">
        <Button text="Check out my certs!" />
      </div>
    </div>

  )
}