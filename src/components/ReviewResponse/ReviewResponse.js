import React from 'react';
import './ReviewResponse.css';
 import ReviewResponseForm from "./ReviewResponseForm";

class ReviewResponse extends React.Component {
  // I struggled with trying to implement the 'edit' functionality 

  // My idea was to set the initial state as a boolean, 'formOpen', and set it to false. This way when the edit icon is clicked the component re-renders, state is set to formOpen: true and the ReviewResponseForm renders
 state = {
  formOpen: false
 };

 handleClick() {
  this.setState({formOpen: true && <ReviewResponseForm />})
  console.log('click')}

    render () {
      return(
        <div className="response">
          <span class="ellipsis">
           <i class="ellipsis horizontal icon" onClick={() => this.handleClick()} style={{ color: 'blue' }}>
           </i>
           </span>
           <br></br>
           <span class="reply-icon">
          <i class="reply icon" style={{ color: 'blue'}}></i>
          </span>
         <span class="response-content">
          <p className="response-body">{this.props.body}</p>
          <p className="response-author"> {this.props.author}</p> 
          <p className="response-date">{new Date().toISOString().split("T")[0].replaceAll("-", "/")}</p> 
          <div className="response-footer">
          </div>
          </span>
            </div>  
            
      );
    }
   
  }
  export default ReviewResponse;
  
  