import { Link } from "react-router-dom";
import "./product-card.scss";

function ProductCard({ productTitle, productImage, productPrice, productId }) {
  return (
    <Link to={`/products/${productId}`}>
      <div className="featured-products__card">
        <div className="featured-products__image">
          <img src={productImage} alt={productTitle} />
        </div>
        <div className="featured-products__name">
          <h3>{productTitle}</h3>
        </div>
        <div className="featured-products__price">
          <span>{productPrice}</span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
