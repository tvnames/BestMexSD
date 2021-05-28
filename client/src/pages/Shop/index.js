import { React } from "react";
import { useParams } from "react-router-dom";
import { Route, Redirect } from "react-router-dom"
import Image from "../../components/ImageContainer/image";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ReviewCard from "../../components/Card/ReviewCard";
import VallartasPic from "../../images/VallartasExpress.png";
import restaurants from "../../shopSeed.json";
import HomePage from "../HomePage";

function ShopPage() {
  const id = useParams().id;
  const selectedShop = restaurants.filter(restaurant => restaurant.id === id);
  const avg = selectedShop[0].rating.reduce((a, b) => a + b) / selectedShop[0].rating.length;

  function addRating(newRating) {
    selectedShop[0].rating.push(newRating);
  }

  function submitForm() {
    window.alert("Need to get value of input field and submit to review for the selected shop");
    return <Redirect exact to="/" />
  }

  return (
    <>
      <div className="container-fluid border border-dark m-2">
        <div className="row">
          <div className="col">
            <Image src={VallartasPic} />
          </div>
          <div className="col">
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
      </div>
      <h3>Submit Your Review in the Box Below:</h3>
      <form onSubmit={submitForm}>
        <div classname="form-group">
          {/* <label htmlfor="reviewBox">Review:</label> */}
          <input
            classname="form-control"
            type="text"
            id="newReview"
            aria-describedby="submitReviewBox"
            placeholder="Type your Review Here..." />
        </div>
        <button type="submit" classname="btn btn-primary" >Submit</button>
      </form>
    </>
  )
}

export default ShopPage;
