import React from 'react';
import './ReviewResponse.css';

class ReviewResponse extends React.Component {
    render () {
      return(
        <div className="response">
          <i class="reply icon" style={{ color: 'blue'}}></i>
          <p className="response-header">{this.props.author}</p>
          <p className="response-body">- {this.props.body}</p>
          <div className="response-footer" >
            </div>
        </div>
      );
    }
  
  }
  export default ReviewResponse;
  
  