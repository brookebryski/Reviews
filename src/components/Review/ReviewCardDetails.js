import React from "react";
import { useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import ReviewResponse from "../ReviewResponse/ReviewResponse";

const ReviewCardDetails = () => {
  const location = useLocation();
  const { review } = location?.state; // ? - optional chaining

  console.log("history location details: ", location);
  return (
    <div key={review.id} className="card-deck">
      <div className="card">
        <div>
          <h4 className="card-title">{review.place}</h4>
          <StarRatings
            rating={review.rating}
            starRatedColor="gold"
            starDimension="20px"
          />
          <div className="card-body">{review.content}</div>
          <div className="card-footer">
            {review.author} - {review.published_at}
          </div>
        </div>
      </div>
      <br></br>
       {/*add in conditional logic to render form if there is not a response and response if there is one*/} 
       <ReviewResponse />
    </div>
  );
};

export default ReviewCardDetails;