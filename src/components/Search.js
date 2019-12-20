import React from "react";

const Search = props => (
  <form onSubmit={props.getData}>
    <input type="text" name="cocktailName" />
    <button>Buscar</button>
  </form>
);

export default Search;
