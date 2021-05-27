import React from "react";
// import style from "./style.css";

function ShopCard({ shopName, src, location, featuredFood }) {
    return (
        <div className="card m-2" style={{ width: '15rem' }}>
            <img className="card-img-top" style={{ width: '150px', height: '150px' }} src={src} alt={src} />
            <div className="card-body">
                <h5 className="card-title">{shopName}</h5>
                <p className="card-text">{location}</p>
                <p className="card-text">Featured Food: {featuredFood}</p>
            </div>
        </div>


    );
}
export default ShopCard;
