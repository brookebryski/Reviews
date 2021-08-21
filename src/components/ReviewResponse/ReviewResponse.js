import React from 'react';
import './ReviewResponse.css';
import ReviewResponseForm from "./ReviewResponseForm";

class ReviewResponse extends React.Component {

  handleClick() {
   return <ReviewResponseForm />
    }

    render () {
      return(
        <div className="response">
          <i class="reply icon" style={{ color: 'blue'}}></i>
          <br></br>
          <p className="response-header">{this.props.body}</p>
          <p className="response-body">- {this.props.author}</p>
          <div className="response-footer" >
          <button class="ui button" onClick={() => this.handleClick()}>Edit</button>
            </div>
        </div>
      );
    }
  
  }
  export default ReviewResponse;
  
  