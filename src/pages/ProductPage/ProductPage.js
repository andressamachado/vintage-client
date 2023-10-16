import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { CartContext } from "../../components/CartContext/CartContext";
import { ToastContainer, toast } from "react-toastify";

function ProductPage() {
  const { cartProducts, addToCart } = useContext(CartContext);
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  let productAlreadyInCart = cartProducts.some(({ product }) => {
    return product.id + "" === id;
  });

  useEffect(() => {
    const getProduct = async (productId) => {
      try {
        const { data } = await axios.get(
          `http://127.0.0.1:5050/api/products/${productId}`
        );

        setProduct(data);
      } catch (error) {
        if (error.response.status === 404) {
          navigate("/not-found", { replace: true });
        }
      }
    };

    getProduct(id);
  }, []);

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Product added to cart");
  };

  if (!product) return <>Loading...</>;
  const { image, description, title, price } = product;

  const arrayBufferToBase64 = (buffer) => {
    let binary = "";
    let bytes = new Uint8Array(buffer);
    let len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return window.btoa(binary);
  };

  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <div className="product-page">
        <img
          src={"data:image/jpeg;base64," + arrayBufferToBase64(image.data)}
        />
        <div className="product-page__info-section">
          <span>{description}</span>
          {/* horizontal divider */}
          <div className="product-page__price-button">
            <p>Price: {price}</p>
            <button onClick={handleAddToCart} disabled={productAlreadyInCart}>
              Add to cart
            </button>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={1500}
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

export default ProductPage;
