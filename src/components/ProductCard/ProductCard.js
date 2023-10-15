import "./product-card.scss";

function ProductCard({ producTitle, productImage, productPrice }) {
  return (
    <div className="featured-products__card">
      <div className="featured-products__image">
        <img src={productImage} alt="shirt" />
      </div>
      <div className="featured-products__name">
        <h3>{producTitle}</h3>
      </div>
      <div>
        <span className="featured-products__price">{productPrice}</span>
      </div>
    </div>
  );
}

export default ProductCard;
