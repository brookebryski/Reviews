import React from 'react';
import ReviewResponse from './ReviewResponse';
import ReviewResponseForm from './ReviewResponseForm';

class ReviewResponseBox extends React.Component {
  constructor() {
    super();
    
    this.state = {
      showResponses: false,
      reviewResponses: []
    };
  }
  
  render () {
    const reviewResponses = this.getResponses();
    let reviewResponseNodes;
    let buttonText = 'Show Responses';
    
    if (this.state.showResponses) {
      buttonText = 'Hide Responses';
      reviewResponseNodes = <div className="reviewResponse-list">{reviewResponses}</div>;
    }
    
    return(
      <div className="reviewResponse-box">
        <h2>Join the Discussion!</h2>
        <ReviewResponseForm addResponse={this.addResponse.bind(this)}/>
        <button id="reviewResponse-reveal" onClick={this.handleClick.bind(this)}>
          {buttonText}
        </button>
        <h3>Responses</h3>
        <h4 className="reviewResponse-count">
          {this.getResponsesTitle(reviewResponses.length)}
        </h4>
        {reviewResponseNodes}
      </div>  
    );
  } // end render
  
  addResponse(author, body) {
    const reviewResponse = {
      id: this.state.reviewResponses.length + 1,
      author,
      body
    };
    this.setState({ reviewResponses: this.state.reviewResponses.concat([reviewResponse]) }); // *new array references help React stay fast, so concat works better than push here.
  }
  
  handleClick() {
    this.setState({
      showResponses: !this.state.showResponses
    });
  }
  
  getResponses() {    
    return this.state.reviewResponses.map((reviewResponse) => { 
      return (
        <ReviewResponse 
          author={reviewResponse.author} 
          body={reviewResponse.body} 
          key={reviewResponse.id} />
      ); 
    });
  }
  
  getResponsesTitle(reviewResponseCount) {
    if (reviewResponseCount === 0) {
      return 'No reviewResponses yet';
    } else if (reviewResponseCount === 1) {
      return "1 reviewResponse";
    } else {
      return `${reviewResponseCount} reviewResponses`;
    }
  }
} 

export default ReviewResponseBox;