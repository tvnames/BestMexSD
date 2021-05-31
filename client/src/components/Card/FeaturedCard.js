import React from "react";
import "./style.css";
import RatingContainer from "../StarRating.js/RatingContainer";

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

  return (
    <div className="card m-1 w-100">
      <div className="card-body ">
        <img src={src} alt={src} className="float-left m-5" />
        <h5 className="card-title">{shopName}</h5>
        <p className="card-text">
          <strong>Featured Food: </strong>
          {featuredFood}
        </p>
        <strong>About Sombreros: </strong>{description}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <strong>Location:</strong> {location}
        </li>
        <li className="list-group-item">
          <strong>Address: </strong>
          {address}
        </li>
        <li className="list-group-item">
          <strong>Phone: </strong>
          {phone}
        </li>
      </ul>
      <div className="card-body d-flex">
        <a href={menuURL} className="card-link" target="_blank" rel="noreferrer noopener">
          View Their Menu
        </a>
        <i className="ml-auto"><strong>Average Rating:</strong> {rating} out of 5 stars! ({numOfRatings} Ratings)</i>
      </div>
      <div className="">
        <RatingContainer
          id={id}
          ratingArray={ratingArray}
        />
      </div>
    </div>

  );
}
export default FeaturedCard;
