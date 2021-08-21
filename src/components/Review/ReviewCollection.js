import React from 'react';
import './Review.css';
import ReviewCardHeader from './ReviewCardHeader';
import { reviews } from '../../data'; // import array of review objects
import { reactLocalStorage } from "reactjs-localstorage";
import { withRouter } from "react-router-dom"; // Will allow me to redirect to ReviewCardDetails when ReviewHeader is clicked

// This is the home page. It renders an array of ReviewHeader components. 

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

export default withRouter(ReviewCollection); // We need to wrap the component with withRouter to use its history object etracted as a prop