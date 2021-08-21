import React from "react";
import ReviewResponse from "./ReviewResponse";
import ReviewResponseForm from "./ReviewResponseForm";

class ReviewResponseBox extends React.Component {
  state = {
    reviewResponses: JSON.parse(localStorage.getItem(`reviewResponses-${this.props.review_id}`)) || []
    // when the component mounts, read from localStorage and set/initialize the state
    // I decided to set up the state / logic to handle an array of reviewResponses in case one day in the future we decide we want to allow more than one response to the review
  };

  componentDidUpdate(prevProps, prevState) { // persist state changes to longer term storage when it's updated
    if (prevState.reviewResponses !== this.state.reviewResponses) {
      localStorage.setItem(
        `reviewResponses-${this.props.review_id}`,
        JSON.stringify(this.state.reviewResponses)
      );
    }
  }

  render() {
    const reviewResponses = this.getResponses();
    const reviewResponseNodes = (
      <div className="reviewResponse-list">{reviewResponses}</div>
    );

    return (
      // I will conditionally render content based on whether or not a responnse already exists
      <div className="reviewResponse-box">
        {reviewResponses.length ? (
          <>{reviewResponseNodes}</> // If it does, I display that response
        ) : (
          <ReviewResponseForm addResponse={this.addResponse.bind(this)} /> // If it does not, I render the ReviewResponseForm and pass my addResponse method as a prop
        )}
      </div>
    );
  }

  addResponse(review_id, author, body) {
    const reviewResponse = {
      review_id,
      author,
      body
    };
    this.setState({
      reviewResponses: this.state.reviewResponses.concat([reviewResponse])
    }); // new array references help React stay fast, so concat works better than push here.
  }

  
  getResponses() {
    return this.state.reviewResponses.map((reviewResponse) => {
      return (
        <ReviewResponse
          author={reviewResponse.author}
          body={reviewResponse.body}
          review_id={this.state.review_id}
        />
      );
    });
  }
}
export default ReviewResponseBox;