import React from "react";
import StarRatings from "react-star-ratings";

// This exists so that the ReviewCollection component can render this as an array , and a user can click a one and be redirected to ReviewCardDetailsComponent

const ReviewCardHeader = ({ review }) => {
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
            {review.author} - {review.published_on}
            <br></br>
            {/* I want to add code here to conditionally render this based on whether or not this review has a response
            <i class="comment icon" style={{ color: 'blue' }}></i>
            I did not manage to code this logic within the timeframe
            */}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardHeader;