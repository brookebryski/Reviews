import React from 'react';
import Header from './Header';
import  ReviewCollection  from './components/Review/ReviewCollection';
import  ReviewCardDetails  from './components/Review/ReviewCardDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
  
// set the background color of the app to grey
document.body.setAttribute('style', 'background: 	#A0A0A0;')

class App extends React.Component {
  // Header component, router and routes. ReviewCollection is what the user sees when they first log on, ReviewCardDetails is a page that features the individual card and any response it has
  // Flag route with exact so that our components mount exactly for the given path. Otherwise the ReviewCollection component will stick around even in the '/details' path.
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


