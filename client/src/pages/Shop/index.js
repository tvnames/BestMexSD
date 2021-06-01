// import { React } from "react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { singleShopAPI } from "../../util/shopAPI";
// import Image from "../../components/ImageContainer/image";
import FeaturedCard from "../../components/Card/FeaturedCard";
import ReviewCard from "../../components/Card/ReviewCard";
import VallartasPic from "../../images/ts9.jpg";
import axios from "axios";
// import singleSeed from "./singleSeed.json";
// import HomePage from "../HomePage";

function ShopPage() {
  const id = useParams().id;

  useEffect(() => {
    singleShopAPI(id)
      .then((res) => setSingleShop(res))
      .catch(console.error());
  }, [id]);

  const [singleShop, setSingleShop] = useState({});

  const { rating } = singleShop;
  const [reviewInput, setReviewInput] = useState("");

  function handleSubmit(event) {
    let shopId = singleShop._id;
    event.preventDefault();
    axios.post("/api/tacoShops/reviews/update", { shopId, reviewInput });
    window.location.reload();
    return <Redirect exact to="/" />;
  }

  function handleInputChange(event) {
    console.log(event);
    console.log(event.target.value);
    setReviewInput(event.target.value);
    return <Redirect exact to="/" />;
  }

  function renderReviews() {
    if (singleShop.reviews) {
      return singleShop.reviews.map((review) => (
        <ReviewCard reviewText={review} />
      ));
    }
  }

  return (
    <>
      <div className="container-fluid m-2">
        <div className="">
          <div className="col d-flex justify-content-center">
            <FeaturedCard
              src={VallartasPic}
              id={singleShop._id}
              menuURL={singleShop.menuURL}
              shopName={singleShop.shopName}
              description={singleShop.description}
              location={singleShop.location}
              phone={singleShop.phone}
              address={singleShop.address}
              numOfRatings={27}
              rating={4.2}
              featuredFood={singleShop.featuredFood}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid m-2">{renderReviews()}</div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 submitreview-control">
            <h3>Submit Your Review in the Box Below:</h3>
            <form onSubmit={handleSubmit}>
              <div classname="form-group">
                <textarea
                  classname="form-control"
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
                classname="btn btn-primary nav-buttons shop-submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShopPage;
