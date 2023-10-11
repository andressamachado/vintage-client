import "./button.scss";

function Button({ label, currentPage }) {
  const classNames = "signup-btn " + currentPage;

  return (
    <>
      <button className={classNames}>{label}</button>
    </>
  );
}

export default Button;
