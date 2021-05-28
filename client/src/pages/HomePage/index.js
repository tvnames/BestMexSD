import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import Hero from "../../components/Hero/Hero";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ShopCard from "../../components/Card/ShopCard";
import VallartasPic from "../../images/VallartasExpress.png";
import SombrerosPic from "../../images/Sombreros.png";
import Image from "../../components/ImageContainer/image";
import restaurants from "../../shopSeed.json"

function HomePage() {
  const history = useHistory();
  const auth = useAuth();

  function addRating(newRating) {
    restaurants[randomShop].rating.push(newRating);
  }

  function getRandom(maximum) {
    return Math.floor(Math.random() * maximum);
  }
  const randomShop = getRandom(5);
  const avg = restaurants[randomShop].rating.reduce((a, b) => a + b) / restaurants[randomShop].rating.length;

  const currentShop = restaurants[randomShop];





  return (
    <div className="container-fluid">
      <Hero>Welcome to Best Mex SD!</Hero>
      <main className="container-fluid">
        <h3>This week's Top Shop:</h3>
        <section className="row border border-dark m-3">
          <Image src={VallartasPic} />
          <div className="col">
          </div>
          <div className="col border border-dark">
            <FeaturedCard
              src={VallartasPic}
              shopName={currentShop.shopName}
              menuURL={currentShop.menuURL}
              description={currentShop.description}
              rating={avg.toFixed(1)}
              numOfRatings={currentShop.rating.length}
              address={currentShop.address}
              location={currentShop.location}
              phone={currentShop.phone}
              featuredFood={currentShop.featuredFood}
            />
          </div>
        </section>
        <section className="container-fluid border border-dark m-2">
          <div className="row d-flex justify-content-around">
            {restaurants.map((restaurant) => (
              <ShopCard
                id={restaurant.id}
                src={VallartasPic}
                shopName={restaurant.shopName}
                location={restaurant.location}
                featuredFood={restaurant.featuredFood}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
