import { useEffect, useState } from "react";
import axios from "axios";
import "./clothing.scss";

function Clothing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProucts = async () => {
      try {
        const { data } = await axios.get("http://127.0.0.1:5050/api/products");
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
    // addToCart(product);
  };

  if (!products) return <div>Loading...</div>;

  const productsMarkup = products.map((product) => {
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
            <button onClick={() => handleAddToCart(product)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <main className="clothing">
      <h2>Clothing</h2>
      <div className="clothing__products">
        <div>{productsMarkup}</div>
      </div>
    </main>
  );
}

export default Clothing;
