import './Footer.css'
import Icons from './Icons';
import Email from './Email';

export default function Footer() {
  return (
    <footer className="Footer">
      <Icons />
      <p>
        Built by Neil O'Conchuir,{" "}
        <a
          href="https://github.com/neiloconchuir/personal-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          open-source on GitHub
        </a>
        , and{" "}
        <a
          href="https://reliable-bublanina-f1e0d0.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify
        </a>
      </p>
      <Email />
    </footer>
  );
}