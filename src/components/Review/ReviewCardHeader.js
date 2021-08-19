import React from "react";
import StarRatings from "react-star-ratings";

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
            {review.author} - {review.published_at}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCardHeader;