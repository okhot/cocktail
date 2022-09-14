import React, { useEffect, useState } from 'react'
import SidebarSection from '../../atoms/SidebarSection/SidebarSection'
import '../SideBar/sideBar.css'

function SideBar() {
  const [ingredients, setIngredients] = useState([]);
  const [category, setCategory] = useState([]);
  const [glass, setGlass] = useState([]);
  const [alcohol, setAlcohol] = useState([]);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`).then((response) => response.json()).then(({drinks}) => setCategory(drinks.map(category => category.strCategory)));
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list`).then((response) => response.json()).then(({drinks}) => setGlass(drinks.map(glass => glass.strGlass)));
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`).then((response) => response.json()).then(({drinks}) => setIngredients(drinks.map(ingredient => ingredient.strIngredient1)));
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list`).then((response) => response.json()).then(({drinks}) => setAlcohol(drinks.map(alcohol => alcohol.strAlcoholic)));
  })
  return (
    <div className="SideBar">
      <SidebarSection title="Ingredients" options={ingredients} />
      <SidebarSection title="Categories" options={category} />
      <SidebarSection title="Glasses" options={glass} />
      <SidebarSection title="alcohol" options={alcohol} />

    </div>
  )
}

export default SideBar
