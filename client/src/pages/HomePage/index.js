import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import Hero from "../../components/Hero/Hero";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ShopCard from "../../components/Card/ShopCard";
import VallartasPic from "./images/VallartasExpress.png";
import SombrerosPic from "./images/Sombreros.png";
import Image from "../../components/ImageContainer/image";




function HomePage() {
  const history = useHistory();
  const auth = useAuth();
  const randomShop = getRandom(5);

  function getRandom(maximum) {
    return Math.floor(Math.random() * maximum);
  }


  const avg = restaurants[randomShop].rating.reduce((a, b) => a + b) / restaurants[randomShop].rating.length;
  console.log(randomShop);
  console.log(avg.toFixed(1));




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

              shopName={restaurants[randomShop].shopName}
              description={restaurants[randomShop].description}
              rating={avg.toFixed(1)}
              address={restaurants[randomShop].address}
              location={restaurants[randomShop].location}
              phone={restaurants[randomShop].phone}
              featuredFood={restaurants[randomShop].featuredFood}
            />
          </div>
        </section>
        <section className="container-fluid border border-dark m-2">
          <div className="row d-flex justify-content-around">
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
    "rating": [5, 4, 5, 5, 5, 5, 4, 4, 4, 4, 5, 5, 3, 5],
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
    "rating": [5, 4, 5, 5, 4, 4, 4, 5, 5, 3, 5],
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
    "rating": [5, 4, 4, 4, 4, 5, 5, 3, 5],
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
    "rating": [5, 4, 5, 5, 4, 3, 1, 5, 5, 5, 4, 4, 4, 4, 5, 5, 3, 5],
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
    "rating": [5, 4, 5, 3, 4, 3, 1, 5, 5, 5, 4, 4, 4, 4, 5, 5, 3, 5, 4, 4, 4, 4, 3, 2, 5, 5, 5],
    "src": VallartasPic,
    "location": "Kearney Mesa",
    "phone": "555-555-5555",
    "address": "333 Balboa Ave.",
    "city": "San Diego",
    "state": "California",
    "zip": "92108"
  }
];
