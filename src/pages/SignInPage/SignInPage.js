import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import "./sign-in-page.scss";

function SignInPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

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

      // Save JWT token to browser storage
      sessionStorage.setItem("token", data.token);

      toast.success("Go fill your basket!");
      setTimeout(() => {
        navigate("/");
      }, 2500);
    } catch (error) {
      const errorArr = error.response.data;
      console.log(errorArr);
      if (typeof errorArr === "object") {
        toast.error(errorArr.join(""));
      } else {
        toast.error(errorArr);
      }
      event.target.reset();
      setError(error.message);
    }
  };

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
