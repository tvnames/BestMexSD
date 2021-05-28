import { React } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../util/auth";
import Image from "../../components/ImageContainer/image";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ReviewCard from "../../components/Card/ReviewCard";
import VallartasPic from "./images/VallartasExpress.png"
// import SombrerosPic from "./images/Sombreros.png";
import restaurants from "./shopSeed.json";
import "./shopSeed.json";
import pic from "./300.png";


function ShopPage() {

  const id = useParams().id;
  console.log(id);

  const selectedShop = restaurants.filter(restaurant => restaurant.id === id);
  console.log(selectedShop[0]);

  function addRating(newRating) {
    selectedShop[0].rating.push(newRating);
  }

  const avg = selectedShop[0].rating.reduce((a, b) => a + b) / selectedShop[0].rating.length;

  return (
    <>
      <div className="container-fluid border border-dark m-2">
        <div className="row">
          <div className="col">
            <Image src={VallartasPic} />
          </div>
          <div className="col">
            {/* shopName, src, description, location, phone, address, featuredFood, otherInfo */}
            <FeaturedCard
              menuURL={selectedShop[0].menuURL}
              shopName={selectedShop[0].shopName}
              description={selectedShop[0].description}
              location={selectedShop[0].location}
              phone={selectedShop[0].phone}
              address={selectedShop[0].address}
              rating={avg.toFixed(1)}
              numOfRatings={selectedShop[0].rating.length}
              featuredFood={selectedShop[0].featuredFood}

            />
          </div>
        </div>

      </div>
      <div className="container-fluid border border-dark m-2">
        <h3>Reviews for "{selectedShop[0].shopName}"</h3>
        {selectedShop[0].reviews.map((review) => {
          return (
            <ReviewCard
              // reviewDate={review.date}
              reviewText={review}
            />
          )
        })}
        {/* <ReviewCard
          reviewDate="May 21st, 2021"
          reviewText={selectedShop[0].reviews}
        />
        <ReviewCard
          reviewDate="February 1st, 2021"
          reviewText="This place was soooooo nasty"
        /> */}
      </div>
    </>
  )
}

export default ShopPage;
