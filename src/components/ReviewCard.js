import React from 'react';
import { reviews } from '../data';
import StarRatings from 'react-star-ratings';
import './Review.css';  


 const ReviewCard = ({ review }) => {
  return (  
    <div class="card-deck">
      {reviews.map((review) => {
        return (
         <div class="card">
          <div key={review.id}>
            <h4 class="card-title">{review.place}</h4>
            <StarRatings
                rating={review.rating}
                starRatedColor="gold" 
                starDimension="20px"
                />
            <div class="card-body">{review.content}</div>
            <div class="card-footer">{review.author} - {review.published_at}</div> 
            
      </div>
      </div>
        );
      })}
      </div>
          );
      };
  
export default ReviewCard;