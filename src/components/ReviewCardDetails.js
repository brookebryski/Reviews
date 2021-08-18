import React from "react";
import { useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import ReviewResponseForm from './ReviewResponseForm';

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
      <ReviewResponseForm />
    </div>
  );
};

export default ReviewCardDetails;