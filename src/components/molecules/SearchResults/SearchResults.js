import React, { useContext, useEffect, useState } from "react";
import "../SearchResults/SearchResults.css";
import { useLocation, useParams } from "react-router-dom";
import SearchPageNavBar from "../../atoms/SearchPageNavBar/SearchPageNavBar";

import CocktailCard from "../SearchPageBody/CocktailCard";
import { searchCocktails } from "../../../api/api";
import CocktailsContext from "../../../store";
import SideBar from "../SideBar/SideBar";

function SearchResults() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("searchTerm");
  const cocktails = useContext(CocktailsContext);

  function search(term) {
    if (term) {
      searchCocktails(term).then((drinks) => cocktails.set(drinks));
    } else {
      cocktails.set([]);
    }
  }

  useEffect(() => {
    search(searchTerm);
  }, [searchTerm]);

  return (
    <div>
      <div className="searchpage">
        <SearchPageNavBar />
    
        <div className="searchpage__body">
        <SideBar />
          <div className="cardssection">
            {cocktails.drinks.map((cocktail) => (
              <CocktailCard
                key={cocktail.idDrink}
                title={cocktail.strDrink}
                thumbnail={cocktail.strDrinkThumb}
                category={cocktail.strCategory}
                alcohol_content={cocktail.strAlcoholic}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
