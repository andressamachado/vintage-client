import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionContext } from "./components/SessionContext/SessionContext";
import { CartContext } from "./components/CartContext/CartContext";
import { logIn, logOut } from "./utils/session";
import { addToCart, removeFromCart, clearCart } from "./utils/cart";
import Header from "./components/Header/Header";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import Clothing from "./pages/Clothing/Clothing";
import CartPage from "./pages/CartPage/CartPage";
import RequireUserAdmin from "./components/RequireUserAdmin/RequireUserAdmin";
import RequireUser from "./components/RequireUser/RequireUser";
import SellerInventory from "./pages/SellerInventory/SellerInventory";
import Footer from "./components/Footer/Footer";

import "./app.scss";
import Wishlist from "./pages/Wishlist/Wishlist";
import ProductsByCategory from "./pages/ProductsByCategory/ProductsByCategory";

function App() {
  const [user, setUser] = useState();
  const [cartProducts, setCartProducts] = useState([]);

  const contextLogin = (token) => {
    const user = logIn(token);
    setUser(user);
  };

  const contextLogout = () => {
    logOut();
    setUser();
  };

  const handleAddToCart = (product) => {
    addToCart(cartProducts, product);
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
          value={{ user, logIn: contextLogin, logOut: contextLogout }}
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
              <Route path="/cart" element={<CartPage />} />
              <Route path="/clothing" element={<Clothing />} />
              <Route path="/products" element={<ProductsByCategory />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route
                path="/seller/:id"
                element={
                  <RequireUserAdmin>
                    <SellerInventory />
                  </RequireUserAdmin>
                }
              />
              <Route
                path="/upload"
                element={
                  <RequireUserAdmin>
                    <UploadPage />
                  </RequireUserAdmin>
                }
              />
            </Routes>
            <Routes
              path="/wishlist"
              element={
                <RequireUser>
                  <Wishlist />
                </RequireUser>
              }
            />
            <Footer />
          </CartContext.Provider>
        </SessionContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
