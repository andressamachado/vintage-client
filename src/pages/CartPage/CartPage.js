import { useContext } from "react";
import { CartContext } from "../../components/CartContext/CartContext";

function CartPage() {
  const { cartProducts, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const productsMarkup = cartProducts.map(({ product }) => {
    return (
      <div className="cart-product">
        <img src={product.image}></img>
        <div className="info">
          <p>Price: {product.price}</p>
          <div className="actions">
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
      <div className="card">
        <h3>Shopping Cart</h3>
        {productsMarkup.length !== 0 ? productsMarkup : emptyMarktup}
      </div>
    </main>
  );
}

export default CartPage;
