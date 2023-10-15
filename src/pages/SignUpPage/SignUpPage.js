import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { SessionContext } from "../../components/SessionContext/SessionContext";
import "react-toastify/dist/ReactToastify.css";
import FormInput from "../../components/FormInput/FormInput";
import Button from "../../components/Button/Button";
import "./sign-up-page.scss";

function SignUpPage() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // if looged in blocks user from signing up again by redirecting to home page
  const { isLoggedIn } = useContext(SessionContext);

  // Request to the server to create a new user
  const handleSubmit = (event) => {
    event.preventDefault();

    const send = async () => {
      try {
        const { first_name, last_name, email, password, phone, address } =
          event.target;

        await axios.post("http://127.0.0.1:5050/api/users/register", {
          first_name: first_name.value,
          last_name: last_name.value,
          email: email.value,
          password: password.value,
          phone: phone.value,
          address: address.value,
          isAdmin: 0,
        });

        toast.success("User sucessfuly added!");
        setTimeout(() => {
          navigate("/sign-in");
        }, 3000);
      } catch (error) {
        const errorArr = error.response.data.errors;
        toast.error(errorArr.join(""));

        event.target.reset();
        setError(error.message);
      }
    };

    send();
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);

  return (
    <main className="signup-component">
      <form className="signup" onSubmit={handleSubmit}>
        <h1 className="signup__title">Sign up</h1>
        <FormInput type="text" name="first_name" label="First name" />
        <FormInput type="text" name="last_name" label="Last name" />
        <FormInput type="text" name="email" label="Email" />
        <FormInput type="text" name="phone" label="Phone" />
        <FormInput type="text" name="address" label="Address" />
        <FormInput type="password" name="password" label="Password" />
        <Button type="submit" label="Sign up" currentPage="sign-up-page" />
      </form>

      <p className="signup-component__signin-link">
        Have an account? <Link to="/sign-in">Log in</Link>
      </p>

      <ToastContainer
        position="bottom-right"
        autoClose={5000}
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

export default SignUpPage;
