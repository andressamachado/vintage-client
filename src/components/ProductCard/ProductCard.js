import image1 from "../../assets/images/t-shirt_placeholder.jpeg";
import "./product-card.scss";

function ProductCard({ producTitle, productImage, productPrice }) {
  return (
    <div className="featured-products__card">
      <div className="featured-products__image">
        <img src={image1} alt="shirt" />
      </div>
      <div className="featured-products__title">
        <h3>T-Shirt</h3>
      </div>
      <div>
        <span className="featured-products__price">$10cad</span>
      </div>
    </div>
  );
}

export default ProductCard;
