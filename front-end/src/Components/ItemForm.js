import React, { Component } from "react";
import axios from "axios";

class ItemForm extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      content: ""
    };
  }

  submitItem = e => {
   
    e.preventDefault();
    const newItem = {
      username: e.target[0].value,
      content: e.target[1].value
    };

    axios.post("http://localhost:5000/item/create", newItem).then(response => {
        console.log(newItem);
        console.log(response)
        this.props.getAll()
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitItem}>
          <p>username:</p>
          <input />
          <p>post:</p>
          <input />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default ItemForm;
