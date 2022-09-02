import React from 'react'
import '../SearchPageBody/CocktailCard.css'

function CocktailCard({thumbnail, title, category, alcohol_content}) {
  return (
   <div className='cocktailcard'>
    <img src={thumbnail} 
    alt='cocktail'
    className='cocktailcard__img'/>
    <h2>{title}</h2>
    <p>{category}</p>
    <p>{alcohol_content}</p>
   </div>
  )
}

export default CocktailCard;
