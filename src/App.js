import React from 'react';
import Header from './Header';
import  ReviewCollection  from './components/Review/ReviewCollection';
import  ReviewCardDetails  from './components/Review/ReviewCardDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 
document.body.setAttribute('style', 'background: 	#A0A0A0;')

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Router >
        <br></br>
         <Route exact path="/" component={ReviewCollection} />
          <Route exact path="/details" component={ReviewCardDetails} />
      </Router>
      </div>
    );
  }
}

export default App;


