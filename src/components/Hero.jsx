import FeaturedProducts from "./FeaturedProducts";
import "./Hero.css";
import "./ItemsCategories.css";
import Navigation from "./Navigation";

function Hero() {
  return (
    <div className='hero'>
      <Navigation />
      <div className='hero-content'>
        <div>
          <h1 className='hero-heading'>
            <span>Welcome</span> to the world of tasty and fresh food
          </h1>
          <p>
            Keep it simple and easy with those simple but delicious recipes from
            make-ahead lunches and breakfasts that will lighten up your day.
          </p>
          <div>
            <button>Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
