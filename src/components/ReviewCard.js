import React from 'react';
import { reviews } from '../data';
import StarRatings from 'react-star-ratings';
import './Review.css';  

 const ReviewCard = ({ review }) => {
  return (  
    <div className="card-deck"> 
    {reviews.map((review) => {
        return (
         <div className="card">
          <div key={review.id}>
            <h4 className="card-title">{review.place}</h4>
            <StarRatings
                rating={review.rating}
                starRatedColor="gold" 
                starDimension="20px"
                />
            <div className="card-body">{review.content}</div>
            <div className="card-footer">{review.author} - {review.published_at}</div> 
            
      </div>
      </div>
        );
         })}
      </div> 
          );
      };
  
export default ReviewCard;