import React from 'react';
import { reviewData } from '../data';
import StarRatings from 'react-star-ratings';
import './Review.css';  


 const ReviewItem = () => {
  return (  
    <div class="card-deck">
      {reviewData.map((data) => {
        return (
         <div class="card">
          <div key={data.id}>
            <h4 class="card-title">{data.place}</h4>
            <StarRatings
                rating={data.rating}
                starRatedColor="gold" 
                starDimension="20px"
                />
            <div class="card-body">{data.content}</div>
            <div class="card-footer">{data.author} - {data.published_at}</div> 
            
      </div>
      </div>
        );
      })}
      </div>
          );
      };
  
export default ReviewItem;