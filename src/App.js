import React from 'react';
import  ReviewCollection  from './components/ReviewCollection';
import { Router, browserHistory } from 'react-router';



function App() {
    return (
      <div className="App">
        <Router history={browserHistory} />
        <ReviewCollection />
      </div>
    );
  }

  export default App;


