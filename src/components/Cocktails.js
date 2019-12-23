import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-weight: bold;
`;

const Cocktails = props =>
  props.cocktails.map(cocktail => {
    return (
      <div className="column is-one-third" key={cocktail.idDrink}>
        <div className="card-image">
          <figure className="image">
            <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          </figure>
        </div>
        <div className="card-content has-text-centered">
          <p className="title is-5">{cocktail.strDrink}</p>
          <button className="button">
            <StyledLink
              to={{
                pathname: `/recipe/${cocktail.idDrink}`,
                state: { recipe: cocktail.idDrink }
              }}
            >
              Recipe
            </StyledLink>
          </button>
        </div>
      </div>
    );
  });

export default Cocktails;
