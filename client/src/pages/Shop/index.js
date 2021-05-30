// import { React } from "react";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { singleShopAPI } from "../../util/shopAPI";
import Image from "../../components/ImageContainer/image";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ReviewCard from "../../components/Card/ReviewCard";
import VallartasPic from "../../images/VallartasExpress.png";
import singleSeed from "./singleSeed.json";
// import HomePage from "../HomePage";

function ShopPage() {
  const id = useParams().id;

  const [singleShop, setSingleShop] = useState({});
  const [address, setAddress] = useState("");
  const [rating, setRating] = useState([]);
  const [description, setDescription] = useState("");
  const [menuURL, setMenuURL] = useState("");
  const [shopName, setShopName] = useState("");
  const [featuredFood, setfeaturedFood] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [reviews, setReviews] = useState(["Hello", "Hello"]);

  useEffect(() => {
    singleShopAPI(id)
      .then(res => setSingleShop(res))
      .then(setRating(singleShop.rating))
      .then()
      .catch(console.error())
  }, [id]);


  console.log(rating)

  function submitForm() {
    window.alert("Need to get value of input field and submit to review for the selected shop");
    return <Redirect exact to="/" />
  }

  function renderReviews() {
    if (singleShop.reviews) {
      return (
        singleShop.reviews.map(review => (
          <ReviewCard
            // reviewDate={review.date}
            reviewText={review}
          />
        ))
      )
    }
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

              menuURL={singleShop.menuURL}
              shopName={singleShop.shopName}
              description={singleShop.description}
              location={singleShop.location}
              phone={singleShop.phone}
              address={singleShop.address}
              // rating={avg.toFixed(1)}
              // numOfRatings={singleShop.rating.length}
              featuredFood={singleShop.featuredFood}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid border border-dark m-2">
        {renderReviews()}

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
