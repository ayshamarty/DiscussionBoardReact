import React, {Component} from 'react';
import axios from "axios";

import NavBar from './Components/NavBar';
import ItemForm from './Components/ItemForm';
import ItemList from './Components/ItemList';
import Item from './Components/Item';
import './App.css';



class App extends Component {

  constructor(){
    super();
    this.state = ({
      data : []
    })
  }

  render() {
    return (
      <div id="myEntries">
        <NavBar />
        <ItemForm />
        <ItemList  data={this.state.data} getAll={this.getAll} />
        <Item  getAll={this.getAll} data={this.state.data}/>
     </div>
    );
  }
 getAll = () => {
    axios
      .get("http://localhost:5000/item/all")
      .then(response => {
        this.setState({
          data: response.data
        });

      });
  };

}

export default App;
