import React from "react";
import "./style.css";
import RatingContainer from "../StarRating/RatingContainer";
import StarIcon from '../StarRating/StarIcon'

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
    let ratingNumber = parseInt(averageRating)
    // let ratingNumber = 0
    switch (true) {
      case (ratingNumber >= 4 && ratingNumber < 5):
        return (
          <div className="row">
            <StarIcon fill='green' />
            <StarIcon fill='green' />
            <StarIcon fill='green' />
            <StarIcon fill='green' />
            <StarIcon fill='none' />
          </div>
        )
      case (ratingNumber >= 3 && ratingNumber < 4):
        return (
          <div className="row">
            <StarIcon fill='green' />
            <StarIcon fill='green' />
            <StarIcon fill='green' />
            <StarIcon fill='none' />
            <StarIcon fill='none' />
          </div>
        )
      case (ratingNumber >= 2 && ratingNumber < 3):
        return (
          <div className="row">
            <StarIcon fill='green' />
            <StarIcon fill='green' />
            <StarIcon fill='none' />
            <StarIcon fill='none' />
            <StarIcon fill='none' />
          </div>
        )
      case (ratingNumber >= 1 && ratingNumber < 2):
        return (
          <div className="row">
            <StarIcon fill='green' />
            <StarIcon fill='none' />
            <StarIcon fill='none' />
            <StarIcon fill='none' />
            <StarIcon fill='none' />
          </div>
        )
      default:
        return <p>This Restaurant Has Not Yet Been Rated!</p>
    }
  }

  // ######################### Return Statement ############################
  // ######################### Return Statement ############################
  // ######################### Return Statement ############################

  return (
    <div className="card m-1">
      <div className="card-body ">
        <img src={src} alt={src} className="featured-img-control" />
        <h2 className="card-title">{shopName}</h2>
        <p className="card-text">
          <strong>Featured Food: </strong>
          {featuredFood}
          <br />
          <strong>About {shopName}: </strong>
        </p>
        {description}
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><strong>Location: </strong>{location}</li>
        <li className="list-group-item"><strong>Address: </strong>{address}</li>
        <li className="list-group-item"><strong>Phone: </strong>{phone}</li>
      </ul>
      <div className="card-body d-flex">
        <a href={menuURL} className="card-link" target="_blank" rel="noreferrer noopener">View Their Menu</a>
        <i className="ml-auto"><strong>Average Rating:</strong>{getRating(rating)} {rating} out of 5 stars! ({numOfRatings} Ratings)</i>
      </div>
      <div className="">
        <RatingContainer id={id} ratingArray={ratingArray} />
      </div>
    </div>
  );
}
export default FeaturedCard;
