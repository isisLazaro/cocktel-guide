import React from "react";
import styled from "styled-components";

const Input = styled.input.attrs(props => ({
  className: "input"
}))`
  border: 1px solid palevioletred;
  display: inline;
`;

const Button = styled.button.attrs(props => ({
  className: "button"
}))`
  color: palevioletred;
  border: 1px solid palevioletred;
`;

const Search = props => (
  <section className="section">
    <div className="container">
      <form onSubmit={props.getData}>
        <label className="label">Search cocktail by name</label>
        <div className="field has-addons  ">
          <div className="control">
            <Input
              type="text"
              name="cocktailName"
              placeholder="ex. margarita"
              required
            />
          </div>
          <div className="control">
            <Button className="button">Search</Button>
          </div>
        </div>
      </form>
    </div>
  </section>
);

export default Search;
