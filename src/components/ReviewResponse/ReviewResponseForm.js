import React from "react";

class ReviewResponseForm extends React.Component {
  render() {
    return (
      <form className="response-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="response-form-fields">
          <input placeholder="Name" required ref={(input) => this.author = input}></input><br />
          <textarea placeholder="Response" rows="4" required ref={(textarea) => this.body = textarea}></textarea>
        </div>
        <div className="response-form-actions">
          <button type="submit">Post Response</button>
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
