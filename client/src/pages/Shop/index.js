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

  const [singleShop, setSingleShop] = useState([]);





  useEffect(() => {
    singleShopAPI(id)
      .then((res) => { setSingleShop(res) })
      // .then(console.log(singleShop))
      .catch(console.error())
  }, []);

  console.log(address)
  console.log(shopName)


  // function addRating(newRating) {
  //   singleShop[0].rating.push(newRating);
  // }

  function submitForm() {
    window.alert("Need to get value of input field and submit to review for the selected shop");
    return <Redirect exact to="/" />
  }

  // console.log(singleShop)

  return (
    <>
      <div className="container-fluid border border-dark m-2">
        <div className="row">
          <div className="col">
            <Image src={VallartasPic} />
          </div>
          <div className="col">
            <FeaturedCard

              // menuURL={singleShop.menuURL}
              // shopName={singleShop.shopName}
              // description={singleShop.description}
              // location={singleShop.location}
              // phone={singleShop.phone}
              address={singleShop.address}
            // rating={avg.toFixed(1)}
            // numOfRatings={singleShop.rating.length}
            // featuredFood={singleShop.featuredFood}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid border border-dark m-2">
        {/* <h3>Reviews for "{singleShop.shopName}"</h3> */}
        {/* {singleShop.reviews.map((review) => {
          return (
            <ReviewCard
              // reviewDate={review.date}
              reviewText={review}
            />
          )
        })} */}
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
