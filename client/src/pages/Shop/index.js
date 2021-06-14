import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { singleShopAPI } from "../../util/shopAPI";
import { useAuth } from "../../util/auth";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ReviewCard from "../../components/Card/ReviewCard";
import VallartasPic from "../../images/ts9.jpg";
import axios from "axios";

function ShopPage() {

  const auth = useAuth();
  const [userName, setUserName] = useState("");

  const id = useParams().id;
  const [singleShop, setSingleShop] = useState({
    rating: []
  });
  const [reviewInput, setReviewInput] = useState("");
  const ratingArray = singleShop.rating


  useEffect(() => {
    singleShopAPI(id)
      .then((res) => setSingleShop(res))
      .catch(console.error());
  }, [id]);


  // Display Review Input Box only if user is logged in
  function UserNavs() {
    return (
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            type="text"
            onChange={handleInputChange}
            value={reviewInput}
            id="newReview"
            aria-describedby="submitReviewBox"
            placeholder="Type your Review Here..."
          />
        </div>
        <button
          type="submit"
          value={reviewInput}
          id="reviewFormButton"
          className="btn btn-primary nav-buttons shop-submit"
        >
          Submit
        </button>
      </form>
    );
  }





  function getAvg(ratingArray) {
    const total = ratingArray.reduce((acc, c) => acc + c, 0);
    return total / ratingArray.length;
  }

  function handleSubmit(event) {
    let shopId = singleShop._id;
    event.preventDefault();
    axios.post("/api/reviews", { userName, shopId, reviewInput });
    // window.location.reload();
    // return <Redirect exact to="#navbarNav" />;
  }

  function handleInputChange(event) {
    event.preventDefault();
    // console.log(event);
    console.log(event.target.value);
    setReviewInput(event.target.value);
    // return <Redirect exact to="/" />;
  }


  function renderReviews() {
    if (singleShop.reviews) {
      return singleShop.reviews.map((review) => (
        <ReviewCard reviewText={review} />
      )).reverse();
    }
  }

  const reviewForm = ({ handleSubmit, handleInputChange }) => {
    <>
      <h3>Submit Your Review in the Box Below:</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            type="text"
            onChange={handleInputChange}
            value={reviewInput}
            id="newReview"
            aria-describedby="submitReviewBox"
            placeholder="Type your Review Here..."
          />
        </div>
        <button type="submit" value={reviewInput} id="reviewFormButton" className="btn btn-primary nav-buttons shop-submit">Submit</button>
      </form>
    </>
  }

  return (
    <>
      <div className="container-fluid m-2" id="pageTop">
        <div className="">
          <div className="col d-flex justify-content-center" id="pageTop">
            <FeaturedCard
              src={VallartasPic}
              id={singleShop._id}
              menuURL={singleShop.menuURL}
              shopName={singleShop.shopName}
              description={singleShop.description}
              location={singleShop.location}
              phone={singleShop.phone}
              address={singleShop.address}
              numOfRatings={ratingArray.length}
              rating={getAvg(ratingArray).toFixed(1)}
              featuredFood={singleShop.featuredFood}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid m-2">{renderReviews()}</div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 submitreview-control">
            {auth.isLoggedIn() ?
              <>
                <h3>Submit Your Review in the Box Below:</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      type="text"
                      onChange={handleInputChange}
                      value={reviewInput}
                      id="newReview"
                      aria-describedby="submitReviewBox"
                      placeholder="Type your Review Here..."
                    />
                  </div>
                  <button type="submit" value={reviewInput} id="reviewFormButton" className="btn btn-primary nav-buttons shop-submit">Submit</button>
                </form>
              </>
              : <><hr /><h4>Want to submit a review? Log In or Sign Up!</h4></>}
          </div>
        </div>
      </div>
    </>
  );
}



export default ShopPage;
