import React, { useContext, useEffect, useMemo, useState } from "react";
import { searchAlcohol, searchCategory, searchGlass, searchIngredients } from "../../../api/api";
import CocktailsContext from "../../../store";
import SidebarSection from "../../atoms/SidebarSection/SidebarSection";
import CocktailCard from "../SearchPageBody/CocktailCard";
import "../SideBar/sideBar.css";

function SideBar() {
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState([]);
  const [glass, setGlass] = useState([]);
  const [alcohol, setAlcohol] = useState([]);
  const [openedSection, setOpenedSection] = useState("ingredients");
  const cocktails = useContext(CocktailsContext);

  const sections = useMemo(
    () => [
      {
        id: "ingredients",
        title: "Ingredients",
        options: ingredients,
      },
      {
        id: "category",
        title: "Category",
        options: category,
      },
      {
        id: "glass",
        title: "Glass",
        options: glass,
      },
      {
        id: "alcohol",
        title: "Alcohol",
        options: alcohol,
      },
    ],
    [ingredients, category, glass, alcohol]
  );

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
      .then((response) => response.json())
      .then(({ drinks }) =>
        setCategory(drinks.map((category) => category.strCategory))
      );
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`)
      .then((response) => response.json())
      .then(({ drinks }) => setGlass(drinks.map((glass) => glass.strGlass)));
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
      .then((response) => response.json())
      .then(({ drinks }) =>
        setIngredients(drinks.map((ingredient) => ingredient.strIngredient1))
      );
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`)
      .then((response) => response.json())
      .then(({ drinks }) =>
        setAlcohol(drinks.map((alcohol) => alcohol.strAlcoholic))
      );
  }, []);

  function onClosed() {
    setOpenedSection("");
  }

  function onOptionClicked(term, sectionId) {
    if (sectionId === "category") {
      searchCategory(term).then((drinks) => cocktails.set(drinks));
    } else if (sectionId === "ingredients") {
      searchIngredients(term).then((drinks) => cocktails.set(drinks));
    } else if (sectionId === "alcohol") {
      searchAlcohol(term).then((drinks) => cocktails.set(drinks));
    } else if (sectionId === "glass") {
      searchGlass(term).then((drinks) => cocktails.set(drinks));
    }else {
      CocktailsContext.set([]);
    }
  }

  return (
    <div className="SideBar">
      {sections.map((section) => (
        <SidebarSection
          key={section.id}
          title={section.title}
          options={section.options}
          open={openedSection === section.id}
          onOpen={() => setOpenedSection(section.id)}
          onClosed={onClosed}
          onOptionClicked={(term) => onOptionClicked(term, section.id)}
        />
      ))}
    </div>
  );
}

export default SideBar;
