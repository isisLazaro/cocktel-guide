import React from "react";
import { Link } from "react-router-dom";

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
      <section className="section">
        <div className="container">
          <p>{recipe.strInstructions}</p>
          <p>
            <button className="button">
              <Link to="/"> back</Link>
            </button>
          </p>
        </div>
      </section>
    );
  }
}

export default Recipe;
