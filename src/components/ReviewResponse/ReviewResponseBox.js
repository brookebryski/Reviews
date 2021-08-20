import React from "react";
import ReviewResponse from "./ReviewResponse";
import ReviewResponseForm from "./ReviewResponseForm";

class ReviewResponseBox extends React.Component {
  state = {
    reviewResponses: JSON.parse(localStorage.getItem("reviewResponses")) || []
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.reviewResponses !== this.state.reviewResponses) {
      localStorage.setItem(
        "reviewResponses",
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
      <div className="reviewResponse-box">
        {reviewResponses.length ? (
          <>{reviewResponseNodes}</>
        ) : (
          <ReviewResponseForm addResponse={this.addResponse.bind(this)} />
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
    }); // *new array references help React stay fast, so concat works better than push here.
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