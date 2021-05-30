import React from "react";
import { useHistory, Redirect } from 'react-router-dom';
import "./style.css";

function ShopCard({ restaurantArray, id, shopName, src, location, featuredFood }) {
    const history = useHistory();

    const redirect = () => {

        history.push(`/shop/${id}`)
    }


    return (
        <div
            className="card m-2 shopCard"
            style={{ width: '15rem' }}
            onClick={redirect}
        >
            <img className="card-img-top" style={{ width: '150px', height: '150px' }} src={src} alt={src} />
            <div className="card-body">
                <h5 className="card-title" name={shopName}>{shopName}</h5>
                <p className="card-text">{location}</p>
                <p className="card-text">Featured Food: {featuredFood}</p>
            </div>
        </div>
    );
}
export default ShopCard;
