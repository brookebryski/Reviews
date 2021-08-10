import React from 'react';
import { reviewData } from '../data';
import StarRatings from 'react-star-ratings';
import './Review.css';  

export const Reviews = () => {
    return (  
        <div className="review-card">
        {reviewData.map((data, key) => {
          return (
            <div key={data.id}>
              <h3 className="review-title">{data.place}</h3>
              <StarRatings
                  rating={data.rating}
                  starRatedColor="gold" 
                  starDimension="20px"
                  />
              <p className="review-content">{data.content}</p>
              <p className="review-author">{data.author}</p> 
      
        </div>
          );
        })}
        </div>
            );
        };

 
