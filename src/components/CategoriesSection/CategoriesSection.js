import topsCover from "../../assets/images/tops-category.jpg";
import bottomsCover from "../../assets/images/jeans-category.jpg";
import outersCover from "../../assets/images/outer.jpeg";
import accessoriesCover from "../../assets/images/accessories-demo.jpeg";
import shoesCover from "../../assets/images/shoes-category.jpeg";

import { Link } from "react-router-dom";
import "./categories-section.scss";

function Categories() {
  return (
    <section className="categories">
      <div className="categories__title">
        <h2>Clothing and Accessories</h2>
      </div>
      <div className="categories__card">
        <Link to={`/products?category=tops`}>
          <img src={topsCover} />
          <h4>Tops</h4>
        </Link>
      </div>
      <div className="categories__card">
        <Link to={`/products?category=bottoms`}>
          <img src={bottomsCover} />
          <h4>Bottoms</h4>
        </Link>
      </div>
      <div className="categories__card">
        <Link to={`/products?category=outers`}>
          <img src={outersCover} />
          <h4>Outers</h4>
        </Link>
      </div>
      <div className="categories__card">
        <Link to={`/products?category=accessories`}>
          <img src={accessoriesCover} />
          <h4>Accessories</h4>
        </Link>
      </div>
      <div className="categories__card">
        <Link to={`/products?category=shoes`}>
          <img src={shoesCover} />
          <h4>Shoes</h4>
        </Link>
      </div>
    </section>
  );
}

export default Categories;
