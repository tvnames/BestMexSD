import React from "react";
// import style from "./style.css";

function ReviewCard({ shopName, reviewDate, reviewText, }) {
    return (
        <div className="card m-2 border border-dark">
            <div className="card-header">
                Reviews:
            </div>
            <div className="card-body">
                <p>Review Date: {reviewDate}</p>
                <blockquote className="blockquote mb-0">
                    <p>Review Text: {reviewText}</p>
                    <footer className="blockquote-footer">Anonymous</footer>
                </blockquote>
            </div>
        </div>




    );
}
export default ReviewCard;
