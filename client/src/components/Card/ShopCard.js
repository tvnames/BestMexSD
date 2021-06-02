import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function ShopCard({
  restaurantArray,
  id,
  shopName,
  src,
  location,
  featuredFood,
}) {
  const history = useHistory();

  const redirect = () => {
    history.push(`/shop/${id}`);
  };

  return (
    <div
      className="card p-0 m-2 shopCard col-12 col-sm-12 col-md-4 col-lg-2"
      style={{ width: "15rem" }}
      onClick={redirect}
    >
      <img className="card-img-top card-image-control" src={src} alt={src} />
      <div className="card-body">
        <h4 className="card-title" name={shopName}>
          {shopName}
        </h4>
        <p className="card-text">{location}</p>
        <p className="card-text">Featured Food: {featuredFood}</p>
      </div>
    </div>
  );
}
export default ShopCard;
