import React, { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
// import { useHistory } from "react-router-dom";
// import { useAuth } from "../../util/auth";
import { shopAPI } from "../../util/shopAPI";
import Hero from "../../components/Hero/Hero";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ShopCard from "../../components/Card/ShopCard";
import VallartasPic from "../../images/ts1.jpg";
import restaurants from "../../shopSeed.json";
import HomepageText from "../../components/HomepageText/HomepageText";
import useDebounce from "../../util/useDebounce";

function HomePage() {
  // const history = useHistory();
  // const auth = useAuth();

  // HandleDeleteFunction can be referenced from the "Friends" class activity in react
  const randomShop = getRandom(5);
  const [restaurantArray, setRestaurantArray] = useState(restaurants);
  const [search, setSearch] = useState("");

  const debouncedSearchTerm = useDebounce(search, 400);

  // const currentShop = restaurantArray[randomShop];
  const currentShop = restaurantArray[1];
  const avg =
    restaurantArray[1].rating.reduce((a, b) => a + b) /
    restaurantArray[1].rating.length;

  // Call Back-End to populate restaurant array
  useEffect(() => {
    shopAPI()
      .then((res) => {
        setRestaurantArray(res);
      })
      .then()
      .catch(console.error());
  }, []);

  // Generate random integer to plug into index to get random shop for featured card
  function getRandom(maximum) {
    return Math.floor(Math.random() * maximum);
  }

  // Handle search bar entry
  function handleSearchChange(event) {
    const value = event.target.value;
    setSearch(value);
  }

  // Filtered Array from search bar input
  const filteredArray = restaurantArray.filter((restaurant) => {
    // const shopSearch = search.toLocaleLowerCase()
    const shopSearch = debouncedSearchTerm.toLocaleLowerCase();
    const lowercaseShopName = restaurant.shopName.toLocaleLowerCase();
    const location = restaurant.location.toLocaleLowerCase();
    const featuredFood = restaurant.featuredFood.toLocaleLowerCase();

    if (
      lowercaseShopName.includes(shopSearch) ||
      location.includes(shopSearch) ||
      featuredFood.includes(shopSearch)
    ) {
      return true;
    } else if (
      !lowercaseShopName.includes(shopSearch) ||
      !location.includes(shopSearch) ||
      !featuredFood.includes(shopSearch)
    ) {
      return false;
    }
  });

  function renderShops(filteredArray) {
    if (filteredArray.length > 0) {
      return filteredArray.map((restaurant) => (
        <ShopCard
          key={restaurant._id}
          id={restaurant._id}
          src={VallartasPic}
          description={restaurant.description}
          shopName={restaurant.shopName}
          location={restaurant.location}
          featuredFood={restaurant.featuredFood}
        />
      ));
    } else {
      return (
        <div className="container-fluid">
          <h4>No matching search results...</h4>
        </div>
      );
    }
  }

  return (
    <div className="container-fluid">
      <Hero>Welcome to Best Mex SD!</Hero>
      <main className="col-12">
        <section className="page-title-text m-3">
          <HomepageText />
        </section>
        <h3>This week's Top Shop:</h3>
        <section className="row m-3">
          <div className="col-lg-12">
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
        <hr />
        <section className="taco-filter-search">
          <h2>Searching for a specific Taco Shop?</h2>
          <SearchForm search={search} handleSearchChange={handleSearchChange} />
        </section>

        <section className="row m-3 shopcard-control d-flex justify-content-around">
          {renderShops(filteredArray)}
        </section>
      </main>
    </div>
  );
}

export default HomePage;
