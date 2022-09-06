import React, { useContext } from "react";
import "../SearchPageSideBar/SearchPageSideBar.css";

function SearchPageSideBar({ ingridient1, ingridient2, ingridient3, ingridient4, ingridient5, category1, category2, category3,category4, category5}) {
  const ingridients = ["Gin", "Milk", "Honey"];
  const cocktails = useContext
  function loadDrinksForIngridient(i) {
    // searching your drinks by ingridients
    // then 
  }
  return (
    <section className="sidebar__content">
     
     <div className="sidebar__ingirdients">
      <h3>Ingridients</h3>
      <h3>{ingridient1}</h3>
      <h3>{ingridient2}</h3>
      <h3>{ingridient3}</h3>
      <h3>{ingridient4}</h3>
      <h3>{ingridient5}</h3>
     </div>

     <div className="sidebar__category">
       
     <h3> Categories</h3>  
     <h3>{category1}</h3>
     <h3>{category2}</h3>
     <h3>{category3}</h3>
     <h3>{category4}</h3>
     <h3>{category5}</h3>
     </div>
    
          
    </section>
  );
}

export default SearchPageSideBar;
