 import React from "react";

  function ReviewResponseForm() {
    const [state, setState] = React.useState({
      name: "",
      response: ""
    })

    function handleChange(evt) {
      const value = evt.target.value;
      setState({
        ...state,
        [evt.target.name]: value
      });
    }
    return (
      <form>
        <label>
          Your Name: 
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Response:
          <input
            type="text"
            name="response"
            value={state.response}
            onChange={handleChange}
          />
        </label>
      </form>
    );
  }
  export default ReviewResponseForm;