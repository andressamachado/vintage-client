import "./button.scss";

function Button({ label, currentPage, onClick }) {
  const classNames = "signup-btn " + currentPage;

  return (
    <>
      <button className={classNames} onClick={onClick}>
        {label}
      </button>
    </>
  );
}

export default Button;
