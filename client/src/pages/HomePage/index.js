import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import Hero from "../../components/Hero/Hero";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ShopCard from "../../components/Card/ShopCard";
import VallartasPic from "./images/VallartasExpress.png";
import SombrerosPic from "./images/Sombreros.png";
import Image from "../../components/ImageContainer/image";
import pic from "./placeholder150x150.jpg";
import pic300 from "./300.png";

function HomePage() {
  const history = useHistory();
  const auth = useAuth();
  console.log("!auth.isLoggedIn():", !auth.isLoggedIn());
  console.log("auth.user", auth.user);



  function MapRestaurantList([]) {

    restaurants.map((restaurant) => {
      <ShopCard
        src={restaurant.src}
        shopName={restaurant.shopName}
        location={restaurant.location}
      />
    })
  };


  return (
    <div className="container-fluid">
      <Hero>Welcome to Best Mex SD!</Hero>
      <main className="container-fluid">
        <h3>This week's Top Shop:</h3>
        <section className="row border border-dark m-3">
          <div className="col">
            <Image src={VallartasPic} />
          </div>
          <div className="col border border-dark">
            <FeaturedCard
              shopName={restaurants[0].shopName}
              description={restaurants[0].description}
              address={restaurants[0].address}
              location={restaurants[0].location}
              phone={restaurants[0].phone}
              featuredFood={restaurants[0].featuredFood}
            />
          </div>
        </section>
        <section className="container-fluid border border-dark m-2">
          {/* Section to Map over However Many Shops: */}
          <div className="row d-flex justify-content-around">
            {console.log(restaurants)}

            {restaurants.map((restaurant) => (
              <ShopCard
                src={restaurant.src}
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


const restaurants = [
  {
    "shopName": "Vallarta's Express",
    "featuredFood": "Carne Asada Burrito",
    "src": VallartasPic,
    "description": "The Best Mexican Food In town",
    "location": "Pacific Beach",
    "phone": "555-555-5555",
    "address": "123 Garnet Ave",
    "city": "San Diego",
    "state": "California",
    "zip": "92109"
  },
  {
    "shopName": "Sombreros",
    "featuredFood": "Pollo Asado Quesadilla",
    "src": SombrerosPic,
    "description": "Mexican Food",
    "location": "South Park",
    "phone": "555-555-5555",
    "address": "222 Fern Ave",
    "city": "San Diego",
    "state": "California",
    "zip": "92104"
  },
  {
    "shopName": "Hilberto's Mexican Food",
    "featuredFood": "Chimichangas",
    "src": VallartasPic,
    "description": "Mexican Food for Everybody",
    "location": "El Cajon",
    "phone": "555-555-5555",
    "address": "5555 Jamacha Ave",
    "city": "El Cajon",
    "state": "California",
    "zip": "92019"
  },
  {
    "shopName": "JV's Mexican Food",
    "featuredFood": "Surf & Turf Burrito",
    "description": "You WILL be Full",
    "src": SombrerosPic,
    "location": "Bay Park",
    "phone": "555-555-5555",
    "address": "999 Morena Blvd.",
    "city": "San Diego",
    "state": "California",
    "zip": "92109"
  },
  {
    "shopName": "Taco Bell",
    "featuredFood": "Crunch Wrap Supreme",
    "description": "Late Nite Mexican Food",
    "src": VallartasPic,
    "location": "Kearney Mesa",
    "phone": "555-555-5555",
    "address": "333 Balboa Ave.",
    "city": "San Diego",
    "state": "California",
    "zip": "92108"
  }
];
