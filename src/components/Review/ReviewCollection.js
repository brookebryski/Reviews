import React from 'react';
import './Review.css';
import ReviewCardHeader from './ReviewCardHeader';
import { reviews } from '../../data';
import { reactLocalStorage } from "reactjs-localstorage";
import { withRouter } from "react-router-dom";

class ReviewCollection extends React.Component {

    goToDetails = (review) => {
     reactLocalStorage.set('selectedReview', review);
     this.props.history.push({ pathname: "/details", state: { review } });
      };

      render() {
          return (
                <div className='card-collection'>
                    {reviews
                    .filter((review, idx) => idx < 24)
                    .map((review) => (
                     <div onClick={() => this.goToDetails(review)}>
                        <div className='card-collection-container'>
                     <ReviewCardHeader key={review.id} review={review} />
                     </div>
                     </div>
                    
                    ))}
                     
                    </div>
                    
          )
      }
}

export default withRouter(ReviewCollection);