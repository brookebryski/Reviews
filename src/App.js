import React from 'react';
import  ReviewCollection  from './components/ReviewCollection';
import  ReviewCard  from './components/ReviewCard';
import { BrowserRouter, Router, Route } from 'react-router-dom'; 
import history from './history';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter >
         <Router history={history} />
         <ReviewCollection />
          <Route path={"/details"} component={ReviewCard} />
      </BrowserRouter>
    );
  }
}

export default App;


