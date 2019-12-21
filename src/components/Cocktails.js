import React from "react";

const Cocktails = props => (
  <div>
    {props.cocktails.map(cocktail => {
      return (
        <div key={cocktail.idDrink}>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink}></img>
          <p>{cocktail.strDrink}</p>
          <button>Receta</button>
        </div>
      );
    })}
  </div>
);

export default Cocktails;
