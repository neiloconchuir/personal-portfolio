import './button.css';

export default function Button(props) {
  return (
    <section className="button">
      <button>{props.text}</button>
    </section>
  );
}