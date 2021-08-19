import React from 'react';

class ReviewResponse extends React.Component {
    render () {
      return(
        <div className="response">
          <p className="response-header">{this.props.author}</p>
          <p className="response-body">- {this.props.body}</p>
          <div className="response-footer">
            </div>
        </div>
      );
    }
  
  }
  export default ReviewResponse;