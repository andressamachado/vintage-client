import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionContext } from "./components/SessionContext/SessionContext";
import { CartContext } from "./components/CartContext/CartContext";
import { logIn, logOut, checkUserLoggedIn } from "./utils/session";
import { addToCart, removeFromCart, clearCart } from "./utils/cart";
import Header from "./components/Header/Header";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import "./app.scss";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(checkUserLoggedIn);
  const [cartProducts, setCartProducts] = useState([]);

  const contextLogin = (token) => {
    logIn(token);
    setIsLoggedIn(true);
  };

  const contextLogout = () => {
    logOut();
    setIsLoggedIn(false);
  };

  const handleAddToCart = (product) => {
    addToCart(cartProducts, product);
    // se algo no array muda o react não detecta a mudança, por isso é necessário criar um novo array
    setCartProducts([...cartProducts]);
  };

  const handleRemoveToCart = (product) => {
    removeFromCart(cartProducts, product);
    setCartProducts([...cartProducts]);
  };

  const handleClearToCart = () => {
    clearCart(cartProducts);
    setCartProducts([]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <SessionContext.Provider
          value={{ isLoggedIn, logIn: contextLogin, logOut: contextLogout }}
        >
          <CartContext.Provider
            value={{
              cartProducts,
              addToCart: handleAddToCart,
              removeFromCart: handleRemoveToCart,
              clearCart: handleClearToCart,
            }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/products/:id" element={<ProductPage />} />
            </Routes>
          </CartContext.Provider>
        </SessionContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
