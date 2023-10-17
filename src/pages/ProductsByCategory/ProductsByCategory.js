import { useEffect } from "react";
import { useState, useContext } from "react";
import { useSearchParams } from "react-router-dom";
import { CartContext } from "../../components/CartContext/CartContext";
import axios from "axios";
import "./products-by-category.scss";

function ProductsByCategory() {
  const { cartProducts, addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getProucts = async () => {
      try {
        const { data } = await axios.get(
          "http://127.0.0.1:5050/api/products?category=" +
            searchParams.get("category")
        );
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProucts();
  }, []);

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  if (!products) return <div>Loading...</div>;

  const productsMarkup = products.map((product) => {
    const { id } = product;
    let productAlreadyInCart = cartProducts.some(({ product }) => {
      return product.id + "" === id;
    });

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
            <button
              onClick={() => handleAddToCart(product)}
              disabled={productAlreadyInCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <main className="category">
      <h2> {searchParams.get("category")}</h2>
      <div>{productsMarkup}</div>
    </main>
  );
}

export default ProductsByCategory;
