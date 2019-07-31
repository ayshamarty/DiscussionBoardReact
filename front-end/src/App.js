import React, { Component } from "react";
import axios from "axios";

import "./App.css";

import NavBar from "./Components/NavBar";
import ItemForm from "./Components/ItemForm";
import ItemList from "./Components/ItemList";


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  getAll = () => {
    axios.get("http://localhost:5000/item/all").then(response => {
      this.setState({
        data: response.data
      });
    });
  };

  componentDidMount() {
  
    this.getAll();
  }

  render() {
    return (
      <div id="myEntries">
        <NavBar />
        <ItemForm getAll={this.getAll}/>
        <ItemList data={this.state.data} getAll={this.getAll} />
      </div>
    );
  }
}

export default App;
