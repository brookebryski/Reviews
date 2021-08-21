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
        <span class="reply-icon">
          <i class="reply icon" style={{ color: 'blue'}}></i>
          </span>
          <span class="ellipsis">
           <i class="ellipsis horizontal icon" style={{ color: 'blue' }}></i>
           </span>
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
  
  