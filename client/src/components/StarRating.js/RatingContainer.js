import React from "react";
import RatingIcon from "./RatingIcon";
import "./style.css";

const RatingContainer = () => {
    const [rating, setRating] = React.useState(0);
    const [hoverRating, setHoverRating] = React.useState(0);
    const onMouseEnter = (index) => {
        setHoverRating(index);
    };
    const onMouseLeave = () => {
        setHoverRating(0);
    };
    const onSaveRating = (index) => {
        setRating(index);
        window.alert("You've Rated this Restaurant " + index + " out of 5 stars!");


    };
    return (
        <div className="d-flex justify-content-end mr-3"><strong>How Many Stars Would You Rate this spot?</strong> ___  <span> </span>
            {[1, 2, 3, 4, 5].map((index) => {
                return (
                    <RatingIcon
                        index={index}
                        rating={rating}
                        hoverRating={hoverRating}
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        onSaveRating={onSaveRating} />
                )
            })}
        </div>
    );
}

export default RatingContainer;