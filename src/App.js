import React from 'react';
import ReviewList  from './components/ReviewList';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
      <div className="ui grid">
        <div className="ui row">
      <div className="eleven wide column">
      <ReviewDetail review={this.state.selectedReview}/>
      </div>
      <div className="five wide column">
      <ReviewList 
      onReviewSelect={this.onReviewSelect} 
      reviews={this.state.reviews}
      />
      </div>
      </div>
    </div>
  </div>
    );
  }
}
  
  export default App;