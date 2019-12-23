import React, { Component } from "react";
import "bulma/css/bulma.css";

import { SEARCH_BYNAME_ENDPOINT, DEFAULT_NAME } from "./constants/Constants";

import TitleBanner from "./components/TitleBanner";
import Search from "./components/Search";
import Cocktails from "./components/Cocktails";
import Fetching from "./utils/Fetching";

class App extends Component {
  state = {
    cocktails: []
  };

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
        <div className="section">
          <div className="columns is-multiline">
            <Cocktails cocktails={this.state.cocktails} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
