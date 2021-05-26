import React from "react";
// import style from "./style.css";

function ShopCard({ shopName, src, description, location, phone, address, featuredFood, reviewText, reviewDate }) {
    return (
        <div className="card m-2" style={{ width: '15rem' }}>
            <img className="card-img-top" src={src} alt={src} />
            <div className="card-body">
                <h5 className="card-title">{shopName}</h5>
                <p className="card-text">{location}</p>
            </div>
        </div>


    );
}
export default ShopCard;
