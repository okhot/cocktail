import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { searhIngridients } from "../../../api/api";
import CocktailsContext from "../../../store";
import "../SearchPageSideBar/SearchPageSideBar.css";

function SearchPageSideBar({ title, ingridient, count }) {
  navigate = useNavigate();
  const ingridients = ["Gin", "Milk", "Honey"];
  const cocktails = useContext(CocktailsContext);

  function loadDrinksForIngridient(i) {
     
    navigate(`/search?searchTerm=${e.target.search.value}`)
    // searching your drinks by ingridients
    // then 
  }
  return (
    <section className="sidebar__content">
      <h2>{title}</h2>
      {ingridients.map((i) => (
        <div className="sidebar__categories" key={i} onClick={() => loadDrinksForIngridient(i)} name='search'>
          <span>{i}</span>
          <span>{count}</span>
        </div>
      ))} 
      <div className="sidebar__categories">
        <span>{ingridient}</span>
        <span>{count}</span>
      </div>
      <div className="sidebar__categories">
        <span>{ingridient}</span>
        <span>{count}</span>
      </div>
      <div className="sidebar__categories">
        <span>{ingridient}</span>
        <span>{count}</span>
      </div>
    </section>
  );
}

export default SearchPageSideBar;
