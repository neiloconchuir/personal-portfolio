import './Footer.css'

export default function Footer() {
  return (
    <section className="Footer">
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
    </section>
  );
}