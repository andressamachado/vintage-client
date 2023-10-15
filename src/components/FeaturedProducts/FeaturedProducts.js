import React, { useState, useEffect } from "react";
import { fetchAllProducts } from "../../utils/apiUtils";
import ProductCard from "../ProductCard/ProductCard";
import "./featured-products.scss";

function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetchAllProducts();
      setProducts(response.data);
    } catch (error) {
      return console.error("Error fetching data:", error);
    }
  }

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };
  if (!products[0]) return;

  return (
    <section className="featured-products">
      <div className="featured-products__container">
        <h2 className="featured-products__title">Just added gems</h2>

        <div className="featured-products__wrapper">
          <div className="featured-products__cards">
            {products.map((product) => {
              return (
                <ProductCard
                  key={product.id}
                  productTitle={product.title}
                  productImage={
                    "data:image/jpeg;base64," +
                    arrayBufferToBase64(product.image.data)
                  }
                  productPrice={product.price}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
