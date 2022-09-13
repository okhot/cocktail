import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../SearchPageNavBar/SearchPageNavBar.css'



function SearchPageNavBar() {

 const navigate = useNavigate();


  const handleChange = (e) => {
  
    const text = e.target.value
  
      navigate(`/search?searchTerm=${e.target.search.value}`)
  }

  return (
    <div className='searchnavbar'>
      <div className='searchbar__links'>
        <h2>Cocktail Bar</h2>
        <span>Home</span>
        <span>Favorite</span>
        <span>Contact</span>
      </div>
      <form onSubmit={handleChange}  type='text' name ='search'>
        <input placeholder='search' name="searchTerm" className='searchnavbar__input' />
      </form>
    </div>
  )
}

export default SearchPageNavBar
 