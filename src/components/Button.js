import './Button.css';

export default function Button(props) {
  return (
    <div className="button">
      <button>{props.text}</button>
    </div>
  );
}