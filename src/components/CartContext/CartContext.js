import { createContext } from "react";

// Products is a an array of {product, quantity}
export const CartContext = createContext({
  cartProducts: [{}],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
});
