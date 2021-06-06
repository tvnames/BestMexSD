import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
// import { useAuth } from "../../util/auth";

import { shopAPI } from "../../util/shopAPI";
import Hero from "../../components/Hero/Hero";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ShopCard from "../../components/Card/ShopCard";
import VallartasPic from "../../images/ts1.jpg";
// import Image from "../../components/ImageContainer/image";
import restaurants from "../../shopSeed.json";
import HomepageText from "../../components/HomepageText/HomepageText";

function HomePage() {
  // const history = useHistory();
  // const auth = useAuth();
  const randomShop = getRandom(5);
  const [restaurantArray, setRestaurantArray] = useState(restaurants);

  useEffect(() => {
    shopAPI()
      .then((res) => {
        setRestaurantArray(res);
      })
      .then()
      .catch(console.error());
  }, []);

  function getRandom(maximum) {
    return Math.floor(Math.random() * maximum);
  }

  const currentShop = restaurantArray[randomShop];
  const avg =
    restaurantArray[randomShop].rating.reduce((a, b) => a + b) /
    restaurantArray[randomShop].rating.length;

  return (
    <div className="container-fluid">
      <Hero>Welcome to Best Mex SD!</Hero>
      <main className="col-12">
        <section className="page-title-text m-3">
          <HomepageText />
        </section>
        <h3>This week's Top Shop:</h3>
        <section className="row m-3">
          {/* <Image src={VallartasPic} className="float-left" /> */}
          {/* <div className="col">
          </div> */}
          <div className="col-lg-12">
            {/* <Image src={VallartasPic} className="float-left" /> */}
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
        <section className="row m-3 shopcard-control d-flex justify-content-around">
          {restaurantArray.map((restaurant) => (
            <ShopCard
              id={restaurant._id}
              src={VallartasPic}
              description={restaurant.description}
              shopName={restaurant.shopName}
              location={restaurant.location}
              featuredFood={restaurant.featuredFood}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default HomePage;
