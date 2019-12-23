import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = styled.button.attrs(props => ({
  className: "button"
}))`
  color: white;
  background: palevioletred;
  border: 1px solid palevioletred;
`;

const Cocktails = props =>
  props.cocktails.map(cocktail => {
    return (
      <div className="card" key={cocktail.idDrink}>
        <div className="card-image">
          <figure>
            <img
              src={cocktail.strDrinkThumb}
              alt={cocktail.strDrink}
              width="250px"
            />
          </figure>
        </div>
        <div className="card-content">
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
