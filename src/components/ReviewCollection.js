import React from 'react';
import ReviewCard from './ReviewCard';
import { reviews } from '../data';

class ReviewCollection extends React.Component {

    goToDetails = (review) => {
        localStorage.setReview('selectedReview', review);
        this.props.history.push('/details');
      };

      render() {
          return (
                <div className='card-collection'>
                    {reviews
                    .filter((review, idx) => idx < 24)
                    .map((review) => (
                     <div onClick={() => this.goToDetails(review)}>
                     <ReviewCard key={review.id} review={review} />
                      </div>
                    ))}
            </div>
          )
      }
}

export default ReviewCollection;