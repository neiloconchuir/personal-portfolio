import './Contact.css';
import Button from './Button';

export default function Contact() {
  return (
    <section className="Contact" id="Contact">
      <h2>
        <span>03.</span> Contact Me
      </h2>
      <p>
        I am excited to start my new career as a software developer. Thank you for your time, and I look forward to hearing from you!
      </p>
      <Button text="Say Hello" />
    </section>
  );
}