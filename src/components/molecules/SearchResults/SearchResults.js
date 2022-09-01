import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function SearchResults() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("searchTerm");
  const [cocktails, setCocktails] = useState([]);

  function search(term) {
    if (term) {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${term}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => setCocktails(data.drinks));
    } else {
      setCocktails([]);
    }
  }

  useEffect(() => {
    search(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <h1>Hello World {searchTerm}</h1>

      {cocktails.map(cocktail => <div key={cocktail.idDrink}>{cocktail.strDrink}</div>)}
    </div>
  );
}

export default SearchResults;
