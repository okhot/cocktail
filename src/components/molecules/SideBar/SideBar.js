import React from 'react'
import '../SideBar/sideBar.css'

function SideBar() {
  return (
    <div className="SideBar">

      <div className="SideBar__category">
        <h4>Category</h4>
        <p>Cocktails</p>
        <p>Margaritas</p>
        <p>Gin</p>
        <p>Tequila</p>

      </div>

      <div className="SideBar__category">
        <h4>Glass</h4>
        <p>Collins Glass</p>
        <p>Rocks Glass</p>
        <p>Zombie Glass</p>
        <p>Copper Mug</p>
     
      </div>

    </div>
  )
}

export default SideBar
