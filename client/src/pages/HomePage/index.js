
import { useHistory } from "react-router-dom";
import { useAuth } from "../../util/auth";
import Hero from "../../components/Hero/Hero";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ShopCard from "../../components/Card/ShopCard";
import Image from "../../components/ImageContainer/image";
import pic from "./placeholder150x150.jpg";
import pic300 from "./300.png";






function HomePage() {
  const history = useHistory();
  const auth = useAuth();
  console.log("!auth.isLoggedIn():", !auth.isLoggedIn());
  console.log("auth.user", auth.user);

  return (
    <div className="container-fluid">
      {/* hide actions if user is logged in */}
      {!auth.isLoggedIn() && (
        <>
          <button onClick={() => history.push("/login")}>Login</button>
          <button onClick={() => history.push("/signup")}>Signup</button>
        </>
      )}

      <Hero>Welcome to Best Mex SD!</Hero>
      <main className="container-fluid">
        <h3>This week's Top Shop:</h3>
        <section className="row border border-dark m-3">
          <div className="col">
            <Image src={pic300} />
          </div>
          <div className="col border border-dark">
            <FeaturedCard
              shopName="Vallarta's Express"
              description="Vallarta's Express - The best Mexican Food in SD"
              src={pic}
              address="555 Morena Dr., San Diego, CA, 92109"
              location="Bay Park"
              phone="555-555-5555"
              featuredFood="California Burrito"
            />
          </div>
        </section>
        <section className="container-fluid border border-dark m-2">
          Section to Map over However Many Shops:
          <div className="row d-flex justify-content-around">
            <ShopCard
              shopName="Vallarta's Express"
              description="Vallarta's Express - The best Mexican Food in SD"
              src={pic}
              address="555 Morena Dr., San Diego, CA, 92109"
              location="Bay Park"
              phone="555-555-5555"
              featuredFood="California Burrito"
            />
            <ShopCard
              shopName="Vallarta's Express"
              description="Vallarta's Express - The best Mexican Food in SD"
              src={pic}
              address="555 Morena Dr., San Diego, CA, 92109"
              location="Bay Park"
              phone="555-555-5555"
              featuredFood="California Burrito"
            />
            <ShopCard
              shopName="Vallarta's Express"
              description="Vallarta's Express - The best Mexican Food in SD"
              src={pic}
              address="555 Morena Dr., San Diego, CA, 92109"
              location="Bay Park"
              phone="555-555-5555"
              featuredFood="California Burrito"
            />
            <ShopCard
              shopName="Vallarta's Express"
              description="Vallarta's Express - The best Mexican Food in SD"
              src={pic}
              address="555 Morena Dr., San Diego, CA, 92109"
              location="Bay Park"
              phone="555-555-5555"
              featuredFood="California Burrito"
            />
            <ShopCard
              shopName="Vallarta's Express"
              description="Vallarta's Express - The best Mexican Food in SD"
              src={pic}
              address="555 Morena Dr., San Diego, CA, 92109"
              location="Bay Park"
              phone="555-555-5555"
              featuredFood="California Burrito"
            />

          </div>
        </section>
      </main>




    </div>
  );
}

export default HomePage;
