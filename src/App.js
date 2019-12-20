import React, { Component } from "react";
import "./App.css";

import Search from "./components/Search";
import TitleBanner from "./components/TitleBanner";

class App extends Component {
  state = {
    cocktails: []
  };
  getData = async e => {
    e.preventDefault();
    const cocktailName = e.target.elements.cocktailName.value;
    const api_call = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
    );
    const data = await api_call.json();
    this.setState({ cocktails: data.drinks });
    console.log(this.state.cocktails);
  };
  render() {
    return (
      <div>
        <TitleBanner />
        <Search getData={this.getData} />
        {this.state.cocktails.map(cocktail => {
          return (
            <div key={cocktail.idDrink}>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
              <p>{cocktail.strDrink}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
