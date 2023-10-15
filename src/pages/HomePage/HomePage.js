import SlideDeck from "../../components/SlideDeck/SlideDeck";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import "./home-page.scss";

function HomePage() {
  return (
    <main className="home-page">
      <SlideDeck />
      <FeaturedProducts />
    </main>
  );
}

export default HomePage;
