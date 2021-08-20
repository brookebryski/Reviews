import React from 'react';
//form idea here. maybe this goes on form component and then i pass data as props to the other then conditionally render on here or on component where i render this
class ReviewResponseBox extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          formValues: {}
      }
  }

  handleChange(event) {
      event.preventDefault();
      let formValues = this.state.formValues;
      let name = event.target.name;
      let value = event.target.value;

      formValues[name] = value;

      this.setState({formValues})
  }

  handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.formValues);
  }

      render(){
      return (
      <form onSubmit={this.handleSubmit.bind(this)}>
              <label> Name:
                  <input type="text" name="name" placeholder="Name" value={this.state.formValues["name"]} onChange={this.handleChange.bind(this)} />
              </label><br />
              <label> Response:
                  <input type="text" name="response" placeholder="Response" value={this.state.formValues["response"]} onChange={this.handleChange.bind(this)}/>
              </label><br />
                  <input className="btn btn-primary" type="submit" value="Submit" />
         </form>
    )
  }
}
export default ReviewResponseBox;
/*
import React from 'react';
import ReviewResponse from './ReviewResponse';
import ReviewResponseForm from './ReviewResponseForm';

class ReviewResponseBox extends React.Component {
  constructor() {
    super()

    this.state = {
      reviewResponses: []
    };
  }
  
  render () {
    const reviewResponses = this.getResponses();
    const reviewResponseNodes = <div className="reviewResponse-list">{reviewResponses}</div>;
   

    return(
      <div className="reviewResponse-box">
        <ReviewResponseForm addResponse={this.addResponse.bind(this)}/>
       
        <h3>Response</h3>
        {reviewResponseNodes}
        
      </div>  
        
    );
  } 
  

  addResponse(review_id, author, body) {
    const reviewResponse = {
      review_id,
      author,
      body
    };
    this.setState({ reviewResponses: this.state.reviewResponses.concat([reviewResponse]) }); // *new array references help React stay fast, so concat works better than push here.
  }
   
  
  
  getResponses() {    
    return this.state.reviewResponses.map((reviewResponse) => { 
      return (
        <ReviewResponse 
          author={reviewResponse.author} 
          body={reviewResponse.body} 
          review_id={this.state.review_id} />
      ); 
    });
  }

  
  
}
export default ReviewResponseBox;
*/