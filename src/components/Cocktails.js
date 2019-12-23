import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button.attrs(props => ({
  className: "button "
}))`
  color: white;
  background: palevioletred;
`;

const Cocktails = props =>
  props.cocktails.map(cocktail => {
    return (
      <div className="column is-one-quarter" key={cocktail.idDrink}>
        <div className="card-image">
          <figure className="image">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          </figure>
        </div>
        <div className="card-content has-text-centered">
          <p className="title is-5">{cocktail.strDrink}</p>
          <Button>
            <Link
              to={{
                pathname: `/recipe/${cocktail.idDrink}`,
                state: { recipe: cocktail.idDrink }
              }}
            >
              Recipe
            </Link>
          </Button>
        </div>
      </div>
    );
  });

export default Cocktails;
