import SlideDeck from "../../components/SlideDeck/SlideDeck";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Categories from "../../components/CategoriesSection/CategoriesSection";
import "./home-page.scss";

function HomePage() {
  return (
    <main className="home-page">
      <SlideDeck />
      <FeaturedProducts />
      <Categories />
    </main>
  );
}

export default HomePage;
