import React from 'react';

class ReviewResponse extends React.Component {
    render () {
      return(
        <div className="response">
          <p className="response-header">{this.props.author}</p>
          <p className="response-body">- {this.props.body}</p>
          <div className="response-footer">
            <a href="#" className="response-footer-delete" onClick={this._deleteResponse}>Delete response</a>
          </div>
        </div>
      );
    }
    _deleteResponse() {
      alert("-- DELETE response Functionality COMMING SOON...");
    }
  }
  export default ReviewResponse;