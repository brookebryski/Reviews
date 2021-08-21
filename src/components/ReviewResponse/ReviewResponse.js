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
          <span class="ellipsis">
           <i class="ellipsis horizontal icon" style={{ color: 'blue' }}></i>
           </span>
           <br></br>
           <span class="reply-icon">
          <i class="reply icon" style={{ color: 'blue'}}></i>
          </span>
         <span class="response-content">
          <p className="response-body">{this.props.body}</p>
          <p className="response-author"> {this.props.author}</p> 
          <p className="response-date">Date here</p> 
          <div className="response-footer">
          </div>
          </span>
            </div>  
            
      );
    }

  }
  export default ReviewResponse;
  
  