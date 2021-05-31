// import { React } from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { singleShopAPI } from "../../util/shopAPI";
import Image from "../../components/ImageContainer/image";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ReviewCard from "../../components/Card/ReviewCard";
import VallartasPic from "../../images/VallartasExpress.png";
import axios from "axios";
// import singleSeed from "./singleSeed.json";
// import HomePage from "../HomePage";

function ShopPage() {
  const id = useParams().id;



  const [singleShop, setSingleShop] = useState({});

  // const [avg, setAvg] = useState(4);
  // const [numOfRatings, setNumRatings] = useState(10);
  // const [address, setAddress] = useState("");
  // const [rating, setRating] = useState();
  // const [description, setDescription] = useState("");
  // const [menuURL, setMenuURL] = useState("");
  // const [shopName, setShopName] = useState("");
  // const [featuredFood, setfeaturedFood] = useState("");
  // const [location, setLocation] = useState("");
  // const [phone, setPhone] = useState();
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zip, setZip] = useState("");
  // const [reviews, setReviews] = useState(["Hello", "Hello"]);

  useEffect(() => {
    singleShopAPI(id)
      .then(res => setSingleShop(res))
      .catch(console.error())
  }, [id]);


  const [reviewInput, setReviewInput] = useState("");

  function handleSubmit(event) {
    let shopId = singleShop._id
    event.preventDefault();
    axios.post("/api/tacoShops/reviews/update", { shopId, reviewInput })
    window.location.reload()
    return <Redirect exact to="/" />
  }

  function handleInputChange(event) {
    console.log(event)
    console.log(event.target.value)
    setReviewInput(event.target.value)
    return <Redirect exact to="/" />
  }

  function renderReviews() {
    if (singleShop.reviews) {
      return (
        singleShop.reviews.map(review => (
          <ReviewCard
            reviewText={review}
          />
        ))
      )
    }
  }

  console.log(singleShop.rating)

  // const avg = singleShop.rating.reduce((a, b) => a + b) / singleShop.rating.length;
  // console.log(avg.toFixed(1));


  return (
    <>
      <div className="container-fluid border border-dark m-2">
        <div className="row">
          <div className="col">
            <Image src={VallartasPic} />
          </div>
          <div className="col">
            <FeaturedCard
              id={singleShop._id}
              menuURL={singleShop.menuURL}
              shopName={singleShop.shopName}
              description={singleShop.description}
              location={singleShop.location}
              phone={singleShop.phone}
              address={singleShop.address}
              // numOfRatings={ }
              // rating={avg.toFixed(1)}
              featuredFood={singleShop.featuredFood}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid border border-dark m-2">
        {renderReviews()}

      </div>
      <h3>Submit Your Review in the Box Below:</h3>
      <form onSubmit={handleSubmit}>
        <div classname="form-group">
          {/* <label htmlfor="reviewBox">Review:</label> */}
          <input
            classname="form-control"
            type="text"
            onChange={handleInputChange}
            value={reviewInput}
            id="newReview"
            aria-describedby="submitReviewBox"
            placeholder="Type your Review Here..." />
        </div>
        <button type="submit" value={reviewInput} id="reviewFormButton" classname="btn btn-primary" >Submit</button>
      </form>
    </>
  )
}

async function handleSubmit(event) {
  event.preventDefault();
  console.log(event.target)
}

export default ShopPage;
