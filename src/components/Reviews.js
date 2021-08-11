import React from 'react';
import { reviewData } from '../data';
import StarRatings from 'react-star-ratings';
import { Card } from 'react-bootstrap'
import {  Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './Review.css';  


export const Reviews = () => {
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
  