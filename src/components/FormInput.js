import "./FormInput.scss";

function FormInput(props) {

  

  return (
    <div className={`input ${props.className && props.className}`}>
      <input className="input__text" type={props.type} onChange={props.onChange} id={props.id}>{props.children}</input>
      <label className="input__label"  htmlFor={props.id}>{props.label}</label>
    </div>
  );
}

export default FormInput;
