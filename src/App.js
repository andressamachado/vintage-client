import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionContext } from "./components/SessionContext/SessionContext";
import { logIn, logOut, checkUserLoggedIn } from "./utils/session";
import Header from "./components/Header/Header";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import "./app.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(checkUserLoggedIn);

  const contextLogin = (token) => {
    logIn(token);
    setIsLoggedIn(true);
  };

  const contextLogout = () => {
    logOut();
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <SessionContext.Provider value={{ isLoggedIn, logIn: contextLogin, logOut: contextLogout }} >
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/upload" element={<UploadPage />} />
            <Route path="/products/:id" element={<ProductPage />} />
          </Routes>
        </SessionContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
