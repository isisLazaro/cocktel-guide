import React from "react";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };
  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const req = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${title}`
    );
    const res = await req.json();
    this.setState({ activeRecipe: res.drinks[0] });
    console.log(this.state.activeRecipe);
  };
  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div>
        <p>{recipe.strInstructions}</p>
      </div>
    );
  }
}

export default Recipe;
