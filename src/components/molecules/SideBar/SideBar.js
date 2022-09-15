import React, { useEffect, useMemo, useState } from "react";
import SidebarSection from "../../atoms/SidebarSection/SidebarSection";
import "../SideBar/sideBar.css";

function SideBar() {
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState([]);
  const [glass, setGlass] = useState([]);
  const [alcohol, setAlcohol] = useState([]);
  const [openedSection, setOpenedSection] = useState("ingredients");

  const sections = useMemo(() => [
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
  ], [ingredients, category, glass, alcohol]);

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

  function onOptionClicked(option, sectionId) {
    console.log(sectionId, option);
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
          onOptionClicked={option => onOptionClicked(option, section.id)}
        />
      ))}
    </div>
  );
}

export default SideBar;
