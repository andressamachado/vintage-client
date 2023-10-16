import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { SessionContext } from "../../components/SessionContext/SessionContext";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import "./sign-in-page.scss";

function SignInPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  // Get user to check if user is logged in to redirect to home page
  const { user, logIn } = useContext(SessionContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Request to the server to check if the user is in the database
    try {
      const { data } = await axios.post(
        "http://127.0.0.1:5050/api/users/sign-in",
        {
          email: event.target.email.value,
          password: event.target.password.value,
        }
      );
      logIn(data.token);
    } catch (error) {
      const errorArr = error.response.data;
      if (typeof errorArr === "object") {
        toast.error(errorArr.join(""));
      } else {
        toast.error(errorArr);
      }
      event.target.reset();
      setError(error.message);
    }
  };

  // If on first load is logged in, redirect
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);

  // When user logins redirects after signin is done
  if (user) {
    navigate("/");
  }

  return (
    <main className="signin-component">
      <form className="signin" onSubmit={handleSubmit}>
        <h1 className="signin__title">Sign in</h1>
        <FormInput type="text" name="email" label="Email" />
        <FormInput type="password" name="password" label="Password" />
        <Button type="submit" label="Sign in" currentPage="sign-in-page" />
      </form>

      <p className="signin-component__signup-link">
        Don`t have an account? <Link to="/sign-up">Sign up</Link>
      </p>

      <ToastContainer
        position="bottom-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </main>
  );
}

export default SignInPage;
