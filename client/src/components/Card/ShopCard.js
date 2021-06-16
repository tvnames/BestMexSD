import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function ShopCard({
  // restaurantArray,
  description,
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
      className="card p-2 m-1 shopCard col-12 col-sm-12 col-md-4 col-lg-2"
      style={{ width: "20rem" }}
      onClick={redirect}
    >
      <img className="card-img-top card-image-control" src={src} alt={src} />
      <div className="card-body">
        <h4 className="card-title" name={shopName}>
          {shopName}
        </h4>

        <p className="card-text textBox">{location}</p>
        {/* <p className="card-text textBox">{description}</p> */}
        <p className="card-text"><strong>Featured Food:</strong> {featuredFood}</p>
      </div>
    </div>
  );
}
export default ShopCard;
