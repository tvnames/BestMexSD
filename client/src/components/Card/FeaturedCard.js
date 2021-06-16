import React from "react";
import "./style.css";
import RatingContainer from "../StarRating/RatingContainer";
import StarIcon from "../StarRating/StarIcon";
import { Link } from "react-router-dom";
import { useAuth } from "../../util/auth";

function FeaturedCard({
  ratingArray,
  id,
  shopName,
  menuURL,
  rating,
  numOfRatings,
  src,
  description,
  location,
  phone,
  address,
  featuredFood,
}) {
  function getRating(averageRating) {
    let ratingNumber = parseInt(averageRating);
    switch (true) {
      case ratingNumber >= 4 && ratingNumber < 5:
        return (
          <div className="row">
            <StarIcon fill="green" />
            <StarIcon fill="green" />
            <StarIcon fill="green" />
            <StarIcon fill="green" />
            <StarIcon fill="none" />
          </div>
        );
      case ratingNumber >= 3 && ratingNumber < 4:
        return (
          <div className="row">
            <StarIcon fill="green" />
            <StarIcon fill="green" />
            <StarIcon fill="green" />
            <StarIcon fill="none" />
            <StarIcon fill="none" />
          </div>
        );
      case ratingNumber >= 2 && ratingNumber < 3:
        return (
          <div className="row">
            <StarIcon fill="green" />
            <StarIcon fill="green" />
            <StarIcon fill="none" />
            <StarIcon fill="none" />
            <StarIcon fill="none" />
          </div>
        );
      case ratingNumber >= 1 && ratingNumber < 2:
        return (
          <div className="row">
            <StarIcon fill="green" />
            <StarIcon fill="none" />
            <StarIcon fill="none" />
            <StarIcon fill="none" />
            <StarIcon fill="none" />
          </div>
        );
      default:
        return <p>This Restaurant Has Not Yet Been Rated!</p>;
    }
  }

  const auth = useAuth();

  return (
    <div className="card m-1 featureCard" >
      <div className="card-body" id="boxText">
        <img src={src} alt={src} className="featured-img-control float-left mr-3" />
        <h2 className="card-title" id="boxText">{shopName}</h2>
        <h5 className="card-text" id="boxText">
          <strong>Featured Food: </strong>
          {featuredFood}
          <br />
          <strong>About {shopName}: </strong>
        </h5>
        {description}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item" id="locationBox">
          <strong>Location: </strong>
          {location}
        </li>
        <li className="list-group-item" id="locationBox">
          <strong>Address: </strong>
          {address}
        </li>
        <li className="list-group-item" id="locationBox">
          <strong>Phone: </strong>
          {phone}
        </li>
      </ul>
      <div className="card-body d-flex">
        <a
          href={menuURL}
          className="card-link"
          target="_blank"
          rel="noreferrer noopener"
        >
          View Their Menu
        </a>
        <i className="ml-auto">
          <div class="d-flex justify-content-end" >
            <strong>Average Rating:</strong>
          </div>
          <div class="d-flex justify-content-end mr-2">
            {getRating(rating)}
          </div>
          {rating} out of 5 stars! ({numOfRatings} Ratings)
        </i>
      </div>

      {auth.isLoggedIn() ? (
        <div className="">
          <RatingContainer id={id} ratingArray={ratingArray} />
        </div>
      ) : (
        <div className="d-flex justify-content-end m-2">
          <>
            <Link to="/login">Login &nbsp;</Link>or{" "}
            <Link to="/signup">&nbsp; Sign Up &nbsp;</Link> to Submit your
            rating
          </>
        </div>
      )}
    </div>
  );
}
export default FeaturedCard;
