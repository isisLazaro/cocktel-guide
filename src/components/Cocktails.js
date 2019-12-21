import React from "react";
import { Link } from "react-router-dom";

const Cocktails = props => (
  <div>
    {props.cocktails.map(cocktail => {
      return (
        <div key={cocktail.idDrink}>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
          <p>{cocktail.strDrink}</p>
          <button>
            <Link
              to={{
                pathname: `/recipe/${cocktail.idDrink}`,
                state: { recipe: cocktail.idDrink }
              }}
            >
              Receta
            </Link>
          </button>
        </div>
      );
    })}
  </div>
);

export default Cocktails;
