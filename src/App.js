import React from 'react';
import  ReviewCollection  from './components/Review/ReviewCollection';
import  ReviewCardDetails  from './components/Review/ReviewCardDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 


class App extends React.Component {
  render() {
    return (
      <Router >
         <Route exact path="/" component={ReviewCollection} />
          <Route exact path="/details" component={ReviewCardDetails} />
      </Router>
    );
  }
}

export default App;


