import React, { Component } from "react";
import "./App.css";

import Search from "./components/Search";

class App extends Component {
  getData = e => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;
    console.log(recipeName);
  };
  render() {
    return (
      <div>
        <header>
          <h1>TITULO APP</h1>
        </header>
        <Search getData={this.getData} />
      </div>
    );
  }
}

export default App;
