import React from 'react'

function SideBar() {
  return (
    <div className="SideBar">
      <h2>Green grass</h2>

      <div className="SideBar__category">
        <h4>Cocktails</h4>
        <h4>Margaritas</h4>
        <h4>Gin</h4>
      </div>

      <div className="SideBar__ingridients">
        <h4>Grape</h4>
        <h4>Mangoes</h4>
        <h4>Coke</h4>
      </div>

      <div className="SideBar__alcohol">
       <span>
     <input type="radio" />
     <label>Alcoholic</label>
     <input type="radio" />
     <label>Non-Alcoholic</label>
      </span>
      </div>
    </div>
  )
}

export default SideBar
