import React from "react";
import './Review.css';
import { useLocation } from "react-router-dom";
import StarRatings from "react-star-ratings";
import ReviewResponseBox from "../ReviewResponse/ReviewResponseBox";

// This is rendered when a particular review is clicked. 
// It will render ReviewResponseBox and pass the review_id as props. That component will handle reviewResponse logic

const ReviewCardDetails = () => {
  const location = useLocation();
  const { review } = location?.state; // ? - optional chaining

  console.log("history location details: ", location);
  return (
    <div class="container">
    <div className="card-detail-container">
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
          <div className="card-author">
            {review.author} 
          </div>
          <div className="footer">
           {review.published_on}
          </div>
        </div>
      </div>
      </div>
      <br></br>
    <ReviewResponseBox review_id={review.id}/>
    </div>
    </div>
  );
};

export default ReviewCardDetails;