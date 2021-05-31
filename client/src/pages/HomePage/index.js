import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { useAuth } from "../../util/auth";

import { shopAPI } from "../../util/shopAPI";
import Hero from "../../components/Hero/Hero";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ShopCard from "../../components/Card/ShopCard";
import VallartasPic from "../../images/VallartasExpress.png";
import Image from "../../components/ImageContainer/image";
import restaurants from "../../shopSeed.json"

function HomePage() {
  // const history = useHistory();
  // const auth = useAuth();
  const randomShop = getRandom(5);

  const [restaurantArray, setRestaurantArray] = useState(restaurants);



  useEffect(() => {
    shopAPI()
      .then((res) => { setRestaurantArray(res) })
      .then()
      .catch(console.error())
  }, []);


  // function addRating(newRating) {
  //   restaurants[randomShop].rating.push(newRating);
  // }
  function getRandom(maximum) {
    return Math.floor(Math.random() * maximum);
  }

  const currentShop = restaurantArray[randomShop];
  const avg = restaurantArray[randomShop].rating.reduce((a, b) => a + b) / restaurantArray[randomShop].rating.length;

  // function addRating(newRating) {
  //   restaurants[randomShop].rating.push(newRating);
  // }

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
              id={currentShop._id}
              ratingArray={currentShop.rating}
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
            {restaurantArray.map((restaurant) => (
              < ShopCard
                id={restaurant._id}
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
