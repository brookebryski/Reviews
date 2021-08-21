import React from 'react';
import './ReviewResponse.css';

class ReviewResponse extends React.Component {
    render () {
      return(
        <div className="response">
          <i class="reply icon" style={{ color: 'blue'}}></i>
          <br></br>
          <p className="response-header">{this.props.body}</p>
          <p className="response-body">- {this.props.author}</p>
          <div className="response-footer" >
            </div>
        </div>
      );
    }
  
  }
  export default ReviewResponse;
  
  