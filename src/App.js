import React, { Component } from "react";
import "./App.css";

import { SEARCH_BYNAME_ENDPOINT, DEFAULT_NAME } from "./components/Constants";

import TitleBanner from "./components/TitleBanner";
import Search from "./components/Search";
import Cocktails from "./components/Cocktails";
import Fetching from "./components/Fetching";

class App extends Component {
  state = {
    cocktails: []
  };
  /* getData = async e => {
    e.preventDefault();
    const cocktailName = e.target.elements.cocktailName.value;
    const api_call = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
    );
    const data = await api_call.json();
    this.setState({ cocktails: data.drinks });
    console.log(this.state.cocktails);
  }; */
  getData = async event => {
    event.preventDefault();
    const cocktailName = event.target.elements.cocktailName.value;
    const data = await Fetching(`${SEARCH_BYNAME_ENDPOINT}${cocktailName}`);
    this.setState({ cocktails: data.drinks });
  };

  componentDidMount = async () => {
    const data = await Fetching(`${SEARCH_BYNAME_ENDPOINT}${DEFAULT_NAME}`);
    this.setState({ cocktails: data.drinks });
  };
  render() {
    return (
      <div>
        <TitleBanner appTitle="Nombre App" />
        {/* <Search getData={this.getData} /> */}
        <Search getData={this.getData} />
        <Cocktails cocktails={this.state.cocktails} />
        {/* {this.state.cocktails.map(cocktail => {
          return (
            <div key={cocktail.idDrink}>
              <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
              <p>{cocktail.strDrink}</p>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default App;
