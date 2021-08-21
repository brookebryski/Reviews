import React from "react";
import './ReviewResponse.css';

class ReviewResponseForm extends React.Component {
  render() {
    return (
      
      <form class="ui form" onSubmit={this.handleSubmit.bind(this)}>
        <div class="field">
          <input placeholder="Name" required ref={(input) => this.author = input}></input>
          <textarea placeholder="Response"  required ref={(textarea) => this.body = textarea}></textarea>
        </div>
        <div className="response-form-actions">
          <button class="ui button" type="submit">Post Response</button>
        </div>
      </form>
    );
  }


 
  
  handleSubmit(event) { 
    event.preventDefault();   // prevents page from reloading on submit
    let review_id = this.review_id
    let author = this.author;
    let body = this.body;
    this.props.addResponse(review_id, author.value, body.value);
  }
} 

export default ReviewResponseForm;
