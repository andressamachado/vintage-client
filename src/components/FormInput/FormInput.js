import "./form-input.scss";

// label & input field
function FormInput({ label, name, type }) {
  return (
    <div className="form-field">
      <label htmlFor={name} className="form-field__label">
        {label}
      </label>
      <input type={type} id={name} name={name} className="form-field__input" />
    </div>
  );
}

export default FormInput;
