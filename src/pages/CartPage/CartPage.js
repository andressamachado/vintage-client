import { useContext } from "react";
import { CartContext } from "../../components/CartContext/CartContext";
import "./cart-page.scss";

function CartPage() {
  const { cartProducts, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const productsMarkup = cartProducts.map(({ product }) => {
    return (
      <div className="shopping-cart__product">
        <img
          src={
            "data:image/jpeg;base64," + arrayBufferToBase64(product.image.data)
          }
        />
        <div className="shopping-cart__info">
          <p>Price: {product.price}</p>
          <div className="shopping-cart__actions">
            <span
              onClick={() => {
                handleRemoveFromCart(product.id);
              }}
            >
              Delete
            </span>
          </div>
        </div>
      </div>
    );
  });

  const emptyMarktup = <div>Cart empty</div>;

  return (
    <main>
      <div className="shopping-cart">
        <h3>Shopping Cart</h3>
        {productsMarkup.length !== 0 ? productsMarkup : emptyMarktup}
      </div>
    </main>
  );
}

export default CartPage;
