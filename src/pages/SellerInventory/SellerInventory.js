import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "../../components/SessionContext/SessionContext";
import { useNavigate } from "react-router";
import { fetchAllProducts } from "../../utils/apiUtils";
import { Link } from "react-router-dom";

function SellerInventory() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState();
  const { user } = useContext(SessionContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSellerProducts = async () => {
      try {
        const response = await fetchAllProducts();
        setProducts(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchSellerProducts();
  }, []);

  const handleEditProduct = (productId) => {
    // url uses seller id to make sure people dont edit other's products
    navigate(`/seller/${user.id}/products/${productId}/edit`);
  };

  const handleDeleteProduct = (productId) => {
    // url uses seller id to make sure people dont edit other's products
    const removeSellerProduct = async () => {
      try {
        const { data } = await axios.delete(
          `https://127.0.0.1/products/${productId.id}`
        );
      } catch (error) {
        setError(error);
      }
    };
    removeSellerProduct(productId);
  };

  if (error) {
    return <div>Something went wrong when fetching your products</div>;
  }

  if (!products.length) {
    return <div>Not actually fecthing...</div>;
  }

  return (
    <main>
      <Link to="/upload">Add new product</Link>
      {products.map((product) => {
        return (
          <div className="card">
            <img src={product.image}></img>
            <div className="info">
              <p>Price: {product.price}</p>
              <div className="actions">
                <span
                  onClick={() => {
                    handleEditProduct(product.id);
                  }}
                >
                  Edit
                </span>
                <span
                  onClick={() => {
                    handleDeleteProduct(product.id);
                  }}
                >
                  Delete
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default SellerInventory;
